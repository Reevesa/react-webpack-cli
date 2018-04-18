

export function setOtherOne(params) {
    return async function(dispatch, getState) {
        dispatch({
            type: 'OTHER_ONE',
            data: { params }
        })
    }
}

export function setOtherTwo(params) {
    return async function(dispatch, getState) {
        dispatch({
            type: 'OTHER_TWO',
            data: { params }
        })
    }
}