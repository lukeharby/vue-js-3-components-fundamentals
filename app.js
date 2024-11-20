const app = Vue.createApp({
  data() {
    return {
      plans: ['The Single', 'The Curious', 'Doppio']
    }
  }
})
.component('plan', {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'The Single' }
  }
})
.mount('#app')