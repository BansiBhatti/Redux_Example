import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { TextField, Button, Paper, IconButton, Checkbox, Select, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save"



export const MaterialUI = () => {

    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [rows, setRows] = useState([]);
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");
    const [searchBy, setSearchBy] = useState("name");
    const [, setMultiEditMode] = useState(false);



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("users"))

        if (storedData) {
            setRows(storedData);
        }
    }, [])

    const filteredRows = rows.filter((row) =>
        row[searchBy].toLowerCase().includes(search.toLowerCase())
    );

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleDelete = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id).map((row, index) => ({
            ...row,
            No: index + 1,
        }))

        setRows(updatedRows);
        localStorage.setItem("users", JSON.stringify(updatedRows));
    };

    const handleEdit = (row) => {
        setEditId(row.id);

        setData({
            name: row.name,
            email: row.email,
            password: row.password,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId !== null) {
            const updatedRows = rows.map((row) =>
                row.id === editId
                    ? { ...row, name: data.name, email: data.email, password: data.password, } : row);

            setRows(updatedRows);
            localStorage.setItem("users", JSON.stringify(updatedRows));

            setEditId(null);
            setData({
                name: "",
                email: "",
                password: "",
            })
        }
        else {

            const newRow = {
                id: Date.now(),
                No: rows.length + 1,
                name: data.name,
                email: data.email,
                password: data.password,
                selected: false,
                isEdit: false,
            };

            const updatedRow = [...rows, newRow]

            setRows(updatedRow);
            localStorage.setItem("users", JSON.stringify(updatedRow));

            setData({
                name: "",
                email: "",
                password: "",
            })
        }
    }

    const handleDeleteAll = () => {
        const updatedRows = rows.filter((row) => !row.selected)
            .map((row, index) => (
                {
                    ...row,
                    No: index + 1,
                }
            ))

        setRows(updatedRows);
        localStorage.setItem("users", JSON.stringify(updatedRows))

    }

    const handleMultiEdit = () => {

        const hasSelected = rows.some((row) => row.selected);

        if (!hasSelected) return;

        const updatedRows = rows.map((row) => ({
            ...row,
            isEdit: row.selected,
        }));

        setRows(updatedRows);
        setMultiEditMode(true);
    };

    const handleSaveAll = () => {

        const updatedRows = rows.map((row) => ({
            ...row,
            isEdit: false,
            selected: false,
        }));

        setRows(updatedRows);
        setMultiEditMode(false);

        localStorage.setItem("users", JSON.stringify(updatedRows));
    };


    const columns = [
        {
            field: "select",
            width: 80,
            sortable: false,
            filterable: false,

            //do customUI instead of name use=> renderHeader also work for only headerRow & only header show krva headerName
            renderHeader: () => (
                <Checkbox
                    checked={rows.length > 0 && rows.every((row) => row.selected)}

                    onChange={(e) => {
                        const updatedRows = rows.map((row) => (
                            {
                                ...row,
                                selected: e.target.checked,
                            }
                        ))

                        setRows(updatedRows);
                        localStorage.setItem("users", JSON.stringify(updatedRows));
                    }}
                />
            ),

            // working for all Row's cell
            renderCell: (params) => (
                <Checkbox
                    checked={params.row.selected}
                    onChange={() => {
                        const updatedRows = rows.map((row) => row.id === params.row.id
                            ? { ...row, selected: !row.selected }
                            : row);

                        setRows(updatedRows);
                        localStorage.setItem("users", JSON.stringify(updatedRows));
                    }}
                />
            ),
        },
        {
            field: "No",
            sortable: false,
            filterable: false,
            headerName: "ID",
            width: 180,
            renderHeader: () => (
                <>
                    <span>ID</span>

                    <IconButton
                        color="error"
                        size="small"
                        onClick={handleDeleteAll}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        onClick={handleMultiEdit}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton color="primary" size="small" onClick={handleSaveAll}>
                        <SaveIcon fontSize="small" />
                    </IconButton>
                </>
            ),
        },
        {
            field: "name",
            headerName: "Name",
            width: 150,
            filterable: false,

            renderCell: (params) =>
                params.row.isEdit ? (
                    <TextField
                        variant="standard"
                        value={params.row.name}
                        onChange={(e) => {
                            setRows(rows.map(r =>
                                r.id === params.row.id ? { ...r, name: e.target.value } : r ));
                        }}
                    />
                ) : (
                    params.value
                ),
        },
        {
            field: "email",
            headerName: "Email",
            width: 200,
            filterable: false,

            renderCell: (params) =>
                params.row.isEdit ? (
                    <TextField
                        variant="standard"
                        value={params.row.email}
                        onChange={(e) => {
                            setRows(rows.map(r =>
                                r.id === params.row.id ? { ...r, email: e.target.value } : r
                            ));
                        }}
                    />
                ) : (
                    params.value
                ),
        },
        {
            field: "password", headerName: "Password", width: 150, sortable: false, filterable: false,
            renderCell: (params) =>
                params.row.isEdit ? (
                    <TextField
                        variant="standard"
                        value={params.row.password}
                        onChange={(e) => {
                            setRows(rows.map(r =>
                                r.id === params.row.id
                                    ? { ...r, password: e.target.value }
                                    : r
                            ));
                        }}
                    />
                ) : (
                    params.value
                ),
        },
        {
            field: 'action',
            sortable: false,
            filterable: false,
            headerName: 'Action',
            width: 200,
            renderCell: (params) => (
                <>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(params.row.id)}
                        id={params.row.id}
                    >
                        Delete
                    </Button>

                    <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleEdit(params.row)}
                    >
                        Edit
                    </Button>
                </>
            ),
        }
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <Box
                sx={{
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Box component="form" onSubmit={handleSubmit}
                    sx={{

                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: 300,
                        p: 3,
                        boxShadow: 3,
                        borderRadius: 2,
                    }}
                    noValidate
                    autoComplete="off">

                    <TextField
                        id="name-input"
                        label="Name"
                        type="text"
                        autoComplete="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />

                    <TextField
                        id="email-input"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />

                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />


                    <Button variant="contained" type="submit">
                        {editId !== null ? "Update" : "Submit"}
                    </Button>

                </Box>
            </Box>

            <div style={{ display: "flex", marginLeft: 100, gap: 10, }}>
                <TextField
                    label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <Select
                    label="Search By"
                    value={searchBy}
                    onChange={(e) => setSearchBy(e.target.value)}
                >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="email">Email</MenuItem>
                </Select>
            </div>

            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}


                />
            </Paper>

        </>

    )
}

