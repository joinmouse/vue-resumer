<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
    </div>

    <div class="actions">
      <el-button type="primary" class="primary">预览</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang="scss" scoped>
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    >.wrapper {
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 16px;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {  
        font-size: 24px;
        color: #000;
      }
    }
    >.actions .primary {
      margin-right: 3em;
      cursor: pointer;
    }
    
  }
</style>

