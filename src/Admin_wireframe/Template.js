import React, { useState } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import TemplateTable from './components/TemplateTable';
import { Button, Modal, Input, Select,  } from 'antd';





export const Template = () => {

    const [temps, setTemps] = useState(
        JSON.parse(localStorage.getItem("temps")) || []
    );


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    const [temp, setTemp] = useState({
        programName: "",
        mgaName: "",
        attribute: "",
        startSection: "",
        endSection: "",
    });
    const [editTemp, setEditTemp] = useState(null);

    const handleSave = () => {

        if (editTemp) {

            const updatedTemps = temps.map((item) =>
                item.id === editTemp.id
                    ? { ...editTemp, ...temp }
                    : item
            );

            setTemps(updatedTemps);
            localStorage.setItem(
                "temps",
                JSON.stringify(updatedTemps)
            );

        } else {

            const newTemp = {
                id: Date.now(),
                ...temp,
            };

            const updatedTemps = [
                ...temps,
                newTemp,
            ];

            setTemps(updatedTemps);
            localStorage.setItem(
                "temps",
                JSON.stringify(updatedTemps)
            );
        }

        setTemp({
            programName: "",
            mgaName: "",
            attribute: "",
            startSection: "",
            endSection: "",
        });

        setEditTemp(null);
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        const updatedTemps = temps.filter(
            (temp) => temp.id !== id
        );

        setTemps(updatedTemps);
        localStorage.setItem("temps", JSON.stringify(updatedTemps));
    };

    const handleEdit = (record) => {

        setEditTemp(record);

        setTemp({
            programName: record.programName,
            mgaName: record.mgaName,
            attribute: record.attribute,
            startSection: record.startSection,
            endSection: record.endSection,
        });

        setIsModalOpen(true);
    };

    return (
        <>   

                <div>

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
                            onClick={showModal}
                        >
                            Add Template
                        </Button>

                        <Button icon={<FilterOutlined />}>
                            Filter
                        </Button>
                    </div>

                    <TemplateTable data={temps} onDelete={handleDelete} onEdit={handleEdit} />

                    <Modal
                        title={editTemp ? " Update " : "Add Template"}
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={null}
                        width={700}
                    >
                        <div className='container'>
                            <div className='row'>

                                <div className='col-md-6 field-wrapper'>
                                    <label>Program</label>
                                    <Select
                                        className="w-100"
                                        placeholder="Select Program"
                                        value={temp.programName}
                                        onChange={(value) =>
                                            setTemp({
                                                ...temp,
                                                programName: value,
                                            })
                                        }
                                        options={[
                                            { value: "Health Insurance", label: "Health Insurance" },
                                            { value: "Life Insurance", label: "Life Insurance" },
                                        ]}
                                    />
                                </div>

                                <div className='col-md-6 field-wrapper'>
                                    <label>MGA</label>
                                    <Select
                                        className="w-100"
                                        placeholder="Select MGA"
                                        value={temp.mgaName}
                                        onChange={(value) =>
                                            setTemp({
                                                ...temp,
                                                mgaName: value,
                                            })
                                        }
                                        options={[
                                            { value: "Welnsure", label: "Welnsure" },
                                            { value: "Heaven Life", label: "Heaven Life" },
                                        ]}
                                    />
                                </div>

                                <div className='col-md-6 field-wrapper'>
                                    <label>Attribute</label>
                                    <Input
                                        placeholder="Enter Attribute"
                                        value={temp.attribute}
                                        onChange={(e) =>
                                            setTemp({
                                                ...temp,
                                                attribute: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='col-md-6 field-wrapper'>
                                    <label>Start Section</label>
                                    <Input
                                        placeholder="Enter Start Section"
                                        value={temp.startSection}
                                        onChange={(e) =>
                                            setTemp({
                                                ...temp,
                                                startSection: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='col-md-6 field-wrapper'>
                                    <label>End Section</label>
                                    <Input
                                        placeholder="Enter End Section"
                                        value={temp.endSection}
                                        onChange={(e) =>
                                            setTemp({
                                                ...temp,
                                                endSection: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px", }} >

                            <Button onClick={handleCancel}>Cancel</Button>

                            <Button
                                type="primary"
                                style={{
                                    backgroundColor: "#000",
                                    borderColor: "#000",
                                }}
                                onClick={handleSave}
                            >
                                {editTemp ? "Update" : "Create"}
                            </Button>
                        </div>

                    </Modal>
                </div>
          
        </>
    );
}