import { Content } from 'newt-client-js'
import { Tag } from '../types/tag'
import Link from 'next/link'
import { Author } from '../types/author'
import { Archive } from '../types/article'

export function Side({
  popularTags,
  authors,
  archives,
}: {
  popularTags: (Content & Tag & { total: number })[]
  authors: (Content & Author & { total: number })[]
  archives: Archive[]
}) {
  return (
    <aside className="w-full pt-30 sm:w-60">
      <div className="pb-10">
        <h3 className="text-lg font-bold flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" />
            <circle cx="6.5" cy="6.5" r="1.5" />
          </svg>
          人気のタグ
        </h3>
        <ul className="flex flex-wrap ml-6">
          {popularTags.map((tag) => (
            <li key={tag._id} className="mr-2 mb-1">
              <Link href={`/tag/${tag.slug}`}>
                <a className="inline-block text-sm text-slate-500 md:hover:underline">
                  {tag.name} ({tag.total})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className={styles.Side_Row}>
        <h3 className={styles.Side_Heading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#333333"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
          </svg>
          Archives
        </h3>
        <ul className={styles.Archives}>
          {archives.map((archive) => (
            <li key={archive.year}>
              <Link href={`/archive/${archive.year}`}>
                <a>
                  {archive.year}({archive.count})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      {/* <div className="pb-10">
        <h3 className="text-2xl font-bold flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-4"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
          </svg>
          著者
        </h3>
        <ul className="flex flex-wrap ml-10">
          {authors.map((author) => (
            <li
              key={author._id}
              className="overflow-hidden w-6 h-6 mr-4 mb-4 rounded"
            >
              <Link href={`/author/${author.slug}`}>
                <a className="flex items-center justify-center text-slate-500">
                  {author.profileImage?.src ? (
                    <img
                      src={author.profileImage.src}
                      alt={author.fullName}
                      className="w-6 h-6 object-cover rounded"
                    />
                  ) : (
                    <div className="bg-slate-100 text-slate-500 w-8 h-8 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </aside>
  )
}
