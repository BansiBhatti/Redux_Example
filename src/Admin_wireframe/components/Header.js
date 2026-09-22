import { UserOutlined } from "@ant-design/icons";

export const Header = () => {

    const currentUser =
        JSON.parse(localStorage.getItem("currentUser")) || {};

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <div >
                    <div style={{ fontWeight: "600" }}>
                        {currentUser.fname}
                    </div>
                </div>

                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#e5e5e5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <UserOutlined />
                </div>
            </div>
        </>
    );
};