import { Todo, TodoList } from "../classes";
import { todoList } from '../index';

//referencias al html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const countPendientes = document.querySelector('.todo-count');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${ (todo.completed)? 'completed':''}" data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox" ${( todo.completado)? 'checked':''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

export const actualizarPendientes = () => {
    countPendientes.firstElementChild.innerText = todoList.totalPendientes();

}

txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length) {
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = "";
        actualizarPendientes();
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; //it could be a different element input label button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoElemento);
    console.log(todoId);

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
    actualizarPendientes();
    console.log(todoList);
});


btnBorrar.addEventListener('click', (event) => {
    todoList.eliminarCompletados();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        console.log(elemento);
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
    actualizarPendientes();
});


ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if (!filtro) { return; }

    anchorFiltros.forEach(element => {
        element.classList.remove('selected')
    });
    event.target.classList.add('selected');


    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const contemplado = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Pendientes':
                if (contemplado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!contemplado) {
                    elemento.classList.add('hidden');
                }
                break;
            default:
                break;
        }
    }
    actualizarPendientes();
});