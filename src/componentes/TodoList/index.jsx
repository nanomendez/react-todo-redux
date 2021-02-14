import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'

const TodoList = ({ list, removeItem }) => {

    debugger

    const onClickRemove = useCallback(
        (item) => {
            removeItem(item)
        },
        []
    )

    console.log(list);

    return (
        <div>
            {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove} />)} 
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        list: state.items
    }    
}

const mapDispatchToProps = dispatch => {
    return ({
        removeItem: value => dispatch({type: 'REMOVE_ITEM', payload: value})
    }) 
}

//connect es una funcion a la que le pasamos ciertos parametros y retorna otra funcion
//a la cual le debemos pasar el componente
//Le inyectamos a TodoList la propiedad que le pasamos en el objeto
// items se le va a pasar como propiedad a TodoList
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
