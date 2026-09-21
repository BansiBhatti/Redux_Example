import React from 'react';
import { AppstoreOutlined, TeamOutlined, FileTextOutlined, BellOutlined, UserOutlined, SafetyCertificateOutlined }
    from "@ant-design/icons";
import { Menu, Layout } from "antd";

const { Sider } = Layout;


const sidebar = [
    { key: "1", icon: <AppstoreOutlined />, label: "Programs", },
    { key: "2", icon: <TeamOutlined />, label: "Agencies", },
    { key: "3", icon: <FileTextOutlined />, label: "MGAs", },
    { key: "4", icon: <FileTextOutlined />, label: "Quote Requests", },
    { key: "5", icon: <BellOutlined />, label: "Network Updates", },
    { key: "6", icon: <UserOutlined />, label: "User Access", },
]


export const Sidebar = () => {
    return (
        <>
            <Sider width={250} style={{ background: "#fff" }}>


                <div
                    style={{
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "20px",
                        fontSize: "22px",
                        fontWeight: "bold",
                    }}
                >
                    <SafetyCertificateOutlined />
                    <span>LOGO</span>
                </div>

                <Menu mode="inline" defaultSelectedKeys={["1"]}
                    items={sidebar}
                />
            </Sider>
        </>
    );
}