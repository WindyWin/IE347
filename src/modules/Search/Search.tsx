import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";
import { product } from "../../components/core/type";
import { getProductByKeyword } from "../../Service/ProductService";

const Search = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const [dataSource, setDataSource] = useState(getProductByKeyword(searchParam.get("keyword") || ""));

  useEffect(() => {
    const value = searchParam.get("keyword");
    console.log("key wword: " + value);
    if (value) {
      const data = getProductByKeyword(value);
      setDataSource(data);
      // console.table(dataSource);
      // console.table(data);
    }
  }, [searchParam]);




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
          {!!dataSource ?
            <ProductCategorySection2
              productList={dataSource}
              sectionName="Kết quả tìm kiếm:"
              category="all"
            /> : <h1>Không tìm thấy sản phẩm nào</h1>}
          {/* )} */}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
