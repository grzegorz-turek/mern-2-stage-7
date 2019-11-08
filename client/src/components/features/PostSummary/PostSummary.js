import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from './PostSummaryContainer';
import { Link } from 'react-router-dom';
import './PostSummary.scss';

const PostSummary = ({ id, title, content, author }) => (
    <article className='post-summary'>
        <SmallTitle>{title}</SmallTitle>
        <p>Author: {author}</p>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>
        <Button variant='primary'>
            <Link to={`/posts/${id}`}>Read more</Link>
        </Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default PostSummary;