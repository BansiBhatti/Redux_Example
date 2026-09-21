import React, { useState } from 'react';
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import CommissionTable from './components/CommissionTable';
import { Button, Modal, Select,  } from 'antd';





export const Commission = () => {

    const [comms, setComms] = useState(
        JSON.parse(localStorage.getItem("comms")) || []
    );

    const [programs] = useState(
        JSON.parse(localStorage.getItem("programs")) || []
    );

    const [mgas] = useState(
        JSON.parse(localStorage.getItem("mgas")) || []
    );

    const [agencys] = useState(
        JSON.parse(localStorage.getItem("agencys")) || []
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    const [com, setCom] = useState({
        programName: "",
        mgaName: "",
        agencyName: "",
        commission: "",
    });

    const [editCom, setEditCom] = useState(null);

    const handleSave = () => {

        if (editCom) {

            const updatedComms = comms.map((item) =>
                item.id === editCom.id
                    ? { ...editCom, ...com }
                    : item
            );

            setComms(updatedComms);
            localStorage.setItem(
                "comms",
                JSON.stringify(updatedComms)
            );

        } else {

            const newCom = {
                id: Date.now(),
                ...com,
            };

            const updatedComms = [
                ...comms,
                newCom,
            ];

            setComms(updatedComms);
            localStorage.setItem(
                "comms",
                JSON.stringify(updatedComms)
            );
        }

        setCom({
            programName: "",
            mgaName: "",
            agencyName: "",
            commission: "",
        });

        setEditCom(null);
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        const updatedComms = comms.filter(
            (com) => com.id !== id
        );

        setComms(updatedComms);
        localStorage.setItem("comms", JSON.stringify(updatedComms));
    };

    const handleEdit = (record) => {

        setEditCom(record);

        setCom({
            programName: record.programName,
            mgaName: record.mgaName,
            agencyName: record.agencyName,
            commission: record.commission,
        });

        setIsModalOpen(true);
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
                        onClick={showModal}
                    >
                        Add Commission
                    </Button>

                    <Button icon={<FilterOutlined />}>
                        Filter
                    </Button>
                </div>

                <CommissionTable data={comms} onDelete={handleDelete} onEdit={handleEdit} />

                <Modal
                    title={editCom ? "Upadte Commission" : "Add Commission"}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    width={700}
                >

                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-6 field-wrapper'>
                                <label>Program Name</label>
                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Select Program"
                                    value={com.programName}
                                    onChange={(value) =>
                                        setCom({
                                            ...com,
                                            programName: value,
                                        })
                                    }
                                    options={programs.map((item) => ({
                                        value: item.programName,
                                        label: item.programName,
                                    }))}
                                />

                            </div>

                            <div className='col-md-6 field-wrapper'>
                                <label>MGA Name</label>
                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Select MGA"
                                    value={com.mgaName}
                                    onChange={(value) =>
                                        setCom({
                                            ...com,
                                            mgaName: value,
                                        })
                                    }
                                    options={mgas.map((item) => ({
                                        value: item.mgaName,
                                        label: item.mgaName,
                                    }))}
                                />
                            </div>

                            <div className='col-md-6 field-wrapper'>
                                <label>Agency Name</label>
                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Select Agency"
                                    value={com.agencyName}
                                    onChange={(value) =>
                                        setCom({
                                            ...com,
                                            agencyName: value,
                                        })
                                    }
                                    options={agencys.map((item) => ({
                                        value: item.agencyName,
                                        label: item.agencyName,
                                    }))}
                                />
                            </div>

                            <div className='col-md-6 field-wrapper'>
                                <label>Commission</label>
                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Select Commission"
                                    value={com.commission}
                                    onChange={(value) =>
                                        setCom({
                                            ...com,
                                            commission: value,
                                        })
                                    }
                                    options={[
                                        { value: "5%", label: "5%" },
                                        { value: "10%", label: "10%" },
                                        { value: "15%", label: "15%" },
                                    ]}
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
                            {editCom ? "Update" : "Create"}
                        </Button>
                    </div>

                </Modal>
            </div>

        </>
    );
}