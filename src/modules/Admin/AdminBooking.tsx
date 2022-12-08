
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Input, Modal, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { bookingColumn } from "./type";
const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

// interface BookingData {
//   name: string;
//   number: String;
//   pet: String;
//   service: String;
//   time: String;
//   dateTime: String;
//   content: String;
// }

const AdminBooking = () => {
  const onSearch = (value: any) => {
    setSearchValue(value);
  };
  const [searchValue, setSearchValue] = useState("");
  const initialBooking: any[] | (() => any[]) = [];
  const [dataSource, setDataSource] = useState(initialBooking);
  useEffect(() => {

  }, [searchValue]);
  const showDeleteConfirm = (record: any) => {
    confirm({
      title: 'Are you sure delete this field?',
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted, this field can't be recovered !",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

    });
  };
  return (
    <>
      <Title level={2}>Booking Management</Title>
      <Search
        placeholder="Search Name"
        onSearch={onSearch}
        enterButton
        allowClear
        style={{ width: "40%", float: "right", margin: "2%" }}
      />
      <Table
        size="small"
        columns={bookingColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: event => { showDeleteConfirm(record) }
          };
        }}
      />
    </>
  );
};

export default AdminBooking;
