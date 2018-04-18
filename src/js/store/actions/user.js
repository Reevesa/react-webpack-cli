
// actions 在组件内 引入
export function setUserData(params) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SET_USER_DATA',
            data: { params }
        })
    }
}