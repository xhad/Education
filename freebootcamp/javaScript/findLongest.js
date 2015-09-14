function findLongestWord(str) {
	var splitStr = str.split(' ');
	var len = 0;

	for(var i = 0; i < splitStr.length; i++) {
		if(len < splitStr[i].length) {
			len = splitStr[i].length;
		}
	}
	return len;
	console.log(len);
}

findLongestWord('The quick brown fox jumped over the lazy dog');