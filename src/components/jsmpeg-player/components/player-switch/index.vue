<template>
  <div class="player-switch">
    <input
      id="s2"
      checked
      class="switch"
      type="checkbox"
      @click="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: 'PlayerSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChange() {
      this.$emit('unpdate:value', !this.value)
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/input.scss';
</style>
