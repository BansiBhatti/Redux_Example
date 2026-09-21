export const PropsData = ({ data, handleDelete, handleEdit}) => {
    return (
        <>
            <h1>table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, idx) => {
                        return (
                            <tr key={item.id}>
                                <td>{item?.fname}</td>
                                <td>{item?.email}</td>
                                <td><button onClick={()=> handleDelete(item.id)}>Delete</button></td>
                                <td><button onClick={()=> handleEdit(item.id)}>Edit</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}