import React, { useState, useReducer } from 'react'

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}


function reducer(state, action){
    switch(action.type){
        case 'add-todo':
            return { todos: [...state.todos, {payload: action.text, completed: false}]}
        case 'toggle-todo':
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t)
            }
        default:
            return state;
    }
}

const Reducers = () => {
    const [{ todos }, dispatch] = useReducer(reducer, { todos: [] })
    const [text, setText] = useState()
    
    return(
        <div>
           <form onSubmit={e => {
               e.preventDefault()
               dispatch({type: 'add-todo', payload: text})
               setText("")
           }}>
               <input value={} onChange={e => setText(e.target.value)}/>
           </form>
           {todos.map((t, idx) => (
               <div key={t.text} onClick={() => dispatch({type: 'toggle-todo', idx})}
               style={{
                   textDecoration: t.completed ? "line-through" : ""
               }}
               >{t.text}</div>
           ))}
        </div>
    )
}

export default Reducers