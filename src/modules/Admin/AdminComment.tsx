import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import "../../sass/Admin/Admin.scss";
import AdminAddComment from "./AdminAddComment";
import AdminContentHeader from "./AdminContentHeader";
import { commentColumns } from "./type";


function AdminComment() {

  const title = "Comment Management";
  const initialValues: any[] = [];
  const [dataSource, setDataSource] = useState(initialValues);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {


  }, [searchValue]);
  const [visible, setVisible] = useState(false);
  const titleDrawer = "UPDATE COMMENT";
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: { id: number }) => {
    setVisible(true);
    setContentDrawer(
      <AdminAddComment visibleProp={setVisible} dataProp={record} />
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
        columns={commentColumns}
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

export default AdminComment;
