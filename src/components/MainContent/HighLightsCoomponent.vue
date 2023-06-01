<template>
  <div class="news_container">
    <div class="news_tip">new</div>
    <div class="news_text"></div>
  </div>
</template>

<script>
 import { getNewsRandomly } from "../../services/get_news.service"; 

export default {
  name: "HighLightsCoomponent",
  async mounted() {
    // await getNewsRandomly().then((news) => {
    //   console.log(news);
    // });
  },
};
</script>

<style>
</style>