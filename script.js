let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont")
let ismodalPresent=false;
let allprioritycolor=document.querySelectorAll(".priority-color");
let colors=['lightpink','lightgreen','lightblue','black'];
let modalPriorityColor=colors[colors.length-1];
let textArea=document.querySelector(".textarea-cont");
let mainCont=document.querySelector(".main-cont");
let ticketArr=[];
// var ShortUniqueId = window['short-unique-id'].default;
var uid = new ShortUniqueId();
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
         allprioritycolor.forEach(function (colorElem) {
            colorElem.classList.remove("active");
          });
    }
});



function createTicket(ticketcolor,data,ticketId){
    let id=ticketId || uid();
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=`
    <div class="ticket-color ${ticketcolor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${data}</div>
    `;
    mainCont.appendChild(ticketCont);
    if(!ticketId){
        ticketArr.push({ticketcolor,data,ticketid:id});
        
        localStorage.setItem("ticket",JSON.stringify(ticketArr));
     
    }

}
//function to get ticket back
if(localStorage.getItem("ticket")){
    ticketArr=JSON.parse(localStorage.getItem("ticket"));
    ticketArr.forEach(function(ticketObj){
      createTicket(ticketObj.ticketcolor,ticketObj.data,ticketArr.ticketid);
    })
}