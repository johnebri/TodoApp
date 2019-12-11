const initState = {
    posts: [
        {id: '1', title: 'title one', body: 'this is body one testing'},
        {id: '2', title: 'title two', body: 'this is body two testing'},
        {id: '3', title: 'title three', body: 'this is body three testing'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer