import { NavLink } from 'react-router-dom';
import './ArticleCard.scss';

function ArticleCard() {
  return (
    <NavLink className="articleCard">
    <img src="/assets/images/article/a1.jpg" alt="article-image" className="articleCard_img" />
    <span className="articleCard_category">طراحی وب</span>
    <h6 className="articleCard_title">مقایسه TCP و UDP</h6>
    <p className="articleCard_desc">در دنیای امروزی، اکثر مشاغل و کار‌ها با کامپیوتر‌ها پیوندی جدا نشدنی پیدا کرده‌</p>
    <span className="articleCard_creator">علی ناصری</span>
</NavLink>
  )
}

export default ArticleCard