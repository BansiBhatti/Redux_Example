import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";



const TemplateTable = ({ data, onDelete, onEdit }) => {


    const columns = [
        {
            title: "program Name",
            dataIndex: "programName",
            key: "programName",
        },
        {
            title: "MGA Name",
            dataIndex: "mgaName",
            key: "mgaName",
        },
        {
            title: "Attribute",
            dataIndex: "attribute",
            key: "attribute",
        },
        {
            title: "Start Section",
            dataIndex: "startSection",
            key: "startSection",
        },
        {
            title: "End Section",
            dataIndex: "endSection",
            key: "endSection",
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

                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "edit",
                                    label: "Edit",
                                    onClick: () => onEdit(record),
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

export default TemplateTable;