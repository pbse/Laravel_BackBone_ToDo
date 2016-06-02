<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ToDo App</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="page-header">
                <h1>ToDo APP</h1>
            </div>
            <div class="col-md-12">
                <form id="add_task" class="form-inline">
                    <div class="col-md-8">
                        <input type="text" name="task" id="task" class="form-control input-large" placeholder="Enter any task you want. Press Enter or Click Button" required/>
                    </div>
                    <div class="col-md-4">
                    	<input type="submit" value="Add Task" class="btn btn-primary" />
                    </div>
                </form>

                <table id="allTasks" cellspacing="0" class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th> Task</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                </table>

                <script id="allTaskView" type="text/template">
                    <td>
                        <div class="view">
                            <%= tasks %>
                        </div>
                        <input class="edit form-control" value="<%= tasks %>">
                        <small class="text-primary"> Last Updated at - <%= updated_at %> </small>
                    </td>
                    <td>
                        <a href="#tasks/<%= id %>/edit" class="glyphicon glyphicon-pencil editButton" style="color:#337ab7;"></a>
                        <a href="#tasks/<%= id %>" class="glyphicon glyphicon-trash delete" style="color:red;"></a>
                    </td>
                </script>
            </div>
        </div>
    </div>
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/underscore-min.js"></script>
    <script src="js/backbone-min.js"></script>
    <script src="js/app.js"></script>
    <script src="js/router.js"></script>
    <script src="js/model.js"></script>
    <script src="js/collection.js"></script>
    <script src="js/view.js"></script>
    <script src="js/start.js"></script>

</body>

</html>