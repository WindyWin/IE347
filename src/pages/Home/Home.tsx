import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { ProductCategorySection } from "../../components/core";
import Loader from "../../components/core/Loader";
import { Contact, Reviews, Service, Slider } from "../../modules/Home";
import { generateProductList } from "../../modules/utils/DataGenerate";

function Home() {
  const pet = generateProductList(8);
  const food = generateProductList(8);
  return (
    <>
      <Helmet>
        <title>
          Sen Shop | Thú cưng, phụ kiện thú cưng, các dịch vụ thú cưng uy tín,
          chất lượng
        </title>
        <meta
          name="description"
          content="Bán thú cưng, thức ăn thú cưng, phụ kiện thú cưng uy tín, giá rẻ khu vực Thủ Đức. Các dịch vụ thú cưng, dịch vụ thú y chất lượng phục vụ mọi lúc mọi nơi, hài lòng khách hàng."
        />
        <link rel="canonical" href="https://senshop.tech/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sen Shop | Thú cưng, phụ kiện thú cưng, các dịch vụ thú cưng uy tín, chất lượng"
        />
        <meta property="og:url" content="https://senshop.tech/" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/Blog/SenShop.jpg"
        />
        <meta
          property="og:description"
          content="Bán thú cưng, thức ăn thú cưng, phụ kiện thú cưng uy tín, giá rẻ khu vực Thủ Đức. Các dịch vụ thú cưng, dịch vụ thú y chất lượng phục vụ mọi lúc mọi nơi, hài lòng khách hàng."
        />
      </Helmet>
      <Slider />
      <Service />
      {/* {pet.loading ? (
        <Loader />
      ) : ( */}
      <ProductCategorySection
        productList={pet}
        categoryList={[
          "Chó cảnh",
          "Mèo cảnh",
          "Thú kiểng",
          "Hamster",
          "Thú cưng khác",
        ]}
        sectionName="Thú cưng"
      />
      {/* )} */}

      {/* {food.loading ? (
        <Loader />
      ) : ( */}
      <ProductCategorySection
        productList={food}
        categoryList={["Thức ăn cho chó", "Thức ăn cho mèo", "Thức ăn khác"]}
        sectionName="Thức ăn cho thú cưng"
      />
      {/* )} */}
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;
