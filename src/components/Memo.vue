<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="el in data" :key="el">{{ el }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
  name: "MemoComp",
  setup() {
    const data = reactive([
      "메모1 내용",
      "메모2 내용",
      "메모3 내용",
      "메모4 내용",
      "메모5 내용",
    ]);
    const add = () => {
      data.push("추가된 메모 내용")
    }

    axios.get('/api/memos').then((res)=>{
      console.log(res)
    })

    return { data, add };
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