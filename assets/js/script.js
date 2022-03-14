var tasks = () ;

var createTask = funtion(taskText, taskDate, taskList) {
//Create Tasks
    var taskLi = $("<li>").addClass("list-item");
   .addClass("badge, badge-primary,badge-info") 
   .text(taskDate);

   taskLi.append(taskText,taskDate)

   $("#list-"= taskList).append(taskLi);

   var logInfo = () ;
//Log the tasks
   var storeInfo =function(toDo,inProcess, underReview, inputDone)
}
tasks();