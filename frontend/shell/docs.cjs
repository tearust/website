const fs = require('fs');
const yaml = require('js-yaml');
const _ = require('lodash');
const marked = require('marked');

const root = process.cwd();

const OUT_DIR = root+'/docs';
const TEA_DOCS = root+'/../../tea-docs';
const SERVER_URL = 'http://64.227.49.206:3001';


const F = {

  async init(){
    fs.rmdirSync(OUT_DIR, {recursive: true});

    fs.mkdirSync(OUT_DIR);
  },

  async getConfigYaml(){
    const path = TEA_DOCS+'/config.yaml';
    const file_content = fs.readFileSync(path, {encoding: 'utf-8'});

    return new Promise((resolve)=>{
      yaml.safeLoadAll(file_content, (doc) => {
        resolve(doc.sort);
      })
    });
  },

  mdToHtml(md_content){
    const renderer = new marked.Renderer();
    renderer.link = function(href){
      let link = marked.Renderer.prototype.link.apply(this, arguments);

      if(/href="http/i.test(link)){
        link = link.replace("<a","<a target='_blank' ");
      }
      else{
        link = link.replace("<a","<a class='js_click_md'");
      }
      

      return link;
    };

    renderer.image = function(src){
      let img = marked.Renderer.prototype.image.apply(this, arguments);
      if(src.charAt(0) !== '/' && !/^[http|https]/.test(src)){
        const s_url = SERVER_URL;

        const img_file = _.last(src.split('/res/'));
        
        const img_src = s_url+'/res/'+img_file;

        return '<img src="'+img_src+'" />';
      }

      return img;
    }

    marked.setOptions({
      renderer: renderer
    });


    md_content = md_content.replace(/\[\/\/TEA\]/g, '<span style="margin-right: 0; font-size: 14px;" class="iconfont icon-a-TeaProject-T"></span>');

    return marked(md_content);
  },

  async start(){
    await F.init();

    const arr = await F.getConfigYaml();

    await F.loopArray(arr, TEA_DOCS, OUT_DIR);

    await F.copyLibs();
  },

  async loopArray(arr, root_path, out_path){
    for(let i=0, len=arr.length; i<len; i++){
      const json = arr[i];

      if(json.children){
        const dir_path = out_path+'/'+json.name;
        if(!fs.existsSync(dir_path)){
          fs.mkdirSync(dir_path);
        }

        await F.loopItem(root_path+'/'+json.path, dir_path);
        await F.loopArray(json.children, root_path+'/'+json.name, dir_path);
      }
      else{
        await F.loopItem(
          json.path ? 
          (_.startsWith(json.path, '/') ? TEA_DOCS+json.path : root_path+json.path) : 
          root_path+'/'+json.name, out_path);
      }
    }
  },

  async loopItem(path, out_path){
    let file_name = _.last(path.split('/')).replace('.md', '');
    if(file_name === 'README'){
      file_name = 'readme';
    }

    // console.log(file_name, out_path);
    try{
      const md_content = fs.readFileSync(path, {encoding:'utf-8'});
      let html = F.mdToHtml(md_content);

      const html_tpl = fs.readFileSync(root+'/shell/md.tpl.html', {encoding: 'utf-8'});

      html = html_tpl.replace('{{$}}', html);
      
      const v = Date.now().toString();
      html = html.replace(/\{\{v\}\}/g, v);

      const nav_html = await F.getNavHtml();
      html = html.replace(/\{\{NAV\}\}/g, nav_html);

      const file_out_path = out_path+'/'+file_name+'.html';
      fs.writeFileSync(file_out_path, html);
    }catch(e){
      console.error('error for ['+file_name+'] with path ['+out_path+']');
    }
    

  },

  async copyLibs(){
    fs.mkdirSync(OUT_DIR+'/mdlibs');
    fs.copyFileSync(root+'/shell/mdlibs/index.css', OUT_DIR+'/mdlibs/index.css');
  },

  async getNavHtml(){
    const arr = await F.getConfigYaml();
    let html = '';
    for(let i=0, len=arr.length; i<len; i++){
      const json = arr[i];

      if(json.children){
        html += `<div class="a">${json.name}</div>`;

        html += '';
        for(let j=0, jlen=json.children.length; j<jlen; j++){
          const t = json.children[j];
          let href = `/docs/${encodeURIComponent(json.name)}/${encodeURIComponent(t.name.replace('.md', '.html'))}`;
          if(t.path){
            href = `/docs/${t.path.replace('.md', '.html')}`
          }

          html += `<div class="b"><a href="${href}">${t.name}</a></div>`
        }
        html += '';
      }
      else{
        
      }
    }

    return html;

  }
};


F.start();

