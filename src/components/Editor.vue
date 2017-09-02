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
        <!--resume[item.field]属性同时支持数组和对象-->
        <div v-if="resume[item.field] instanceof Array">
          <!--数组时候的处理-->
          <div class="submit" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value">
            </div>
            <hr>
          </div>
        </div>
        <!--对象时候的处理-->
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  computed: {
    selected: {
      get () {
        return this.$store.state.selected
      },
      set (value) {
        return this.$store.commit('switchTab', value)
      }
    },
    resume () {
      return this.$store.state.resume
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  #editor {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    ol {
      list-style: none;
    }
    > nav {
      min-width: 80px;
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
        svg.icon {
          height: 30px;
          width: 30px;
        }
      }
    }
    .panels {
      flex-grow: 1;
      > li {
        padding: 24px;
      }
    }
    .resumeField {
      label {
        display: block;
      }
      input[type=text] {
        width: 100%;
        height: 40px;
        padding: 0 8px;
        margin: 16px 0;
        border: 1px solid #ddd;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25)
      }
    }
  } 
</style>


