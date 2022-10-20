const drop=document.getElementById("more");
const content = document.getElementById("content2");

const dropDown =()=>{
    content.classList.toggle("show");
}

drop.addEventListener("click",dropDown)