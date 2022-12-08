import { DeleteOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar, Button, Comment as AntdComment, Popconfirm, Rate, Tooltip
} from "antd";
import { decode } from "html-entities";
import moment from "moment";
import "moment/locale/vi";
import { useState } from "react";
import { comment } from "./type";

moment.locale("vi");
interface commentProps {
  comment: comment;
}

function Comment({ comment }: commentProps) {
  const date = new Date(comment.date);
  const [edit, setEdit] = useState<boolean>(false);
  const [rating, setRating] = useState(comment.rating ?? null);


  //edit comment fuction ->trigger edit btn
  //-> set comment content atribute contenteditable="true"
  //-> set rating !disabled
  //-> change edit and delete button to save button (by change state)
  //-> send request to server

  const deleteHandler = () => {

  };

  const editHandler = () => {
    setEdit(true);
    const commentContent = document.querySelector<HTMLInputElement>(
      `#comment-content_${comment._id}`
    );
    commentContent?.setAttribute("contenteditable", "true");
    commentContent?.focus();
  };
  const updateHandler = () => {

  };
  return (
    <AntdComment
      author={<a>{comment.user}</a>}
      avatar={<Avatar size={48} icon={<UserOutlined />} />}
      content={
        <>
          {comment?.rating && (
            <Rate
              onChange={(value) => setRating(value)}
              defaultValue={comment.rating}
              disabled={!edit}
              allowHalf
            />
          )}
          <p id={`comment-content_${comment._id}`}>{decode(comment.content)}</p>
        </>
      }
      datetime={
        <>
          <Tooltip title={moment(date).format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(date).from(new Date())}</span>
          </Tooltip>
        </>
      }
      actions={[
        <>
          {/* {isAuthenticated && JWTManager.getUsername() === comment.user && ( */}
          <>
            {!edit ? (
              <>
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={editHandler}
                >
                  Chỉnh sửa
                </Button>
                <Popconfirm
                  title="Bạn có chắc xoá bình luận này không"
                  onConfirm={deleteHandler}
                  cancelText="Hủy"
                  okText="Xoá"
                  okButtonProps={{ danger: true }}
                >
                  <Button type="text" icon={<DeleteOutlined />}>
                    Xóa
                  </Button>
                </Popconfirm>
              </>
            ) : (
              <Button onClick={updateHandler} type="primary">
                Lưu
              </Button>
            )}
          </>
          {/* )} */}
        </>,
      ]}
    />
  );
}

export default Comment;
