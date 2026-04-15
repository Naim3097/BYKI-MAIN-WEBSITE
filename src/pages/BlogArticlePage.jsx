import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, articles, CATEGORY_LABELS } from '../content/blog/index'

export default function BlogArticlePage() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  const article = getArticleBySlug(slug)

  useEffect(() => {
    if (!article) {
      setLoading(false)
      return
    }

    import(`../content/blog/${slug}.md?raw`)
      .then((mod) => {
        setContent(mod.default)
        setLoading(false)
      })
      .catch(() => {
        setContent('')
        setLoading(false)
      })
  }, [slug, article])

  if (!article) {
    return (
      <div className="page">
        <section className="section">
          <div className="section__inner content-block" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
            <h1>Article not found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Browse all articles
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const prev = currentIndex > 0 ? articles[currentIndex - 1] : null
  const next = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  const mdComponents = {
    table: ({ children }) => (
      <div className="data-table-wrap"><table className="data-table">{children}</table></div>
    ),
    a: ({ href, children, ...p }) => {
      if (href?.startsWith('/')) {
        return <Link to={href} className="text-link" {...p}>{children}</Link>
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-link" {...p}>
          {children}
        </a>
      )
    },
  }

  return (
    <div className="page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb__inner">
          <Link to="/blog" className="breadcrumb__link">Blog</Link>
          <span className="breadcrumb__sep">/</span>
          <span className="breadcrumb__current">{CATEGORY_LABELS[article.category]}</span>
        </div>
      </div>

      {/* Article */}
      <section className="section">
        <div className="section__inner">
          <article className="article">
            {/* Meta bar */}
            <div className="article__meta">
              <span className="article__category">{CATEGORY_LABELS[article.category]}</span>
              <span className="article__reading-time">{article.readingTime}</span>
              <span className="article__date">{article.publishedAt}</span>
            </div>

            {loading ? (
              <p style={{ color: 'var(--text-3)', padding: '2rem 0' }}>Loading article...</p>
            ) : content ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
                {content}
              </ReactMarkdown>
            ) : (
              <p style={{ color: 'var(--text-3)', padding: '2rem 0' }}>Article content is being prepared.</p>
            )}
          </article>

          {/* Tags */}
          {article.tags && (
            <div className="article__tags">
              {article.tags.map((tag) => (
                <span key={tag} className="article__tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Pager */}
          <nav className="article-pager">
            {prev ? (
              <Link to={`/blog/${prev.slug}`} className="article-pager__btn">
                <small>Previous</small>
                <span>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link to={`/blog/${next.slug}`} className="article-pager__btn article-pager__btn--next">
                <small>Next</small>
                <span>{next.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </section>
    </div>
  )
}
