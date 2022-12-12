import { Button, Col, Pagination, Row } from "antd";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { product } from "./type";

interface Props {
  productList: product[];
  sectionName: string;
  productsPerPage?: number
}

const ProductCategorySection2 = ({ productList, sectionName, productsPerPage }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [productPerPage, setProductPerPage] = useState<number>(productsPerPage ?? 8);
  function handlPageChange(page: number, pageSize: number) {
    setPage(page - 1);
  }

  return (
    <div className="product-category-section-2">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>
        <div className="page">


          <Pagination
            defaultCurrent={page + 1}
            total={productList.length}
            defaultPageSize={8}
            simple
            responsive
            itemRender={(page, type, originalElement) => (
              <Button
                className={`${type}-page-button page-button`}
              >
                {(type === 'next') && 'Trang sau'}
                {(type === 'prev') && 'Trang trước'}
              </Button>
            )}
            onChange={handlPageChange}
          />
        </div>
      </div>
      <div className="section__bottom">
        <Row gutter={[16, 16]}>
          {productList
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .map((item) => {
              return (
                <Col key={item._id} xl={6} lg={6} md={12} sm={12} xs={24}>
                  <ProductCard product={item} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default ProductCategorySection2;
