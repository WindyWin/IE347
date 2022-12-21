import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";
import { categoryTranslate } from "../../modules/utils/categoryTranslate";
import { getAllProduct } from "../../Service/ProductService";
function Store() {
  const location = useLocation();

  const path = location.pathname.split("/").map((path) => {
    return path.split("-").join("");
  });
  const product = getAllProduct().filter((item) => item.categories.includes(categoryTranslate(path[1])?.dbName ?? ""));

  return (
    <>
      <div className="store__layout">
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

            <ProductCategorySection2
              productList={product}
              sectionName={
                categoryTranslate(path[path.length - 1])?.name ?? ""
              }
            />

          </Col>
        </Row>
      </div>
    </>
  );
}

export default Store;
