

var todolist = JSON.parse(localStorage.getItem("todoDataBase"));
var completed = JSON.parse(localStorage.getItem("completeToDos")) || [];

todolist.map(function(ele)
{
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    col1.innerText = ele.name;
    var col2 = document.createElement("td");
    col2.innerText = ele.quantity;
    var col3 =  document.createElement("td");
    col3.innerText = ele.priority;
    var col4 = document.createElement("button")
    col4.innerText = "Mark As Complete";
    col4.setAttribute("id","button");
    col4.addEventListener("click", function()
    {
        markAsComplete(ele);
    })

    row.append(col1,col2,col3,col4);
    document.querySelector("#body").append(row);
})

function markAsComplete(ele)
{
    completed.push(ele);
    localStorage.setItem("completeToDos",JSON.stringify(completed));
}