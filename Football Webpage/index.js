"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function loadFootballTeams() {
    let select = document.getElementById("football-select");

    for (let i = 0; i < teams.length; i++) {
        let option = document.createElement("option");
        option.text = teams[i].name;
        option.value = teams[i].code;
        select.appendChild(option);
        console.log(`text: ${option.text}   value: ${option.value}`);
    }
}

window.onload = function () {
    loadFootballTeams();
};
