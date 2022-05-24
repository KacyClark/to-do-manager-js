   let newTask=document.getElementById("txtTask");  //.value;  DrJ removed .value from here
   let count=0;

   function registerTask(){
      console.log(newTask.value);     //and moved it to this line

    let tmp = `<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️</button> </li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count++;
}

function deleteTask(x){
  document.getElementById(x).remove();
}

function clearForm(){
    newTask.value="";
}