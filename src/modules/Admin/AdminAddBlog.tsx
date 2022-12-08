import {
  Button,
  Col,
  Form, Image, Input, Popconfirm, Row
} from "antd";
import { decode } from "html-entities";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

// import PicturesWall from "../../components/core/PicturesWall";
const joditConfig = {
  readonly: false, // all options from https://xdsoft.net/jodit/doc/
};

function AdminAddBlog(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
}) {
  const [form] = Form.useForm();
  const editor = useRef(null);
  const [content, setContent] = useState(decode(props.dataProp?.content) ?? "");
  const [url, setUrl] = useState(props.dataProp?.image.url ?? "");
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const handleSubmit = (value: any) => {
    // if there are data in props.dataProp (only editing mode have this props), then update
    // else create
    console.log(value);
  };
  const deleteHandler = () => {
    console.log("delete");
  };
  return (
    <Form
      form={form}
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="title"
        label="Title"
        initialValue={props.dataProp?.title ?? ""}
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="image"
        initialValue={props.dataProp?.image.url ?? ""}
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Image url"
      >
        <Input
          placeholder="url"
          onBlur={({ target }: any) => {
            setUrl(target.value);
          }}
        />
      </Form.Item>
      <div
        className="preview-img-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Image
          src={url}
          fallback={require("../../assets/images/fail_load.jpg")}
        />
      </div>
      <Form.Item
        initialValue={props.dataProp?.author ?? ""}
        name="author"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Author"
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={props.dataProp?.category ?? ""}
        name="category"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Categories"
      >
        <Input />
      </Form.Item>

      <Form.Item
        initialValue={props.dataProp?.description ?? ""}
        name="description"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Description"
      >
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Form.Item
        name="content"
        initialValue={content}
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
        label="Content"
      >
        <JoditEditor
          ref={editor}
          value={content}
          config={joditConfig}
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        />
      </Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          {props.dataProp && (
            <Popconfirm
              title={`Once deleted, this field can't be recovered !`}
              okButtonProps={{ danger: true }}
              onConfirm={deleteHandler}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          )}
          <Button style={{ margin: "0 8px" }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AdminAddBlog;
