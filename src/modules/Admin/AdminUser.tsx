import { Drawer, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "../utils/DataGenerate";
import AdminContentHeader from "./AdminContentHeader";
import AdminCreateUser from "./AdminCreateUser";

const userColumns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date Created",
    dataIndex: "dateCreated",
    key: "dateCreated",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  }
]


function AdminUser() {
  const title = "User Management";
  const [dataSource, setDataSource] = useState(usersData(5));
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // if (data) {
    //   let i = 0;
    //   const newData = data.getAllUsers.map((data: any) => {
    //     return { ...data, ...{ id: ++i }, ...{ password: "***************" } };
    //   });
    //   setDataSource(
    //     newData.filter(
    //       (entry: {
    //         firstName: string | string[];
    //         lastName: string | string[];
    //       }) => {
    //         const splitSearchValue = searchValue.split(" ");
    //         let [first, second]: string[] = splitSearchValue;
    //         if (entry.firstName === null) {
    //           entry.firstName = ""
    //         }
    //         if (entry.lastName === null) {
    //           entry.lastName = ""
    //         }
    //         return (
    //           entry.firstName.includes(first) ||
    //           entry.lastName.includes(second) ||
    //           entry.firstName.includes(second) ||
    //           entry.lastName.includes(first)
    //         );
    //       }
    //     )
    //   );
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const titleDrawer = "UPDATE USER";
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: any) => {
    setVisible(true);
    setContentDrawer(
      <AdminCreateUser
        visibleProp={setVisible}
        dataProp={record}
        id={record.username}
      />
    );
  };

  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={1}
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
      {/* {!loading ? ( */}
      <Table
        size="small"
        columns={userColumns}
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
      {/* ) : (
        <Loader />
      )} */}
    </>
  );
}

export default AdminUser;
