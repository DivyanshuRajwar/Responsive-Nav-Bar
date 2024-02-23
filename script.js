const overLayer=document.querySelector(".overlay");
const media_Nav=document.querySelector(".meadia_nav")
const openMenu=()=>{
    overLayer.classList.add("open");
    media_Nav.classList.add("open");
}
const closeMenu=()=>{
    overLayer.classList.remove("open");
    media_Nav.classList.remove("open");
}   