import ArticleCard from '../../../module/ArticleCard/ArticleCard';
import './Articles.scss';
import db from '../../../../data/db.json'
import { useState } from 'react';

function Articles() {
    const [articles , setArticles] = useState([...db.articles])
  return (
   <section className="articles">
        <div className="container">
            <div className="row">
                {articles.map(article => (
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12" key={article.id}>
                    <ArticleCard
                    {...article}
                    />
                </div>
                ))}
            </div>
        </div>
   </section>
  )
}

export default Articles