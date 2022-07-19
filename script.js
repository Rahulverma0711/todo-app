let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont")
let ismodalPresent=false;
addbtn.addEventListener("click",function(e){
    if(ismodalPresent==false){
        modal.style.display="flex";
        ismodalPresent=true; 
    }else{
        modal.style.display="none";
        ismodalPresent=false;
    }
       
});

let allprioritycolor=document.querySelectorAll(".priority-color");

for(let i=0;i<allprioritycolor.length;i++){
    allprioritycolor[i].addEventListener("click",function(e){
        for(let i=0;i<allprioritycolor.length;i++){
            allprioritycolor[i].classList.remove("active");
        }
        allprioritycolor[i].classList.add("active");

    });
}
