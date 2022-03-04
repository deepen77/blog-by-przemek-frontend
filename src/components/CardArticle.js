import Tags from "./Tags";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import moment from "moment";

const Article = ({ data, handleClick }) => {

  return (
    <Fade duration={1500}>
      <article className="article">
        <div className="img-wrapper">
          <Link to={`/blog/${data.articleTitle}`}>
            <img src={data.imageTitle} alt={data.imageTitle} />
          </Link>
        </div>
        <div className="details-wrapper">
          <span>{moment(data.dateCreated).fromNow()}</span>
          <Link to={`/blog/${data.articleTitle}`}>
            <h2>{data.articleTitle}</h2>
          </Link>
          <p>{data.articleIntroduction.substring(0, 50) + "..."}</p>

          <Tags handleClick={handleClick} tags={data.tagsCategory} />
        </div>
      </article>
    </Fade>
  );
};

export default Article;
