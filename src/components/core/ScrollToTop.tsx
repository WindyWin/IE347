import { CaretUpOutlined } from '@ant-design/icons';
import { BackTop } from "antd";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      <BackTop>
        <CaretUpOutlined className='to-top' />
      </BackTop>
    </>
  );
}

export default ScrollToTop;
