'use strict';

function words (word) {

	let wordOccurs = {};

	word = word.replace("\t"," ").replace("\n"," ");

	let arr = word.split(" ");

	for (let i = 0; i < arr.length; i++) {
    	if (arr[i] != '') {
        	if (!wordOccurs[arr[i]]) {
         	   wordOccurs[arr[i]] = 0;
        	}
        wordOccurs[arr[i]]++;
    	}
	}
	return wordOccurs;
}

module.exports = words