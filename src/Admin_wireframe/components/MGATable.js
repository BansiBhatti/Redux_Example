import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";


const MGATable = ({ data, onDelete, onEdit }) => {


    const columns = [
        {
            title: "MGA Name",
            dataIndex: "mgaName",
            key: "mgaName",
        },
        {
            title: "Associated Program",
            dataIndex: "associatedProgram",
            key: "associatedProgram",
        },
        {
            title: "States",
            dataIndex: "states",
            key: "states",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Commission",
            dataIndex: "commission",
            key: "commission",
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
                        Button 1
                    </Button>

                    <Button size="small">
                        Button 2
                    </Button>

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

export default MGATable;