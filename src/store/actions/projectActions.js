export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //making async call to db
        const firestore=getFirestore();    
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Josip',
            authorLastName: 'Papež',
            authorId: 1234124,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR',err});
    })
    }
};