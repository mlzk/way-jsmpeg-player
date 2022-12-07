<template>
  <div class="way-popover">
    <div
      v-if="visible"
      class="popover"
    >
      <slot
        name="content"
        :close="close"
      ></slot>
    </div>
    <span
      ref="triggerWrapper"
      style="display: inline-block"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'way-popover',
  data() {
    return {
      visible: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.way-popover {
  position: relative;

  .popover {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.8);
  }

  &:hover {
    .popover {
      display: block;
    }
  }
}
</style>
