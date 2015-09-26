//
//  https://github.com/duliodenis/JS102
//  JS102 (Objects, Arrays, Functions)
//
//  Created by Dulio Denis on 9/26/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  JS102: JavaScript from Fundamentals to Functional


// eFarmony Data Structures: Objects as Data Models
// In this section we will explore how to represent our eFarmony data as a JavaScript object.

// Create empty animal object with object literal notation and store it in a variable
var animal = {};

// use dot notation to give the animal object a username and validate on the console
animal.username = "Rocky";
console.log("The animal object's username is " + animal.username);

// use bracket notation to give the animal a tagline and validate on the console
animal["tagline"] = "I'm the best animal around";
console.log("The animal object's tagline is " + animal.tagline);

// Create an empty arrary and assign the animal object the noises array in a noises variable with bracket notation
var noises = [];
animal['noises'] = noises;

console.log(animal);

// iterate through all the properties of the object
var iterations = 1;
for (var key in animal) {
    console.log("animal item # " + iterations);
    if (key === "username") console.log("Hi, my name is " +animal[key]); // this can not be dot notation (animal.key)
    if (key === "tagline") console.log("I like to say " + animal[key]);   
    
    iterations++;
}

/* Review

Let's go over some concepts:

1. What are the different ways you can add properties and values to objects?
   Answer: Dot Notation and Bracket Notation
   
2. Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?
   Answer: Must use Bracket Notation
   
3. What about if the property is a variable, how does that change the syntax?
   Answer: Must use Bracket Notation and no quotes.
*/