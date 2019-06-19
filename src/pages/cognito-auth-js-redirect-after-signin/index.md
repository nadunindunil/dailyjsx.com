---
title: How to implement redirection to a dynamic route after signin with cognito-auth-js 
date: '2019-06-19'
spoiler: Redirection that everyone needs
author: 'Nadun Indunil'
tags: ['React','AWS','Cognito']
---

## Technologies
- react
- [cognito-auth-js](https://github.com/aws/amazon-cognito-auth-js)

## Problem
When your react application can not redirect to a desired route after sign in using AWS Cognito. Imagine a situation such, a user is trying to access a link of your application but he is directed to home screen(default route) not the desired link after sign in. This is because you react application cannot keep a state about the dynamic url user is trying to fetch. In my scenario our application needs to redirect to another url(Active Directory sign in) and come back to application thus made it even harder to accomplish. 

## Solution
In order to keep this state we can use cognito-auth-js's `state` parameter.
You need to set your desired URL as a state, if the token is not valid or expired. 
as an example:
```js
function isValidToken(){
    if (auth.isValidToken()){ // I wrapped this to function actual is : this.auth.getCachedSession().isValid()
        return true;
    } else {
        auth.setState(window.location.href);
        return auth.isValidToken();
    }
}
```

This `isValidToken` function triggers every time a user try to access a different route(or the first hit). This library will remember this token after we sign in again and you can see it in your redirected url a parameter.
we can use that as follows:

```js
function getJsonFromUrl(curUrl) {
   let removeHash = curUrl.replace(/\?/g, '');
   removeHash = removeHash.replace(/\//g, '');
   let result = {};
   removeHash.split('&').forEach(function(part) {
     const item = part.split('=');
     result[item[0]] = decodeURIComponent(item[1]);
   });
   return result;
}

function validateUrl(value) {
 return /^https?:\/\/\w/.test(value);
}

const data = getJsonFormUrl(window.location.href);

if (data.state && validateUrl(data.state)){
    window.location.href = data.state; // this will redirect your application to the desired route.
}
```
you should place this code in a file like `index.js`.

`getJsonFromUrl` -  will decode url and make it a json
`validateUrl` - I used this function in order to find it is a url in state. so, our redirection will be a successful one. (you can improve this regex to have more than https, like first half of the domain etc.)

### References
1. https://github.com/aws/amazon-cognito-auth-js/issues/147
2. https://github.com/aws/amazon-cognito-auth-js