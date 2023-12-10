import "./postItem.css";

const PostItem = ({ src, title, text }) => {
  return (
    <li className="post-list-item">
      <img className="post-list-img" src={src} alt="" />
      <h4 className="post-list-item-title">{title}</h4>
      <p className="post-list-item-text">{text}</p>
    </li>
  );
};

export default PostItem;
