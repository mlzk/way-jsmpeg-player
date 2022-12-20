<template>
  <div class="player-settings-container">
    <transition name="only-fade">
      <div
        v-if="visable"
        class="player-settings-mask"
        @click="hide"
      ></div>
    </transition>
    <transition name="slide-fade">
      <div
        v-if="visable"
        class="player-settings"
      >
        <div class="settings-item">
          <div class="icon"> </div>
          <div class="title"> 自动拉伸 </div>
          <div class="content">
            <player-switch
              :value.sync="isAutoStretch"
              @change="change"
            ></player-switch>
          </div>
        </div>
        <div class="settings-item">
          <div class="icon"> </div>
          <div class="title"> 旋转画面 </div>
          <div class="content">
            <button
              class="toolbar-btn jm-icon-rotate-left"
              title="向左旋转90度"
              type="button"
              @click="rotate(-90)"
            ></button>
            <button
              class="toolbar-btn jm-icon-rotate-right"
              title="向右旋转90度"
              type="button"
              @click="rotate(90)"
            ></button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PlayerSwitch from '../player-switch'
export default {
  name: 'PlayerSettings',
  components: {
    PlayerSwitch
  },
  props: {
    autoStretch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isAutoStretch: false,
      visable: false
    }
  },
  watch: {
    autoStretch: {
      handler: 'initAutoStretch',
      immediate: true
    }
  },
  methods: {
    toggle() {
      this.visable = !this.visable
    },
    show() {
      this.visable = true
    },
    hide() {
      this.visable = false
    },
    initAutoStretch() {
      this.isAutoStretch = this.autoStretch
    },
    change(val) {
      this.$emit('settingsChange', {
        type: 'autoStretch',
        value: val
      })
    },
    rotate(val) {
      this.$emit('settingsChange', {
        type: 'rotate',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.player-settings-container {
  user-select: none;
}
.player-settings-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 13;
  background: rgba(0, 0, 0, 0.1);
}
.player-settings {
  position: absolute;
  right: 0;
  top: 0;
  width: 30%;
  max-width: 180px;
  min-width: 100px;
  height: 100%;
  background: rgba(28, 28, 28, 0.9);
  text-shadow: 0 0 2px rgb(0 0 0 / 50%);
  transition: opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
  z-index: 15;
  overflow-y: auto;
  .settings-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    padding: 8px 10px;
    font-size: 13px;
    &:hover {
      background: rgba(#717171, 0.3);
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      .toolbar-btn {
        color: #fff;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.only-fade-enter-active {
  transition: all 0.3s ease;
}
.only-fade-leave-active {
  transition: all 0.3s ease;
}
.only-fade-enter, .only-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
