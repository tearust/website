<template>
  <div class="c-page">
    <h4>TEA Project Technical Whitepaper</h4>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FLegal_Disclaimer.md">
      Legal Disclaimer
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FIntroduction.md">
      Introduction
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FProblem_Statement.md">
      Problem Statement
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FOur_Solution.md">
      Our Solution
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FTEA_Components.md">
      TEA Components
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FTokenomics.md">
      Tokenomics
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FProduct_Roadmap.md">
      Product Roadmap
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FAppendix_A.md">
      Appendix A
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FAppendix_B.md">
      Appendix B
    </a>
    <a class="c-a" href="/#/doc_list/%2FWhitepaper%2FBibliography.md">
      Bibliography
    </a>
    
    <el-divider />
    <!-- <h4>TEA Project Token Economy White Paper</h4>
    <a class="c-a dis" href="">English (Coming soon)</a>
    <a class="c-a" href="/#/doc_list/%2FWhat_is_TEA%3F%2FToken_economy.md"
      >English</a
    >
    <a
      class="c-a"
      href="/#/doc_list/%2F%E4%B8%AD%E6%96%87%E8%B5%84%E6%96%99%2Fchn_token_economy.md"
      >Chinese 中文</a
    >
    <el-divider /> -->
    <h4>Pitch Deck</h4>
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