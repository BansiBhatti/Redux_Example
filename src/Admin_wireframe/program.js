import React, { useState } from 'react';
import { Sidebar } from "./components/Sidebar";
import { ProgramTabs } from "./components/Tabs";
import { PlusOutlined, FilterOutlined } from '@ant-design/icons';
import ProgramTable from "./components/ProgramTable";
import { Button, Modal, Input, Select, Breadcrumb } from 'antd';
import "./styles/Program.css"
import { Header } from './components/Header';

import { Application } from "./Application";
import { CreateApplication } from './createApp';
import { Agency } from "./Agency";
import { MGA } from "./MGA";
import { Commission } from "./Commission";
import { Template } from "./Template";




export const Program = () => {

    const [activeTab, setActiveTab] = useState("program");

    const [programs, setPrograms] = useState(
        JSON.parse(localStorage.getItem("programs")) || []
    );


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setEditProgram(null);

        setProgram({
            programName: "",
            industries: [],
            states: [],
            coverageTypes: [],
            status: "",
        });

        setIsModalOpen(true);
    };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => {
        setEditProgram(null);

        setProgram({
            programName: "",
            industries: [],
            states: [],
            coverageTypes: [],
            status: "",
        });

        setIsModalOpen(false);
    };

    const [program, setProgram] = useState({
        programName: "",
        industries: [],
        states: [],
        coverageTypes: [],
        status: "",
    });
    const [editProgram, setEditProgram] = useState(null);

    const handleSave = () => {

        if (editProgram) {

            const updatedPrograms = programs.map((item) =>
                item.id === editProgram.id ? { ...editProgram, ...program } : item);

            setPrograms(updatedPrograms);
            localStorage.setItem("programs", JSON.stringify(updatedPrograms));

        } else {

            const newProgram = {
                id: Date.now(),
                ...program,
            };

            const updatedPrograms = [
                ...programs,
                newProgram,
            ];

            setPrograms(updatedPrograms);
            localStorage.setItem("programs", JSON.stringify(updatedPrograms));
        }

        setProgram({
            programName: "",
            industries: [],
            states: [],
            coverageTypes: [],
            status: "",
        });

        setEditProgram(null);
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        const updatedPrograms = programs.filter(
            (program) => program.id !== id
        );

        setPrograms(updatedPrograms);
        localStorage.setItem("programs", JSON.stringify(updatedPrograms));
    };

    const handleEdit = (record) => {
        setEditProgram(record);

        setProgram({
            programName: record.programName,
            industries: record.industries,
            states: record.states,
            coverageTypes: record.coverageTypes,
            status: record.status,
        });

        setIsModalOpen(true);
    };

    return (
        <>

            <div style={{ display: "flex" }}>

                <Sidebar />

                <div style={{ flex: 1 }}>

                    <div
                        style={{
                            height: "70px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0 20px",
                            borderBottom: "1px solid #ddd",
                        }}
                    >
                        <Breadcrumb
                            items={[
                                {
                                    title: "Programs",
                                },
                                activeTab !== "program" && {
                                    title:
                                        activeTab === "application"
                                            ? "Applications"
                                            : activeTab === "agency"
                                                ? "Authorized Agency"
                                                : activeTab === "mga"
                                                    ? "Authorized MGA"
                                                    : activeTab === "commission"
                                                        ? "Commissions"
                                                        : activeTab === "template"
                                                            ? "Proposal Template"
                                                            : "",
                                }


                            ].filter(Boolean)}
                        />

                        <div>
                            <Header />
                        </div>
                    </div>

                    <div style={{ padding: "20px" }}>
                        <ProgramTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />

                        {activeTab === 'program' && (
                            <>

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
                                        Create Program
                                    </Button>

                                    <Button icon={<FilterOutlined />}>
                                        Filter
                                    </Button>
                                </div>

                                <ProgramTable data={programs} onDelete={handleDelete} onEdit={handleEdit} />

                                <Modal
                                    title={editProgram ? "Edit Program" : "Create Program"}
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    footer={null}
                                    width={700}
                                >
                                    <Input placeholder="Health Insurance Platinum" value={program.programName}
                                        onChange={(e) => {
                                            setProgram(
                                                { ...program, programName: e.target.value, }
                                            )
                                        }}
                                    />

                                    <div className="field-wrapper my-4">
                                        <label>Can Sale for Industries</label>

                                        <Select
                                            mode='multiple'
                                            value={program.industries}
                                            onChange={(value) => setProgram(
                                                { ...program, industries: value }
                                            )}
                                            placeholder="Choose Industries"
                                            style={{ width: "100%" }}
                                            options={[
                                                { value: "IT", label: "IT" },
                                                { value: "Healthcare", label: "Healthcare" },
                                            ]}
                                        />
                                    </div>

                                    <div className="field-wrapper my-4">
                                        <label>Can Sale in States</label>

                                        <Select
                                            mode='multiple'
                                            value={program.states}
                                            onChange={(value) => setProgram(
                                                { ...program, states: value }
                                            )}
                                            placeholder="Choose States"
                                            style={{ width: "100%" }}
                                            options={[
                                                { value: "CA", label: "CA" },
                                                { value: "AL", label: "AL" },
                                            ]}
                                        />
                                    </div>

                                    <div className="field-wrapper my-4">
                                        <label>Coverage Types</label>

                                        <Select
                                            mode='multiple'
                                            value={program.coverageTypes}
                                            onChange={(value) => setProgram(
                                                { ...program, coverageTypes: value }
                                            )}
                                            placeholder="Choose Coverage Types"
                                            style={{ width: "100%" }}
                                            options={[
                                                { value: "Life", label: "Life" },
                                                { value: "Health", label: "Health" },
                                                { value: "Long Term", label: "Long Term" },
                                            ]}
                                        />
                                    </div>

                                    <div className="field-wrapper my-4">
                                        <label>Status</label>

                                        <Select
                                            placeholder="Choose Status"
                                            value={program.status}
                                            onChange={(value) => setProgram(
                                                { ...program, status: value }
                                            )}
                                            style={{ width: "100%" }}
                                            options={[
                                                { value: "Active", label: "Active" },
                                                { value: "Inactive", label: "Inactive" },
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
                                            {editProgram ? "Update" : "Create"}
                                        </Button>
                                    </div>

                                </Modal>
                            </>
                        )}

                        {activeTab === "application" && (<Application setActiveTab={setActiveTab} /> )}
                        {activeTab === "createApp" && (<CreateApplication setActiveTab={setActiveTab} />)}
                        {activeTab === "agency" && <Agency />}
                        {activeTab === "mga" && <MGA />}
                        {activeTab === "commission" && <Commission />}
                        {activeTab === "template" && <Template />}
                    </div>

                </div>

            </div>

        </>
    );
}