import { Col, Row } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";

const Search = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift();
  const path = pathName.map((path) => {
    return path.split("-").join("");
  });
  const initialValue: any[] | (() => any[]) = []
  const [dataSource, setDataSource] = useState(initialValue);





  return (
    <div className="store__layout" style={{ margin: "0 5rem" }}>
      <Row gutter={32}>
        <Col
          span={5}
          className="store__layout--sidebar"
          xs={0}
          sm={0}
          md={0}
          lg={5}
          xl={5}
        >
          <Category />
        </Col>
        <Col
          className="store__layout--content"
          xs={24}
          sm={24}
          md={24}
          lg={19}
          xl={19}
        >
          {/* {loading ? (
            <Loader />
          ) : ( */}
          <ProductCategorySection2
            productList={dataSource}
            sectionName="Product"
          />
          {/* )} */}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
