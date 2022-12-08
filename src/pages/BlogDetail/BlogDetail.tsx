import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
// import {blogList} from "../Blog/data";
// import { Helmet } from "react-helmet";

const BlogDetail = () => {
  const blogName = useParams().blogName ?? "";
  return (
    <Row className="blog-detail-container">
      <Col xl={16} md={24}>

        {/* <BlogSingle
            blog={blog.data.getBlogBySlug}
          /> */}
      </Col>
      <Col xl={8} md={12} sm={24}>

        {/* <>
            {blogs.data?.getAllBlogs && (
              <BlogSideCardList
                blogList={blogs.data.getAllBlogs}
                name="Các bài viết nổi bật"
              />
            )}
          </> */}
      </Col>
    </Row>
  );
};

export default BlogDetail;

