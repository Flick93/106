function saveTask() {
    // get values
    console.log("Task Manager...")
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#txtColor").val();
    const date = $("#txtDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
  
    //console.log(title, description, color, date, status, budget);
  //creating an object
    let taskSave = new Task(title, description, color, date, status, budget);
    console.log(taskSave);
  
    // save to sever (post)
    $.ajax({
      type: "post",
      url: "http://fsdiapi.azurewebsites.net/api/tasks/",
      data: JSON.stringify(taskSave),
      contentType: "application/json",
      success: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log(error);
      }
    });
    displayTask(taskSave);
  }
  //display from server (get)
  function displayTask(task){
    let syntax = `
    <div class="task-container" style="border-color:${task.color}">
      <div class="task">
        <div class="info">
          <h5>${task.title}</h5>
          <p>${task.description}</p>
        </div>   
        <div class="status">${task.status}</div>
        <div class="date-budget">
          <span>${task.date}</span>
          <span>${task.budget}</span>
        </div>
      </div>  
    </div>
    `;
  
    $("#list").append(syntax);
  }
  
  
  function init() {
    $("#btnSave").click(saveTask);
  }
  
  window.onload = init