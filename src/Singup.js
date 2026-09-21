import { useMemo, useState } from "react";
import { NavLink } from "react-router";
import { PropsData } from "./props";


export const SingupPage = () => {

    const [inputValue, setInputValue] = useState({ fname: "", email: "", password: "" });
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || []
    );
    const [editIndex, setEditIndex] = useState(null);
    // const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    // const [selectAll, setSelectAll] = useState(false);
    const [selected, setSelected] = useState([]);
    const [editIds, setEditIds] = useState([]);
    const [dropDownValue, setDropDownValue] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [recordPerPage, setRecordPerPage] = useState(5);


    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };


    // doesn't return anything 
    // useEffect(() => {}, [])

    // returns variable 
    // const getColor = useMemo(() => {}, [inputValue])

    // returns function 
    // const getBackground = useCallback((index) => {}, [user])



    const btnStyle = { height: "40px" };



    const onChangeUpdate = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const submitData = () => {
        //console.log(inputValue);

        // setUser([...user, inputValue]); --- ek step pachhd work kre etle console ma j
        // console.log([...user, inputValue])


        // localStorage.setItem('user', JSON.stringify([...user, inputValue]))
        // setUser([...user, inputValue]);   

        const emailExists = user.some((u, i) =>
            u.email === inputValue.email && i !== editIndex
        );

        if (emailExists) {
            alert("Email already exists!");
            return;
        }


        if (editIndex !== null) {
            const newUser = [...user];
            newUser[editIndex] = { ...inputValue, id: user[editIndex].id };


            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));

            setEditIndex(null);
        } else {
            const newUser = { ...inputValue, id: Date.now() };
            const updatedUsers = [...user, newUser];

            setUser(updatedUsers);
            localStorage.setItem("user", JSON.stringify(updatedUsers));
        }

    }

    const deleteData = (id) => {
        const newUser = user.filter(u => u.id !== id);
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    }

    const editData = (id) => {
        const selected = user.find(u => u.id === id);
        setInputValue(selected);
        setEditIndex(user.findIndex(u => u.id === id));
    }

    const sortByName = () => {
        const sorted = [...user].sort((a, b) => {
            return a.fname.toLowerCase() > b.fname.toLowerCase() ? 1 : -1;
        })
        setUser(sorted);
    }

    const sortByEmail = () => {
        const sorted = [...user].sort((a, b) => {
            return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
        })
        setUser(sorted);
    }

    const handleSelectAll = (e) => {
        const checked = e.target.checked;

        if (checked) {
            setSelected(currentData.map(u => u.id));
        } else {
            setSelected([]);
        }
    }

    const handleRowSelect = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(i => i !== id));
        } else {
            setSelected([...selected, id]);
        }
    }

    const deleteSelected = () => {
        const newData = user.filter(u => !selected.includes(u.id));

        setUser(newData);
        localStorage.setItem("user", JSON.stringify(newData));

        setSelected([]);

    }

    const editSelected = () => {
        setEditIds(selected);
    }

    const handleInlineChange = (id, e) => {
        const { name, value } = e.target;

        const updated = user.map(u =>
            u.id === id ? { ...u, [name]: value } : u
        );
        setUser(updated);
    }

    const saveAll = () => {
        localStorage.setItem("user", JSON.stringify(user));
        setEditIds([]);
    }

    const sortedUser = useMemo(() => {
        let result = [...user]

        if (dropDownValue) {
            result.sort((a, b) => {
                return a[dropDownValue].toLowerCase() > b[dropDownValue].toLowerCase() ? 1 : -1;
            });
        }

        if (search) {
            if (dropDownValue) {
                result = result.filter((u) =>
                    u[dropDownValue].toLowerCase().includes(search.toLowerCase()));
            } else {
                result = result.filter(
                    (u) =>
                        u.fname.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
                );
            }
        }

        return result;

    }, [user, dropDownValue, search])

    const currentData = sortedUser.slice(firstIndex, lastIndex);
    const totalPage = Math.ceil(sortedUser.length / recordPerPage);

    const pages = [];

    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }



    // console.log(inputValue);

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center my-5">

                <div className=" col-md-3 card shadow p-3" >

                    <div className="p-4">
                        <h3 className="text-center mb-4"  /* style={{ color: getColor }}*/  >Signup</h3>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" id="fname" name="fname" value={inputValue.fname} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" value={inputValue.email} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" value={inputValue.password} className="form-control"
                            onChange={(e) => onChangeUpdate(e)}>
                        </input>
                    </div>

                    <button type="submit" className="btn btn-primary my-2 t" onClick={submitData}>
                        {editIndex !== null ? "Update" : "Singup"}
                    </button>
                    <p>Already have an account?<span><NavLink to="/" end>Login</NavLink></span></p>

                </div>

            </div>

            <div className="container d-flex justify-content-center " >

                <input type="text" placeholder="Search.." className="form-control w-25" value={search}
                    onChange={(e) => setSearch(e.target.value)} />

            </div>

            <div className="container d-flex justify-content-center my-3">
                <div className="col-md-6" >

                    <div className="d-flex gap-2 ">

                        <input type="text" placeholder="Search..." className="form-control w-50" />
                        <button className="btn btn-primary" style={btnStyle}>Search</button>

                        <button className="btn btn-secondary px-1" style={{ ...btnStyle, fontSize: "12px" }} onClick={sortByName}>Sort By Name</button>

                        <button className="btn btn-secondary px-1" style={{ ...btnStyle, fontSize: "12px" }} onClick={sortByEmail}>Sort By Email</button>

                        <button className="btn btn-success px-3" style={{ ...btnStyle, fontSize: "14px" }} onClick={editIds.length > 0 ? saveAll : editSelected}>
                            {
                                editIds.length > 0 ? "Save" : "Edit"
                            }
                        </button>

                        <div>
                            <select value={dropDownValue} onChange={(e) => setDropDownValue(e.target.value)}>
                                <option value="">Select Sorting</option>
                                <option value="fname">First Name</option>
                                <option value="email">Email</option>
                                <option value="password">Paasword</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div>
                {/* parent => child = props  */}
            {/* child => parent = lifting stateup */}
            {/* <PropsData data={user} handleDelete={(id) => deleteData(id)} handleEdit={(id) => editData(id)} />
            </div> */} */

            <div className="container d-flex justify-content-center">
                <div className="col-md-6">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked={currentData.length > 0 &&
                                        currentData.every(u => selected.includes(u.id))
                                    }
                                        onChange={handleSelectAll}>
                                    </input>

                                    <button className="btn " onClick={deleteSelected}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </th>

                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((u, index) => (
                                <tr /*style={{ background: getBackground(index) }}*/ key={u.id}>
                                    <td>
                                        <input type="checkbox" checked={selected.includes(u.id)}
                                            onChange={() => handleRowSelect(u.id)}
                                        />

                                    </td>
                                    <td>
                                        {firstIndex + index + 1}
                                    </td>
                                    <td>{editIds.includes(u.id) ? (
                                        <input name="fname" value={u.fname} onChange={(e) => handleInlineChange(u.id, e)} />
                                    ) : u.fname}
                                    </td>
                                    <td>{editIds.includes(u.id) ? (
                                        <input name="email" value={u.email} onChange={(e) => handleInlineChange(u.id, e)} />
                                    ) : u.email}</td>
                                    <td>{editIds.includes(u.id) ? (
                                        <input name="password" value={u.password} onChange={(e) => handleInlineChange(u.id, e)} />
                                    ) : u.password}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm mx-2" onClick={() => deleteData(u.id)}>Delete</button>
                                        <button className="btn btn-success btn-sm" onClick={() => editData(u.id)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >

            <div className="d-flex justify-content-center">
                <div>
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item"><button className="page-link" onClick={prevPage}>Prev</button></li>

                        {pages.map((page) => (
                            <li className="page-item">
                                <button className="page-link" onClick={() => setCurrentPage(page)} >
                                    {page}
                                </button>
                            </li>
                        ))}
                        <li className="page-item"><button className="page-link" onClick={nextPage}>Next </button></li>
                    </ul>
                </div>

                <div className="d-flex align-item-center gap-2">

                    <label className=" ms-5 mt-2 ">Records Per Page:</label>

                    <select style={{ width: "110px", height: "32px" }}
                        value={recordPerPage}
                        onChange={(e) => {
                            setRecordPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value={5}>5 / Page</option>
                        <option value={7}>7 / Page</option>
                        <option value={10}>10 / Page</option>
                    </select>
                </div>

            </div>
        </>
    )
}