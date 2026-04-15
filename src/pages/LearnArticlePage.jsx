import { useParams, Link, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { chapters, FILENAME_MAP } from '../chapters'

export default function LearnArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const chapterIndex = chapters.findIndex((c) => c.id === id)
  const chapter = chapters[chapterIndex]

  if (!chapter) {
    return (
      <div className="page">
        <section className="section">
          <div className="section__inner content-block" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
            <h1>Module not found</h1>
            <p>The module you're looking for doesn't exist.</p>
            <Link to="/learn" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Browse all modules
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const prev = chapterIndex > 0 ? chapters[chapterIndex - 1] : null
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null

  const mdComponents = {
    img: ({ src, alt, ...p }) => (
      <img
        src={src?.replace(/\.\.\/public\//g, '/')}
        alt={alt || ''}
        loading="lazy"
        {...p}
      />
    ),
    table: ({ children }) => (
      <div className="data-table-wrap"><table className="data-table">{children}</table></div>
    ),
    a: ({ href, children, ...p }) => {
      if (href?.endsWith('.md')) {
        const base = href.replace(/^\.\//, '').replace('.md', '')
        const idx = FILENAME_MAP[base]
        if (idx !== undefined) {
          const targetChapter = chapters[idx]
          return (
            <Link to={`/learn/${targetChapter.id}`} className="text-link" {...p}>
              {children}
            </Link>
          )
        }
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
          <Link to="/learn" className="breadcrumb__link">Knowledge Base</Link>
          <span className="breadcrumb__sep">/</span>
          <span className="breadcrumb__current">Module {chapter.id}</span>
        </div>
      </div>

      {/* Article */}
      <section className="section">
        <div className="section__inner">
          <article className="article">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {chapter.content}
            </ReactMarkdown>
          </article>

          {/* Pager */}
          <nav className="article-pager">
            {prev ? (
              <Link to={`/learn/${prev.id}`} className="article-pager__btn">
                <small>Previous</small>
                <span>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link to={`/learn/${next.id}`} className="article-pager__btn article-pager__btn--next">
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
