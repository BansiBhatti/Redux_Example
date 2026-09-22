import React, { useState, useEffect } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import AgencyTable from './components/AgencyTable';
import { Button, Modal, Select, } from 'antd';



export const Agency = () => {

    const [agencys, setAgencys] = useState(
        JSON.parse(localStorage.getItem("agencys")) || []
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

    const [agency, setAgency] = useState({
        agencyName: "",
        associatedProgram: "",
        status: "",
    });
    const [editAgency, setEditAgency] = useState(null);

    const handleSave = () => {

        if (editAgency) {
            const updatedAgencys = agencys.map((item) =>
                item.id === editAgency.id ? { ...editAgency, ...agency } : item
            );

            setAgencys(updatedAgencys);
            localStorage.setItem("agencys", JSON.stringify(updatedAgencys));
        }
        else {
            const newAgency = {
                id: Date.now(),
                ...agency,
            }

            const updatedAgencys = [
                ...agencys,
                newAgency,
            ];

            setAgencys(updatedAgencys);
            localStorage.setItem("agencys", JSON.stringify(updatedAgencys));

        }

        setAgencys({
            agencyName: "",
            associatedProgram: "",
            status: "",
        });

        setEditAgency(null);
        setIsModalOpen(false);
    }

    const handleDelete = (id) => {
        const updatedAgencys = agencys.filter(
            (agency) => agency.id !== id
        );

        setAgencys(updatedAgencys);
        localStorage.setItem("agencys", JSON.stringify(updatedAgencys));
    };

    const handleEdit = (record) => {

        setEditAgency(record);
        setAgency({
            agencyName: record.agencyName,
            associatedProgram: record.associatedProgram,
            status: record.status,
        })

        setIsModalOpen(true);
    }

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
                        onClick={showModal}
                    >
                        Add Agency
                    </Button>

                    <Button icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </div>

                <AgencyTable data={agencys} onDelete={handleDelete} onEdit={handleEdit} />

                <Modal
                    title={editAgency ? "edit Agency" : "Add Agency"}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    width={700}
                    className='container'
                >

                    <div className='row'>

                        <div className='field-wrapper col-md-6'>
                            <label>Agency</label>
                            <Select
                                className='w-100'
                                defaultValue="Select Agency"
                                value={agency.agencyName}
                                onChange={(value) => {
                                    setAgency({
                                        ...agency,
                                        agencyName: value,
                                    })
                                }}

                                options={[
                                    { value: 'ABC', label: 'ABC' },
                                    { value: 'XYZ', label: 'XYZ' },
                                    { value: 'Hello', label: 'Hello' },
                                ]}
                            />
                        </div>

                        <div className='field-wrapper col-md-6'>
                            <label>Program</label>
                            <Select
                                className='w-100'
                                placeholder="Select Program"
                                value={agency.associatedProgram}
                                onChange={(value) =>
                                    setAgency({
                                        ...agency,
                                        associatedProgram: value,
                                    })
                                }
                                options={programs.map((program) => ({
                                    value: program.programName,
                                    label: program.programName,
                                }))}
                            />
                        </div>

                        <div className="field-wrapper my-4 col-md-6">
                            <label>Status</label>

                            <Select
                                className='w-100'
                                placeholder="Choose Status"
                                value={agency.status}
                                onChange={(value) => setAgency(
                                    { ...agency, status: value }
                                )}

                                options={[
                                    { value: "Active", label: "Active" },
                                    { value: "Inactive", label: "Inactive" },
                                ]}
                            />
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
                            {editAgency ? "Update" : "Create"}
                        </Button>
                    </div>

                </Modal>
            </div>

        </>
    );
}