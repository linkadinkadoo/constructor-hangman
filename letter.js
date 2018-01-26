
// var inquierer = require ('inquierer');

var letter = function(letter){
    this.letter = letter;
    this.guessed = false;

};

letter.prototype.toString = function() {
    if(!this.guessed) {
        return"_";
    }
    return this.letter;
}

letter.prototype.guess = function(guess){
    if(guess=== this.letter){
        this.guessed = true;
    }
}

module.exports = letter;

// var a = new letter('a');

// console.log(a.getDisplay());

// a.guessed = true;

// console.log(a.getDisplay());