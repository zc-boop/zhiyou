const state = {
    userToken: ""
};
// mutations
const mutation = {
    addUser(state, userToken) {
        state.userToken = userToken
    }
};
// actions
const action = {
    recordUser(context, userToken) {
        context.commit('addUser', userToken)
    }
};
// getters
const getter = {};

export default {
    state,
    getter,
    action,
    mutation
}
