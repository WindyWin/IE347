import { useRef } from "react";
import { Helmet } from "react-helmet";
import { getAllBlogs, getBlogCategories } from "../../Service/BlogService";
import { BlogCategory } from "./components";
const Blog = () => {
  const blogs = useRef(getAllBlogs());
  const categories = useRef(getBlogCategories());
  return (
    <>
      <Helmet>
        <title>Tạp chí thú cưng Sen Shop Thủ Đức</title>
        <meta
          name="description"
          content="Những bài viết nổi bật, những kiến thức bổ ích mà nhiều người có thể chưa biết. Chúng tôi đem đến cho các bạn những bài viết về thú cưng, cách chăm sóc thú cưng cũng như một số kỹ năng nuôi thú cưng để các bạn có thể dễ dàng hơn."
        />
        <link rel="canonical" href="https://senshop.tech/tap-chi" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tạp chí thú cưng Sen Shop Thủ Đức" />
        <meta property="og:url" content="https://senshop.tech/tap-chi" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/tap-chi.jpg"
        />
        <meta
          property="og:description"
          content="Những bài viết nổi bật, những kiến thức bổ ích mà nhiều người có thể chưa biết. Chúng tôi đem đến cho các bạn những bài viết về thú cưng, cách chăm sóc thú cưng cũng như một số kỹ năng nuôi thú cưng để các bạn có thể dễ dàng hơn."
        />
      </Helmet>

      <BlogCategory blogList={blogs.current} categoryList={categories.current} />

    </>
  );
};

export default Blog;
