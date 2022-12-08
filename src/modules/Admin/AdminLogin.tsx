import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, message, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLogout from "../../components/core/AdminLogout";

function AdminLogin() {
  const navigate = useNavigate();
  return (
    <>
      {/* {isAdmin ? (
        <>
          <div
            style={{
              display: "inline-block",
              position: "absolute",
              right: "0",
              marginRight: "2%",
              minWidth: "8%",
            }}
          >
            <Dropdown overlay={<AdminLogout />}>
              <Space>
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    marginRight: "10px",
                  }}
                  icon={<UserOutlined />}
                />
                {JWTManager.getUsername()}
              </Space>
            </Dropdown>
          </div>
        </>
      ) : (
        ""
      )} */}
    </>
  );
}

export default AdminLogin;
