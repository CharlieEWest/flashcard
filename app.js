const inquirer = require('inquirer');
const fs = require("fs");

inquirer.prompt([
{
    type: "list",
    message: "Please select your card deck",
    choices: ["Basic Card", "Cloze Card"],
    name: "Card"
},
{
    type: "list",
    message: "Would you like to create a NEW deck or stick with the EXISTING one?",
    choices: ["New Deck", "Existing Deck"],
    name: "DeckSelection"
}

]).then(function(answers){

    if(answers.Card === "Basic Card" && answers.DeckSelection === "New Deck"){
        console.log("New and Flash");

    }else if(answers.Card === "Basic Card" && answers.DeckSelection === "Existing Deck"){
        console.log("New and Existing");
    }else if(answers.Card === "Cloze Card" && answers.DeckSelection === "New Deck"){
        console.log("Cloze and New");
    }else if(answers.Card === "Cloze Card" && answers.DeckSelection === "Existing Deck"){
        console.log("Cloze and Existing");
    }
});
