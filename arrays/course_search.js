"use strict";

let courses = [
    {   CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",},

    {   CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",},

    {   CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",},

    {   CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",},

    {   CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",}
];

//1. The start of the PROG200 course
let prog200CourseStart;
for(let i = 0; i < courses.length ; i++){
    if(courses[i].CourseId === "PROG200"){
        prog200CourseStart = courses[i].StartDate;
    }
}
console.log(`The PROG200 course date starts on ${prog200CourseStart}.`);


//2. The title of the PROJ500 course
let proj500Title;
for(let i = 0 ; i < courses.length ; i++){
    if(courses[i].CourseId === "PROJ500"){
        proj500Title = courses[i].Title;
    }
}
console.log(`The title of the PROJ500 course is ${proj500Title}.`);


//3. The titles of the courses that cost $50 or less
let results = [];
for (let i = 0; i < courses.length; i++) {
    if ((courses[i].Fee) <= 50) {
        results.push(courses[i]);
    }
  }

  // function makes my string into one line + ", "
  function getTitleList(courses){
    let msg2 = "";
    for (let i = 0 ; i < courses.length; i++){
        msg2 += courses[i].Title + ", "; 
    }
    return msg2.substring(0, msg2.length - 2)
  }

 let msg = `The titles of the courses that cost $50 or less are: ${getTitleList(results)}.`;
    console.log(msg);

//4. These classes meet in "Classroom 1"?
let results2 = [];
for (let i = 0; i < courses.length; i++) {
    if (courses[i].Location === "Classroom 1") {
        results2.push(courses[i]);
    }
  }

   // function makes my string into one line + ", "
   function getClassRoom1(courses){
    let msg3 = "";
    for (let i = 0 ; i < courses.length; i++){
        msg3 += courses[i].Title + ", "; 
    }
    return msg3.substring(0, msg3.length - 2)
  }

 let msg3 = `The courses that meet in Classroom 1 are: ${getClassRoom1(results2)}.`;
    console.log(msg3);
