import axios from "axios"
import { useEffect, useState } from "react"

export default function DataByAPI() {

    const [users, setUsers] = useState([]);

    const cellStyle = {
        border: "1px solid black",
        padding: "10px",
        textAlign: "left",
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))

        // params 
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => console.log(res?.data))
            .catch((e) => console.log(e))
    }, [])

    const handlePost = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", { name: "Bansi Bhatti", Idd: 21545 })
            .then((res) => console.log(res))
            .catch((w) => console.log(w));

    }

    const handleParams = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => console.log(res.data))
            .catch((w) => console.log(w))
    }

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => console.log(res.data))
            .catch((w) => console.log(w))
    }

    const handleEdit = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                title:"updated",
                body:"updated",
            })
            .then((r) => console.log(r.data))
            .catch((w) => console.log(w))
    }

    return (
        <>
            <button onClick={() => handlePost()}>post data</button>
            <table style={{
                borderCollapse: "collapse",
                width: "80%",
                margin: "auto",

            }}>
                <thead>
                    <tr style={cellStyle}>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Body</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr>
                            <td style={cellStyle}>{u.id}</td>
                            <td style={cellStyle}>{u.title}</td>
                            <td style={cellStyle}>{u.body}</td>
                            <td style={cellStyle}>
                                <button onClick={() => handleParams(u.id)}>Get Id</button>
                                <button onClick={() => handleDelete(u.id)}>Delete</button>
                                <button onClick={() => handleEdit(u.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}