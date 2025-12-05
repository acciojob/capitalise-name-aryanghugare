//your JS code here. If required.
let input = document.querySelector("#fname")

input.addEventListener("blur",(e)=>{
	e.preventDefault()
	input.value = input.value.toUpperCase()  ;
	
})