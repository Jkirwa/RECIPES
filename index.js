let clicking=document.getElementById("b1").addEventListener("click",clickMe);
function clickMe(){
    alert("Eat healthy");
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
	}
};

fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// let ingredients=async()=>{

// let response =await fetch('https://calorieninjas.p.rapidapi.com/v1/nutrition?query=tomato', options);
    
//     let tomato=await response.json()
//     console.log(tomato);
//     let data= document.getElementById("response")

//     tomato.map((tomato))=>{
//         let column= 
//     }







// }