<template>
  <div class="player-loading">
    <div class="loading">
      <div class="loading-text">
        <span
          v-for="item in splitText"
          :key="item"
          class="loading-text-words"
          >{{ item }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerLoading',
  props: {
    text: {
      default: 'loading',
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
    splitText() {
      return this.text.split('')
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.player-loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  user-select: none;
  @import url(https://fonts.googleapis.com/css?family=Quattrocento+Sans);

  @mixin position-center($text-align: center) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: $text-align;
  }

  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 9999;
  }

  .loading-text {
    @include position-center;
    user-select: none;
    width: 100%;
    height: 100px;
    line-height: 100px;
    span {
      display: inline-block;
      margin: 0 5px;
      color: #fff;
      font-family: 'Quattrocento Sans', sans-serif;
      @for $i from 0 through 6 {
        &:nth-child(#{$i + 1}) {
          filter: blur(0px);
          animation: blur-text 1.5s (#{$i/5}) + s infinite linear alternate;
        }
      }
    }
  }

  @keyframes blur-text {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(4px);
    }
  }
}
</style>
