import { LogoutOutlined } from "@ant-design/icons";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

function AdminLogout() {
  const navigate = useNavigate();

  const onClick = async () => {
    navigate('/admin')
  }
  return (
    <Menu>
      <Menu.Item icon={<LogoutOutlined />} onClick={onClick}>Logout</Menu.Item>
    </Menu>
  )
}

export default AdminLogout