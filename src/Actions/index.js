export const addData = (usr) => {
    return { type: "ADD", payload: usr }
}

export const deleteData = (id) => {
    return { type: "Delete", payload: id }
}

export const editData = (usr, id) => {
    return { type: "Edit", payload: { usr, id } }
}

export const select = (id) => {
    return { type: "select", payload: id }
}

export const selectAll = (checked) => {
    return { type: "selectAll", payload: checked }
}

export const search = (text) => {
    return { type: "search", payload: text }
}

export const sort = (key) => {
    return { type: "sort", payload: key }
}

export const deleteAll = () => {
    return { type: "deleteAll" }
}