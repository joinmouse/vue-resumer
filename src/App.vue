<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <Editor/>
      <Preview/>
    </main>  
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'app',
  components: {Topbar, Editor, Preview}
}
</script>

<style>
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #eaebec;
  }
  .page>main {
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
  #editor {
    width: 35%;
    background: #444;
  }
  #preview {
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
</style>
