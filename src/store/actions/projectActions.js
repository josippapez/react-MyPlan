export const createProject=(project)=>{
    return (dispatch,getState)=>{
        //making async call to db
        dispatch({type:'CREATE_PROJECT',project:project});
    }
}