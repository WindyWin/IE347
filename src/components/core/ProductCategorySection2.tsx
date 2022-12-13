import { Button, Col, Pagination, Row, Select } from "antd";
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
  function handleSortChange(value: string) {
    console.log(value);
  }

  return (
    <div className="product-category-section-2">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>

        <div className="page">

          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleSortChange}
            options={[
              {
                value: 'jack',
                label: 'Sắp xếp theo giá',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
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
