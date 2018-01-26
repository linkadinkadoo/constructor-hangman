var letter = require('./letter.js')

var Word = function(word) {
    this.wordArray = [];

    for (i=0; i < Word.length; i++){
        this.WordArray.push(new letter(word[i]));
    }
}

Word.prototype.toString = function(){
    return this.WordArray.join('');
}

var elephant = new Word('elephant');
var zebra = new Word('zebra');
var giraffe = new Word('giraffe');

console.log(elephant + '');

module.exports = Word;