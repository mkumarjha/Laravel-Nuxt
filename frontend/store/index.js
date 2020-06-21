export const getters =  {
    authenticated(state){
        return state.auth.loggedIn
    },
    user(state){
        return state.auth.user
    },
    // authenticated(state) {
    //     return state.auth.loggedIn
    // },
    // loggedInUser(state) {
    //     return state.auth.user
    // }
};

