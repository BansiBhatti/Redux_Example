import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";



const CommissionTable = ({ data, onDelete, onEdit }) => {


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
            title: "Agency Name",
            dataIndex: "agencyName",
            key: "agencyName",
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

export default CommissionTable;