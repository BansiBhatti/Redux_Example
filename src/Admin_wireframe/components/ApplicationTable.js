import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";


const ApplicationTable = ({ data, onDelete, onEdit }) => {

    const columns = [
        {
            title: "Application Name",
            dataIndex: "applicationName",
            key: "applicationName",
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
            title: "Current Version",
            dataIndex: "currentVersion",
            key: "currentVersion",
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
                        Copy Link
                    </Button>

                    <Button size="small">
                        View
                    </Button>

                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "edit",
                                    label: "Edit",
                                    onClick: ()=> onEdit(record)
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

export default ApplicationTable;