import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentProps } from "./Cart";
import { CustomizedFormProps, FieldData } from "./type";


function PayInformation({ callBackCurrent }: CurrentProps) {
  const prefixSelector = <Form.Item noStyle>+84</Form.Item>;
  const navigate = useNavigate();
  let paymentInformation: any = useRef([]);

  useEffect(() => {

    paymentInformation.current = JSON.parse(
      window.localStorage.getItem("products") as string)
  }, []);
  interface PaymentMethod {
    paymentMethodID: number;
    name: string;
    title: string;
  }

  const paymentMethodData: PaymentMethod[] = [
    {
      paymentMethodID: 1,
      name: "transfer",
      title: "Chuyển khoản ngân hàng",
    },
    {
      paymentMethodID: 2,
      name: "direct",
      title: "Trả tiền mặt khi nhận hàng",
    },
  ];

  const handelFinish = async (e: any) => {
    const day = new Date();
    let total = 0;
    let amount = 0;
    for (let i = 0; i < paymentInformation.current.length; i++) {
      total += paymentInformation.current[i].price;
      amount += paymentInformation.current[i].quantity;
    }
    const { firstName, lastName, address, numberPhone, paymentMethod } = e;
    const productData = paymentInformation.current.map(
      (infor: { name: any; quantity: any; price: any }) => {
        return {
          name: infor.name,
          quantity: infor.quantity,
          price: infor.price,
        };
      }
    );
    const payment = {
      products: productData,
      date: day.toLocaleDateString(),
      total,
      amount,
      firstName,
      lastName,
      address,
      numberPhone,
      paymentMethod,
    };

    callBackCurrent(3);
  };

  const CustomizedForm: React.FC<CustomizedFormProps> = ({
    onChange,
    fields,
    onSubmit,
  }) => (
    <Form
      layout="vertical"
      // initialValues={initialValues}
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      style={{ fontWeight: "500" }}
      onFinish={onSubmit}
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="firstName"
            label="Họ"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            name="lastName"
            label="Tên"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="country"
        label="Quốc gia / Khu vực"
        rules={[
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="code" label="Mã bưu điện (Tùy chọn)">
        <Input />
      </Form.Item>
      <Form.Item name="city" label="Tỉnh / Thành phố">
        <Input />
      </Form.Item>
      <Form.Item
        name="numberPhone"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Địa chỉ email"
        rules={[
          {
            type: "email",
            message: "Email không hợp lệ!",
          },
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="paymentMethod"
            label="Phương thức thanh toán"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Select>
              {paymentMethodData.map((e) => {
                return (
                  <Select.Option key={e.paymentMethodID} value={e.name}>
                    {e.title}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="voucher" label="Mã Voucher (Tùy chọn)">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="note" label="Ghi chú đơn hàng (Tùy chọn)">
        <Input.TextArea style={{ minHeight: "200px" }} />
      </Form.Item>
      <div className="handleButton handleButton_responsive">
        <Button icon={<ArrowLeftOutlined />} onClick={() => callBackCurrent(0)}>
          GIỎ HÀNG
        </Button>
        <Button htmlType="submit" >
          THANH TOÁN
        </Button>
      </div>
    </Form>
  );

  const fields: FieldData[] = [
    { name: ["firstName"] },
    { name: ["lastName"] },
    { name: ["country"] },
    { name: ["address"] },
    { name: ["code"] },
    { name: ["city"] },
    { name: ["numberPhone"] },
    { name: ["email"] },
    { name: ["paymentMethod"] },
    { name: ["voucher"] },
    { name: ["note"] },
  ];

  let tempFeilds: FieldData[] = [];

  return (
    <>
      <div className="PayInformation__Header">THÔNG TIN THANH TOÁN</div>
      <div className="PayInformation__Form">
        <CustomizedForm
          fields={fields}
          onChange={() => { }}
          onSubmit={handelFinish}
        />
      </div>
    </>
  );
}

export default PayInformation;
