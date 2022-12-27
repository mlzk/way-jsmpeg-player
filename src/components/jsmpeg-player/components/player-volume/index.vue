<template>
  <div class="player-volume">
    <div class="slider-bar">
      <VueSlideBar
        :value="handleValue"
        @input="handleChange"
      >
      </VueSlideBar>
    </div>
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'
export default {
  name: 'PlayerVolume',
  components: {
    VueSlideBar
  },
  props: {
    isMuted: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  computed: {
    handleValue() {
      console.log(this.value)
      return this.value * 100 > 100 ? 100 : this.value * 100
    }
  },
  watch: {},
  methods: {
    handleChange(val) {
      this.$emit('update:value', val / 100)
      this.$emit('change', val / 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.player-volume {
  display: flex;
  width: 100px;
  align-items: center;

  .slider-bar {
    width: 80px;

    ::v-deep {
      .vue-slide-bar-component {
        padding-top: 3px !important;
      }
      .vue-slide-bar-tooltip {
        opacity: 0;
      }
    }
  }
  .dot {
    width: 5px;
    height: 5px;
  }
}
</style>
