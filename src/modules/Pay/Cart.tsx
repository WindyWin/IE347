import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../Hook/useCart";
import { DataType } from "./type";


export interface CurrentProps {
  callBackCurrent(childCurrent: number): void;
}

function Cart({ callBackCurrent }: CurrentProps) {
  const navigate = useNavigate();
  const cart = useCart();
  const [current, setCurrent] = useState(1);
  // const initialValues: DataType[] = [];
  const [dataType, setDataType] = useState<DataType[]>(cart.getCart);
  // const currentUsername = "abc";

  const handelSub = (record: DataType) => {
    record.quantity -= 1;
    cart.updateQuantity(record, record.quantity);
    setDataType(cart.getCart);
    setCurrent(current + 1);
  };
  const handelPlus = (record: DataType) => {
    record.quantity += 1;
    cart.updateQuantity(record, record.quantity);
    setDataType(cart.getCart);
    setCurrent(current + 1);
  };

  const handelDelete = (record: DataType) => {
    cart.removeFromCart(record);
    setDataType(dataType.filter((item) => item._id !== record._id));
    setCurrent(current + 1);
  };


  const columns: ColumnsType<DataType> = [
    {
      title: "SẢN PHẨM",
      dataIndex: "name",
      key: "name",
      align: "left",
      render: (text, record) => (
        <>
          <Button
            onClick={() => handelDelete(record)}
            style={{ marginRight: "10px" }}
            icon={<DeleteOutlined />}
          ></Button>
          <img src={record.image.url} alt="Product" />
          {record.name}
        </>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (title, record) => (
        <>
          <span>
            {record.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </>
      ),
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (title, record) => (
        <>
          <div className="button__frame">
            <button onClick={() => handelSub(record)} disabled={record.quantity === 0}>-</button>
            <span>{record.quantity}</span>
            <button onClick={() => handelPlus(record)}>+</button>
          </div>
        </>
      ),
    },
    {
      title: "TẠM TÍNH",
      dataIndex: "tamtinh",
      key: "tamtinh",
      align: "center",
      render: (title, record) => (
        <span>
          {(
            record.price *
            record.quantity
          ).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
        </span>
      ),
    },
  ];



  return (
    <>
      <Table
        pagination={false}
        dataSource={dataType}
        columns={columns}
        summary={(pageData) => {
          let total = 0;
          pageData.forEach(({ price, quantity }) => {
            total += price * quantity;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={2}>
                  TỔNG:{" "}
                  <span>
                    {" "}
                    {total.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <div className="handleButton">
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
          TIẾP TỤC XEM SẢN PHẨM
        </Button>
        <Button disabled={!cart.getCartLength()} onClick={() => callBackCurrent(1)}>
          THANH TOÁN
        </Button>
      </div>
    </>
  );
}

export default Cart;
