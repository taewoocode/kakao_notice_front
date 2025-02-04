<template>
    <div>
      <h1>게시판</h1>
      <button @click="navigateToCreatePost">게시물 작성</button>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <p><strong>작성자:</strong> {{ post.author }}</p>
          <button @click="deletePost(post.id)">삭제</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: []
      };
    },
    async created() {
      await this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await this.$axios.get('/api/posts');
          this.posts = response.data;
        } catch (error) {
          console.error('게시물 불러오기 실패:', error);
        }
      },
      async deletePost(postId) {
        try {
          await this.$axios.delete(`/api/posts/${postId}`);
          this.fetchPosts();
        } catch (error) {
          console.error('게시물 삭제 실패:', error);
        }
      },
      navigateToCreatePost() {
        this.$router.push('/create');
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요에 따라 스타일 추가 */
  </style>
  