import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (movieId) => {
  const request = requestFactory();
  const searchQuery = encodeURIComponent(`movieId="${movieId}"`);
  const relationQuery = encodeURIComponent(`author=_ownerId:users`);

  const result = await request.get(
    `${baseUrl}?where=${searchQuery}&load=${relationQuery}`
  );
  const comments = Object.values(result);

  return comments;
};

export const create = async (movieId, comment) => {
  const request = requestFactory();
  const result = await request.post(baseUrl, { movieId, comment });

  return result;
};
