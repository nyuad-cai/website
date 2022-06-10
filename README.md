# website

## About

This repository contains the source code for the Clinical AI Lab [website.](https://nyuad-cai.github.io/website/) 

## Repository Content

This repository contains:

- Eight .html files corresponding to the eight pages of the website. 
- 1 CSS file
- 1 Javascript file
- A folder with all images and icons used in the website. 

## Overview

Html is used to create elements in pages (text, list, link, etc…). CSS is used to style those elements. For example if I create a text in html then I can fix color, alignment, font, size, etc using CSS. Javascript is used for interactivity in the website: I used JS for the mobile menu for the mobile version of the website. 

## How to make changes

To make changes to the source code, go to the page you’re targeting (pagename.html), you will find <div> tags with a classname corresponding to what that code snippet represents. You can modify the text between <p> tags or add/delete elements. If you want to modify the style of an element, look up the class name on the styles.css file (just a crtl F). Here, two cases might occur:

1-You find the class name once only and you modify the style of the element. 
2-You find the class name more than once. In this case, two things might be happening: 

 - If the class name is “bar” and you find .bar and .bar .line, that is because the element has a child. Change the style related to the element and not its child. (.bar:hover is just for the hover effect and not the element per se)
 - If the class name is “bar” and you find .bar more than once, then it is because of the media queries. Scroll up and you will find that the classname is part of a larger curly bracket entitled media queries. The media queries help make the website responsive: suitable for a mobile device. So when modifying the style of an element, check it in the developer’s tools (by right-clicking on chrome and closing inspect) and decide whether you need to make adjustments for the mobile version as well. 

The JS file contains the code for the burger menu: the three bars that replace our navigation bar elements. It contains a simple program that makes the mobile menu (vertical menu with all pages) appear once you click on the bars icon. 



