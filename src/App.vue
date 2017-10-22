<template>
  <div id="app" v-bind:class="{previewMode: previewModel}">
    <Topbar class="topbar" v-on:preview="preview" v-on:saveEditor="saveEditor($event)" v-on:signOut="signOut($event)" v-on:signIn="signIn($event)">
    </Topbar>  
    <div class="main">
      <Editor v-bind:resume="resume" class="editor">
      </Editor>
      <Preview v-bind:resume="resume" class="preview">
      </Preview>
      <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
    </div>
  </div>
</template>


<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'




export default {
  name: 'app',
  store,
  components: {Topbar, Editor, Preview},
  created () {
    document.body.insertAdjacentHTML('afterbegin', icon)
  }
}
</script>

<style lang="scss">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;
    >main {
      flex-grow: 1;  
      align-self: center;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 0 16px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  
  #editor {
    min-width: 35%;
    background: #444;
  }
  #preview {
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }

  svg.icon {
    height: 1em;
    width: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    font-size: 16px;
  }
</style>
