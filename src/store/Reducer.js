import * as ActionTypes from "./ActionTypes";

var findIndex = null;
var updatedTodo = null;

const initialState = {
    counter: 1,
    todos : []
}

const Reducer = ( state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_TODOS:
            //console.log(action.todos)
            return {
                ...state,
                todos : action.todos
            }
        case ActionTypes.ADD_TODO:
            //console.log(action.res.data)
            return {
                 ...state,
                 todos: state.todos.concat(action.res.data)
            }
        case ActionTypes.COMPLETE_TODO:
            findIndex = state.todos.findIndex(p=>{
                return p._id === action.res.data._id
            });
            updatedTodo = state.todos.filter((result,index) => {
                if(index===findIndex) {
                    result.completed = action.res.data.completed
                    return result 
                } else {
                    return result
                } 
            })
                    
            return {
                ...state,
                todos : updatedTodo
            }
        case ActionTypes.STAR_TODO:
            //console.log(action.res.data)
            findIndex = state.todos.findIndex(p=>{
                return p._id === action.res.data._id
            });
            updatedTodo = state.todos.filter((result,index) => {
                if(index===findIndex) {
                    result.star = action.res.data.star
                    return result 
                } else {
                    return result
                } 
            })
                       
            return {
                ...state,
                todos : updatedTodo
            }
        case ActionTypes.REMOVE_TODO: 
            //console.log(action.res.data)
            findIndex = state.todos.findIndex(p=>{
                return p._id === action.res.data._id
            });
            updatedTodo = state.todos.filter((result,index)=>index !== findIndex)      
            return {
                ...state,
                todos: updatedTodo
            }
           
        default : 
            return state
        
    }
}

export default Reducer;