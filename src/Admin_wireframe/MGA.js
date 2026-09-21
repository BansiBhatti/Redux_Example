import React, { useState, useEffect } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import MGATable from './components/MGATable'
import { Button, Modal, Select,  } from 'antd';



export const MGA = () => {

    const [mgas, setMgas] = useState(
        JSON.parse(localStorage.getItem("mgas")) || []
    );

    const [programs, setPrograms] = useState([]);

    useEffect(() => {

        const savedPrograms = JSON.parse(localStorage.getItem("programs")) || [];
        setPrograms(savedPrograms);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    const [mga, setMga] = useState({
        mgaName: "",
        associatedProgram: "",
        states: "",
        status: "",
        commission: "",
    });
    const [editMga, setEditMga] = useState(null);

    const handleSave = () => {

        if (editMga) {
            const updatedMgas = mgas.map((item) =>
                item.id === editMga.id ? { ...editMga, ...mga } : item
            );

            setMgas(updatedMgas);
            localStorage.setItem("mgas", JSON.stringify(updatedMgas));
        }
        else {
            const newMga = {
                id: Date.now(),
                ...mga,
            };

            const updatedMgas = [
                ...mgas,
                newMga,
            ];

            setMgas(updatedMgas);
            localStorage.setItem("mgas", JSON.stringify(updatedMgas));

            setMga({
                mgaName: "",
                associatedProgram: "",
                states: "",
                status: "",
                commission: "",
            });

            setIsModalOpen(false);
        }

        setEditMga(null);
        setIsModalOpen(false);

    }

    const handleDelete = (id) => {
        const updatedMgas = mgas.filter(
            (mga) => mga.id !== id
        );

        setMgas(updatedMgas);
        localStorage.setItem("mgas", JSON.stringify(updatedMgas));
    };

    const handleEdit = (record) => {

        setEditMga(record);
        setMga({
            mgaName: record.mgaName,
            associatedProgram: record.associatedProgram,
            states: record.states,
            status: record.status,
            commission: record.commission,
        });
        setIsModalOpen(true);
    }

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
                        Add MGA
                    </Button>

                    <Button icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </div>

                <MGATable data={mgas} onDelete={handleDelete} onEdit={handleEdit} />

                <Modal
                    title={editMga ? "Edit MGA" : "Add MGA"}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    width={700}
                >

                    <div className="field-wrapper my-4">
                        <label>MGA</label>

                        <Select
                            placeholder="Choose MGA"
                            value={mga.mgaName}
                            onChange={(value) => setMga(
                                { ...mga, mgaName: value }
                            )}
                            style={{ width: "100%" }}
                            options={[
                                { value: "Welnsure", label: "Welnsure" },
                                { value: "Heaven Life", label: "Heaven Life" },
                                { value: "Berkshire Hathways", label: "Berkshire Hathways" },
                            ]}
                        />
                    </div>

                    <div className='field-wrapper col-md-6'>
                        <label>Program</label>
                        <Select
                            className='w-100'
                            placeholder="Select Program"
                            value={mga.associatedProgram}
                            onChange={(value) =>
                                setMga({
                                    ...mga,
                                    associatedProgram: value,
                                })
                            }
                            options={programs.map((program) => ({
                                value: program.programName,
                                label: program.programName,
                            }))}
                        />
                    </div>

                    <div className="field-wrapper my-4">
                        <label>States</label>

                        <Select
                            placeholder="Choose States"
                            value={mga.states}
                            onChange={(value) => setMga(
                                { ...mga, states: value }
                            )}
                            style={{ width: "100%" }}
                            options={[
                                { value: "CA", label: "CA" },
                                { value: "GJ", label: "GJ" },
                            ]}
                        />
                    </div>

                    <div className="field-wrapper my-4">
                        <label>Status</label>

                        <Select
                            placeholder="Choose Status"
                            value={mga.status}
                            onChange={(value) => setMga(
                                { ...mga, status: value }
                            )}
                            style={{ width: "100%" }}
                            options={[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" },
                            ]}
                        />
                    </div>

                    <div className="field-wrapper my-4">
                        <label>Commission</label>

                        <Select
                            placeholder="Choose Commission"
                            value={mga.commission}
                            onChange={(value) => setMga(
                                { ...mga, commission: value }
                            )}
                            style={{ width: "100%" }}
                            options={[
                                { value: "1%", label: "1%" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                                { value: "10", label: "10" },
                            ]}
                        />
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
                            {editMga ? "Update" : "Create"}
                        </Button>
                    </div>

                </Modal>
            </div>
        </>
    );
}