const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea= document.querySelector('#btnTarea');

function createAlert(message){
    /* <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
       </div>*/
    const alerta = document.createElement('div');
    alerta.classList.add('alert');
    alerta.classList.add('alert-primary');
    alerta.setAttribute('role','alert');
    let buttons = '<div>';
    buttons += `<button  class="btn red"></button>`;
    buttons += `<buttons class="btn yellow"></button>`;
    buttons += `<buttons class="btn green"></button>`;
    buttons += `<buttons class="btn x">X</button>`;
    buttons += `</div>`;
    alerta.innerHTML = `<div>${ message }</div>${ buttons }`;
    return alerta;



    alerta.innerHTML = message;
    return alerta;
}
function addTarea(){
    const data = inputTarea.value;
    const alerta = createAlert(data);
    inputTarea.value = '';
    tareas.appendChild(alerta);
 }

 function getButton(e){
    if(e.target.classList.contains('btn')){
        const action = e.target.classList[1];
        const alertActual = e.target.parentElement.parentElement;
        switch(action){
            case 'red':
                alertActual.classList = [];
                alertActual.classList.add('alert','alert-danger');
                break;
            case 'yellow':
                alertActual.classList = [];
                alertActual.classList.add('alert','alert-warning');
            break;
            case 'green':
                alertActual.classList = [];
                alertActual.classList.add('alert','alert-success');
            break;
            case 'x':
                alertActual.remove();
            break;



        }
    }

 }

 btnTarea.addEventListener('click', addTarea);
 tareas.addEventListener('click',getButton);