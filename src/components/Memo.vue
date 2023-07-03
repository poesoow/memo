<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="el in state.data" :key="el">{{ el }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: "MemoComp",
  setup() {
    const state = reactive({
      data: [],
    })

    const add = () => {
      state.data.push("추가된 메모 내용")
    }

    axios.get('/api/memos').then((res)=>{
      state.data = res.data
    })

    return { state, add };
  },
};
</script>

<style lang="scss" scoped>

.memo
  .act{
    text-align: right;
    padding: 10px 0 5px 5px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 15px;
      margin: 15px;
      border: 1px solid #eee;
    }
  }
</style>