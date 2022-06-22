var name = "React Bootcamp"
const info ="React bootcamp varibles"
let age = 30 
const h2 =document.querySelector(".h2")
console.log(h2);
h2.textContent="React Bootcamp"
h2.style.color="red"
h2.setAttribute("id","ayid")
//h2.style.display="none";
/*setTimeout(()=>{
    h2.style.display="none";
},2000);*/
if (h2){
    h2.setAttribute("aria-label";"react-bootcamp")
}else {
    const h4 =document.createElement("div")
    h4.classList.add("h4")
    document.body
}

