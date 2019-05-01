---
title: How to add full image splash screen in React-Native
date: '2019-03-02'
spoiler: The one with React Native Splash Screen
author: 'Nadun Indunil'
tags: ['react', 'react-native']
---

## Problem:
> [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) filled image stretch on some **Android** devices and looks awful.

## Solution:
follow all the steps up to adding launch_screen.xml in app/src/main/res/layout as described in the [readme](https://github.com/crazycodeboy/react-native-splash-screen) doc.

Then replace this `launch_screen.xml` file
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent">
    <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
</RelativeLayout>
```

With this
```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout
 xmlns:android="http://schemas.android.com/apk/res/android"
 android:layout_width="match_parent"
 android:layout_height="match_parent">
 <ImageView
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   android:src="@drawable/launch_screen"
   android:scaleType="centerCrop"/>
 <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:layout_width="fill_parent"
   android:layout_height="fill_parent"
   android:orientation="vertical"
   android:gravity="center_horizontal">
   </LinearLayout>
</FrameLayout>
```
Hope this will help you!