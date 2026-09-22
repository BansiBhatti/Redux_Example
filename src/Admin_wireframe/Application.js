import React, { useState, useEffect } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import ApplicationTable from './components/ApplicationTable'
import { Button, } from 'antd';





export const Application = ({ setActiveTab  }) => {

    const [apps, setApps] = useState(
        JSON.parse(localStorage.getItem("apps")) || []
    );

    const [, setPrograms] = useState([]);

    useEffect(() => {

        const savedPrograms = JSON.parse(localStorage.getItem("programs")) || [];
        setPrograms(savedPrograms);
    }, []);



    const handleDelete = (id) => {
        const updatedApps = apps.filter(
            (app) => app.id !== id
        );

        setApps(updatedApps);
        localStorage.setItem("apps", JSON.stringify(updatedApps));
    };

    const handleEdit = (record) => {

        localStorage.setItem("editApp", JSON.stringify(record));
        setActiveTab("createApp")
    };

    return (
        <>  

            <div >


                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "20px",
                        marginTop: "20px",
                    }}
                >
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        style={{
                            backgroundColor: "#000",
                            borderColor: "#000",
                        }}
                        onClick={() => setActiveTab("createApp")}
                    >
                        Create Application
                    </Button>

                    <Button icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </div>

                <ApplicationTable data={apps} onDelete={handleDelete} onEdit={handleEdit} />


            </div>

        </>
    );
}