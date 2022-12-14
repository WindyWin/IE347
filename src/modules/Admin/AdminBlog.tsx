import { Drawer, Table } from "antd";
import { useState } from "react";
import { getAllBlogs } from "../../Service/BlogService";
import AdminAddBlog from "./AdminAddBlog";
import AdminContentHeader from "./AdminContentHeader";
import { blogColumns } from "./type";

function AdminBlog() {
  const title = "Blog Management";
  const initialValues: any[] = getAllBlogs(true);
  const [dataSource, setDataSource] = useState(initialValues);
  const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   if (blogs.data) {
  //     let i = 0;
  //     const newData = blogs.data.getAllBlogs.map((data: any) => {
  //       return { ...data, ...{ id: ++i } };
  //     });

  //     setDataSource(
  //       newData.filter((entry: any) => {

  //         return entry.title.includes(searchValue);
  //       })
  //     );
  //   }
  // }, [blogs.data, searchValue]);
  const [visible, setVisible] = useState(false);
  const titleDrawer = "UPDATE BLOG";
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: { id: number }) => {
    setVisible(true);

    setContentDrawer(
      <AdminAddBlog visibleProp={setVisible} dataProp={record} />
    );
  };
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={3}
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
        columns={blogColumns}
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

export default AdminBlog;
