
var completeList = JSON.parse(localStorage.getItem("completeToDos"));

completeList.map(function(ele)
{
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    col1.innerText = ele.name;
    var col2 = document.createElement("td");
    col2.innerText = ele.quantity;
    var col3 =  document.createElement("td");
    col3.innerText = ele.priority;

    row.append(col1,col2,col3);
    document.querySelector("#body").append(row);
});
