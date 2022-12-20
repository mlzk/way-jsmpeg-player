<template>
  <div class="player-switch">
    <input
      id="s2"
      :checked="value"
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
      this.$emit('update:value', !this.value)
      this.$emit('change', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/input.scss';
</style>
