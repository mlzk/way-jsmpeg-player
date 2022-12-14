<template>
  <div
    class="jsmpeg-player"
    @mouseenter="handlePlayerMouseEnter"
    @mouseleave="handlePlayerMouseLeave"
  >
    <div
      class="player-header"
      :class="{ 'is-show': showTitle && inited }"
    >
      <slot
        v-if="$slots.title"
        name="title"
      />
      <span
        v-else-if="displayTitle"
        class="player-title"
      >
        {{ displayTitle }}
      </span>
      <div
        v-if="isRecording"
        class="recording-tips"
      >
        <div
          class="recording-icon"
          :class="recordingDuration % 2 == 0 ? 'is-hide' : ''"
        />
        REC <template v-if="showTitle"> {{ recordingDurationLabel }} </template>
      </div>
      <button
        v-if="showCloseBtn"
        class="close-btn jm-icon-close"
        title="关闭"
        type="button"
        @click="$emit('close')"
      ></button>
    </div>

    <div
      ref="canvas-wrap"
      class="player-canvas__wrap"
      @click="handleCanvasClick"
      @dblclick="toggleFullscreen"
      @mousemove.passive="handleCanvasMouseMove"
    >
      <img
        v-if="poster && !flags.noSignal && !inited"
        alt="poster"
        class="poster"
        :src="poster"
      />
      <!-- <player-state :text="loadingText"></player-state> -->
      <player-loading
        v-if="loading"
        :text="loadingText"
      ></player-loading>
      <!-- <canvas class="jsmpeg-canvas"
              ref="canvas" /> -->
      <template v-if="!loading && flags.noSignal">
        <template v-if="$slots['no-signal']">
          <slot name="no-signal" />
        </template>
        <template v-else>
          <div class="no-signal-text"> {{ noSignalText }} </div>
        </template>
      </template>
    </div>
    <div
      v-if="(!loading && !flags.noSignal && inited) || alwaysShowVideoTips"
      class="video-tips video-tips-top"
      :class="{ 'with-titleBar': showTitle && inited && displayTitle }"
    >
      <slot name="video-tips-top">
        <div class="video-tips-left video-tips-text">{{
          videoTipsTopLeft
        }}</div>
        <div class="video-tips-right video-tips-text">{{
          videoTipsTopRight
        }}</div>
      </slot>
    </div>
    <div
      v-if="(!loading && !flags.noSignal && inited) || alwaysShowVideoTips"
      class="video-tips video-tips-bottom"
      :class="{ 'with-toolbar': withToolbar }"
    >
      <slot name="video-tips-bottom">
        <div class="video-tips-left video-tips-text">{{
          videoTipsBottomLeft
        }}</div>
        <div class="video-tips-right video-tips-text">{{
          videoTipsBottomRight
        }}</div>
      </slot>
    </div>
    <player-settings
      ref="settingsPanel"
      :auto-stretch.sync="playerSettings.autoStretch"
      @settingsChange="settingsChange"
    />

    <div
      v-if="withToolbar"
      class="player-toolbar"
      :class="{ 'is-show': player && flags.playerHover }"
      @mouseenter="handleToolbarMouseEnter"
      @mouseleave="handleToolbarMouseLeave"
    >
      <button
        class="toolbar-btn play-btn"
        :class="paused ? 'jm-icon-video-play is-paused' : 'jm-icon-video-pause'"
        :title="paused ? '播放' : '暂停'"
        type="button"
        @click="handleToolbar('play')"
      ></button>
      <button
        class="toolbar-btn stop-btn jm-icon-stop"
        title="停止"
        type="button"
        @click="handleToolbar('stop')"
      ></button>
      <button
        class="toolbar-btn volume-btn"
        :class="isMuted ? 'jm-icon-muted' : 'jm-icon-volume'"
        title="音量"
        type="button"
        @click="handleToolbar('mute')"
      ></button>
      <player-volume
        :is-muted="isMuted"
        :value.sync="volume"
        @change="$emit('volume-change', volume)"
      ></player-volume>
      <div class="progress-bar">
        <span
          v-if="showDuration"
          class="current-time"
        >
          {{ currentTimeLabel }}
        </span>
      </div>
      <!-- <button class="snapshot-btn"
              title="画中画"
              @click="requesPip">
        <i class="jm-icon-copy-document"></i>
      </button> -->
      <button
        class="toolbar-btn snapshot-btn jm-icon-screenshots"
        title="截图"
        type="button"
        @click="handleToolbar('snapshot')"
      ></button>
      <button
        class="toolbar-btn recording-btn jm-icon-recording"
        :class="isRecording ? 'is-recording' : ''"
        :title="isRecording ? '停止录制' : '录制'"
        type="button"
        @click="handleToolbar('recording')"
      ></button>

      <button
        class="toolbar-btn setting-btn jm-icon-settings"
        title="设置"
        type="button"
        @click="settingsToggle"
      ></button>
      <button
        class="toolbar-btn fullscreen-btn"
        :class="
          flags.fullscreen ? 'jm-icon-exitfullscreen' : 'jm-icon-fullscreen'
        "
        :title="flags.fullscreen ? '取消全屏' : '全屏'"
        type="button"
        @click="handleToolbar('fullscreen')"
      ></button>
    </div>
  </div>
</template>

<script>
import JSMpeg from './jsmpeg'
import fullscreen from '@/utils/fullscreen'
import PlayerVolume from './components/player-volume'
import PlayerLoading from './components/player-loading'
import playerSettings from './components/player-settings'

/** 补零 */
function prefixPadZero(num) {
  return (num >= 10 ? '' : '0') + num
}

/**
 * 将秒转换为时：分：秒
 */
function formatTime(time) {
  const seconds = parseInt(time % 60),
    minutes = parseInt(time / 60),
    hours = parseInt(minutes / 60)
  return time < 3600
    ? `${prefixPadZero(minutes)}:${prefixPadZero(seconds)}`
    : `${prefixPadZero(hours)}:${prefixPadZero(minutes)}:${prefixPadZero(
        seconds
      )}`
}

const defaultOptions = () => ({
  /** 是否循环播放视频(仅静态文件)。默认true */
  autoplay: true,
  /** 是否解码音频。默认true */
  audio: true,
  /** 是否解码视频。默认true */
  video: true,
  /** 预览图像的URL，用来在视频播放之前作为海报显示。 */
  poster: null,
  /** 是否禁用后台播放，当web页面处于非活动状态时是否暂停播放，默认true（注意，浏览器通常会在非活动标签中限制JS） */
  pauseWhenHidden: true,
  /** 是否禁用WebGL，始终使用Canvas2D渲染器。默认.false */
  disableGl: false,
  /** 是否禁用WebAssembly并始终使用JavaScript解码器。默认false */
  disableWebAssembly: false,
  /** WebGL上下文是否创建必要的“截图”。默认false */
  preserveDrawingBuffer: true,
  /** 是否以块的形式加载数据(仅静态文件)。当启用时，回放可以在完整加载源之前开始，默认=true */
  progressive: true,
  /** 当不需要回放时是否推迟加载块。默认=progressive */
  throttled: true,
  /** 使用时，以字节为单位加载的块大小。默认(1 mb)1024*1024 */
  chunkSize: 1024 * 1024,
  /** 是否解码并显示视频的第一帧，一般用于设置画布大小以及使用初始帧作为"poster"图像。当使用自动播放或流媒体资源时，此参数不受影响。默认true */
  decodeFirstFrame: false,
  /** 流媒体时，以秒为单位的最大排队音频长度。（可以理解为能接受的最大音画不同步时间） */
  maxAudioLag: 0.25,
  /** 流媒体时，视频解码缓冲区的字节大小。默认的512 * 1024 (512 kb)。对于非常高的比特率，您可能需要增加此值。 */
  videoBufferSize: 1024 * 1024,
  /** 流媒体时，音频解码缓冲区的字节大小。默认的128 * 1024 (128 kb)。对于非常高的比特率，您可能需要增加此值。 */
  audioBufferSize: 256 * 1024
})

export default {
  name: 'JsmpegPlayer',
  components: {
    PlayerVolume,
    PlayerLoading,
    playerSettings
  },

  inject: {
    /** @returns {any} */
    rootTabs: {
      default: ''
    }
  },
  inheritAttrs: false,

  // #region 组件基础
  props: {
    url: String,
    title: String,
    options: {
      type: Object,
      default: defaultOptions
    },
    /** 是否自动播放流 设置为false 在收到源数据后会调用pause()暂停*/
    autoPlay: {
      type: Boolean,
      default: true
    },
    /** 是否自动拉伸 */
    autoStretch: {
      type: Boolean,
      default: false
    },
    /** 是否可关闭（单击关闭按钮，仅抛出事件） */
    closeable: Boolean,
    /** 是否处于后台，如el-tabs的切换，路由的切换等 */
    inBackground: Boolean,
    /** 海报图片地址，区别于jsmpeg原生的options.poster  */
    poster: {
      type: String
    },
    /** 是否总是展示贴片文案 */
    alwaysShowVideoTips: {
      type: Boolean,
      default: false
    },
    /** 是否自动初始化 */
    autoInit: {
      type: Boolean,
      default: true
    },
    /** 是否现实持续播放时间 */
    showDuration: {
      type: Boolean,
      default: false
    },
    /** 默认静音 */
    defaultMute: {
      type: Boolean,
      default: true
    },
    /** 是否需要工具栏 */
    withToolbar: {
      type: Boolean,
      default: true
    },
    /** 总是显示toolbar */
    alwaysShowToolbar: {
      type: Boolean,
      default: false
    },
    popoverVisibleArrow: {
      type: Boolean,
      default: true
    },
    noSignalText: {
      type: String,
      default: '无信号'
    },
    loadingText: {
      type: String,
      default: 'LOADING'
    },
    videoTipsTopLeft: {
      type: String,
      default: ''
    },
    videoTipsTopRight: {
      type: String,
      default: ''
    },
    videoTipsBottomLeft: {
      type: String,
      default: ''
    },
    videoTipsBottomRight: {
      type: String,
      default: ''
    }
  },
  // #endregion

  // #region 数据相关
  data() {
    return {
      loading: false,
      /** @type {import('./jsmpeg/types').JSMpegPlayer} */
      player: null,
      lastVolume: 0,
      inited: false, // 是否完成初始化
      flags: {
        /**
         * 是否处于无信号状态
         * 1.当流中断事件触发后，15秒后还没有收到ws消息
         * 2.ws关闭事件触发
         */
        noSignal: false,
        /** 是否已获取到视频分辨率 */
        gotResolution: false,
        /** 是否鼠标悬停在播放器内部 */
        playerHover: false,
        /** 是否处于全屏播放 */
        fullscreen: false,
        /** 是否首次播放 */
        firstTimePlay: true
      },
      playerSettings: {
        disableGl: false,
        /** canvas旋转角度 */
        rotationAngle: 0,
        /** 后台播放 */
        backgroudPlay: false,
        /** 自动拉伸 */
        autoStretch: false
      },
      timers: {
        noSignal: null,
        canvasMouseMove: null
      }
    }
  },
  computed: {
    /** @returns {string} */
    displayTitle() {
      return this.title
    },
    /** @returns {boolean} */
    paused() {
      return this.player?.paused ?? true
    },
    /** @returns {number} */
    volume: {
      /** @returns {number} */
      set(val) {
        if (!this.player) return

        if (val >= 1) {
          this.player.volume = 1
        } else if (val <= 0) {
          this.player.volume = 0
        } else {
          this.player.volume = val
        }

        if (this.player.volume === 0) {
          this.$emit('muted', this.player.volume)
        }
      },
      /** @returns {number} */
      get() {
        return this.player?.volume ?? 100
      }
    },
    /** @returns {number} */
    volumePercent() {
      return parseInt(this.volume * 100)
    },
    /** @returns {number} */
    currentTime: {
      set(val) {
        this.player.currentTime = val
      },
      get() {
        return this.player?.currentTime ?? 0
      }
    },
    /** @returns {string} */
    currentTimeLabel() {
      return formatTime(this.currentTime)
    },
    /** @returns {boolean} */
    isMuted() {
      return this.volume === 0
    },
    /** @returns {boolean} */
    isRecording() {
      return this.player && this.player.isRecording
    },
    /** @returns {number} */
    recordingDuration() {
      return this.player ? this.player.recordingDuration : 0
    },
    /** @returns {string} */
    recordingDurationLabel() {
      return formatTime(this.recordingDuration)
    },
    /** @returns {boolean} */
    showCloseBtn() {
      return this.closeable && !this.flags.fullscreen
    },
    /** @returns {boolean} */
    showTitle() {
      return this.flags.playerHover
      // &&
      // (this.$slots.title || this.title || this.showCloseBtn)
    }
  },
  watch: {
    alwaysShowToolbar: {
      handler: 'handleAlwaysShowToolbar',
      immediate: true
    },
    url() {
      // this.rotate(0)
      // if (this.player) {
      //   this.player.setUrl(nval)
      // } else {
      //   this.initPlayer()
      // }
      // if (!this.autoInit && this.url) {
      // }
      this.player?.destroy()

      if (this.url == null || this.url == '') {
        this.player = null
      } else {
        this.initPlayer()
      }
    },
    options: {
      deep: true,
      handler() {
        this.destroyPlayer()
        this.initPlayer()
      }
    },
    inBackground(nval) {
      if (nval) {
        this.intoBackground()
      } else {
        this.intoFront()
      }
    }
  },
  // #endregion

  // #region 生命周期
  mounted() {
    if (this.rootTabs) {
      this.rootTabs.$on('tab-click', (tab) => {
        try {
          // 处理el-tabs切换标签时，el-table右侧可能出现空白的Bug
          if (!tab.$el?.contains(this.$el)) {
            this.intoBackground()
            this.$emit('update:inBackground', true)
          }
        } catch (error) {
          console.log(error)
        }
      })
    }
    window.addEventListener('unload', () => {
      this.destroyPlayer()
    })

    this.init()
  },

  beforeDestroy() {
    this.destroyPlayer()
  },
  // #endregion

  methods: {
    handleDefalutPlayerSettings() {
      this.playerSettings.autoStretch = this.autoStretch
    },
    init() {
      if (this.autoInit) {
        this.initPlayer()
      }
    },
    settingsToggle() {
      this.$refs.settingsPanel.toggle()
    },
    settingsChange(res) {
      const { type, value } = res
      switch (type) {
        case 'autoStretch':
          this.settingPlayer('autoStretch', value)
          break
        case 'rotate':
          this.rotate(value, true)
          break
        default:
          break
      }
    },
    handleAlwaysShowToolbar() {
      if (this.alwaysShowToolbar) {
        this.flags.playerHover = true
      }
    },
    addStyles(element, styles) {
      for (var name in styles) {
        element.style[name] = styles[name]
      }
    },
    initPlayer() {
      if (!this.url || this.player) return
      this.inited = true
      this.loading = true
      this.handleDefalutPlayerSettings()
      this.player = new JSMpeg.Player(this.url, {
        contianer: this.$refs['canvas-wrap'],
        ...this.options,
        onVideoDecode: (decoder, time) => {
          this.$emit('video-decode', decoder, time)
        },
        onAudioDecode: (decoder, time) => {
          this.$emit('audio-decode', decoder, time)
        },
        onPlay: (player) => {
          this.loading = false
          console.log('onPlay')
          this.$emit('play', player)
          if (!this.autoPlay && this.flags.firstTimePlay) {
            setTimeout(() => {
              this.pause()
              this.flags.firstTimePlay = false
            }, 300)
          }
        },
        onPause: (player) => {
          this.loading = false
          console.log('onPause')
          this.$emit('pause', player)
        },
        onEnded: (player) => {
          console.log('onEnded')
          this.$emit('ended', player)
        },
        onStalled: (player) => {
          console.log('onStalled')
          this.$emit('stalled', player)
        },
        onSourceEstablished: (source) => {
          console.log('onSourceEstablished')

          this.flags.noSignal = false
          this.loading = false
          clearTimeout(this.timers.noSignal)
          this.timers.noSignal = null

          this.$emit('source-established', source)
        },
        onSourceCompleted: (source) => {
          console.log('onSourceCompleted')
          this.$emit('source-completed', source)
        },
        onSourceConnected: () => {
          console.log('onSourceConnected')
          clearTimeout(this.timers.noSignal)
          this.loading = true
          this.flags.noSignal = false
          this.$emit('source-connected')
        },
        onSourceStreamInterrupt: () => {
          console.log('onSourceStreamInterrupt')
          this.loading = true
          clearTimeout(this.timers.noSignal)

          this.timers.noSignal = setTimeout(this.handleNoSignal, 15000)
          this.$emit('source-interrupt')
        },
        onSourceStreamContinue: () => {
          console.log('onSourceStreamContinue')
          clearTimeout(this.timers.noSignal)
          this.timers.noSignal = null
          this.loading = false
          this.flags.noSignal = false
          this.$emit('source-continue')
        },
        onSourceClosed: () => {
          console.log('onSourceClosed')
          clearTimeout(this.timers.noSignal)
          this.$emit('source-closed')
          this.handleNoSignal()
        },
        onResolutionDecode: (width, height) => {
          // 从流中获取到视频的分辨率
          this.flags.gotResolution = true
          this.settingPlayer('autoStretch', this.playerSettings.autoStretch)
          this.$emit('resolution-decode', width, height)
        }
      })

      this.playerSettings.backgroudPlay = !this.options.pauseWhenHidden

      if (this.defaultMute) {
        this.volume = 0
      }

      this.timers.noSignal = setTimeout(this.handleNoSignal, 15000)

      for (const key in this.playerSettings) {
        this.settingPlayer(key, this.playerSettings[key])
      }

      console.log('player', this.player)
    },
    rotate(angle, append = false) {
      this.player.rotate(angle, append)
    },

    // #region 方法
    /**
     * 进入画中画模式
     * @deprecated 未实现
     */
    requesPip() {
      // if (!document.pictureInPictureElement) {
      //   this.$refs.canvas.requestPictureInPicture()
      // }
    },
    /**
     * 退出画中画模式
     * @deprecated 未实现
     */
    exitPip() {
      // document.exitPictureInPicture()
    },
    /**
     * 切换全屏模式
     */
    toggleFullscreen() {
      if (this.flags.fullscreen) {
        fullscreen.exit(this.$el)
      } else {
        fullscreen.request(this.$el, () => {
          this.flags.fullscreen = false
        })
      }
      this.flags.fullscreen = !this.flags.fullscreen
    },
    play() {
      if (!this.url) return

      this.loading = true
      if (!this.player) {
        this.initPlayer()
      }
      this.player?.play()
    },
    /**
     * 切换播放模式
     */
    togglePlay() {
      if (this.paused) {
        this.play()
      } else {
        this.pause()
      }
    },
    pause() {
      this.player?.pause()
    },
    intoFront() {
      this.player?.intoFront()
    },
    intoBackground() {
      this.player?.intoBackground()
    },
    stop(clear) {
      this.player?.stop(clear)
    },
    nextFrame() {
      this.player?.nextFrame()
    },
    destroyPlayer() {
      this.stop()
      this.player?.destroy()
      this.player = null
      this.inited = false
      this.flags = {
        noSignal: false,
        gotResolution: false,
        playerHover: false,
        fullscreen: false,
        firstTimePlay: true
      }
      this.$refs.settingsPanel.hide()
    },
    setVolume(val) {
      if (0 < val < 1 || val == 0 || val == 1) {
        this.volume = val
        this.$emit('volume-change', this.volume)
      }
    },
    mute() {
      this.lastVolume = this.volume
      this.volume = 0
    },
    toggleMute() {
      if (this.isMuted) {
        this.volume = this.lastVolume ? this.lastVolume : 1
      } else {
        this.mute()
      }
      this.$emit('volume-change', this.volume)
    },
    /** 截图 */
    snapshot() {
      this.player?.snapshot(this.displayTitle)
    },
    recording() {
      this.player?.recording(this.title)
    },

    /**
     * @param
     */
    settingPlayer(optionName, value) {
      if (!this.player) return
      switch (optionName) {
        case 'autoStretch':
          if (!this.flags.gotResolution) return

          // eslint-disable-next-line no-case-declarations
          const canvas = this.player.canvas
          if (value) {
            if (canvas.width > canvas.height) {
              canvas.style.width = '100%'
            } else {
              canvas.style.height = '100%'
            }
          } else {
            canvas.style.width = ''
            canvas.style.height = ''
          }
          this.playerSettings.autoStretch = value
          break
        default:
          this.player?.setOption(optionName, value)
          break
      }
      console.log(value)
    },
    // #endregion

    handleToolbar(cmd) {
      if (!this.player) return

      switch (cmd) {
        case 'play':
          this.togglePlay()
          break
        case 'stop':
          this.stop()
          break
        case 'mute':
          this.toggleMute()
          break
        case 'snapshot':
          this.snapshot()
          break
        case 'recording':
          this.recording()
          break
        case 'fullscreen':
          this.toggleFullscreen()
          break
      }
    },
    handleNoSignal() {
      this.flags.noSignal = true
      this.loading = false
      this.stop()
      this.$emit('no-signal')
    },
    handlePlayerMouseEnter() {
      this.flags.playerHover = true
    },
    handleCanvasMouseMove() {
      this.flags.playerHover = true
      clearTimeout(this.timers.canvasMouseMove)
      this.timers.canvasMouseMove = setTimeout(() => {
        if (!this.alwaysShowToolbar) this.flags.playerHover = false
      }, 3000)
    },
    handlePlayerMouseLeave() {
      clearTimeout(this.timers.canvasMouseMove)
      if (!this.alwaysShowToolbar) this.flags.playerHover = false
    },
    handleCanvasClick() {},
    handleToolbarMouseEnter() {
      this.flags.playerHover = true
      clearTimeout(this.timers.canvasMouseMove)
    },
    handleToolbarMouseLeave() {}
  }
}
</script>

<style lang="scss" src="./styles/index.scss"></style>
