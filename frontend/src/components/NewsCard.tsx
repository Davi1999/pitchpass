import { Link } from 'react-router-dom';
import type { NewsItem } from '../types';
import { formatPublished } from '../lib/format';
import { ArrowUpRight } from './Icons';
import { NewsIcon } from './Glyphs';

export function NewsCard({ article }: { article: NewsItem }) {
  const content = (
    <>
      <div className="news-card__top">
        <span className="news-card__icon" aria-hidden="true">
          <NewsIcon category={article.category} />
        </span>
        <span className="tag tag--soft">{article.category}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="news-card__footer">
        <span>
          {formatPublished(article.publishedAt)} · {article.readTime} min read
        </span>
        {article.relatedGuideSlug && (
          <span className="news-card__arrow" aria-hidden="true">
            <ArrowUpRight />
          </span>
        )}
      </div>
    </>
  );

  if (article.relatedGuideSlug) {
    return (
      <Link className="news-card" to={`/learn/${article.relatedGuideSlug}`}>
        {content}
      </Link>
    );
  }

  return <article className="news-card">{content}</article>;
}
