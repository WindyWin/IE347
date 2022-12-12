import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, Menu, Space, Tabs } from "antd";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/shoppingCart.svg";
import toSlug from "../../modules/utils/toSlug";
const { Search } = Input;
const { TabPane } = Tabs;
const Header = () => {
  const navigate = useNavigate();
  let quantityProduct = useRef(0)


  const onSearch = (value: string) => {
    if (value) {
      sessionStorage.setItem("valueSearch", value);
      navigate(`/search/${toSlug(value)}`);
    }
  };








  const menu = (
    <Menu>

      <Menu.Item icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="Header">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <Search
          className="search_input"
          placeholder="Search..."
          onSearch={onSearch}
          enterButton
        />
        <div className="header__right">
          <Link to={"/gio-hang"}>
            <button className="shopping_cart">
              <Badge count={quantityProduct.current} offset={[8, -5]}>
                <img src={cart} alt="Giỏ hàng" />
              </Badge>
            </button>
          </Link>
          {/* {isAuthenticated ? (
            <>
              <Dropdown overlay={menu}>
                <Space
                  style={{
                    marginLeft: "30px",
                    position: "relative",
                    zIndex: "99",
                    fontSize: "18px",
                  }}
                >
                  <Avatar
                    size={48}
                    style={{
                      color: "#f56a00",
                      backgroundColor: "#fde3cf",
                    }}
                    icon={<UserOutlined />}
                  />
                  {JWTManager.getUsername()}
                </Space>
              </Dropdown>
              
            </> */}
          {/* : ( */}
          <>
            <Link to={"/login"}>
              <Button className="sign_in" type="primary" htmlType="submit">
                <span>Đăng nhập</span>
              </Button>
            </Link>
            <Link to={"/login"}>
              <Avatar
                className="sign_in-responsive"
                size={48}
                icon={<UserOutlined />}
              />
            </Link>
          </>
          {/* ) */}
        </div>
      </div>
      <Search
        className="search_input-responsive"
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />

      {/* <Drawer
        className="drawer_profile"
        title="Profile"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <h2>HỒ SƠ TÀI KHOẢN</h2>
        <Tabs type="card">
          <TabPane tab="Thông tin cá nhân" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Đổi mật khẩu" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Drawer> */}
    </>
  );
};

export default Header;
