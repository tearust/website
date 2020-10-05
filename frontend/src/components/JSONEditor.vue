<template>

<codemirror
  v-model="code" 
  :options="cmOptions"
  class="cm"
/>

</template>
<script>
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/base16-dark.css'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/indent-fold.js'
import 'codemirror/addon/fold/markdown-fold.js'
import 'codemirror/addon/fold/xml-fold.js'
import util from '../util';

export default {
  data(){
    return {
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-yaml',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
      }
    }
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function,
      required: true
    },
    mode: {
      type: String
    }
  },
  watch: {
    text(){
      this.code = this.text;
    }
  },
  created(){
    this.editor = null;
  },
  mounted(){
    // const el = document.getElementById(this.uuid);
    // const mode = this.mode || 'code';
    // const config = {
    //   mode: this.mode || 'code',
    // };
    // if(mode === 'yaml'){
    //   config.inYaml = true;
    //   config.mode = 'code';
    // }
    // if(mode === 'yaml'){
    //   config.onChange = ()=>{
    //     try{
    //       const yaml = this.editor.getText();
    //       this.onChange(yaml);
    //     }catch(e){
    //       alert('invalid json formatter');
    //     }
    //   };
    // }
    // else if(mode === 'code'){
    //   config.onChangeText = (text)=>{
    //     try{
    //       const json = JSON.parse(text);
    //       this.onChange(JSON.parse(text));
    //     }catch(e){
    //       alert('invalid json formatter');
    //     }
    //   };
    // }
    // else{
    //   config.onChangeJSON = (val)=>{
    //     this.onChange(val)
    //   };
    // }

    // this.editor = new JSONEditor(el, config, this.json);
    // if(mode === 'yaml'){
    //   this.editor.setText(this.json);
    // }
  }
}
</script>
<style lang="scss">
.cm{
  .CodeMirror{
    height: 100% !important;
    font-size: 15px !important;
  }
}
</style>