import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: 'wuqi',
        city: 'wuhan',
        title: '前端工程师',
        birthday: '1995-04-20'
      },
      workHistory: [
        {company: '鸡飞狗跳公司', content: '公司专注于web安全领域，'},
        {company: '狗急跳墙公司', content: '公司专注于移动安全领域'}
      ],
      education: [
        {school: '黄志诚警官大学', content: '本科'},
        {school: '韩琛古惑仔高中', content: '高中'}
      ],
      projects: [
        {name: 'project A', content: '文字'},
        {name: 'project B', content: '文字'}
      ],
      awards: [
        {name: '五好青年', content: '连续十次获得「五好青年」奖励'},
        {name: '三好学生'}
      ],
      contacts: [
        {contact: 'phone', content: '17317588592'},
        {contact: 'qq', content: '908380434'}
      ]
    }
  },
  mutations: {
    switchTab (state, payload) {
      state.selected = payload
    }
  }
})
