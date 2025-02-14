import { Fragment } from 'react';
import PropTypes from 'typedefs/proptypes';
import Image from 'components/atoms/image';
import Card, { CardTitle, CardSubtitle } from 'components/atoms/card';
import Actions from 'components/molecules/actions';

const propTypes = {
  snippet: PropTypes.snippet,
};

/**
 * Blog snippet card.
 * Used for blog posts.
 */
const SnippetCard = ({ snippet }) => (
  <Card className='snippet-card blog-card'>
    <CardTitle>{snippet.title}</CardTitle>
    <div className='mt-0 mb-4 mx-0 txt-050 fs-xs'>
      {snippet.authors.map((a, i, arr) => (
        <Fragment key={`author-fragment-${i}`}>
          <a
            className='inherit'
            href={a.profile}
            rel='nofollow noopener noreferrer'
            target='_blank'
          >
            {a.name}
          </a>
          {i !== arr.length - 1 ? ', ' : ''}
        </Fragment>
      ))}
      {' · '}
      {new Date(snippet.firstSeen).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })}
      {' · '}
      <CardSubtitle>{snippet.tags.all.join(', ')}</CardSubtitle>
    </div>
    {snippet.cover && (
      <Image
        className='card-cover-image card-fw-section'
        src={snippet.cover}
        alt=''
        height='232'
        width='348'
      />
    )}
    <div
      className='card-description flex flex-col'
      dangerouslySetInnerHTML={{ __html: snippet.html.fullDescription }}
    />
    <Actions snippet={snippet} />
  </Card>
);

SnippetCard.propTypes = propTypes;

export default SnippetCard;
