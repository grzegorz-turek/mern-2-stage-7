import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import { withRouter } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../../config';
import '../PostSummary/PostSummary.scss';

class SinglePost extends React.Component {

    componentDidMount() {
        const { loadSinglePost, id } = this.props;
        loadSinglePost(id);
    }

    componentWillUnmount() {
        const { resetRequest } = this.props;
        resetRequest();
    }
    
    render() {
        const { singlePost, request, location } = this.props;
        if(!request.pending && request.success && singlePost) {
            return (
                <div>
                    <article className='post-summary'>
                        <SmallTitle>{singlePost.title}</SmallTitle>
                        <FacebookProvider appId='477626572851912'>
                            <ShareButton href={`${BASE_URL}/${location.pathname}`}>
                                Share
                            </ShareButton>
                        </FacebookProvider>
                        <p>Author: {singlePost.author}</p>
                        <HtmlBox>{singlePost.content}</HtmlBox>
                        <FacebookProvider appId='477626572851912'>
                            <Comments href={`${BASE_URL}/${location.pathname}`} />
                        </FacebookProvider>
                    </article>
                </div>
            )
        }
        if(request.pending || request.success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            )
        }
        if (!request.pending && request.error !== null) {
            return (
                <div>
                    <Alert variant='error'>{request.error}</Alert>
                </div>
            )
        }
        if (!request.pending && request.success && singlePost === null ) {
            return (
                <div>
                    <Alert variant='info'>No posts</Alert>
                </div>
            )
        }
    }
}

SinglePost.propTypes = {
    singlePost: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }),
    loadSinglePost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

//export default SinglePost;
export default withRouter(props => <SinglePost {...props}/>);
