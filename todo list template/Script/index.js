
document.querySelector("#form").addEventListener("submit",datafun)
   
var todoArr =JSON.parse(localStorage.getItem("todoDataBase")) || [];

function datafun(event)
{
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var priority =  document.querySelector("#priority").value;

    var todoObj = {
        name:name,
        quantity:quantity,
        priority:priority,
    };
  todoArr.push(todoObj);
  localStorage.setItem("todoDataBase",JSON.stringify(todoArr));
  var data =localStorage.getItem("todoDataBase");
   
}
