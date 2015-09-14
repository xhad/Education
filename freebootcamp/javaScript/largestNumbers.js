function largestFourNum(arr) {
	var largest = [0, 0, 0, 0];
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (largest[i] < arr[i][j]) {
				largest[i] = arr[i][j];
			}
		}
	}

	for (var k = 0; k < largest.length; k++) {

	console.log(largest[k]);
	}
}
largestFourNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);