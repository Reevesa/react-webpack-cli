
const otherList = (state = {}, actions) => {
    switch (actions.type) {
        case 'OTHER_ONE':
            return { ...state, ...actions.data };
        case 'OTHER_TWO':
            return { ...state, ...actions.data };
    }
}

export { otherList };