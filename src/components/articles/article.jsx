import React from 'react'
import ArticleCard from '../ArticleCard/articleCard'
import './article.css'
import ArticleCat from '/src/assets/png/catArticle.png'
import ArticleTwo from '/src/assets/png/articleTwo.png'
import ArticleThree from '/src/assets/png/articleThree.png'

export default function article() {
  return (
    <div className='article'>
        <h1>Наши статьи - актуальность и прогресс</h1>
        <div className="articlesCard">
        <ArticleCard date={"05.03.2025"} title={"Влияют ли домашние животные на самочувствие?"} author={"Петр Иванов"} img={ArticleCat}/>
        <ArticleCard date={"06.03.2025"} title={"Первая помощь. Сложно ли для изучения?"} author={"Антон Глухов"} img={ArticleTwo}/>
        <ArticleCard date={"28.02.2025"} title={"Истории людей, что побороли онкозаболевания при самых неутешительных случаях?"} author={"Виктория Енотова"} img={ArticleThree}/>
        </div>
    </div>
  )
}
