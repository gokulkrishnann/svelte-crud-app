import {writable} from 'svelte/store'
import {todos} from './data'
export function todoManager(todos=[]){    
    const {subscribe,update}=writable(todos)
    let todosList=todos;
    return{
        subscribe,
        addTodo:(input) =>{
           const newTodo={ id: todos.length+1,
            title: input.title,
            category: input.category
           }
        update((todos)=>{
            todosList=[newTodo,...todos]
            return [newTodo,...todos]
        })
        todoCount.set(todosList.length)
        },
        todosList:todosList,  
        updateTodo(todo){
          update((todos)=>{
            const matchIndex= todos.findIndex((obj)=> obj.id===todo.id);
            todos[matchIndex]=todo;
            return [...todos];
          })
        },
        deleteTodo(todo){
            update((todos)=>{
                todosList=todos.filter(t=>t!==todo)
                return todosList
            })
            todoCount.set(todosList.length)
        }
    }
}

export const todoStore=todoManager(todos);
export const todoCount=writable(todoStore.todosList.length);