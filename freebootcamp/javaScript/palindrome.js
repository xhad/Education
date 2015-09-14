function palindrome(str) {

	var cleanString = str.toLowerCase().replace(/[|&;$%@" <>()+,.]/g, '');
	var strip = cleanString.replace(' ', '');
	var reverse = strip.split('').reverse('').join('');
	console.log(strip);
	if (reverse === strip) {
		console.log(true);
	} else {
		console.log(false);
	}
}

palindrome('A man, a plan, a canal. Panama');