---
title: How to contribute to DefinitelyTyped in Github
date: '2019-03-01'
spoiler: The one with Typescript Definition File
author: 'Nadun Indunil'
tags: ['Typescript']
---

I was working on a Typescript project last few weeks and It was awesome to work with javascript with superpowers. One day I found that one node module doesn’t have types, which ultimately made me do the typings since I was so arrogant to ignore typings. This post will cover the whole process and how to contribute to DefinitelyTyped repo.

First, find the Github repo named as [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) and fork the repo.

Then clone the forked repo and create a new branch using the node module name you are going to contribute.

```bash
git checkout -b <module_name>
```

Then do

```bash
npm install
```

Create a new folder inside the typings folder named after the node module name.

```bash
mkdir <module_name>
```

This folder should have four files

| File Name   |      Description      |
|----------|---------------|
| index.d.ts |  File where we add type definition for the node module |
| module-tests.ts |    write tests for the typing   |
| tsconfig.json | configurations for Typescript |
| tslint.json |    linting for TS   |

## index.d.ts

You can generate a base code for a typing definition file using dts-gen.

```bash
npm install -g dts-gen
npm install -g <module_needs_definition>
dts-gen -m <module_needs_definition>
```

This will generate a skeleton for the definition.

After that, you need to go through the original js repo and find out parameter types and return types to add exact data types rather than `any` type.

as an example

```typescript
foo(name: any) : any {
    // stuff
}
```

This makes more sense than the previous one
```typescript
foo(name: string) : string[] {
    // stuff
}
```


In addition to that typing file should have this heading:

```
// Type definitions for [LIBRARY NAME]
// Project: [LIBRARY URL]
// Definitions by: [AUTHOR NAME] <[AUTHOR URL]>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
```
## module-tests.ts

In this file, I recreated the original module functions usage to test it.

As an example, Original module should work with 
```
foo.work()
```
And so we add 
```
foo.work() 
```
In tests file and test.

## tsconfig.json

This a sample example of a config file.
```json
{
   "compilerOptions": {
       "module": "commonjs",
       "lib": [
           "es6"
       ],
       "noImplicitAny": true,
       "noImplicitThis": true,
       "strictNullChecks": true,
       "strictFunctionTypes": true,
       "baseUrl": "../",
       "typeRoots": [
           "../"
       ],
       "types": [],
       "noEmit": true,
       "forceConsistentCasingInFileNames": true
   },
   "files": [
       "index.d.ts",
       "foo-tests.ts"
   ]
}
```

## tslint.json

Add this in the file
```json
{
   "extends": "dtslint/dt.json"
}
```

So now we are ready to test our type definition.

Run
```
tsc 
```
To find whether your files compile correctly.
```
run npm test 
```
to run test
```
npm run lint <package-name> to lint our package
```
If everything seems fine.

Do
```bash
git add .
git commit -m “add: type definition for <module-name>”
git push origin <module-name>
```

Then you can make a PR from your repo to DefinetlyTyped repo and wait for a review. If you have done the typing correctly your contribution will be merged.

Finally, Try to add as much as typing for the type definition since when another person is using your typings they can take more from your contribution. (Just don't put it with bunch of `any` types)

Hope this will help you!

P.S: If you think something is missing in this post, feel free to ping me or contribute to this article by clicking ***Edit on GitHub***.
