let clicking=document.getElementById("b1").addEventListener("click",clickMe);
function clickMe(){
    alert("Eat healthy");
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

fetch('https://low-carb-recipes.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  
  