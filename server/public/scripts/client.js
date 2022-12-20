$(readyNow);

function readyNow() {
    getTasks(); // on page load, this is a GET request
    $('#submit').on('click', postTask);
    
} // end readyNow


let newTask = {
    addTask: ""
}   // end newTask variable


function getTasks() {
    console.log( 'in getTasks where we will be adding to our list!');
    $('#tasksTableBody').empty();
    $.ajax({
        method: 'GET',
        url: '/weekendToDo'
    }).then(function (response) {
        console.log( 'GET /weekendToDo response', response);
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            $('#tasksTableBody').append(`
                <tr class= "table-row">
                    <td>${response[i].addTask}</td> 
                    <td>
                        <button>Complete</button>
                    </td>                 
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            `)
        }
    })
} // end getTasks



function postTask() {
    let input = $('#add-task').val();

    newTask.addTask = input;

    console.log( 'inside postTask ');
    $.ajax({
        method: 'POST',
        url: '/weekendToDo',
        data: newTask
    }).then(function(response){
        $('#add-task').val('');
        console.log('response to POST request ', response);
        getTasks();
    }).catch(function(error){
        console.log(error);
    });
} // end postTask


