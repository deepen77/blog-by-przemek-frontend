import React from 'react'
import { CategoryListStyle } from '../style-components/CategoryListStyles';
import { categories } from '../data/categories-data';
import { Link,} from "react-router-dom";


const Category = ({ handleClick,}) => {


  return (
    <CategoryListStyle>
      <div>
        <h3 className="title">Blog Categories</h3>
        <ul className="list-item">
          {categories.map((category, index) => (
            <Link
              to={`/blog/category/${category.title}`}
              key={index}
            >
              <li value={category.title} onClick={handleClick} className="item">
                #{category.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </CategoryListStyle>
  );
};

export default Category

