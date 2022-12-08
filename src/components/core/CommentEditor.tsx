import { Button, Form, Input, message, Popover, Rate, Typography } from "antd";
import { useState } from "react";

const CommentEditor = ({ idProduct, idBlog }: any) => {
  const [form] = Form.useForm();
  async function submitHandler(value: any) {

  }
  return (
    <Form
      form={form}
      onFinish={(value) => {
        message.loading({ content: "Đang gửi bình luận", key: "comment" });

        submitHandler(value);
      }}
    >
      {!!idProduct && (
        <Form.Item name="rating" initialValue={3} className="rating-input">
          <Rate allowHalf />
        </Form.Item>
      )}
      <Form.Item name="content" className="content-input">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        {/* <Popover
          content={
            <Typography.Text type="danger">
              Bạn phải đăng nhập để có thể bình luận
            </Typography.Text>
          }
          {...(!isAuthenticated ? { trigger: "hover" } : { visible: false })}
        >
          <Button
            htmlType="submit"
            disabled={!isAuthenticated}
            loading={loading}
            type="primary"
          >
            Gửi bình luận
          </Button>
        </Popover> */}
      </Form.Item>
    </Form>
  );
};
export default CommentEditor;
