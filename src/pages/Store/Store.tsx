import { Col, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Category, ProductCategorySection2 } from "../../components/core";
import Loader from "../../components/core/Loader";
import { categoryTranslate } from "../../modules/utils/categoryTranslate";

function Store() {
  const location = useLocation();
  const pathName = location.pathname.split("/");
  pathName.shift();
  const path = pathName.map((path) => {
    return path.split("-").join("");
  });


  return (
    <>
      <Helmet>
        <title>{categoryTranslate(path[path.length - 1])?.title}</title>
        <meta
          name="description"
          content={categoryTranslate(path[path.length - 1])?.description}
        />
        <link
          rel="canonical"
          href={`https://senshop.tech/${categoryTranslate(path[path.length - 1])?.canonical
            }`}
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content={categoryTranslate(path[path.length - 1])?.title}
        />
        <meta
          property="og:url"
          content={`https://senshop.tech/${categoryTranslate(path[path.length - 1])?.canonical
            }`}
        />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/product-pet.jpg"
        />
        <meta
          property="og:description"
          content={categoryTranslate(path[path.length - 1])?.description}
        />
      </Helmet>
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
            {/* {loading ? (
              <Loader />
            ) : (
              <ProductCategorySection2
                productList={data.getAllProductsByCategory}
                sectionName={
                  categoryTranslate(path[path.length - 1])?.name ?? ""
                }
              />
            )} */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Store;
