import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useState, useEffect } from "react";



export const CreateApplication = ({ setActiveTab }) => {

    const [programs, setPrograms] = useState([]);
    // const [apps, setApps] = useState(
    //      JSON.parse(localStorage.getItem("apps")) || []
    //     );


    useEffect(() => {

        const savedPrograms = JSON.parse(localStorage.getItem("programs")) || [];
        setPrograms(savedPrograms);

        const editData = JSON.parse(localStorage.getItem("editApp"));

        if (editData) {
            setApp(editData);
        }

    }, []);

    const [app, setApp] = useState({
        applicationName: "",
        associatedProgram: "",
        status: "",
        currentVersion: "",
    });

    const editData = JSON.parse(localStorage.getItem("editApp"));

    const handleSave = () => {

        const savedApps = JSON.parse(localStorage.getItem("apps")) || [];

        const editData = JSON.parse(localStorage.getItem("editApp"));

        if (editData) {

            const updatedApps = savedApps.map((item) =>
                item.id === editData.id ? { ...editData, ...app } : item
            );

            localStorage.setItem("apps", JSON.stringify(updatedApps));
            localStorage.removeItem("editApp");

        } else {

            const newApp = {
                id: Date.now(),
                ...app,
            };

            localStorage.setItem(
                "apps",
                JSON.stringify([...savedApps, newApp])
            );
        }
    };


    return (
        <div>


            <div
                style={{
                    height: "60px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <ArrowLeftOutlined onClick={()=> setActiveTab("application")} />
                    <h3 style={{ margin: 0 }}>
                        Create Application
                    </h3>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    <Select
                        defaultValue="Version: 1.0"
                        style={{ width: 130 }}
                        options={[
                            {
                                value: "1.0",
                                label: "Version: 1.0",
                            },
                        ]}
                    />

                    <Button>+</Button>

                    <Button
                        type="primary"
                        onClick={handleSave}
                    >
                        {editData ? "Update" : "Save"}
                    </Button>
                </div>
            </div>


            <div className="container">

                <div className="row">

                    <div className="col-md-4 field-wrapper">
                        <label>Name</label>

                        <Input
                            placeholder="Health Insurance Details"
                            value={app.applicationName}
                            onChange={(e) =>
                                setApp({
                                    ...app,
                                    applicationName: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className='col-md-4 field-wrapper'>
                        <label>Program Name</label>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Select Program"
                            value={app.programName}
                            onChange={(value) =>
                                setApp({
                                    ...app,
                                    associatedProgram: value,
                                })
                            }
                            options={programs.map((item) => ({
                                value: item.programName,
                                label: item.programName,
                            }))}
                        />

                    </div>

                    <div className="col-md-4 field-wrapper">
                        <label>Status</label>

                        <Select
                            style={{ width: "100%" }}
                            value={app.status}
                            onChange={(value) =>
                                setApp({
                                    ...app,
                                    status: value,
                                })
                            }
                            options={[
                                {
                                    value: "Active",
                                    label: "Active",
                                },
                                {
                                    value: "Inactive",
                                    label: "Inactive",
                                },
                            ]}
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};