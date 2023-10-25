const liste = document.querySelector('#tasks');

/*function addTask(){
    const valeur = document.querySelector('#task').value;
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const paragraphe = document.createElement('p');
    paragraphe.textContent = valeur;
    const btUpdate = document.createElement('button');
    btUpdate.textContent = "Update";
    btUpdate.setAttribute('onclick','updateTask(this)');
    btUpdate.setAttribute('id','update');
    const btDelete = document.createElement('button');
    btDelete.textContent = "Delete";
    btDelete.setAttribute('onclick','deleteTask(this)');
    container.appendChild(paragraphe);
    container.appendChild(btUpdate);
    container.appendChild(btDelete);
    liste.appendChild(container);
}*/

localStorage.setItem("tasks", []);
localStorage.getItem('tasks') == null ? localStorage.setItem('tasks', []):false;

function addTask(){
    const valeur = document.querySelector('#task').value;
    let tab = localStorage.setItem('tasks', valeur);
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    tab.push(container);
    const paragraphe = document.createElement('p');
    paragraphe.textContent = valeur;
    const btUpdate = document.createElement('button');
    btUpdate.textContent = "Update";
    btUpdate.setAttribute('onclick','updateTask(this)');
    btUpdate.setAttribute('id','update');
    const btDelete = document.createElement('button');
    btDelete.textContent = "Delete";
    btDelete.setAttribute('onclick','deleteTask(this)');
    container.appendChild(paragraphe);
    container.appendChild(btUpdate);
    container.appendChild(btDelete);
    liste.appendChild(container);
}

function delAllTask(){
    while(liste.firstChild){
        liste.removeChild(liste.firstChild);
    }
}

function reload(){
    location.reload();
}

function deleteTask(e){
    e.parentNode.remove();
}

/*function updateTask(e){
    const valeur = document.querySelector('#task').value;
    if(valeur != ""){
        e.parentNode.firstChild.textContent = valeur;
    }
    else{
        e.parentNode.firstChild.textContent = e.parentNode.firstChild.textContent
    }
}*/

let statut = true;

function updateTask(e){
    if (statut == true){
        const taskName = e.parentNode.firstChild.textContent;
        const input = document.createElement("input");
        input.setAttribute("type","text");
        e.parentNode.replaceChild(input,e.parentNode.firstChild);
        e.parentNode.firstChild.value = taskName;
        statut = false;
    } else {
        const taskName = e.parentNode.firstChild.value;
        const paragraphe = document.createElement("p");
        e.parentNode.replaceChild(paragraphe,e.parentNode.firstChild);
        e.parentNode.firstChild.textContent = taskName;
        statut = true;
    }
}