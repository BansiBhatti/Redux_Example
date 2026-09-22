import { Table, Dropdown, Button, } from "antd";
import { MoreOutlined } from "@ant-design/icons";


const ProgramTable = ({ data , onDelete, onEdit}) => {


  const columns = [
    {
      title: "Program Name",
      dataIndex: "programName",
      key: "programName",
    },
    {
      title: "Coverage Type",
      dataIndex: "coverageTypes",
      key: "coverageTypes",
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
                  onClick: ()=>onEdit(record),
                },
                {
                  key: "remove",
                  label: "Remove",
                  onClick: ()=>onDelete(record.id),
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
      pagination={ {pageSize: 5} }
    />
  );
};

export default ProgramTable;