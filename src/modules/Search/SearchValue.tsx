import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import { Category } from "../../components/core";

const Search = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift();
  const path = pathName.map((path) => {
    return path.split("-").join(" ");
  });
  let value: any = sessionStorage.getItem("valueSearch");
  // console.log(pathName[pathName.length - 1].toString());

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

          {/* <ProductCategorySection2
            productList={ }
            sectionName="Tìm kiếm"
          /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
