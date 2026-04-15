import { Link } from 'react-router-dom'
import { articles, CATEGORY_LABELS } from '../content/blog/index'

export default function BlogPage() {
  return (
    <div className="page">
      <section className="page-hero page-hero--compact">
        <div className="page-hero__inner">
          <div className="page-hero__text">
            <h1 className="page-hero__title">Blog</h1>
            <p className="page-hero__sub">
              Expert guides on car problems, fault codes, engine oil, and vehicle maintenance 
              — written for Malaysian car owners.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <div className="blog-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="blog-card"
              >
                <span className="blog-card__category">
                  {CATEGORY_LABELS[article.category] || article.category}
                </span>
                <h2 className="blog-card__title">{article.title}</h2>
                <p className="blog-card__desc">{article.description}</p>
                <div className="blog-card__meta">
                  <span>{article.readingTime}</span>
                  <span>{article.publishedAt}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
