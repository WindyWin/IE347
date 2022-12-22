import { BellOutlined, CheckCircleOutlined, CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Dropdown, Menu, message, Row, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLogout from "../../components/core/AdminLogout";

const notifications = [
  {
    type: "success",
    message: "Đơn hàng đã được xác nhận",
    description: "Đơn hàng đã được xác nhận và đang được giao",

  },
  {
    type: "error",
    message: "Đơn hàng đã bị hủy",
    description: "Đơn hàng đã bị hủy",
  }
]

function AdminLogin() {
  const navigate = useNavigate();

  return (
    <>
      {/* {isAdmin ? ( */}
      <>
        <div
          className="admin__header-right"
        >
          <Badge count={2}
          ><Dropdown overlay={
            <Menu>
              {notifications.map(
                (item: any, index: any) =>
                  <Menu.Item key={index}
                    onClick={() => { message.success(item.message) }}>
                    <SimpleNotification type={item.type} message={item.message} description={item.description} />
                  </Menu.Item>)}
            </Menu>
          }>
              <div className="noti-button">
                <BellOutlined />
              </div>
            </Dropdown>
          </Badge>

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
              Admin
            </Space>
          </Dropdown>
        </div>
      </>
      {/* ) : (
        ""
      )} */}
    </>
  );
}

export default AdminLogin;

//create notication menu components


function SimpleNotification({ type, message, description }: any) {
  return <>
    <Row style={{ width: "250px" }}>
      <Col span={4}>
        {type === "success" ? (
          <CheckCircleOutlined style={{ color: "green", fontSize: "30px" }} />
        ) : (
          <CloseCircleOutlined style={{ color: "red", fontSize: "30px" }} />
        )}

      </Col>
      <Col span={20}>
        <h4>{message}</h4>
        <p>{description}</p>
      </Col>
    </Row>
  </>

}