import * as ActonTypes from "./ActionTypes";
import Axios from "axios";

export const fetchTodos = () => {
    return dispatch => {
        Axios.get("/todoapi/gettodos").then((res)=>{
            dispatch(setTodos(res.data.todos))
        }).catch((err)=>{
            
        })
    }
}

export const setTodos = (todos) =>{
    return {
        type : ActonTypes.SET_TODOS,
        todos : todos
    }
}

//add todo
export const addTodoAsync = (name) => {
    //console.log("Add todo Async")
    var todo = {
        name : name
    }
    return dispatch => {
        Axios.post("/todoapi/addtodos",todo).then((res)=>{
            dispatch(addTodo(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const addTodo = (res) => {
    return {
        type: ActonTypes.ADD_TODO,
        res : res
    }
}


//star todo
export const starTodoAsync = (id,isStar) => {
    //console.log("star todo Async",id,isStar)
    return dispatch => {
        Axios.patch(`/todoapi/startodos/${id}/${isStar}`).then((res)=>{
            dispatch(starTodo(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const starTodo = (res) => {
    return {
        type: ActonTypes.STAR_TODO,
        res : res
    }
}

//complete todo

export const completeTodoAsync = (id,isCompleted) => {
    //console.log("complete todo Async",id,isCompleted)
    return dispatch => {
        Axios.patch(`/todoapi/completetodos/${id}/${isCompleted}`).then((res)=>{
            dispatch(completeTodo(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const completeTodo = (res) => {
    return {
        type: ActonTypes.COMPLETE_TODO,
        res :res
    }
}

//remove todo

export const removeTodoAsync = (id) => {
    //console.log("remove todo Async")
    return dispatch => {
        Axios.delete(`/todoapi/removetodos/${id}`).then((res)=>{
            dispatch(removeTodo(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const removeTodo = (res) => {
    return {
        type: ActonTypes.REMOVE_TODO,
        res : res
    }
}