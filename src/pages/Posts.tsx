import React, { useEffect, useState } from 'react';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';

import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { Post } from '../types/post';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/pagination';

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line
  const [limit, setLimit] = useState(10);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
 
  const changePage = (page: number) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Is Error ${postError}</h1>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSeachedPosts}
          title="Пости про JS"
        />
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
