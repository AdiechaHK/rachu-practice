var cities = ['Anjar', 'Adipur', 'Bhuj', 'Rajkot', 'Ahmedabad', 'Gandhidham', 'Morbi'];



for (var i = 0; i < 50; i++) {
	let dt = (Math.floor(Math.random()*15) + 10) + "-07-2019"
	let from = cities[Math.floor(Math.random() * cities.length)];
	let to = cities[Math.floor(Math.random() * cities.length)];
	while(from == to) to = cities[Math.floor(Math.random() * cities.length)];
	let ppl = Math.floor(Math.random() * 500);
	console.log([dt, from, to, ppl].join(","));
}

