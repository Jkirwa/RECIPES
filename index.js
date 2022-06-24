let clicking=document.getElementById("btn").addEventListener("click",clickMe);
function clickMe(){
    alert("Eat clean and healthy");
}
function callBack(){
    document.getElementById("text").textContent = "This is really cool!"}
    
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded ');
    console.log(callBack())
});

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a7d1524d8fmsheac5e052cc02b52p11e6c7jsn6d8c2379e7f4',
// 		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
// 	}
// };
// let dataCount= document.getElementById("food")

// fetch('https://low-carb-recipes.p.rapidapi.com/random', options)
// 	.then(response => response.json())
// 	.then((response) => {console.log(response)
//         result=response
//         let row= ` ${response.name}+' '+${response.name}+' '+${response.cookTime}+' '`;
//         dataCount.append('Name:'+result.name+'.'+'Steps: '+result.steps);
        
//     })

