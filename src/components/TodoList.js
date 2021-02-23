import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos}) => {
    return (
        <div className='todo-app__wrapper__list flex flex-col gap-y-1.5 lg:gap-y-2.5 xl:gap-y-4 2xl:gap-y-6 pt-6 2xl:pt-12 pb-5 2xl:pb-10'>
            {todos.length > 0 ? todos.map((item,index)=> {
                return  <TodoItem key={item.id} todo={item} setTodos={setTodos} todos={todos} />
            }) : <h1 className='text-white text-2xl font-semibold'>No tasks added</h1>}  
        </div>
    )
}

export default TodoList
