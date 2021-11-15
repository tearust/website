<template>
<div class="x-page">


<div class="x-body">
  <Part1 />
  <Part2 />
</div>



</div>
</template>
<script>
import Part1 from './hh/Part1';
import Part2 from './hh/Part2';
export default {
  components: {
    Part1,
    Part2,
  }
}
</script>
<style lang="scss">
.ww{
  width: 1140px;
  margin: 0 auto;
}

.x-page{

  
}

.x-body{
  min-height: 800px;
}

</style>