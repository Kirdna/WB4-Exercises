"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

let academyMembersCount = academyMembers.length;
// Who is the Academy Member whose ID is 187?

let memIdToSearchFor = 187;
let membersName;
console.log("1.---------------------------------------------");
for(let i = 0 ; i < academyMembersCount ; i++){
    let member = academyMembers[i];
    console.log(`Checking Number: ${member.name}`);
    if(member.memID == memIdToSearchFor){
        membersName == member.name;
    }
}

console.log(`The academy member whos id is ${memIdToSearchFor} is named ${membersName}.`)

// Who has have been in at least 3 films?
console.log("2.--------------------------------------------")
console.log("Who has been in atleast 3 films?");

for(let i = 0 ; i < academyMembersCount ; i++){
    let member = academyMembers[i];
    console.log(`Checking Number: ${member.name}`);
    if(member.films.length >= 3){
        console.log(member.name)
        
    }
}

// Who has a name that starts with "Bob"?
console.log("3.--------------------------------------------")
console.log('Who has a name that starts with "Bob"?');

for(let i = 0 ; i < academyMembersCount ; i++){
    let member = academyMembers[i];
    console.log(`Checking Number: ${member.name}`);
    if(member.name.startsWith("Bob")){
        console.log(member.name)
        
    }
}
// HARDER: Which Academy Members have been in a film that starts with "A"
function doesAnyValueStartWithA(Strings){
    let count = strings.length;
    for (let i = 0; i < count.length; i++) {
        let currentString = strings[i];
        if(currentString.startsWith("A")){
            return true;
        }
    }
    return false;
}

console.log();
console.log("----------------------------------------------")
console.log('"Which Academy Members have been in a film that starts with "A"');

for ( let i = 0 ; i <academyMembersCount ; i++ ){
    let member = academyMembers[i];
    console.log(`Checking number: ${member.name}`);

//not finished

}



