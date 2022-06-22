
const nameSpan= document.getElementById("theName")
const emailSpan= document.getElementById("theEmail")
const passwordSpan= document.getElementById("thePassword")
const submit= document.getElementById("submit")
submit.addEventListener('click',grabDetails)

function grabDetails(){
	nameSpan.textContent=  document.getElementById("text").value
	emailSpan.textContent=document.getElementById("email").value
}
	
