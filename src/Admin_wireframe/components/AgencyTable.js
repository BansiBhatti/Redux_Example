import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";


const AgencyTable = ({ data, onDelete, onEdit }) => {


    const columns = [
        {
            title: "Agency Name",
            dataIndex: "agencyName",
            key: "agencyName",
        },
        {
            title: "Associated Program",
            dataIndex: "associatedProgram",
            key: "associatedProgram",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            key: "action",
            align: "right",
            render: (_, record) => (
                <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }}
                >
                    <Button size="small">
                       Button1
                    </Button>

                    <Button size="small">
                        Button2
                    </Button>

                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "edit",
                                    label: "Edit",
                                    onClick: ()=> onEdit(record),
                                },
                                {
                                    key: "remove",
                                    label: "Remove",
                                    onClick: () => onDelete(record.id),
                                },
                            ],
                        }}
                        trigger={["click"]}
                    >
                        <Button
                            type="text"
                            icon={<MoreOutlined />}
                        />
                    </Dropdown>
                </div>
            ),
        }
    ];




    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
        />
    );
};

export default AgencyTable;