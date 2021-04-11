<template>
  <div class="c-page">
    <h4>TEA Project Technical White Paper</h4>
    <a class="c-a" :href="root + '/pdf/Tea_Tech_Whitepaper.pdf'" target="_blank"
      >English (PDF)</a
    >
    <a class="c-a dis" href="">Chinese (Coming soon)</a>
    <el-divider />
    <h4>TEA Project Token Economy White Paper</h4>
    <a class="c-a dis" href="">English (Coming soon)</a>
    <a
      class="c-a"
      href="/#/doc_list/%2F%E4%B8%AD%E6%96%87%E8%B5%84%E6%96%99%2Fchn_token_economy.md"
      >Chinese 中文</a
    >
    <el-divider />
    <h4>Pitch deck</h4>
    <a class="c-a" :href="root + '/pdf/Pitch_deck.pdf'" target="_blank"
      >English (PDF)</a
    >
    <a class="c-a dis" href="">Chinese 中文 Coming soon</a>
  </div>
</template>
<script>
import request from "../request";

export default {
  data() {
    return {
      root: request.SERVER_URL,
    };
  },
};
</script>
<style lang="scss" scoped>
.c-a {
  color: #35a696;
  font-size: 16px;
  display: block;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }

  &.dis {
    color: #999;
    font-weight: normal;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>