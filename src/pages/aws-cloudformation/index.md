---
title: Introduction to AWS Cloud​Formation
date: '2019-05-18'
spoiler: Why what and how in AWS Cloud​Formation
author: 'Nadun Indunil'
tags: ['AWS', 'CloudFormation', 'intro']
---

Today I am going to discuss Infrastructure as code service in AWS which is named as AWS Cloud Formation.

AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment. ​
It allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts. ​This CFT file serves as a single source of truth for your cloud environment. 

> AWS CloudFormation allows you to model your entire infrastructure in a text file (CloudFormation Template). 

Another advantage of using CFT for resource creation is CloudFormation takes care of determining the right operations to perform when managing your stack and rolls back changes automatically if errors are detected. Codifying your infrastructure allows you to treat your infrastructure as just code.

In order to discuss more Cloud Formation I will separate my introduction into 3 sections: 

### What Is CFT?

- It is a declaration of the AWS resources that make up a stack. ​
- It is stored as a text file.​
- We can create and edit them in any text editor. ​
- It can be managed in your source control system with the rest of your source code.

### Why CloudFormation?

- It is just a simple code which can use to spin up your infrastructure.​
- Much easier than using the AWS console.

### How CloudFormation works?

- AWS CloudFormation makes underlying service calls to AWS to provision and configures your resources. ​
- Can perform only actions that you have permission to do.

I hope you got some idea about what CFT is, Let's look about what are key components of CFT and how to use them.

*Note*: You can write CFT as JSON(Javascript Object Notation) files as well as YAML files. I highly encourage you to use YML because of clean code style and ability to comment in YMLs.

## Cloud Formation Template Components

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description:
Parameters:
Mappings:
Conditions:
Resources:
Outputs:
```

### Version – AWSTemplateFormatVersion (optional)​

identifies the capabilities of the template. The latest template format version is 2010-09-09 and is currently the only valid value. ​(Do not to put current date. It is just the version date. I have seen so many people put the date they run this file)

##### example

```yaml
AWSTemplateFormatVersion: 2010-09-09
```

### Description (optional)​

enables you to include arbitrary comments about your template. The Description must follow the AWSTemplateFormatVersion section​

##### example

```yaml
Description: This is test stack to deploy one EC2
```

### Metadata (optional)​
objects that provide details about the template​

##### example

```yaml
Metadata:
  Instances:
    Description: "Information about the instances"
  Databases: 
    Description: "Information about the databases"
```

### Parameters (optional)​
Parameters enable you to input custom values to your template each time you create or update a stack​. We can input these custom values from the AWS console before we run a template.

We can find Two main parameter types:
- General Parameter Types
    - String : "string"​
    - Number : 1​
    - List<Number> : [1,2,3]​
    - CommaDelimitedList : "1,2,3"
- AWS Specific Parameter Types
    - AWS::EC2::Image::Id : "ami-b43503a4"​
    - AWS::EC2::Instance::Id : "i-47cad982"​
    - AWS::EC2::SecurityGroup::Id : "sg-6246b70c"​
    - AWS::Route53::HostedZone::Id : "Z2VHZWU704GYI1"

Apart from data types we have `Intrinsic Functions`
You can find more details from [here](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)

AWS CloudFormation provides several built-in functions that help you manage your stacks. Use intrinsic functions in your templates to assign values to properties that are not available until runtime. 

- Fn::Base64
- Fn::Cidr
- Condition Functions
- Fn::FindInMap
- Fn::GetAtt
- Fn::GetAZs
- Fn::ImportValue
- Fn::Join
- Fn::Select
- Fn::Split
- Fn::Sub
- Fn::Transform
- Ref

##### example

```yaml
Parameters:
  ApplicationName:
    Description: Name of application
    Type: String
    Default: testEC2
    MinLength: '1'
    MaxLength: '255'
    AllowedPattern: '[\x20-\x7E]*'
    ConstraintDescription: Must contain only ASCII characters.
```

- You can define min or max length of parameter, Type of parameter even a pattern
- `ConstraintDescription` will be shown when pattern is not satisfied
- We can use `ApplicationName` inside this YAML file as a variable

```yaml
!Ref ApplicationName
```

### Mapping (optional)​
matches a key to a corresponding set of named values. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region.​ (It is a normal map we see in day to day life)

##### example 

```yaml
Mappings: 
  RegionAndInstanceTypeToAMIID: 
    us-east-1: 
      test: "ami-b70554c8"
      prod: "ami-cfe4b2b0"
    us-west-2: 
      test: "ami-b70554c8"
      prod: "ami-cfe4b2b0"
```

You can use this map as 

```yaml
!FindInMap [RegionAndInstanceTypeToAMIID, "us-east-1", !Ref "test"]   # answer is: ami-b70554c8
```

### Conditions (optional)​
statements that define when a resource is created or when a property is defined​

##### example
```yaml
Conditions:
  CreateProdResources: !Equals [ !Ref EnvironmentType, prod ]
```

you can use conditions as

```yaml
!If [CreateProdResources, t2.micro, t2.nano] # If CreateProdResources is true then t2.micro else t2.nano
```

### Resources (Required)​
Resources component declares the AWS resources that you want to include in the stack, such as an Amazon EC2 instance or an Amazon S3 bucket.​

##### example

```yaml
Resources:
  testEC2:
    Type: 'AWS::EC2::Instance'
    Properties:
      DisableApiTermination: 'true'
      AvailabilityZone: us-east-1c
      ImageId: !FindInMap [RegionAndInstanceTypeToAMIID, !Ref "AWS::Region", !Ref EnvironmentType]   # using map
      InstanceType: !If [CreateProdResources, t2.micro, t2.nano]   # using conditions
      KeyName: !Ref KeyName  # this is the key name you created
      SecurityGroupIds:
        - !Ref WebSG
      BlockDeviceMappings:
        - DeviceName: /dev/xvda
          Ebs:
            VolumeSize: !Ref RootVolumeSize
            VolumeType: gp2
        - DeviceName: /dev/sdf
          Ebs:
            VolumeSize: !Ref AppVolumeSize
            VolumeType: gp2
        - DeviceName: /dev/sds
          Ebs:
            VolumeSize: !Ref SwapDisk
            VolumeType: gp2
      Tags:
        - Key: Name
          Value: testEC2
        - Key: Application_Name
          Value: !Ref ApplicationName
        - Key: Application_Id
          Value: !Ref ApplicationId
```
- `testEC2` will work as a variable name, hereafter you can use it to refer this EC2 instance
- Explore usage of `!Ref` to usage of parameters

### Outputs (optional)​
Outputs section declares output values that you can import into other stacks (to cross stack references)​

##### example 
```yaml
Outputs:
  MYEC2:
    Description: EC2 detail
    Value: !Ref testEC2
    Export:
      Name: !Sub "${AWS::StackName}-EC2"
  EC2PUBLICIP:
    Description: Public IP Address
    Value:
      !GetAtt testEC2.PublicIp
```
You can find whole YAML file from here: https://github.com/nadunindunil/AWS-DEMO/blob/master/ec2.yaml

In my next article I am going to discuss how to deploy CFT in AWS console.



