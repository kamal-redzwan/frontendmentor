# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-using-vanilla-html-css-and-js-F4CO-Bo3xa)
- Live Site URL: [Github Pages](https://kamal-redzwan.github.io/frontendmentor/18-intro-component-with-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### CSS
- Adding svg icon inside input by adding wrapper with `position: relative` and the icon with `position: absolute`

#### JS
- Use regex email pattern
- Learn to select element inside wrapper with closest method.
- Show error state and remove error state logic
- Validate individual input with email pattern or if the input is empty `input.value.trim() === ''` - this is the hardest logic pattern for me :(
- Learn check Regex pattern with test() method.
- Add error with blur event listener (this fires when the input has lost focus)
- Remove error with focus event listener (this fires when the input is in focus)
- Add form submission logic by using the `validateInput()` function

### Useful resources

- [regex email pattern](https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email)
- [closest() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [blur eventlistener](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
- [focus eventlistener](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
- [test() regex method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

## Author

- Website - [Kamal Redzwan](https://www.kamalredzwan.com)
- Frontend Mentor - [@kmlrdzwn](https://www.frontendmentor.io/profile/kmlrdzwn)
- Twitter - [@kamalredzwan](https://www.twitter.com/kamalredzwan)
