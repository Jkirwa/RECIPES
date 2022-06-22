const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b68a9dd2cfmshad1078eb2f3507fp1b69bejsnafa74dbbbcfd',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

fetch('https://low-carb-recipes.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));