function factorialize(n) {
	f = 1;
	for (var i = 1; i <= n; i++) f *= i;
	
	console.log(f);
}

factorialize(5);