let PlanItemComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, default: 'The Single' },
    selected: { type: Boolean, default: false }
  },
  methods: {
    select() {
      this.$emit('select', this.name)
    }
  }
}

let PlanPicker = {
  components: { PlanItem: PlanItemComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Single', 'The Curious', 'Doppio'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { PlanPicker: PlanPicker }
})
.mount('#app')