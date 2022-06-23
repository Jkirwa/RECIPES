let clicking=document.getElementById("b1").addEventListener("click",clickMe);
function clickMe(){
    alert("Eat healthy");
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a7d1524d8fmsheac5e052cc02b52p11e6c7jsn6d8c2379e7f4',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

let diet=async()=>{

let response =await fetch('https://low-carb-recipes.p.rapidapi.com/random', options);
    
    let recipes=await response.json()
    console.log(recipes);
    let dataRendered= document.getElementById("response")

    recipes.map((recipe)=>{
        let column= <li>name: ${recipe.name}co</li>
    })







}