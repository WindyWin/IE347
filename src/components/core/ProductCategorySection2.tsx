import { Col, Pagination, Row, Select } from "antd";
import { memo, useEffect, useState } from "react";
import { categoryTranslate } from "../../modules/utils/categoryTranslate";
import ProductCard from "./ProductCard";
import { product } from "./type";

interface Props {
  productList: product[];
  sectionName: string;
  category: string;
  productsPerPage?: number
}
const sortFunction = {
  'asc-price': (a: product, b: product) => a.price - b.price,
  'desc-price': (a: product, b: product) => b.price - a.price,
  'asc-name': (a: product, b: product) => a.name.localeCompare(b.name),
  'desc-name': (a: product, b: product) => b.name.localeCompare(a.name),
}

const ProductCategorySection2 = ({ productList, sectionName, category, productsPerPage }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [productPerPage, setProductPerPage] = useState<number>(productsPerPage ?? 8);
  const [products, setProducts] = useState<product[]>([])
  const [sortType, setSortType] = useState<string>('asc-price');


  useEffect(() => {
    if (sectionName === "Kết quả tìm kiếm:") {
      setProducts(productList);
      return;
    }

    setProducts(productList
      .filter((item) => item.categories.includes(category))
    )
  }, [category, sectionName, productList])

  function handlPageChange(page: number, pageSize: number) {
    setPage(page - 1);
  }
  function handleSortChange(value: string) {
    setSortType(value);
  }

  return (
    <div className="product-category-section-2">
      <div className="section__top">
        <div className="section-name">{sectionName}</div>

        <div className="page">

          <Select
            defaultValue="asc-price"
            style={{ width: 150 }}
            onChange={handleSortChange}
            options={[
              {
                value: 'asc-price',
                label: 'Giá tăng dần',
              },
              {
                value: 'desc-price',
                label: 'Giá giảm dần',
              },
              {
                value: 'asc-name',
                label: 'Tên a-z',
              },
              {
                value: 'desc-name',
                label: 'Tên z-a',
              },
              {
                value: 'asc-rating',
                disabled: true,
                label: 'Đánh giá tăng dần',
              },
              {
                value: 'desc-rating',
                disabled: true,
                label: 'Đánh giá giảm dần',
              }
            ]}
          />

        </div>
      </div>
      <div className="section__bottom">
        <Row gutter={[16, 16]}>
          {products
            // .filter((item) => item.categories.includes(categoryTranslate(sectionName)?.dbName ?? ""))
            .slice(page * productPerPage, (page + 1) * productPerPage)
            .sort(sortFunction[sortType as keyof typeof sortFunction])
            .map((item) => {
              return (
                <Col key={item._id} xl={6} lg={6} md={12} sm={12} xs={24}>
                  <ProductCard product={item} />
                </Col>
              );
            })}
        </Row>
        <Pagination className="pagination" current={page + 1} total={products.length} onChange={handlPageChange} defaultCurrent={1} pageSize={productPerPage}  ></Pagination>
      </div>
    </div>
  );
};

export default memo(ProductCategorySection2);
