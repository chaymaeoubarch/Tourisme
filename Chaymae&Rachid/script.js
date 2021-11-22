const togglebutton = document.getElementById("toggle-button");
const navlist= document.getElementById("navlist");
togglebutton.addEventListener('click',()=>{
navlist.classList.toggle('active');
})