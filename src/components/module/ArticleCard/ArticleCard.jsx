import { NavLink } from 'react-router-dom';
import './ArticleCard.scss';

function ArticleCard({image , title , category , desc , creator}) {
  return (
    <NavLink className="articleCard">
    <img src={image} alt="article-image" className="articleCard_img" />
    <span className="articleCard_category">{category}</span>
    <h6 className="articleCard_title">{title}</h6>
    <p className="articleCard_desc">{desc}</p>
    <span className="articleCard_creator">{creator}</span>
</NavLink>
  )
}

export default ArticleCard