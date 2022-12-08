const btnAdd = document.getElementById('add-task');
const list_task = document.getElementById('tasks_1');

var id = 0;

//Função de enviar tarefa
function sendTask()
{
    //Criando variaveis
    const txt = document.getElementById('new-task').value;
    const text = document.createTextNode(txt);

    
    const TaskContainer = document.createElement('div'); //Criando o elemento de container
    const check = document.createElement('input'); //Criando o elemento de input
    const label = document.createElement('label'); //Criando o elemento de label


    //Editando e colocando valores nos elementos criados
    TaskContainer.classList.add(id);
    id++;

    label.classList.add('msg');

    //Setando atributos para os elementos
    check.setAttribute('type', 'checkbox');
    check.setAttribute('name',txt);
    check.setAttribute('id', txt);
       
    label.setAttribute('for',txt);
    label.appendChild(text);
    
    TaskContainer.appendChild(check);
    TaskContainer.appendChild(label);
    
    list_task.appendChild(TaskContainer);
    console.log(text);
}

btnAdd.addEventListener("click", sendTask);