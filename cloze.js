const fs = require('fs');

function ClozeFlashCard (text, clozeFront, clozeBack){
    this.text = text;
    this.clozeFront = clozeFront;
    this.clozeBack = clozeBack;
    this.deletedCloze = function(){
      
    }
    this.printData = (function(){
    var clozeCardData = "Text: " + this.text + "\n"  + "Cloze Front: " + this.clozeFront + "\n" + "Cloze Back " + this.clozeBack + "\n";
      
    fs.appendFile("app.txt", clozeCardData, (err) => {
    if(err) throw err;
    console.log("Cloze Data saved to app.txt");
    });
    })();
   
}

ClozeFlashCard("text","front","back")

module.exports = (ClozeFlashCard);