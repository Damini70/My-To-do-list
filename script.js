function myList(){
    let a=document.getElementById("input");
    if(a.value){
 // e.preventDefault();
     let ul= document.getElementById("list");
     // console.log(ul);
     let li = document.createElement("li");
      li.appendChild(document.createTextNode(document.getElementById("input").value));
      li.setAttribute("class","todo-item");
  
      ul.appendChild(li);
      
      let btn=document.createElement("button");
      btn.innerText="complete";
      btn.setAttribute("class","complete-btn");
      
      li.appendChild(btn);
      btn.addEventListener("click",function(){
        li.classList.add('strike');
      });
      
      
      let btn1=document.createElement("button");
      btn1.innerText="Delete";
      btn1.setAttribute("class","trash-btn");
      
      li.appendChild(btn1);
      btn1.addEventListener("click",function(){
        li.remove();
      })
      
     
       console.log(ul);  
    }
 }