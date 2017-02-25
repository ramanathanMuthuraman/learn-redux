
export default function (state = null, action) {
    switch (action.type) {
        case 'ACTIVE-COMPONENT':
            return action.payload;
            break;
    }
    return state;
}
