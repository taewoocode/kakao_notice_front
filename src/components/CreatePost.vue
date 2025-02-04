<template>
    <div>
      <h1>게시물 작성</h1>
      <form @submit.prevent="createPost">
        <div>
          <label for="title">제목:</label>
          <input type="text" v-model="title" required />
        </div>
        <div>
          <label for="content">내용:</label>
          <textarea v-model="content" required></textarea>
        </div>
        <div>
          <label for="author">작성자:</label>
          <input type="text" v-model="author" required />
        </div>
        <button type="submit">작성하기</button>
      </form>
      <button @click="navigateToHome">뒤로가기</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        author: ''
      };
    },
    methods: {
      async createPost() {
        try {
          await this.$axios.post('/api/posts', {
            title: this.title,
            content: this.content,
            author: this.author
          });
          alert('게시물이 작성되었습니다.');
          this.navigateToHome();
        } catch (error) {
          console.error('게시물 작성 실패:', error);
        }
      },
      navigateToHome() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요에 따라 스타일 추가 */
  </style>
  