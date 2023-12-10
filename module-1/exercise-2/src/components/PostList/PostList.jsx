import PostItem from "./PostItem/PostItem";
import "./postList.css";

const PostList = ({ title, items = [] }) => {
  const elements = items.map(({ id, ...props }) => (
    <PostItem key={id} {...props} />
  ));
  return (
    <>
      <h2 className="title">{title}</h2>
      <ul className="list">{elements}</ul>
    </>
  );
};

export default PostList;
