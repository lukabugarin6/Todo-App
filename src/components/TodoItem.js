import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import {FaTrash} from 'react-icons/fa'

const TodoItem = ({todo, setTodos, todos}) => {

    const deleteTodoHandler = () => {
        setTodos(todos.filter((prevListItem)=> prevListItem.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((prevListItem)=> {
            if(prevListItem.id === todo.id){
                return {
                    ...prevListItem, completed: !prevListItem.completed
                }
            }
            return prevListItem;
        }))
    }

    return (
        <div className='todo-app__wrapper__list__item transition-all duration-500 flex justify-between gap-x-2 text-xl w-full'>
            <div className={`todo-app__wrapper__list__item__text flex-1 break-words text-white font-semibold p-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</div>
            <div className='todo-app__wrapper__list__item__buttons flex gap-x-1 pt-2 text-xs 2xl:text-base'>
            <button className='transition-all duration-300 bg-quinary text-tertiary p-2 self-start hover:bg-quaternary ' onClick={completeHandler}><AiOutlineCheck/></button>
            <button className='transition-all duration-300 bg-tertiary text-quinary p-2 self-start hover:text-primary' onClick={deleteTodoHandler}><FaTrash /></button>
            </div>
        </div>
    )
}

export default TodoItem
