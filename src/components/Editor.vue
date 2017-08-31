<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
         {{resume[item.field]}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      selected: 'profile',
      resume: {
        config: [
          { field: 'profile', icon: 'id' },
          { field: 'work history', icon: 'work' },
          { field: 'education', icon: 'book' },
          { field: 'projects', icon: 'heart' },
          { field: 'awards', icon: 'cup' },
          { field: 'contacts', icon: 'phone' }
        ],
        profile: {
          name: '',
          city: '',
          title: ''
        },
        'work history': [],
        education: [],
        projects: [],
        awards: [],
        contacts: []
      }
    }
  }
}
</script>

<style lang="scss">
  #editor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    > nav {
      width: 80px;
      color: white;
      background: black;
      > ol li{
        height: 48px;
        margin-top: 16px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active {
          background: white;
          color: black;
        }
      }
      svg.icon {
        height: 30px;
        width: 30px;
      }
    }
    ol {
      list-style: none;
    }
  } 
</style>


