# Todo List

> - this project is for practice using ```html css js``` for creating project
> - this is project is learning by [this video](https://youtu.be/G0jO8kUrg-I?si=PqHfAS7oOqz-ajto)
> - **day 2:** xx/11/2023

## what did learned from this project?
- JAVASCRIPT
    - to get type of object that get from HTML use ```ELEMENT.tagName``` it will return type of element
    - to remove element use ```ELEMENT.parentElement.remove()```
    - to stored data in local storage use ```localStorage.setItem("NAME_OF_INFOMATION_TAG", DATA_THAT_WANT_TO_STORED)```
    - to fetch stored data in local storage use ```localStorage.getItem("NAME_OF_INFOMATION_TAG")```
    - to create HTML's element use ```document.createElement("NAME_OF_HTML_ELEMENT{eg. li, div, span, ...}")```
- CSS
    - to make a object that has height full screen using ```height: 100vh```
    - to move position (eg. move in x core, y core) have to use ```position: absolute;```
- HTML
    - actualy writing ```<script src="FILE_LOCATION"></script>``` must write in at buttom for wait HTML creating object makes it ***no need*** to write ```document.addEventListener("DOMContentLoaded", () => {working function;})```
    - to add event click on button can be both use ```<button onclick="fuction()"></button>``` **or** create ```<button id="ID"></button``` then add ```document.getElementById("ID").addEventListener("click", fuction)``` *in the second ways **don't** write **()***