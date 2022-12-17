$(readyNow);

function readyNow() {
    getTasks(); // on page load, this is a GET request
    $('#submit').on('click', postTask);
} // end readyNow


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
                <tr data-id=${response[i].id}>
                    <td>${response[i].task}</td>
                    <td>${response[i].complete}</td>
                    <td>${response[i].delete}</td>
                    <td>
                        <button class="complete">Complete</button>
                        <button class="delete">Delete</button>
                    </td>
                </tr>
            `)
        }
    })
} // end getTasks


function postTask() {
    console.log( 'inside postTask ');
    
} // end postTask