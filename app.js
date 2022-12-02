const menu=document.getElementById("menu-links")
const btn=document.getElementById("btn-menu")

btn.addEventListener("click",togglemenu)

function togglemenu(){
    menu.classList.toggle("show")
}