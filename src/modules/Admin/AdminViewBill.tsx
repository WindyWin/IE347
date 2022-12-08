import {
  Button,
  Col, Popconfirm, Row, Table
} from "antd";
import { useState } from "react";

import { productBillColumn } from "./type";

function AdminAddProduct(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
  id: string;
}) {
  const initialValues: any = "";
  const [dataSource, setDataSource] = useState(initialValues);
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const deleteHandler = () => {

  };

  return (
    <>
      <Table
        size="small"
        //loading={bill.loading}
        columns={productBillColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
      />
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          {props.dataProp && (
            <Popconfirm
              title={`Once deleted, this field can't be recovered !`}
              okButtonProps={{ danger: true }}
              onConfirm={deleteHandler}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          )}
          <Button style={{ margin: "0 8px" }} onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddProduct;
