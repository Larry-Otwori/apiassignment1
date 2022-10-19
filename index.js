window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form"); //const used to declare constant variables that will not change *not sure
    const input = document.querySelector('#new-task-input'); //in java script, code is executed i such a way that semicolons asre not needed. used to indicate where statements begin and end though
    const list_el = document.querySelector('#tasks'); //names assigned in brackets are declared in HTML first


    form.addEventListener('submit', (e)=>{ //this line means listen in on the event called submit, denoted as e
        e.preventDefault();  //default behaviour prevented

        const task = input.value; // variable that us goint to take the value in the input field
        const task_el = document.createElement('div'); //allows to create a new div element
        task_el.classList.add('task'); // take task ekement div and assign task

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        
        
        // pick created element above and send it to where you want it appended (below line)
        task_el.appendChild(task_content_el);

        //create am input field to store the task values
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text'); //give class text
        task_input_el.type='text'; //give class type text
        task_input_el.value = task; //assign task to input field created above

        task_input_el.setAttribute("readonly","readonly"); //simulate a sace scenario.. not sure
        task_content_el.appendChild(task_input_el);

        //create the edit and delete buttons by creating elemetns. could not be done in html because in this case the tasks are a dynamic process
        //since the nutton appears in list input field, append to the list inputfield

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText= 'Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText= 'Delete';

        task_action_el.appendChild(task_edit_el); //adds to class t
        task_action_el.appendChild(task_del_el); // adds to class

        task_el.appendChild(task_action_el);

        input.value = ''; //once task is added, clear input field to allow for more taks to be added/written

        list_el.appendChild(task_el);


        //work on the edit button
        task_edit_el.addEventListener('click', (e)=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus(); 
            } else
            {task_edit_el.innerText="Edit";
             task_input_el.setAttribute("readonly", "readonly");
            }

        });

        //work on delete button
        task_del_el.addEventListener('click', (e)=> {
            list_el.removeChild(task_el);

        });







    });

});