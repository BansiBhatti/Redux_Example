const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    search: "",
    sort: "",
}

const formReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "ADD": {
            const updated = [...state.users, action?.payload];
            localStorage.setItem('users', JSON.stringify(updated));
            return {
                ...state,
                users: updated
            };
        }

        case "Delete": {
            const updated = state.users.filter((item) => item.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(updated));
            return { ...state, users: updated };
        }

        case "Edit": {
            const updated = state.users.map(
                (item) => item.id === action.payload.id ? action.payload : item
            )

            localStorage.setItem('users', JSON.stringify(updated));
            return { ...state, users: updated };
        }

        case "select": {
            const updated = state.users.map(
                (item) => item.id === action.payload ? { ...item, checked: !item.checked } : item
            )

            localStorage.setItem('users', JSON.stringify(updated));
            return { ...state, users: updated };
        }

        case "selectAll": {
            const updated = state.users.map((item) => ({ ...item, checked: action.payload }))
            return { ...state, users: updated };
        }

        case "search": {
            return { ...state, search: action.payload }
        }

        case "sort": { 
            return { ...state, sort: action.payload }
        }

        case "deleteAll":{
            const updated = state.users.filter((item)=> !item.checked)
            localStorage.setItem('users', JSON.stringify(updated));
            return { ...state, users: updated };
        }

        default: return state || [];
    }
}
export default formReducer