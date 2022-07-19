let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont")
let ismodalPresent=false;
let allprioritycolor=document.querySelectorAll(".priority-color");
let colors=['lightpink','lightgreen','lightblue','black'];
let modalPriorityColor=colors[colors.length-1];
let textArea=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont");
addbtn.addEventListener("click",function(e){
    if(ismodalPresent==false){
        modal.style.display="flex";
        ismodalPresent=true; 
    }else{
        modal.style.display="none";
        ismodalPresent=false;
    }
       
});


for(let i=0;i<allprioritycolor.length;i++){
    allprioritycolor[i].addEventListener("click",function(e){
        for(let i=0;i<allprioritycolor.length;i++){
            allprioritycolor[i].classList.remove("active");
        }
        allprioritycolor[i].classList.add("active");
        modalPriorityColor=allprioritycolor[i].classList[0];

    });
}
modal.addEventListener("keydown",function(e){
    let key=e.key;
    if(key=="Shift"){
         let text=textArea.value;
        //  console.log(text);
        //  console.log(modalPriorityColor);
         createTicket(modalPriorityColor,text);
         modal.style.display="none";
         ismodalPresent=false;
         textArea.value="";
         allPriorityColors.forEach(function (colorElem) {
            colorElem.classList.remove("active");
          });
    }
});


function createTicket(ticketcolor,data){
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketcolor}"></div>
    <div class="ticket-id"></div>
    <div class="task-area">${data}</div>
    `;
    mainCont.appendChild(ticketCont);
}