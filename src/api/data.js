import postsFromServer from './posts.json';
import commentsFromServer from './comments.json';
import usersFromServer from './users.json';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getPostById(postId) {
  return postsFromServer.find(post => post.id === postId);
}

export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

export const comments = commentsFromServer.map(comment => ({
  ...comment,
  post: getPostById(comment.postId),
}));
