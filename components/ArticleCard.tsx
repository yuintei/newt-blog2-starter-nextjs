import Link from 'next/link'
import styles from '../styles/ArticleCard.module.css'
import { formatDate } from '../lib/date'
import { Content } from 'newt-client-js'
import { Article } from '../types/article'
import { useMemo } from 'react'

export function ArticleCard({ article }: { article: Content & Article }) {
  const authorName = useMemo(() => {
    return article.author?.fullName || 'NO NAME'
  }, [article])

  return (
    <Link href={`/article/${article.slug}`}>
      <a className={styles.Article}>
        <div className={styles.Article_Eyecatch}>
          {article.coverImage ? (
            <img src={article.coverImage.src} alt="" />
          ) : (
            <div className={styles.Article_EyecatchEmpty}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="#CCCCCC"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
              </svg>
            </div>
          )}
        </div>
        <div className={styles.Article_Data}>
          <h3 className={styles.Article_Title}>{article.title}</h3>
          <div className={styles.Article_Summary}>{article.summary}</div>
          <ul className={styles.Article_Tags}>
            {article.tags.map((tag) => (
              <li key={tag._id}>#{tag.name}</li>
            ))}
          </ul>
          <div className={styles.Article_Author}>
            {article.author?.profileImage ? (
              <img
                src={article.author.profileImage.src}
                alt=""
                width="32"
                height="32"
              />
            ) : (
              <div className={styles.Article_AuthorEmpty}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="#CCCCCC"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            )}
            <div className={styles.Article_AuthorData}>
              <span>{authorName}</span>
              <time dateTime={formatDate(article._sys.createdAt)}>
                {formatDate(article._sys.createdAt)}
              </time>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
