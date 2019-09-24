import { addNewTask, updateTask } from './server';

(async function myFunc() {
    await addNewTask({
        name:"My task",
        id:"12346"
    });

    await updateTask({
        name:"My task - UPDATED!!!",
        id:"12346"
        
    })
}) ();