import { Col, Row } from "antd";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { getBlogbyCategory, getBlogBySlugName } from "../../Service/BlogService";
import { BlogSideCardList } from "../Blog/components";
import BlogSingle from "./components/BlogSingle";

const BlogDetail = () => {
  const blogName = useParams().blogName ?? "";
  const blog = useRef(getBlogBySlugName(blogName));
  const blogs = useRef(getBlogbyCategory(blog.current.category));

  return (
    <Row className="blog-detail-container">
      <Col xl={16} md={24}>

        <BlogSingle
          blog={blog.current}
        />
      </Col>
      <Col xl={8} md={12} sm={24}>
        <BlogSideCardList
          blogList={blogs.current}
          name="Các bài viết liên quan"
        />
      </Col>
    </Row>
  );
};

export default BlogDetail;

