import * as CommentAPI from '../services/comment';

export const LOAD_COMMENTS_POST = 'LOAD_COMMENTS_POST';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const fetchCommentsPost = (data) => {
    return {
        type: LOAD_COMMENTS_POST,
        data,
    }
}

export const upVoteComment = data => {
    return {
        type: UP_VOTE_COMMENT,
        data,
    }
}

export const downVoteComment = data => {
    return {
        type: DOWN_VOTE_COMMENT,
        data,
    }
}

export const createComment = data => {
    return {
        type: CREATE_COMMENT,
        data,
    }
}

export const deleteComment = data => {
    return {
        type: DELETE_COMMENT,
        data,
    }
}

export const editComment = data => {
    return {
        type: EDIT_COMMENT,
        data,
    }
}

export const fetchCommentsPostThunk = id => dispatch => (
    CommentAPI
        .getCommentPost(id)
        .then(data => dispatch(fetchCommentsPost(data)))
)

export const upVoteCommentThunk = id => dispatch => (
    CommentAPI
        .upVoteComment(id)
        .then(res => res.json())
        .then(data => dispatch(upVoteComment(data)))
)

export const downVoteCommentThunk = id => dispatch => (
    CommentAPI
        .downVoteComment(id)
        .then(res => res.json())
        .then(data => dispatch(downVoteComment(data)))
)

export const createCommentThunk = comment => dispatch => (
    CommentAPI
        .createComment(comment)
        .then(res => res.json())
        .then(data => dispatch(createComment(data)))
)

export const deleteCommentThunk = id => dispatch => (
    CommentAPI
        .deleteComment(id)
        .then(res => res.json())
        .then(data => dispatch(deleteComment(data)))
)

export const editCommentThunk = comment => dispatch => (
    CommentAPI
        .editComment(comment)
        .then(res => res.json())
        .then(data => dispatch(editComment(data)))
)