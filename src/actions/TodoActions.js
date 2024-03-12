export const AddTodoAction = (todo) => (dispatch, getState) =>{
    
    const {
        Todo: {todos},
    } = getState();

    const hasTodo = todos.find((i) => i.todo === todo);

    if(!hasTodo && todo!==""){
        dispatch({
            type: "ADD_TODO",
            payload: [...todos, {id: todo, todo, success: false}],
        });
    }
}

export const RemoveTodoAction = (todo) => (dispatch, getState) =>{
    
    const {
        Todo: {todos},
    } = getState();

    dispatch({
            type: "REMOVE_TODO",
            payload: todos.filter((j) => j.id !== todo.id),
    });
}

export const SuccessTodoAction = (todo) => (dispatch, getState) =>{
    
    const {
        Todo: {todos},
    } = getState();

    dispatch({
            type: "SUCCESS_TODO",
            payload: todos.map((t)=>(t.id==todo.id) ? {...t, success: !t.success} : t),
    });
}

