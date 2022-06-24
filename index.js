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
let dataCount= document.getElementById("food")
let result;
fetch('https://low-carb-recipes.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then((response) => {console.log(response)
        result=response
        let row= `<ul><li> ${response.name}+' '+${response.name}+' '+${response.cookTime}+' '+${''}</li></ul>`;
        dataCount.append('Name:'+result.name+'.'+''+''
        
        +'Steps:'+result.steps);
        dataCount.innerHtml+=row
    }
    
    )
	.catch(err => console.error(err));
 let populateData=(result)=>{
    //let column= `<ul><li> ${response.id}+' '+${response.name}+' '+${response.cookTime}+' '+${''}</li></ul>`;
    dataCount.innerHtml+=column
  

 }
 populateData(result)
// let diet=async()=>{

// let response =await fetch('https://low-carb-recipes.p.rapidapi.com/random', options);
    
//     let recipes=await response.json()
//     console.log(recipes);
//     let dataCount= document.getElementById("response")

//     recipes.map((recipe)=>{
//         let column= `<li>name: ${recipe.id},${recipe.name}, ${recipe.cookTime}, ${recipe.nutrients}</li>`;
//         dataCount.innerHtml+=column 
//     });
//     diet()

// }