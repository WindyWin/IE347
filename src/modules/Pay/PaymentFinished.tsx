import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartFinishIcon } from "../../assets/icons/CartFinishIcon";


function PaymentFinished() {
  window.localStorage.setItem("products", "[]");




  const navigate = useNavigate();
  const initialValues: any = { total: 0 };
  const [data, setData] = useState(initialValues);

  const dataFormat = data.total.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className="PaymentFinished">
      <CartFinishIcon className="CartFinishIcon" />
      <Typography.Text className="Header">
        Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý !
      </Typography.Text>
      <div className="DetailID">
        <Typography.Text>Mã đơn hàng: </Typography.Text>
        <Typography.Text className="fontBold">{data._id}</Typography.Text>
      </div>
      <div className="DetailDay">
        <Typography.Text>Ngày: </Typography.Text>
        <Typography.Text className="fontBold">{data.date}</Typography.Text>
      </div>
      <div className="DetailTotal">
        <Typography.Text>Tổng cộng: </Typography.Text>
        <Typography.Text className="fontBold" >
          {dataFormat}
        </Typography.Text>
      </div>
      <div className="DetailPaymentMethod">
        <Typography.Text>Phương thức thanh toán: </Typography.Text>
        <Typography.Text className="fontBold">
          {data.paymentMethod === "transfer"
            ? "Chuyển khoản ngân hàng"
            : "Trả tiền mặt khi nhận hàng"}
        </Typography.Text>
      </div>
      <Button className="OtherProduct" onClick={() => navigate(-1)}>
        XEM SẢN PHẨM KHÁC
      </Button>
    </div>
  );
}

export default PaymentFinished;
