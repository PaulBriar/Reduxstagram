// increment
export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index,
    }
};

// add comment
export const addComment = (postId, author, comment) => {
    console.log('Dispatching comment')
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
    }
};

// remove comment
export const removeComment = (postId, index) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
};