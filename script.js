const drop=document.getElementById("more");
const content = document.getElementById("content2");
let n=0;

const dropDown =()=>{
    if (n==0){
        content.style.transform="translate(0px,70px)";
        n=1;
    }
    else{
        content.style.transform="translate(0px,-130px)";
        n=0;
    }

}

drop.addEventListener("click",dropDown)