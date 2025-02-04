<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h1>회원가입</h1>
      <form @submit.prevent="registerUser">
        <div>
          <label for="username">사용자 이름:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">비밀번호:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="email">이메일:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        email: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await this.$axios.post('/register', {
            username: this.username,
            password: this.password,
            email: this.email,
          });
  
          if (response.status === 200) {
            alert('회원가입이 완료되었습니다!');
          }
        } catch (error) {
          alert('회원가입에 실패했습니다.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }
  div {
    margin-bottom: 1em;
  }
  label {
    margin-bottom: 0.5em;
  }
  input {
    padding: 0.5em;
    font-size: 1em;
  }
  button {
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
  </style>
  