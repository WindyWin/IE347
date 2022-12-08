import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminAddProduct from "./AdminAddProduct";
import AdminContentHeader from "./AdminContentHeader";
import { productColumn } from './type';

function AdminProduct() {
  const title = "Product Management";
  const [searchValue, setSearchValue] = useState("");
  const initialProduct: any[] | (() => any[]) = []
  const [dataSource, setDataSource] = useState(initialProduct);
  const titleDrawer = "UPDATE PRODUCT";

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>)
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: any) => {
    setVisible(true);
    setContentDrawer(
      <AdminAddProduct visibleProp={setVisible} dataProp={record} id={record.name} />
    );
  };
  useEffect(() => {

  }, [searchValue]);
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={2}
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
        columns={productColumn}
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

export default AdminProduct;
