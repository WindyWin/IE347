import { Drawer, Table } from "antd";
import { useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import AdminViewBill from "./AdminViewBill";
import { billColumn } from './type';

function AdminBill() {
  const title = "Bill Management";
  const [searchValue, setSearchValue] = useState("");
  const initialBill: any[] | (() => any[]) = []
  const [dataSource, setDataSource] = useState(initialBill);
  const titleDrawer = "BOOKED PRODUCT LIST";

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>)
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: any) => {
    setVisible(true);
    setContentDrawer(
      <AdminViewBill visibleProp={setVisible} dataProp={record} id={record._id} />
    );
  };

  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={0}
        exportData={dataSource}
      />
      <Drawer
        title={titleDrawer}
        placement="right"
        onClose={onClose}
        visible={visible}
        size="large"
      >
        {contentDrawer}
      </Drawer>
      <Table
        size="small"
        columns={billColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              showDrawer(record);
            },
          };
        }}
      />
    </>
  );
}

export default AdminBill;
