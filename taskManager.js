function saveTask(){
    //get values
    console.log("Task Manager...")
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#txtColore").val();
    const Date = $("#txtDate").val();
    const Status = $("#selStatus").val();
    const Budget = $("#numBudget").val();

    console.log(title, description, color, Date, Status, Budget);
//creating an object
    let taskSave = new Task(title, description, color, Date, Status, Budget);
    console.log(taskSave)

    //save to server
    $.ajax({

        type: "post",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskSave),
        contentType: "application/json",
        success: function (response) {
          console.log(response)
        },
    
        error: function (error) {
          console.log(error)
        }
    })
}

function init(){
    $("#btnSave").click(saveTask)
}

window.onload = init