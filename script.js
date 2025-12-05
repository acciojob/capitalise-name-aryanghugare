//your JS code here. If required.
let input = document.querySelector("#fname")

input.addEventListener("focus",(e)=>{
	e.preventDefault()
	input.value = e.target.value.toUpperCase()  ;
	
})