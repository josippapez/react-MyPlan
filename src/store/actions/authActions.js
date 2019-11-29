export const signIn = (userData) => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(userData.email, userData.password)
        .then(() => {
          dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "LOGIN_ERROR", err });
        });
    };
  };

  export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGNOUT_SUCCESS" });
        });
    };
  };

  export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.userMail, newUser.password)
        .then(response => {
          return firestore
            .collection("users")
            .doc(response.user.uid)
            .set({
              userName: newUser.userName
            });
        })
        .then(() => dispatch({ type: "SIGNUP_SUCCSESS" }))
        .catch(err => dispatch({ type: "SIGNUP_ERROR", err }));
    };
  };