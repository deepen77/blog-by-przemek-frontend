import { Link } from "react-router-dom";

const Tags = ({ tags, handleClick }) => (
  <ul className="tags">
    {tags.map((tag) => (
      <li key={tag}>
        <Link
          to={`/blog/category/${tag}`}

          className={`tag-${tag.toLowerCase()}`}
        >
          <span onClick={handleClick}>#{tag}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default Tags;

