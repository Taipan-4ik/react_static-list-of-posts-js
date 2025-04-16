import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { comments } from '../../api/data';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>{' Posted by  '}</p>

      <UserInfo user={post.user} />
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {comments
      .filter(comment => comment.postId === post.id)
      .map(comment => (
        <CommentList comment={comment} key={comment.id} />
      ))}

    {comments.every(comment => comment.postId !== post.id) && (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
