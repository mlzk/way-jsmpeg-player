/******/ ;(function () {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ // The require scope
  /******/ var __webpack_require__ = {}
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ !(function () {
    /******/ __webpack_require__.p = ''
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}

  // EXPORTS
  __webpack_require__.d(__webpack_exports__, {
    default: function () {
      return /* binding */ entry_lib
    }
  }) // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js

  /* eslint-disable no-var */
  // This file is imported into lib/wc client bundles.

  if (typeof window !== 'undefined') {
    var currentScript = window.document.currentScript
    if (false) {
      var getCurrentScript
    }

    var src =
      currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
    if (src) {
      __webpack_require__.p = src[1] // eslint-disable-line
    }
  }

  // Indicate to webpack that this file can be concatenated
  /* harmony default export */ var setPublicPath = null // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/jsmpeg-player/jsmpeg-player.vue?vue&type=template&id=25e32797&

  var render = function render() {
    var _vm = this,
      _c = _vm._self._c
    return _c(
      'div',
      {
        staticClass: 'jsmpeg-player',
        on: {
          mouseenter: _vm.handlePlayerMouseEnter,
          mouseleave: _vm.handlePlayerMouseLeave
        }
      },
      [
        _c(
          'div',
          {
            staticClass: 'player-header',
            class: {
              'is-show': _vm.showTitle
            }
          },
          [
            _vm.$slots.title
              ? _vm._t('title')
              : _vm.displayTitle
              ? _c(
                  'span',
                  {
                    staticClass: 'player-title'
                  },
                  [_vm._v(' ' + _vm._s(_vm.displayTitle) + ' ')]
                )
              : _vm._e(),
            _vm.isRecording
              ? _c(
                  'div',
                  {
                    staticClass: 'recording-tips'
                  },
                  [
                    _c('div', {
                      staticClass: 'recording-icon',
                      class: _vm.recordingDuration % 2 == 0 ? 'is-hide' : ''
                    }),
                    _vm._v(' REC '),
                    _vm.showTitle
                      ? [_vm._v(' ' + _vm._s(_vm.recordingDurationLabel) + ' ')]
                      : _vm._e()
                  ],
                  2
                )
              : _vm._e(),
            _vm.showCloseBtn
              ? _c('button', {
                  staticClass: 'close-btn jm-icon-close',
                  attrs: {
                    type: 'button',
                    title: '关闭'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.$emit('close')
                    }
                  }
                })
              : _vm._e()
          ],
          2
        ),
        _c(
          'div',
          {
            directives: [
              {
                name: 'loading',
                rawName: 'v-loading',
                value: _vm.loading,
                expression: 'loading'
              }
            ],
            ref: 'canvas-wrap',
            staticClass: 'player-canvas__wrap',
            attrs: {
              'element-loading-text': _vm.loadingText
            },
            on: {
              '&mousemove': function mousemove($event) {
                return _vm.handleCanvasMouseMove.apply(null, arguments)
              },
              click: _vm.handleCanvasClick,
              dblclick: _vm.toggleFullscreen
            }
          },
          [
            !_vm.loading && _vm.flags.noSignal
              ? [
                  _vm.$slots['no-signal']
                    ? [_vm._t('no-signal')]
                    : [
                        _c(
                          'div',
                          {
                            staticClass: 'no-signal-text'
                          },
                          [_vm._v(' ' + _vm._s(_vm.noSignalText) + ' ')]
                        )
                      ]
                ]
              : _vm._e()
          ],
          2
        ),
        _vm.withToolbar
          ? _c(
              'div',
              {
                staticClass: 'player-toolbar',
                class: {
                  'is-show': _vm.player && _vm.flags.playerHover
                },
                on: {
                  mouseenter: _vm.handleToolbarMouseEnter,
                  mouseleave: _vm.handleToolbarMouseLeave
                }
              },
              [
                _c('button', {
                  staticClass: 'toolbar-btn play-btn',
                  class: _vm.paused
                    ? 'jm-icon-video-play is-paused'
                    : 'jm-icon-video-pause',
                  attrs: {
                    type: 'button',
                    title: _vm.paused ? '播放' : '暂停'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('play')
                    }
                  }
                }),
                _c('button', {
                  staticClass: 'toolbar-btn stop-btn jm-icon-stop',
                  attrs: {
                    title: '停止',
                    type: 'button'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('stop')
                    }
                  }
                }),
                _c('button', {
                  directives: [
                    {
                      name: 'popover',
                      rawName: 'v-popover:popover-volume',
                      arg: 'popover-volume'
                    }
                  ],
                  staticClass: 'toolbar-btn volume-btn',
                  class: _vm.isMuted ? 'jm-icon-muted' : 'jm-icon-volume',
                  attrs: {
                    type: 'button',
                    title: '音量'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('mute')
                    }
                  }
                }),
                _c(
                  'div',
                  {
                    staticClass: 'progress-bar'
                  },
                  [
                    _vm.showDuration
                      ? _c(
                          'span',
                          {
                            staticClass: 'current-time'
                          },
                          [_vm._v(' ' + _vm._s(_vm.currentTimeLabel) + ' ')]
                        )
                      : _vm._e()
                  ]
                ),
                _c('button', {
                  staticClass: 'toolbar-btn snapshot-btn jm-icon-screenshots',
                  attrs: {
                    title: '截图',
                    type: 'button'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('snapshot')
                    }
                  }
                }),
                _c('button', {
                  staticClass: 'toolbar-btn recording-btn jm-icon-recording',
                  class: _vm.isRecording ? 'is-recording' : '',
                  attrs: {
                    type: 'button',
                    title: _vm.isRecording ? '停止录制' : '录制'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('recording')
                    }
                  }
                }),
                _c('button', {
                  directives: [
                    {
                      name: 'popover',
                      rawName: 'v-popover:popover-setting',
                      arg: 'popover-setting'
                    }
                  ],
                  staticClass: 'toolbar-btn setting-btn jm-icon-settings',
                  attrs: {
                    title: '设置',
                    type: 'button'
                  }
                }),
                _c('button', {
                  staticClass: 'toolbar-btn fullscreen-btn',
                  class: _vm.flags.fullscreen
                    ? 'jm-icon-exitfullscreen'
                    : 'jm-icon-fullscreen',
                  attrs: {
                    type: 'button',
                    title: _vm.flags.fullscreen ? '取消全屏' : '全屏'
                  },
                  on: {
                    click: function click($event) {
                      return _vm.handleToolbar('fullscreen')
                    }
                  }
                })
              ]
            )
          : _vm._e(),
        _c(
          'div',
          {
            staticClass: 'overlayers'
          },
          [
            _vm.withToolbar
              ? [
                  _c(
                    'el-popover',
                    {
                      ref: 'popover-setting',
                      attrs: {
                        'popper-class': 'jsmpeg-player-popover popover-setting',
                        trigger: 'hover',
                        placement: 'top-end',
                        'visible-arrow': _vm.popoverVisibleArrow,
                        'append-to-body': false
                      }
                    },
                    [
                      _c(
                        'div',
                        {
                          staticClass: 'setting-item',
                          attrs: {
                            highlight: ''
                          }
                        },
                        [
                          _c(
                            'span',
                            {
                              staticClass: 'label'
                            },
                            [_vm._v('自动拉伸')]
                          ),
                          _c(
                            'div',
                            {
                              staticClass: 'input__wrap'
                            },
                            [
                              _c('el-switch', {
                                staticClass: 'input',
                                on: {
                                  change: function change($event) {
                                    return _vm.settingPlayer(
                                      'autoStretch',
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.playerSettings.autoStretch,
                                  callback: function callback($$v) {
                                    _vm.$set(
                                      _vm.playerSettings,
                                      'autoStretch',
                                      $$v
                                    )
                                  },
                                  expression: 'playerSettings.autoStretch'
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _c(
                        'div',
                        {
                          staticClass: 'setting-item',
                          attrs: {
                            highlight: ''
                          }
                        },
                        [
                          _c(
                            'span',
                            {
                              staticClass: 'label'
                            },
                            [_vm._v('旋转画面')]
                          ),
                          _c(
                            'div',
                            {
                              staticClass: 'input__wrap'
                            },
                            [
                              _c('button', {
                                staticClass: 'toolbar-btn jm-icon-rotate-left',
                                attrs: {
                                  title: '向左旋转90度',
                                  type: 'button'
                                },
                                on: {
                                  click: function click($event) {
                                    return _vm.rotate(-90, true)
                                  }
                                }
                              }),
                              _c('button', {
                                staticClass: 'toolbar-btn jm-icon-rotate-right',
                                attrs: {
                                  title: '向右旋转90度',
                                  type: 'button'
                                },
                                on: {
                                  click: function click($event) {
                                    return _vm.rotate(90, true)
                                  }
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _c(
                    'el-popover',
                    {
                      ref: 'popover-volume',
                      attrs: {
                        'popper-class': 'jsmpeg-player-popover popover-volume',
                        trigger: 'hover',
                        placement: 'top',
                        'visible-arrow': _vm.popoverVisibleArrow,
                        'append-to-body': false
                      }
                    },
                    [
                      _c(
                        'div',
                        {
                          staticClass: 'volume-value'
                        },
                        [_vm._v(_vm._s(_vm.volumePercent))]
                      ),
                      _c('el-slider', {
                        attrs: {
                          vertical: '',
                          height: '120px',
                          max: 1,
                          min: 0,
                          step: 0.01,
                          'show-tooltip': false,
                          marks: {
                            0: '',
                            0.5: '',
                            1: ''
                          }
                        },
                        on: {
                          change: function change($event) {
                            return _vm.$emit('volume-change', _vm.volume)
                          }
                        },
                        model: {
                          value: _vm.volume,
                          callback: function callback($$v) {
                            _vm.volume = $$v
                          },
                          expression: 'volume'
                        }
                      })
                    ],
                    1
                  )
                ]
              : _vm._e()
          ],
          2
        )
      ]
    )
  }
  var staticRenderFns = [] // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/utils/index.js

  function Now() {
    return window.performance
      ? window.performance.now() / 1000
      : Date.now() / 1000
  }
  function Fill(array, value) {
    if (array.fill) {
      array.fill(value)
    } else {
      for (var i = 0; i < array.length; i++) {
        array[i] = value
      }
    }
  }
  function Base64ToArrayBuffer(base64) {
    var binary = window.atob(base64)
    var length = binary.length
    var bytes = new Uint8Array(length)
    for (var i = 0; i < length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return bytes.buffer
  }

  /**
   *
   * @param {object} param
   * @param {string|object|Array} param.data 数据，传入后url参数将被忽略
   * @param {string} param.url 文件下载地址
   * @param {string} param.name 文件名称
   * @param {string} param.mimeType 文件mime类型
   * @returns
   */
  function download(blob) {
    var name =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : 'JSMpeg_' + Date.now()
    var mimeType =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ''
    if (!blob) return
    var a = document.createElement('a')
    a.style.display = 'none'
    a.download = name
    if (typeof blob === 'string') {
      a.href = blob
    } else {
      blob =
        blob instanceof Blob
          ? blob
          : new Blob(blob instanceof Array ? blob : [blob], {
              type: mimeType
            })
      a.href = URL.createObjectURL(blob)
    }
    setTimeout(function () {
      a.click()
    }, 0)
    setTimeout(function () {
      a.remove()
    }, 1)
    if (blob instanceof Blob) {
      setTimeout(function () {
        URL.revokeObjectURL(blob)
      }, 1000)
    }
  } // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/audio-output/webaudio.js
  function _typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      _typeof(obj)
    )
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor)
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, 'string')
    return _typeof(key) === 'symbol' ? key : String(key)
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var WebAudioOut = /*#__PURE__*/ (function () {
    /** @type {AudioContext} */

    /** @type {GainNode} */

    /** @type {GainNode} */

    /** @type {number} */

    /** @type {number} */

    /** @type {number} */

    /** @type {boolean} */

    /** @type {boolean} */

    function WebAudioOut(options) {
      _classCallCheck(this, WebAudioOut)
      _defineProperty(this, 'context', void 0)
      _defineProperty(this, 'gain', void 0)
      _defineProperty(this, 'destination', void 0)
      _defineProperty(this, 'startTime', void 0)
      _defineProperty(this, 'buffer', void 0)
      _defineProperty(this, 'wallclockStartTime', void 0)
      _defineProperty(this, 'volume', void 0)
      _defineProperty(this, 'enabled', void 0)
      _defineProperty(this, 'unlocked', void 0)
      this.context = WebAudioOut.CachedContext =
        WebAudioOut.CachedContext ||
        new (window.AudioContext || window.webkitAudioContext)()
      this.gain = this.context.createGain()
      this.destination = this.gain

      // Keep track of the number of connections to this AudioContext, so we
      // can safely close() it when we're the only one connected to it.
      this.gain.connect(this.context.destination)
      this.context._connections = (this.context._connections || 0) + 1
      this.startTime = 0
      this.buffer = null
      this.wallclockStartTime = 0
      this.volume = 1
      this.enabled = true
      this.unlocked = !WebAudioOut.NeedsUnlocking()
      Object.defineProperty(this, 'enqueuedTime', {
        get: this.getEnqueuedTime
      })
    }
    _createClass(
      WebAudioOut,
      [
        {
          key: 'destroy',
          value: function destroy() {
            this.gain.disconnect()
            this.context._connections--
            if (this.context._connections === 0) {
              this.context.close()
              WebAudioOut.CachedContext = null
            }
          }
        },
        {
          key: 'play',
          value: function play(sampleRate, left, right) {
            if (!this.enabled) {
              return
            }

            // If the context is not unlocked yet, we simply advance the start time
            // to "fake" actually playing audio. This will keep the video in sync.
            if (!this.unlocked) {
              var ts = Now()
              if (this.wallclockStartTime < ts) {
                this.wallclockStartTime = ts
              }
              this.wallclockStartTime += left.length / sampleRate
              return
            }
            this.gain.gain.value = this.volume
            var buffer = this.context.createBuffer(2, left.length, sampleRate)
            buffer.getChannelData(0).set(left)
            buffer.getChannelData(1).set(right)
            var source = this.context.createBufferSource()
            source.buffer = buffer
            source.connect(this.destination)
            var now = this.context.currentTime
            var duration = buffer.duration
            if (this.startTime < now) {
              this.startTime = now
              this.wallclockStartTime = Now()
            }
            source.start(this.startTime)
            this.startTime += duration
            this.wallclockStartTime += duration
          }
        },
        {
          key: 'stop',
          value: function stop() {
            // Meh; there seems to be no simple way to get a list of currently
            // active source nodes from the Audio Context, and maintaining this
            // list ourselfs would be a pain, so we just set the gain to 0
            // to cut off all enqueued audio instantly.
            this.gain.gain.value = 0
          }
        },
        {
          key: 'getEnqueuedTime',
          value: function getEnqueuedTime() {
            // The AudioContext.currentTime is only updated every so often, so if we
            // want to get exact timing, we need to rely on the system time.
            return Math.max(this.wallclockStartTime - Now(), 0)
          }
        },
        {
          key: 'resetEnqueuedTime',
          value: function resetEnqueuedTime() {
            this.startTime = this.context.currentTime
            this.wallclockStartTime = Now()
          }
        },
        {
          key: 'unlock',
          value: function unlock(callback) {
            if (this.unlocked) {
              if (callback) {
                callback()
              }
              return
            }
            this.unlockCallback = callback

            // Create empty buffer and play it
            var buffer = this.context.createBuffer(1, 1, 22050)
            var source = this.context.createBufferSource()
            source.buffer = buffer
            source.connect(this.destination)
            source.start(0)
            setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0)
          }
        },
        {
          key: 'checkIfUnlocked',
          value: function checkIfUnlocked(source, attempt) {
            if (
              source.playbackState === source.PLAYING_STATE ||
              source.playbackState === source.FINISHED_STATE
            ) {
              this.unlocked = true
              if (this.unlockCallback) {
                this.unlockCallback()
                this.unlockCallback = null
              }
            } else if (attempt < 10) {
              // Jeez, what a shit show. Thanks iOS!
              setTimeout(
                this.checkIfUnlocked.bind(this, source, attempt + 1),
                100
              )
            }
          }
        }
      ],
      [
        {
          key: 'NeedsUnlocking',
          value: function NeedsUnlocking() {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent)
          }
        },
        {
          key: 'IsSupported',
          value: function IsSupported() {
            return window.AudioContext || window.webkitAudioContext
          }
        }
      ]
    )
    return WebAudioOut
  })()
  _defineProperty(WebAudioOut, 'CachedContext', null) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/audio-output/index.js

  var AudioOutput = {
    WebAudio: WebAudioOut
  }
  /* harmony default export */ var audio_output = AudioOutput // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/buffer.js
  function buffer_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (buffer_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      buffer_typeof(obj)
    )
  }
  function buffer_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function buffer_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        buffer_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function buffer_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) buffer_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) buffer_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function buffer_defineProperty(obj, key, value) {
    key = buffer_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function buffer_toPropertyKey(arg) {
    var key = buffer_toPrimitive(arg, 'string')
    return buffer_typeof(key) === 'symbol' ? key : String(key)
  }
  function buffer_toPrimitive(input, hint) {
    if (buffer_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (buffer_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }
  var BitBuffer = /*#__PURE__*/ (function () {
    /** @type {Uint8Array} */

    /** @type {number} */

    /** @type {1|2} */

    /** @type {number} */

    function BitBuffer(bufferOrLength) {
      var mode =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : BitBuffer.MODE.EXPAND
      buffer_classCallCheck(this, BitBuffer)
      buffer_defineProperty(this, 'bytes', void 0)
      buffer_defineProperty(this, 'byteLength', void 0)
      buffer_defineProperty(this, 'mode', void 0)
      buffer_defineProperty(this, 'index', void 0)
      if (buffer_typeof(bufferOrLength) === 'object') {
        this.bytes =
          bufferOrLength instanceof Uint8Array
            ? bufferOrLength
            : new Uint8Array(bufferOrLength)
        this.byteLength = this.bytes.length
      } else {
        this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024)
        this.byteLength = 0
      }
      this.mode = mode
      this.index = 0
    }
    buffer_createClass(BitBuffer, [
      {
        key: 'resize',
        value: function resize(size) {
          var newBytes = new Uint8Array(size)
          if (this.byteLength !== 0) {
            this.byteLength = Math.min(this.byteLength, size)
            newBytes.set(this.bytes, 0, this.byteLength)
          }
          this.bytes = newBytes
          this.index = Math.min(this.index, this.byteLength << 3)
        }
      },
      {
        key: 'evict',
        value: function evict(sizeNeeded) {
          var bytePos = this.index >> 3,
            available = this.bytes.length - this.byteLength

          // If the current index is the write position, we can simply reset both
          // to 0. Also reset (and throw away yet unread data) if we won't be able
          // to fit the new data in even after a normal eviction.
          if (
            this.index === this.byteLength << 3 ||
            sizeNeeded > available + bytePos // emergency evac
          ) {
            this.byteLength = 0
            this.index = 0
            return
          } else if (bytePos === 0) {
            // Nothing read yet - we can't evict anything
            return
          }

          // Some browsers don't support copyWithin() yet - we may have to do
          // it manually using set and a subarray
          if (this.bytes.copyWithin) {
            this.bytes.copyWithin(0, bytePos, this.byteLength)
          } else {
            this.bytes.set(this.bytes.subarray(bytePos, this.byteLength))
          }
          this.byteLength = this.byteLength - bytePos
          this.index -= bytePos << 3
          return
        }
      },
      {
        key: 'write',
        value: function write(buffers) {
          var isArrayOfBuffers = buffer_typeof(buffers[0]) === 'object',
            totalLength = 0,
            available = this.bytes.length - this.byteLength

          // Calculate total byte length
          if (isArrayOfBuffers) {
            var _totalLength = 0
            for (var i = 0; i < buffers.length; i++) {
              _totalLength += buffers[i].byteLength
            }
          } else {
            totalLength = buffers.byteLength
          }

          // Do we need to resize or evict?
          if (totalLength > available) {
            if (this.mode === BitBuffer.MODE.EXPAND) {
              var newSize = Math.max(
                this.bytes.length * 2,
                totalLength - available
              )
              this.resize(newSize)
            } else {
              this.evict(totalLength)
            }
          }
          if (isArrayOfBuffers) {
            for (var _i = 0; _i < buffers.length; _i++) {
              this.appendSingleBuffer(buffers[_i])
            }
          } else {
            this.appendSingleBuffer(buffers)
          }
          return totalLength
        }
      },
      {
        key: 'appendSingleBuffer',
        value: function appendSingleBuffer(buffer) {
          buffer =
            buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
          this.bytes.set(buffer, this.byteLength)
          this.byteLength += buffer.length
        }
      },
      {
        key: 'findNextStartCode',
        value: function findNextStartCode() {
          for (var i = (this.index + 7) >> 3; i < this.byteLength; i++) {
            if (
              this.bytes[i] == 0x00 &&
              this.bytes[i + 1] == 0x00 &&
              this.bytes[i + 2] == 0x01
            ) {
              this.index = (i + 4) << 3
              return this.bytes[i + 3]
            }
          }
          this.index = this.byteLength << 3
          return -1
        }
      },
      {
        key: 'findStartCode',
        value: function findStartCode(code) {
          var current = 0
          while (true) {
            current = this.findNextStartCode()
            if (current === code || current === -1) {
              return current
            }
          }
          return -1
        }
      },
      {
        key: 'nextBytesAreStartCode',
        value: function nextBytesAreStartCode() {
          var i = (this.index + 7) >> 3
          return (
            i >= this.byteLength ||
            (this.bytes[i] == 0x00 &&
              this.bytes[i + 1] == 0x00 &&
              this.bytes[i + 2] == 0x01)
          )
        }
      },
      {
        key: 'peek',
        value: function peek(count) {
          var offset = this.index
          var value = 0
          while (count) {
            var currentByte = this.bytes[offset >> 3],
              remaining = 8 - (offset & 7),
              // remaining bits in byte
              read = remaining < count ? remaining : count,
              // bits in this run
              shift = remaining - read,
              mask = 0xff >> (8 - read)
            value = (value << read) | ((currentByte & (mask << shift)) >> shift)
            offset += read
            count -= read
          }
          return value
        }
      },
      {
        key: 'read',
        value: function read(count) {
          var value = this.peek(count)
          this.index += count
          return value
        }
      },
      {
        key: 'skip',
        value: function skip(count) {
          return (this.index += count)
        }
      },
      {
        key: 'rewind',
        value: function rewind(count) {
          this.index = Math.max(this.index - count, 0)
        }
      },
      {
        key: 'has',
        value: function has(count) {
          return (this.byteLength << 3) - this.index >= count
        }
      }
    ])
    return BitBuffer
  })()
  buffer_defineProperty(BitBuffer, 'MODE', {
    EVICT: 1,
    EXPAND: 2
  }) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/renderer/webgl.js

  function webgl_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (webgl_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      webgl_typeof(obj)
    )
  }
  function webgl_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function webgl_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        webgl_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function webgl_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) webgl_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) webgl_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function webgl_defineProperty(obj, key, value) {
    key = webgl_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function webgl_toPropertyKey(arg) {
    var key = webgl_toPrimitive(arg, 'string')
    return webgl_typeof(key) === 'symbol' ? key : String(key)
  }
  function webgl_toPrimitive(input, hint) {
    if (webgl_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (webgl_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }
  var WebGLRenderer = /*#__PURE__*/ (function () {
    /** @type {HTMLCanvasElement} */

    /** @type {WebGLRenderingContext} */

    function WebGLRenderer(options) {
      var _options$canvas
      webgl_classCallCheck(this, WebGLRenderer)
      webgl_defineProperty(this, 'canvas', void 0)
      webgl_defineProperty(this, 'gl', void 0)
      this.canvas =
        (_options$canvas = options.canvas) !== null &&
        _options$canvas !== void 0
          ? _options$canvas
          : document.createElement('canvas')
      this.width = this.canvas.width
      this.height = this.canvas.height
      this.enabled = true
      this.hasTextureData = {}
      var contextCreateOptions = {
        preserveDrawingBuffer: !!options.preserveDrawingBuffer,
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        premultipliedAlpha: false
      }
      this.gl =
        this.canvas.getContext('webgl', contextCreateOptions) ||
        this.canvas.getContext('experimental-webgl', contextCreateOptions)
      if (!this.gl) {
        throw new Error('Failed to get WebGL Context')
      }
      var gl = this.gl
      var vertexAttr = null
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false)

      // Init buffers
      this.vertexBuffer = gl.createBuffer()
      var vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW)

      // Setup the main YCrCbToRGBA shader
      this.program = this.createProgram(
        WebGLRenderer.SHADER.VERTEX_IDENTITY,
        WebGLRenderer.SHADER.FRAGMENT_YCRCB_TO_RGBA
      )
      vertexAttr = gl.getAttribLocation(this.program, 'vertex')
      gl.enableVertexAttribArray(vertexAttr)
      gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0)
      this.textureY = this.createTexture(0, 'textureY')
      this.textureCb = this.createTexture(1, 'textureCb')
      this.textureCr = this.createTexture(2, 'textureCr')

      // Setup the loading animation shader
      this.loadingProgram = this.createProgram(
        WebGLRenderer.SHADER.VERTEX_IDENTITY,
        WebGLRenderer.SHADER.FRAGMENT_LOADING
      )
      vertexAttr = gl.getAttribLocation(this.loadingProgram, 'vertex')
      gl.enableVertexAttribArray(vertexAttr)
      gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0)
      this.shouldCreateUnclampedViews = !this.allowsClampedTextureData()
    }
    webgl_createClass(
      WebGLRenderer,
      [
        {
          key: 'destroy',
          value: function destroy() {
            var _gl$getExtension
            var removeCanvas =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : true
            var gl = this.gl
            this.deleteTexture(gl.TEXTURE0, this.textureY)
            this.deleteTexture(gl.TEXTURE1, this.textureCb)
            this.deleteTexture(gl.TEXTURE2, this.textureCr)
            gl.useProgram(null)
            gl.deleteProgram(this.program)
            gl.deleteProgram(this.loadingProgram)
            gl.bindBuffer(gl.ARRAY_BUFFER, null)
            gl.deleteBuffer(this.vertexBuffer)
            ;(_gl$getExtension = gl.getExtension('WEBGL_lose_context')) ===
              null || _gl$getExtension === void 0
              ? void 0
              : _gl$getExtension.loseContext()
            // gl.clear()

            if (removeCanvas) {
              // 默认不移除canvas
              this.canvas.remove()
            }
          }
        },
        {
          key: 'clear',
          value: function clear() {
            var _this$gl, _this$gl2
            // 设置背景颜色
            ;(_this$gl = this.gl) === null || _this$gl === void 0
              ? void 0
              : _this$gl.clearColor(0, 0, 0, 1)
            ;(_this$gl2 = this.gl) === null || _this$gl2 === void 0
              ? void 0
              : _this$gl2.clear(this.gl.COLOR_BUFFER_BIT)
          }
        },
        {
          key: 'resize',
          value: function resize(width, height) {
            this.width = width | 0
            this.height = height | 0
            this.canvas.width = this.width
            this.canvas.height = this.height
            this.gl.useProgram(this.program)
            var codedWidth = ((this.width + 15) >> 4) << 4
            this.gl.viewport(0, 0, codedWidth, this.height)
          }
        },
        {
          key: 'createTexture',
          value: function createTexture(index, name) {
            var gl = this.gl
            var texture = gl.createTexture()
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
            gl.uniform1i(gl.getUniformLocation(this.program, name), index)
            return texture
          }
        },
        {
          key: 'createProgram',
          value: function createProgram(vsh, fsh) {
            var gl = this.gl
            var program = gl.createProgram()
            gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh))
            gl.attachShader(
              program,
              this.compileShader(gl.FRAGMENT_SHADER, fsh)
            )
            gl.linkProgram(program)
            gl.useProgram(program)
            return program
          }
        },
        {
          key: 'compileShader',
          value: function compileShader(type, source) {
            var gl = this.gl
            var shader = gl.createShader(type)
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
              throw new Error(gl.getShaderInfoLog(shader))
            }
            return shader
          }
        },
        {
          key: 'allowsClampedTextureData',
          value: function allowsClampedTextureData() {
            var gl = this.gl
            var texture = gl.createTexture()
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.LUMINANCE,
              1,
              1,
              0,
              gl.LUMINANCE,
              gl.UNSIGNED_BYTE,
              new Uint8ClampedArray([0])
            )
            return gl.getError() === 0
          }
        },
        {
          key: 'renderProgress',
          value: function renderProgress(progress) {
            var gl = this.gl
            gl.useProgram(this.loadingProgram)
            var loc = gl.getUniformLocation(this.loadingProgram, 'progress')
            gl.uniform1f(loc, progress)
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
          }
        },
        {
          key: 'render',
          value: function render(y, cb, cr, isClampedArray) {
            if (!this.enabled) {
              return
            }
            var gl = this.gl
            var w = ((this.width + 15) >> 4) << 4,
              h = this.height,
              w2 = w >> 1,
              h2 = h >> 1

            // In some browsers WebGL doesn't like Uint8ClampedArrays (this is a bug
            // and should be fixed soon-ish), so we have to create a Uint8Array view
            // for each plane.
            if (isClampedArray && this.shouldCreateUnclampedViews) {
              y = new Uint8Array(y.buffer)
              cb = new Uint8Array(cb.buffer)
              cr = new Uint8Array(cr.buffer)
            }
            gl.useProgram(this.program)
            this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y)
            this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb)
            this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr)
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
          }
        },
        {
          key: 'updateTexture',
          value: function updateTexture(unit, texture, w, h, data) {
            var gl = this.gl
            gl.activeTexture(unit)
            gl.bindTexture(gl.TEXTURE_2D, texture)
            if (this.hasTextureData[unit]) {
              gl.texSubImage2D(
                gl.TEXTURE_2D,
                0,
                0,
                0,
                w,
                h,
                gl.LUMINANCE,
                gl.UNSIGNED_BYTE,
                data
              )
            } else {
              this.hasTextureData[unit] = true
              gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.LUMINANCE,
                w,
                h,
                0,
                gl.LUMINANCE,
                gl.UNSIGNED_BYTE,
                data
              )
            }
          }
        },
        {
          key: 'deleteTexture',
          value: function deleteTexture(unit, texture) {
            var gl = this.gl
            gl.activeTexture(unit)
            gl.bindTexture(gl.TEXTURE_2D, null)
            gl.deleteTexture(texture)
          }
        }
      ],
      [
        {
          key: 'IsSupported',
          value: function IsSupported() {
            try {
              if (!window.WebGLRenderingContext) {
                return false
              }
              var canvas = document.createElement('canvas')
              return !!(
                canvas.getContext('webgl') ||
                canvas.getContext('experimental-webgl')
              )
            } catch (err) {
              return false
            }
          }
        }
      ]
    )
    return WebGLRenderer
  })()
  webgl_defineProperty(WebGLRenderer, 'SHADER', {
    FRAGMENT_YCRCB_TO_RGBA: [
      'precision mediump float;',
      'uniform sampler2D textureY;',
      'uniform sampler2D textureCb;',
      'uniform sampler2D textureCr;',
      'varying vec2 texCoord;',
      'mat4 rec601 = mat4(',
      '1.16438,  0.00000,  1.59603, -0.87079,',
      '1.16438, -0.39176, -0.81297,  0.52959,',
      '1.16438,  2.01723,  0.00000, -1.08139,',
      '0, 0, 0, 1',
      ');',
      'void main() {',
      'float y = texture2D(textureY, texCoord).r;',
      'float cb = texture2D(textureCb, texCoord).r;',
      'float cr = texture2D(textureCr, texCoord).r;',
      'gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;',
      '}'
    ].join('\n'),
    FRAGMENT_LOADING: [
      'precision mediump float;',
      'uniform float progress;',
      'varying vec2 texCoord;',
      'void main() {',
      'float c = ceil(progress-(1.0-texCoord.y));',
      'gl_FragColor = vec4(c,c,c,1);',
      '}'
    ].join('\n'),
    VERTEX_IDENTITY: [
      'attribute vec2 vertex;',
      'varying vec2 texCoord;',
      'void main() {',
      'texCoord = vertex;',
      'gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);',
      '}'
    ].join('\n')
  }) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/decoder.js

  function decoder_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (decoder_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      decoder_typeof(obj)
    )
  }
  function decoder_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function decoder_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        decoder_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function decoder_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) decoder_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) decoder_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function decoder_defineProperty(obj, key, value) {
    key = decoder_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function decoder_toPropertyKey(arg) {
    var key = decoder_toPrimitive(arg, 'string')
    return decoder_typeof(key) === 'symbol' ? key : String(key)
  }
  function decoder_toPrimitive(input, hint) {
    if (decoder_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (decoder_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var BaseDecoder = /*#__PURE__*/ (function () {
    /**
     * @type {WebGLRenderer|CanvasRenderer|WebAudioOut}
     */

    function BaseDecoder(options) {
      decoder_classCallCheck(this, BaseDecoder)
      decoder_defineProperty(this, 'destination', void 0)
      this.destination = null
      this.canPlay = false
      this.collectTimestamps = !options.streaming
      this.bytesWritten = 0
      this.timestamps = []
      this.timestampIndex = 0
      this.startTime = 0
      this.decodedTime = 0
      Object.defineProperty(this, 'currentTime', {
        get: this.getCurrentTime
      })
    }
    decoder_createClass(BaseDecoder, [
      {
        key: 'destroy',
        value: function destroy() {}
      },
      {
        key: 'connect',
        value: function connect(destination) {
          this.destination = destination
        }
      },
      {
        key: 'bufferGetIndex',
        value: function bufferGetIndex() {
          return this.bits.index
        }
      },
      {
        key: 'bufferSetIndex',
        value: function bufferSetIndex(index) {
          this.bits.index = index
        }
      },
      {
        key: 'bufferWrite',
        value: function bufferWrite(buffers) {
          return this.bits.write(buffers)
        }
      },
      {
        key: 'write',
        value: function write(pts, buffers) {
          if (this.collectTimestamps) {
            if (this.timestamps.length === 0) {
              this.startTime = pts
              this.decodedTime = pts
            }
            this.timestamps.push({
              index: this.bytesWritten << 3,
              time: pts
            })
          }
          this.bytesWritten += this.bufferWrite(buffers)
          this.canPlay = true
        }
      },
      {
        key: 'seek',
        value: function seek(time) {
          if (!this.collectTimestamps) {
            return
          }
          this.timestampIndex = 0
          for (var i = 0; i < this.timestamps.length; i++) {
            if (this.timestamps[i].time > time) {
              break
            }
            this.timestampIndex = i
          }
          var ts = this.timestamps[this.timestampIndex]
          if (ts) {
            this.bufferSetIndex(ts.index)
            this.decodedTime = ts.time
          } else {
            this.bufferSetIndex(0)
            this.decodedTime = this.startTime
          }
        }
      },
      {
        key: 'decode',
        value: function decode() {
          this.advanceDecodedTime(0)
        }
      },
      {
        key: 'advanceDecodedTime',
        value: function advanceDecodedTime(seconds) {
          if (this.collectTimestamps) {
            var newTimestampIndex = -1
            var currentIndex = this.bufferGetIndex()
            for (var i = this.timestampIndex; i < this.timestamps.length; i++) {
              if (this.timestamps[i].index > currentIndex) {
                break
              }
              newTimestampIndex = i
            }

            // Did we find a new PTS, different from the last? If so, we don't have
            // to advance the decoded time manually and can instead sync it exactly
            // to the PTS.
            if (
              newTimestampIndex !== -1 &&
              newTimestampIndex !== this.timestampIndex
            ) {
              this.timestampIndex = newTimestampIndex
              this.decodedTime = this.timestamps[this.timestampIndex].time
              return
            }
          }
          this.decodedTime += seconds
        }
      },
      {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
          return this.decodedTime
        }
      }
    ])
    return BaseDecoder
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/mpeg1.js

  function mpeg1_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (mpeg1_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      mpeg1_typeof(obj)
    )
  }
  function mpeg1_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function mpeg1_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        mpeg1_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function mpeg1_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) mpeg1_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) mpeg1_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function _get() {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
      _get = Reflect.get.bind()
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property)
        if (!base) return
        var desc = Object.getOwnPropertyDescriptor(base, property)
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver)
        }
        return desc.value
      }
    }
    return _get.apply(this, arguments)
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object)
      if (object === null) break
    }
    return object
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    })
    Object.defineProperty(subClass, 'prototype', { writable: false })
    if (superClass) _setPrototypeOf(subClass, superClass)
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }
    return _setPrototypeOf(o, p)
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return _possibleConstructorReturn(this, result)
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (
      call &&
      (mpeg1_typeof(call) === 'object' || typeof call === 'function')
    ) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }
    return _assertThisInitialized(self)
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
      return true
    } catch (e) {
      return false
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return _getPrototypeOf(o)
  }
  function mpeg1_defineProperty(obj, key, value) {
    key = mpeg1_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function mpeg1_toPropertyKey(arg) {
    var key = mpeg1_toPrimitive(arg, 'string')
    return mpeg1_typeof(key) === 'symbol' ? key : String(key)
  }
  function mpeg1_toPrimitive(input, hint) {
    if (mpeg1_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (mpeg1_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  /**
   * Inspired by Java MPEG-1 Video Decoder and Player by Zoltan Korandi
   * https://sourceforge.net/projects/javampeg1video/
   */
  var MPEG1 = /*#__PURE__*/ (function (_BaseDecoder) {
    _inherits(MPEG1, _BaseDecoder)
    var _super = _createSuper(MPEG1)
    /**
     * @type {boolean}
     * 是否有序列头
     */

    /** 分辨率 */

    function MPEG1(options) {
      var _this
      mpeg1_classCallCheck(this, MPEG1)
      _this = _super.call(this, options)
      mpeg1_defineProperty(
        _assertThisInitialized(_this),
        'hasSequenceHeader',
        void 0
      )
      mpeg1_defineProperty(_assertThisInitialized(_this), 'resolution', {
        width: 0,
        height: 0
      })
      mpeg1_defineProperty(_assertThisInitialized(_this), 'frameRate', 30)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'currentY', null)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'currentCr', null)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'currentCb', null)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'pictureType', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardY', null)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardCr', null)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardCb', null)
      mpeg1_defineProperty(
        _assertThisInitialized(_this),
        'fullPelForward',
        false
      )
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardFCode', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardRSize', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'forwardF', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'quantizerScale', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'sliceBegin', false)
      mpeg1_defineProperty(
        _assertThisInitialized(_this),
        'macroblockAddress',
        0
      )
      mpeg1_defineProperty(_assertThisInitialized(_this), 'mbRow', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'mbCol', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'macroblockType', 0)
      mpeg1_defineProperty(
        _assertThisInitialized(_this),
        'macroblockIntra',
        false
      )
      mpeg1_defineProperty(
        _assertThisInitialized(_this),
        'macroblockMotFw',
        false
      )
      mpeg1_defineProperty(_assertThisInitialized(_this), 'motionFwH', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'motionFwV', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'motionFwHPrev', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'motionFwVPrev', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'dcPredictorY', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'dcPredictorCr', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'dcPredictorCb', 0)
      mpeg1_defineProperty(_assertThisInitialized(_this), 'blockData', null)
      _this.onDecodeCallback = options.onVideoDecode
      var bufferSize = options.videoBufferSize || 512 * 1024
      var bufferMode = options.streaming
        ? BitBuffer.MODE.EVICT
        : BitBuffer.MODE.EXPAND
      _this.bits = new BitBuffer(bufferSize, bufferMode)
      _this.customIntraQuantMatrix = new Uint8Array(64)
      _this.customNonIntraQuantMatrix = new Uint8Array(64)
      _this.blockData = new Int32Array(64)
      _this.currentFrame = 0
      _this.decodeFirstFrame = options.decodeFirstFrame !== false
      _this.options = options
      return _this
    }
    mpeg1_createClass(
      MPEG1,
      [
        {
          key: 'write',
          value: function write(pts, buffers) {
            _get(_getPrototypeOf(MPEG1.prototype), 'write', this).call(
              this,
              pts,
              buffers
            )
            if (!this.hasSequenceHeader) {
              if (this.bits.findStartCode(MPEG1.START.SEQUENCE) === -1) {
                return false
              }
              this.decodeSequenceHeader()
              if (this.decodeFirstFrame) {
                this.decode()
              }
            }
          }
        },
        {
          key: 'decode',
          value: function decode() {
            var startTime = Now()
            if (!this.hasSequenceHeader) {
              return false
            }
            if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
              var bufferedBytes = this.bits.byteLength - (this.bits.index >> 3)
              return false
            }
            this.decodePicture()
            this.advanceDecodedTime(1 / this.frameRate)
            var elapsedTime = Now() - startTime
            if (this.onDecodeCallback) {
              this.onDecodeCallback(this, elapsedTime)
            }
            return true
          }
        },
        {
          key: 'readHuffman',
          value: function readHuffman(codeTable) {
            var state = 0
            do {
              state = codeTable[state + this.bits.read(1)]
            } while (state >= 0 && codeTable[state] !== 0)
            return codeTable[state + 2]
          }

          // Sequence Layer
        },
        {
          key: 'decodeSequenceHeader',
          value: function decodeSequenceHeader() {
            var newWidth = this.bits.read(12),
              newHeight = this.bits.read(12)

            // skip pixel aspect ratio
            this.bits.skip(4)
            this.frameRate = MPEG1.PICTURE_RATE[this.bits.read(4)]

            // skip bitRate, marker, bufferSize and constrained bit
            this.bits.skip(18 + 1 + 10 + 1)
            if (newWidth !== this.width || newHeight !== this.height) {
              this.width = newWidth
              this.height = newHeight
              this.initBuffers()
              if (this.destination) {
                var _this$options$onResol, _this$options
                this.destination.resize(newWidth, newHeight)
                this.resolution.width = w
                this.resolution.height = h
                ;(_this$options$onResol = (_this$options = this.options)
                  .onResolutionDecode) === null ||
                _this$options$onResol === void 0
                  ? void 0
                  : _this$options$onResol.call(
                      _this$options,
                      newWidth,
                      newHeight
                    )
              }
            }
            if (this.bits.read(1)) {
              // load custom intra quant matrix?
              for (var i = 0; i < 64; i++) {
                this.customIntraQuantMatrix[MPEG1.ZIG_ZAG[i]] =
                  this.bits.read(8)
              }
              this.intraQuantMatrix = this.customIntraQuantMatrix
            }
            if (this.bits.read(1)) {
              // load custom non intra quant matrix?
              for (var _i = 0; _i < 64; _i++) {
                var idx = MPEG1.ZIG_ZAG[_i]
                this.customNonIntraQuantMatrix[idx] = this.bits.read(8)
              }
              this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix
            }
            this.hasSequenceHeader = true
          }
        },
        {
          key: 'initBuffers',
          value: function initBuffers() {
            this.intraQuantMatrix = MPEG1.DEFAULT_INTRA_QUANT_MATRIX
            this.nonIntraQuantMatrix = MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX
            this.mbWidth = (this.width + 15) >> 4
            this.mbHeight = (this.height + 15) >> 4
            this.mbSize = this.mbWidth * this.mbHeight
            this.codedWidth = this.mbWidth << 4
            this.codedHeight = this.mbHeight << 4
            this.codedSize = this.codedWidth * this.codedHeight
            this.halfWidth = this.mbWidth << 3
            this.halfHeight = this.mbHeight << 3

            // Allocated buffers and resize the canvas
            this.currentY = new Uint8ClampedArray(this.codedSize)
            this.currentY32 = new Uint32Array(this.currentY.buffer)
            this.currentCr = new Uint8ClampedArray(this.codedSize >> 2)
            this.currentCr32 = new Uint32Array(this.currentCr.buffer)
            this.currentCb = new Uint8ClampedArray(this.codedSize >> 2)
            this.currentCb32 = new Uint32Array(this.currentCb.buffer)
            this.forwardY = new Uint8ClampedArray(this.codedSize)
            this.forwardY32 = new Uint32Array(this.forwardY.buffer)
            this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2)
            this.forwardCr32 = new Uint32Array(this.forwardCr.buffer)
            this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2)
            this.forwardCb32 = new Uint32Array(this.forwardCb.buffer)
          }

          // Picture Layer
        },
        {
          key: 'decodePicture',
          value: function decodePicture(skipOutput) {
            this.currentFrame++
            this.bits.skip(10) // skip temporalReference
            this.pictureType = this.bits.read(3)
            this.bits.skip(16) // skip vbv_delay

            // Skip B and D frames or unknown coding type
            if (
              this.pictureType <= 0 ||
              this.pictureType >= MPEG1.PICTURE_TYPE.B
            ) {
              return
            }

            // full_pel_forward, forward_f_code
            if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
              this.fullPelForward = this.bits.read(1)
              this.forwardFCode = this.bits.read(3)
              if (this.forwardFCode === 0) {
                // Ignore picture with zero forward_f_code
                return
              }
              this.forwardRSize = this.forwardFCode - 1
              this.forwardF = 1 << this.forwardRSize
            }
            var code = 0
            do {
              code = this.bits.findNextStartCode()
            } while (
              code === MPEG1.START.EXTENSION ||
              code === MPEG1.START.USER_DATA
            )
            while (
              code >= MPEG1.START.SLICE_FIRST &&
              code <= MPEG1.START.SLICE_LAST
            ) {
              this.decodeSlice(code & 0x000000ff)
              code = this.bits.findNextStartCode()
            }
            if (code !== -1) {
              // We found the next start code; rewind 32bits and let the main loop
              // handle it.
              this.bits.rewind(32)
            }

            // Invoke decode callbacks
            if (this.destination) {
              this.destination.render(
                this.currentY,
                this.currentCr,
                this.currentCb,
                true
              )
            }

            // If this is a reference picutre then rotate the prediction pointers
            if (
              this.pictureType === MPEG1.PICTURE_TYPE.INTRA ||
              this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE
            ) {
              var tmpY = this.forwardY,
                tmpY32 = this.forwardY32,
                tmpCr = this.forwardCr,
                tmpCr32 = this.forwardCr32,
                tmpCb = this.forwardCb,
                tmpCb32 = this.forwardCb32
              this.forwardY = this.currentY
              this.forwardY32 = this.currentY32
              this.forwardCr = this.currentCr
              this.forwardCr32 = this.currentCr32
              this.forwardCb = this.currentCb
              this.forwardCb32 = this.currentCb32
              this.currentY = tmpY
              this.currentY32 = tmpY32
              this.currentCr = tmpCr
              this.currentCr32 = tmpCr32
              this.currentCb = tmpCb
              this.currentCb32 = tmpCb32
            }
          }

          // Slice Layer
        },
        {
          key: 'decodeSlice',
          value: function decodeSlice(slice) {
            this.sliceBegin = true
            this.macroblockAddress = (slice - 1) * this.mbWidth - 1

            // Reset motion vectors and DC predictors
            this.motionFwH = this.motionFwHPrev = 0
            this.motionFwV = this.motionFwVPrev = 0
            this.dcPredictorY = 128
            this.dcPredictorCr = 128
            this.dcPredictorCb = 128
            this.quantizerScale = this.bits.read(5)

            // skip extra bits
            while (this.bits.read(1)) {
              this.bits.skip(8)
            }
            do {
              this.decodeMacroblock()
            } while (!this.bits.nextBytesAreStartCode())
          }

          // Macroblock Layer
        },
        {
          key: 'decodeMacroblock',
          value: function decodeMacroblock() {
            // Decode macroblock_address_increment
            var increment = 0,
              t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT)
            while (t === 34) {
              // macroblock_stuffing
              t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT)
            }
            while (t === 35) {
              // macroblock_escape
              increment += 33
              t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT)
            }
            increment += t

            // Process any skipped macroblocks
            if (this.sliceBegin) {
              // The first macroblock_address_increment of each slice is relative
              // to beginning of the preverious row, not the preverious macroblock
              this.sliceBegin = false
              this.macroblockAddress += increment
            } else {
              if (this.macroblockAddress + increment >= this.mbSize) {
                // Illegal (too large) macroblock_address_increment
                return
              }
              if (increment > 1) {
                // Skipped macroblocks reset DC predictors
                this.dcPredictorY = 128
                this.dcPredictorCr = 128
                this.dcPredictorCb = 128

                // Skipped macroblocks in P-pictures reset motion vectors
                if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
                  this.motionFwH = this.motionFwHPrev = 0
                  this.motionFwV = this.motionFwVPrev = 0
                }
              }

              // Predict skipped macroblocks
              while (increment > 1) {
                this.macroblockAddress++
                this.mbRow = (this.macroblockAddress / this.mbWidth) | 0
                this.mbCol = this.macroblockAddress % this.mbWidth
                this.copyMacroblock(
                  this.motionFwH,
                  this.motionFwV,
                  this.forwardY,
                  this.forwardCr,
                  this.forwardCb
                )
                increment--
              }
              this.macroblockAddress++
            }
            this.mbRow = (this.macroblockAddress / this.mbWidth) | 0
            this.mbCol = this.macroblockAddress % this.mbWidth

            // Process the current macroblock
            var mbTable = MPEG1.MACROBLOCK_TYPE[this.pictureType]
            this.macroblockType = this.readHuffman(mbTable)
            this.macroblockIntra = this.macroblockType & 0x01
            this.macroblockMotFw = this.macroblockType & 0x08

            // Quantizer scale
            if ((this.macroblockType & 0x10) !== 0) {
              this.quantizerScale = this.bits.read(5)
            }
            if (this.macroblockIntra) {
              // Intra-coded macroblocks reset motion vectors
              this.motionFwH = this.motionFwHPrev = 0
              this.motionFwV = this.motionFwVPrev = 0
            } else {
              // Non-intra macroblocks reset DC predictors
              this.dcPredictorY = 128
              this.dcPredictorCr = 128
              this.dcPredictorCb = 128
              this.decodeMotionVectors()
              this.copyMacroblock(
                this.motionFwH,
                this.motionFwV,
                this.forwardY,
                this.forwardCr,
                this.forwardCb
              )
            }

            // Decode blocks
            var cbp =
              (this.macroblockType & 0x02) !== 0
                ? this.readHuffman(MPEG1.CODE_BLOCK_PATTERN)
                : this.macroblockIntra
                ? 0x3f
                : 0
            for (var block = 0, mask = 0x20; block < 6; block++) {
              if ((cbp & mask) !== 0) {
                this.decodeBlock(block)
              }
              mask >>= 1
            }
          }
        },
        {
          key: 'decodeMotionVectors',
          value: function decodeMotionVectors() {
            var code,
              d,
              r = 0

            // Forward
            if (this.macroblockMotFw) {
              // Horizontal forward
              code = this.readHuffman(MPEG1.MOTION)
              if (code !== 0 && this.forwardF !== 1) {
                r = this.bits.read(this.forwardRSize)
                d = ((Math.abs(code) - 1) << this.forwardRSize) + r + 1
                if (code < 0) {
                  d = -d
                }
              } else {
                d = code
              }
              this.motionFwHPrev += d
              if (this.motionFwHPrev > (this.forwardF << 4) - 1) {
                this.motionFwHPrev -= this.forwardF << 5
              } else if (this.motionFwHPrev < -this.forwardF << 4) {
                this.motionFwHPrev += this.forwardF << 5
              }
              this.motionFwH = this.motionFwHPrev
              if (this.fullPelForward) {
                this.motionFwH <<= 1
              }

              // Vertical forward
              code = this.readHuffman(MPEG1.MOTION)
              if (code !== 0 && this.forwardF !== 1) {
                r = this.bits.read(this.forwardRSize)
                d = ((Math.abs(code) - 1) << this.forwardRSize) + r + 1
                if (code < 0) {
                  d = -d
                }
              } else {
                d = code
              }
              this.motionFwVPrev += d
              if (this.motionFwVPrev > (this.forwardF << 4) - 1) {
                this.motionFwVPrev -= this.forwardF << 5
              } else if (this.motionFwVPrev < -this.forwardF << 4) {
                this.motionFwVPrev += this.forwardF << 5
              }
              this.motionFwV = this.motionFwVPrev
              if (this.fullPelForward) {
                this.motionFwV <<= 1
              }
            } else if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
              // No motion information in P-picture, reset vectors
              this.motionFwH = this.motionFwHPrev = 0
              this.motionFwV = this.motionFwVPrev = 0
            }
          }
        },
        {
          key: 'copyMacroblock',
          value: function copyMacroblock(motionH, motionV, sY, sCr, sCb) {
            var width, scan, H, V, oddH, oddV, src, dest, last

            // We use 32bit writes here
            var dY = this.currentY32,
              dCb = this.currentCb32,
              dCr = this.currentCr32

            // Luminance
            width = this.codedWidth
            scan = width - 16
            H = motionH >> 1
            V = motionV >> 1
            oddH = (motionH & 1) === 1
            oddV = (motionV & 1) === 1
            src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H
            dest = (this.mbRow * width + this.mbCol) << 2
            last = dest + (width << 2)
            var x, y1, y2, y
            if (oddH) {
              if (oddV) {
                while (dest < last) {
                  y1 = sY[src] + sY[src + width]
                  src++
                  for (x = 0; x < 4; x++) {
                    y2 = sY[src] + sY[src + width]
                    src++
                    y = ((y1 + y2 + 2) >> 2) & 0xff
                    y1 = sY[src] + sY[src + width]
                    src++
                    y |= ((y1 + y2 + 2) << 6) & 0xff00
                    y2 = sY[src] + sY[src + width]
                    src++
                    y |= ((y1 + y2 + 2) << 14) & 0xff0000
                    y1 = sY[src] + sY[src + width]
                    src++
                    y |= ((y1 + y2 + 2) << 22) & 0xff000000
                    dY[dest++] = y
                  }
                  dest += scan >> 2
                  src += scan - 1
                }
              } else {
                while (dest < last) {
                  y1 = sY[src++]
                  for (x = 0; x < 4; x++) {
                    y2 = sY[src++]
                    y = ((y1 + y2 + 1) >> 1) & 0xff
                    y1 = sY[src++]
                    y |= ((y1 + y2 + 1) << 7) & 0xff00
                    y2 = sY[src++]
                    y |= ((y1 + y2 + 1) << 15) & 0xff0000
                    y1 = sY[src++]
                    y |= ((y1 + y2 + 1) << 23) & 0xff000000
                    dY[dest++] = y
                  }
                  dest += scan >> 2
                  src += scan - 1
                }
              }
            } else {
              if (oddV) {
                while (dest < last) {
                  for (x = 0; x < 4; x++) {
                    y = ((sY[src] + sY[src + width] + 1) >> 1) & 0xff
                    src++
                    y |= ((sY[src] + sY[src + width] + 1) << 7) & 0xff00
                    src++
                    y |= ((sY[src] + sY[src + width] + 1) << 15) & 0xff0000
                    src++
                    y |= ((sY[src] + sY[src + width] + 1) << 23) & 0xff000000
                    src++
                    dY[dest++] = y
                  }
                  dest += scan >> 2
                  src += scan
                }
              } else {
                while (dest < last) {
                  for (x = 0; x < 4; x++) {
                    y = sY[src]
                    src++
                    y |= sY[src] << 8
                    src++
                    y |= sY[src] << 16
                    src++
                    y |= sY[src] << 24
                    src++
                    dY[dest++] = y
                  }
                  dest += scan >> 2
                  src += scan
                }
              }
            }

            // Chrominance

            width = this.halfWidth
            scan = width - 8
            H = (motionH / 2) >> 1
            V = (motionV / 2) >> 1
            oddH = ((motionH / 2) & 1) === 1
            oddV = ((motionV / 2) & 1) === 1
            src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H
            dest = (this.mbRow * width + this.mbCol) << 1
            last = dest + (width << 1)
            var cr1, cr2, cr, cb1, cb2, cb
            if (oddH) {
              if (oddV) {
                while (dest < last) {
                  cr1 = sCr[src] + sCr[src + width]
                  cb1 = sCb[src] + sCb[src + width]
                  src++
                  for (x = 0; x < 2; x++) {
                    cr2 = sCr[src] + sCr[src + width]
                    cb2 = sCb[src] + sCb[src + width]
                    src++
                    cr = ((cr1 + cr2 + 2) >> 2) & 0xff
                    cb = ((cb1 + cb2 + 2) >> 2) & 0xff
                    cr1 = sCr[src] + sCr[src + width]
                    cb1 = sCb[src] + sCb[src + width]
                    src++
                    cr |= ((cr1 + cr2 + 2) << 6) & 0xff00
                    cb |= ((cb1 + cb2 + 2) << 6) & 0xff00
                    cr2 = sCr[src] + sCr[src + width]
                    cb2 = sCb[src] + sCb[src + width]
                    src++
                    cr |= ((cr1 + cr2 + 2) << 14) & 0xff0000
                    cb |= ((cb1 + cb2 + 2) << 14) & 0xff0000
                    cr1 = sCr[src] + sCr[src + width]
                    cb1 = sCb[src] + sCb[src + width]
                    src++
                    cr |= ((cr1 + cr2 + 2) << 22) & 0xff000000
                    cb |= ((cb1 + cb2 + 2) << 22) & 0xff000000
                    dCr[dest] = cr
                    dCb[dest] = cb
                    dest++
                  }
                  dest += scan >> 2
                  src += scan - 1
                }
              } else {
                while (dest < last) {
                  cr1 = sCr[src]
                  cb1 = sCb[src]
                  src++
                  for (x = 0; x < 2; x++) {
                    cr2 = sCr[src]
                    cb2 = sCb[src++]
                    cr = ((cr1 + cr2 + 1) >> 1) & 0xff
                    cb = ((cb1 + cb2 + 1) >> 1) & 0xff
                    cr1 = sCr[src]
                    cb1 = sCb[src++]
                    cr |= ((cr1 + cr2 + 1) << 7) & 0xff00
                    cb |= ((cb1 + cb2 + 1) << 7) & 0xff00
                    cr2 = sCr[src]
                    cb2 = sCb[src++]
                    cr |= ((cr1 + cr2 + 1) << 15) & 0xff0000
                    cb |= ((cb1 + cb2 + 1) << 15) & 0xff0000
                    cr1 = sCr[src]
                    cb1 = sCb[src++]
                    cr |= ((cr1 + cr2 + 1) << 23) & 0xff000000
                    cb |= ((cb1 + cb2 + 1) << 23) & 0xff000000
                    dCr[dest] = cr
                    dCb[dest] = cb
                    dest++
                  }
                  dest += scan >> 2
                  src += scan - 1
                }
              }
            } else {
              if (oddV) {
                while (dest < last) {
                  for (x = 0; x < 2; x++) {
                    cr = ((sCr[src] + sCr[src + width] + 1) >> 1) & 0xff
                    cb = ((sCb[src] + sCb[src + width] + 1) >> 1) & 0xff
                    src++
                    cr |= ((sCr[src] + sCr[src + width] + 1) << 7) & 0xff00
                    cb |= ((sCb[src] + sCb[src + width] + 1) << 7) & 0xff00
                    src++
                    cr |= ((sCr[src] + sCr[src + width] + 1) << 15) & 0xff0000
                    cb |= ((sCb[src] + sCb[src + width] + 1) << 15) & 0xff0000
                    src++
                    cr |= ((sCr[src] + sCr[src + width] + 1) << 23) & 0xff000000
                    cb |= ((sCb[src] + sCb[src + width] + 1) << 23) & 0xff000000
                    src++
                    dCr[dest] = cr
                    dCb[dest] = cb
                    dest++
                  }
                  dest += scan >> 2
                  src += scan
                }
              } else {
                while (dest < last) {
                  for (x = 0; x < 2; x++) {
                    cr = sCr[src]
                    cb = sCb[src]
                    src++
                    cr |= sCr[src] << 8
                    cb |= sCb[src] << 8
                    src++
                    cr |= sCr[src] << 16
                    cb |= sCb[src] << 16
                    src++
                    cr |= sCr[src] << 24
                    cb |= sCb[src] << 24
                    src++
                    dCr[dest] = cr
                    dCb[dest] = cb
                    dest++
                  }
                  dest += scan >> 2
                  src += scan
                }
              }
            }
          }

          // Block layer
        },
        {
          key: 'decodeBlock',
          value: function decodeBlock(block) {
            var n = 0,
              quantMatrix

            // Decode DC coefficient of intra-coded blocks
            if (this.macroblockIntra) {
              var predictor, dctSize

              // DC prediction

              if (block < 4) {
                predictor = this.dcPredictorY
                dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_LUMINANCE)
              } else {
                predictor =
                  block === 4 ? this.dcPredictorCr : this.dcPredictorCb
                dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_CHROMINANCE)
              }

              // Read DC coeff
              if (dctSize > 0) {
                var differential = this.bits.read(dctSize)
                if ((differential & (1 << (dctSize - 1))) !== 0) {
                  this.blockData[0] = predictor + differential
                } else {
                  this.blockData[0] =
                    predictor + ((-1 << dctSize) | (differential + 1))
                }
              } else {
                this.blockData[0] = predictor
              }

              // Save predictor value
              if (block < 4) {
                this.dcPredictorY = this.blockData[0]
              } else if (block === 4) {
                this.dcPredictorCr = this.blockData[0]
              } else {
                this.dcPredictorCb = this.blockData[0]
              }

              // Dequantize + premultiply
              this.blockData[0] <<= 3 + 5
              quantMatrix = this.intraQuantMatrix
              n = 1
            } else {
              quantMatrix = this.nonIntraQuantMatrix
            }

            // Decode AC coefficients (+DC for non-intra)
            var level = 0
            while (true) {
              var run = 0,
                coeff = this.readHuffman(MPEG1.DCT_COEFF)
              if (coeff === 0x0001 && n > 0 && this.bits.read(1) === 0) {
                // end_of_block
                break
              }
              if (coeff === 0xffff) {
                // escape
                run = this.bits.read(6)
                level = this.bits.read(8)
                if (level === 0) {
                  level = this.bits.read(8)
                } else if (level === 128) {
                  level = this.bits.read(8) - 256
                } else if (level > 128) {
                  level = level - 256
                }
              } else {
                run = coeff >> 8
                level = coeff & 0xff
                if (this.bits.read(1)) {
                  level = -level
                }
              }
              n += run
              var dezigZagged = MPEG1.ZIG_ZAG[n]
              n++

              // Dequantize, oddify, clip
              level <<= 1
              if (!this.macroblockIntra) {
                level += level < 0 ? -1 : 1
              }
              level =
                (level * this.quantizerScale * quantMatrix[dezigZagged]) >> 4
              if ((level & 1) === 0) {
                level -= level > 0 ? 1 : -1
              }
              if (level > 2047) {
                level = 2047
              } else if (level < -2048) {
                level = -2048
              }

              // Save premultiplied coefficient
              this.blockData[dezigZagged] =
                level * MPEG1.PREMULTIPLIER_MATRIX[dezigZagged]
            }

            // Move block to its place
            var destArray, destIndex, scan
            if (block < 4) {
              destArray = this.currentY
              scan = this.codedWidth - 8
              destIndex = (this.mbRow * this.codedWidth + this.mbCol) << 4
              if ((block & 1) !== 0) {
                destIndex += 8
              }
              if ((block & 2) !== 0) {
                destIndex += this.codedWidth << 3
              }
            } else {
              destArray = block === 4 ? this.currentCb : this.currentCr
              scan = (this.codedWidth >> 1) - 8
              destIndex =
                ((this.mbRow * this.codedWidth) << 2) + (this.mbCol << 3)
            }
            if (this.macroblockIntra) {
              // Overwrite (no prediction)
              if (n === 1) {
                MPEG1.CopyValueToDestination(
                  (this.blockData[0] + 128) >> 8,
                  destArray,
                  destIndex,
                  scan
                )
                this.blockData[0] = 0
              } else {
                MPEG1.IDCT(this.blockData)
                MPEG1.CopyBlockToDestination(
                  this.blockData,
                  destArray,
                  destIndex,
                  scan
                )
                Fill(this.blockData, 0)
              }
            } else {
              // Add data to the predicted macroblock
              if (n === 1) {
                MPEG1.AddValueToDestination(
                  (this.blockData[0] + 128) >> 8,
                  destArray,
                  destIndex,
                  scan
                )
                this.blockData[0] = 0
              } else {
                MPEG1.IDCT(this.blockData)
                MPEG1.AddBlockToDestination(
                  this.blockData,
                  destArray,
                  destIndex,
                  scan
                )
                Fill(this.blockData, 0)
              }
            }
            n = 0
          }

          // #region 常量
          // VLC Tables and Constants
        }
      ],
      [
        {
          key: 'CopyBlockToDestination',
          value:
            // #endregion

            // #region 静态方法
            function CopyBlockToDestination(block, dest, index, scan) {
              for (var n = 0; n < 64; n += 8, index += scan + 8) {
                dest[index + 0] = block[n + 0]
                dest[index + 1] = block[n + 1]
                dest[index + 2] = block[n + 2]
                dest[index + 3] = block[n + 3]
                dest[index + 4] = block[n + 4]
                dest[index + 5] = block[n + 5]
                dest[index + 6] = block[n + 6]
                dest[index + 7] = block[n + 7]
              }
            }
        },
        {
          key: 'AddBlockToDestination',
          value: function AddBlockToDestination(block, dest, index, scan) {
            for (var n = 0; n < 64; n += 8, index += scan + 8) {
              dest[index + 0] += block[n + 0]
              dest[index + 1] += block[n + 1]
              dest[index + 2] += block[n + 2]
              dest[index + 3] += block[n + 3]
              dest[index + 4] += block[n + 4]
              dest[index + 5] += block[n + 5]
              dest[index + 6] += block[n + 6]
              dest[index + 7] += block[n + 7]
            }
          }
        },
        {
          key: 'CopyValueToDestination',
          value: function CopyValueToDestination(value, dest, index, scan) {
            for (var n = 0; n < 64; n += 8, index += scan + 8) {
              dest[index + 0] = value
              dest[index + 1] = value
              dest[index + 2] = value
              dest[index + 3] = value
              dest[index + 4] = value
              dest[index + 5] = value
              dest[index + 6] = value
              dest[index + 7] = value
            }
          }
        },
        {
          key: 'AddValueToDestination',
          value: function AddValueToDestination(value, dest, index, scan) {
            for (var n = 0; n < 64; n += 8, index += scan + 8) {
              dest[index + 0] += value
              dest[index + 1] += value
              dest[index + 2] += value
              dest[index + 3] += value
              dest[index + 4] += value
              dest[index + 5] += value
              dest[index + 6] += value
              dest[index + 7] += value
            }
          }
        },
        {
          key: 'IDCT',
          value: function IDCT(block) {
            // See http://vsr.informatik.tu-chemnitz.de/~jan/MPEG/HTML/IDCT.html
            // for more info.

            var b1,
              b3,
              b4,
              b6,
              b7,
              tmp1,
              tmp2,
              m0,
              x0,
              x1,
              x2,
              x3,
              x4,
              y3,
              y4,
              y5,
              y6,
              y7

            // Transform columns
            for (var i = 0; i < 8; ++i) {
              b1 = block[4 * 8 + i]
              b3 = block[2 * 8 + i] + block[6 * 8 + i]
              b4 = block[5 * 8 + i] - block[3 * 8 + i]
              tmp1 = block[1 * 8 + i] + block[7 * 8 + i]
              tmp2 = block[3 * 8 + i] + block[5 * 8 + i]
              b6 = block[1 * 8 + i] - block[7 * 8 + i]
              b7 = tmp1 + tmp2
              m0 = block[0 * 8 + i]
              x4 = ((b6 * 473 - b4 * 196 + 128) >> 8) - b7
              x0 = x4 - (((tmp1 - tmp2) * 362 + 128) >> 8)
              x1 = m0 - b1
              x2 =
                (((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128) >> 8) - b3
              x3 = m0 + b1
              y3 = x1 + x2
              y4 = x3 + b3
              y5 = x1 - x2
              y6 = x3 - b3
              y7 = -x0 - ((b4 * 473 + b6 * 196 + 128) >> 8)
              block[0 * 8 + i] = b7 + y4
              block[1 * 8 + i] = x4 + y3
              block[2 * 8 + i] = y5 - x0
              block[3 * 8 + i] = y6 - y7
              block[4 * 8 + i] = y6 + y7
              block[5 * 8 + i] = x0 + y5
              block[6 * 8 + i] = y3 - x4
              block[7 * 8 + i] = y4 - b7
            }

            // Transform rows
            for (var _i2 = 0; _i2 < 64; _i2 += 8) {
              b1 = block[4 + _i2]
              b3 = block[2 + _i2] + block[6 + _i2]
              b4 = block[5 + _i2] - block[3 + _i2]
              tmp1 = block[1 + _i2] + block[7 + _i2]
              tmp2 = block[3 + _i2] + block[5 + _i2]
              b6 = block[1 + _i2] - block[7 + _i2]
              b7 = tmp1 + tmp2
              m0 = block[0 + _i2]
              x4 = ((b6 * 473 - b4 * 196 + 128) >> 8) - b7
              x0 = x4 - (((tmp1 - tmp2) * 362 + 128) >> 8)
              x1 = m0 - b1
              x2 = (((block[2 + _i2] - block[6 + _i2]) * 362 + 128) >> 8) - b3
              x3 = m0 + b1
              y3 = x1 + x2
              y4 = x3 + b3
              y5 = x1 - x2
              y6 = x3 - b3
              y7 = -x0 - ((b4 * 473 + b6 * 196 + 128) >> 8)
              block[0 + _i2] = (b7 + y4 + 128) >> 8
              block[1 + _i2] = (x4 + y3 + 128) >> 8
              block[2 + _i2] = (y5 - x0 + 128) >> 8
              block[3 + _i2] = (y6 - y7 + 128) >> 8
              block[4 + _i2] = (y6 + y7 + 128) >> 8
              block[5 + _i2] = (x0 + y5 + 128) >> 8
              block[6 + _i2] = (y3 - x4 + 128) >> 8
              block[7 + _i2] = (y4 - b7 + 128) >> 8
            }
          }
          // #endregion
        }
      ]
    )
    return MPEG1
  })(BaseDecoder)
  mpeg1_defineProperty(
    MPEG1,
    'PICTURE_RATE',
    [
      0.0, 23.976, 24.0, 25.0, 29.97, 30.0, 50.0, 59.94, 60.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0
    ]
  )
  mpeg1_defineProperty(
    MPEG1,
    'ZIG_ZAG',
    new Uint8Array([
      0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33,
      40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43,
      36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53,
      60, 61, 54, 47, 55, 62, 63
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'DEFAULT_INTRA_QUANT_MATRIX',
    new Uint8Array([
      8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26,
      27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32,
      35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56,
      69, 27, 29, 35, 38, 46, 56, 69, 83
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'DEFAULT_NON_INTRA_QUANT_MATRIX',
    new Uint8Array([
      16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
      16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
      16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
      16, 16, 16, 16, 16, 16, 16, 16, 16, 16
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'PREMULTIPLIER_MATRIX',
    new Uint8Array([
      32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55,
      49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32,
      25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9,
      12, 12, 10, 9, 7, 5, 2
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'MACROBLOCK_ADDRESS_INCREMENT',
    new Int16Array([
      1 * 3,
      2 * 3,
      0,
      //   0
      3 * 3,
      4 * 3,
      0,
      //   1  0
      0,
      0,
      1,
      //   2  1.
      5 * 3,
      6 * 3,
      0,
      //   3  00
      7 * 3,
      8 * 3,
      0,
      //   4  01
      9 * 3,
      10 * 3,
      0,
      //   5  000
      11 * 3,
      12 * 3,
      0,
      //   6  001
      0,
      0,
      3,
      //   7  010.
      0,
      0,
      2,
      //   8  011.
      13 * 3,
      14 * 3,
      0,
      //   9  0000
      15 * 3,
      16 * 3,
      0,
      //  10  0001
      0,
      0,
      5,
      //  11  0010.
      0,
      0,
      4,
      //  12  0011.
      17 * 3,
      18 * 3,
      0,
      //  13  0000 0
      19 * 3,
      20 * 3,
      0,
      //  14  0000 1
      0,
      0,
      7,
      //  15  0001 0.
      0,
      0,
      6,
      //  16  0001 1.
      21 * 3,
      22 * 3,
      0,
      //  17  0000 00
      23 * 3,
      24 * 3,
      0,
      //  18  0000 01
      25 * 3,
      26 * 3,
      0,
      //  19  0000 10
      27 * 3,
      28 * 3,
      0,
      //  20  0000 11
      -1,
      29 * 3,
      0,
      //  21  0000 000
      -1,
      30 * 3,
      0,
      //  22  0000 001
      31 * 3,
      32 * 3,
      0,
      //  23  0000 010
      33 * 3,
      34 * 3,
      0,
      //  24  0000 011
      35 * 3,
      36 * 3,
      0,
      //  25  0000 100
      37 * 3,
      38 * 3,
      0,
      //  26  0000 101
      0,
      0,
      9,
      //  27  0000 110.
      0,
      0,
      8,
      //  28  0000 111.
      39 * 3,
      40 * 3,
      0,
      //  29  0000 0001
      41 * 3,
      42 * 3,
      0,
      //  30  0000 0011
      43 * 3,
      44 * 3,
      0,
      //  31  0000 0100
      45 * 3,
      46 * 3,
      0,
      //  32  0000 0101
      0,
      0,
      15,
      //  33  0000 0110.
      0,
      0,
      14,
      //  34  0000 0111.
      0,
      0,
      13,
      //  35  0000 1000.
      0,
      0,
      12,
      //  36  0000 1001.
      0,
      0,
      11,
      //  37  0000 1010.
      0,
      0,
      10,
      //  38  0000 1011.
      47 * 3,
      -1,
      0,
      //  39  0000 0001 0
      -1,
      48 * 3,
      0,
      //  40  0000 0001 1
      49 * 3,
      50 * 3,
      0,
      //  41  0000 0011 0
      51 * 3,
      52 * 3,
      0,
      //  42  0000 0011 1
      53 * 3,
      54 * 3,
      0,
      //  43  0000 0100 0
      55 * 3,
      56 * 3,
      0,
      //  44  0000 0100 1
      57 * 3,
      58 * 3,
      0,
      //  45  0000 0101 0
      59 * 3,
      60 * 3,
      0,
      //  46  0000 0101 1
      61 * 3,
      -1,
      0,
      //  47  0000 0001 00
      -1,
      62 * 3,
      0,
      //  48  0000 0001 11
      63 * 3,
      64 * 3,
      0,
      //  49  0000 0011 00
      65 * 3,
      66 * 3,
      0,
      //  50  0000 0011 01
      67 * 3,
      68 * 3,
      0,
      //  51  0000 0011 10
      69 * 3,
      70 * 3,
      0,
      //  52  0000 0011 11
      71 * 3,
      72 * 3,
      0,
      //  53  0000 0100 00
      73 * 3,
      74 * 3,
      0,
      //  54  0000 0100 01
      0,
      0,
      21,
      //  55  0000 0100 10.
      0,
      0,
      20,
      //  56  0000 0100 11.
      0,
      0,
      19,
      //  57  0000 0101 00.
      0,
      0,
      18,
      //  58  0000 0101 01.
      0,
      0,
      17,
      //  59  0000 0101 10.
      0,
      0,
      16,
      //  60  0000 0101 11.
      0,
      0,
      35,
      //  61  0000 0001 000. -- macroblock_escape
      0,
      0,
      34,
      //  62  0000 0001 111. -- macroblock_stuffing
      0,
      0,
      33,
      //  63  0000 0011 000.
      0,
      0,
      32,
      //  64  0000 0011 001.
      0,
      0,
      31,
      //  65  0000 0011 010.
      0,
      0,
      30,
      //  66  0000 0011 011.
      0,
      0,
      29,
      //  67  0000 0011 100.
      0,
      0,
      28,
      //  68  0000 0011 101.
      0,
      0,
      27,
      //  69  0000 0011 110.
      0,
      0,
      26,
      //  70  0000 0011 111.
      0,
      0,
      25,
      //  71  0000 0100 000.
      0,
      0,
      24,
      //  72  0000 0100 001.
      0,
      0,
      23,
      //  73  0000 0100 010.
      0,
      0,
      22 //  74  0000 0100 011.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'MACROBLOCK_TYPE_INTRA',
    new Int8Array([
      1 * 3,
      2 * 3,
      0,
      //   0
      -1,
      3 * 3,
      0,
      //   1  0
      0,
      0,
      0x01,
      //   2  1.
      0,
      0,
      0x11 //   3  01.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'MACROBLOCK_TYPE_PREDICTIVE',
    new Int8Array([
      1 * 3,
      2 * 3,
      0,
      //  0
      3 * 3,
      4 * 3,
      0,
      //  1  0
      0,
      0,
      0x0a,
      //  2  1.
      5 * 3,
      6 * 3,
      0,
      //  3  00
      0,
      0,
      0x02,
      //  4  01.
      7 * 3,
      8 * 3,
      0,
      //  5  000
      0,
      0,
      0x08,
      //  6  001.
      9 * 3,
      10 * 3,
      0,
      //  7  0000
      11 * 3,
      12 * 3,
      0,
      //  8  0001
      -1,
      13 * 3,
      0,
      //  9  00000
      0,
      0,
      0x12,
      // 10  00001.
      0,
      0,
      0x1a,
      // 11  00010.
      0,
      0,
      0x01,
      // 12  00011.
      0,
      0,
      0x11 // 13  000001.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'MACROBLOCK_TYPE_B',
    new Int8Array([
      1 * 3,
      2 * 3,
      0,
      //  0
      3 * 3,
      5 * 3,
      0,
      //  1  0
      4 * 3,
      6 * 3,
      0,
      //  2  1
      8 * 3,
      7 * 3,
      0,
      //  3  00
      0,
      0,
      0x0c,
      //  4  10.
      9 * 3,
      10 * 3,
      0,
      //  5  01
      0,
      0,
      0x0e,
      //  6  11.
      13 * 3,
      14 * 3,
      0,
      //  7  001
      12 * 3,
      11 * 3,
      0,
      //  8  000
      0,
      0,
      0x04,
      //  9  010.
      0,
      0,
      0x06,
      // 10  011.
      18 * 3,
      16 * 3,
      0,
      // 11  0001
      15 * 3,
      17 * 3,
      0,
      // 12  0000
      0,
      0,
      0x08,
      // 13  0010.
      0,
      0,
      0x0a,
      // 14  0011.
      -1,
      19 * 3,
      0,
      // 15  00000
      0,
      0,
      0x01,
      // 16  00011.
      20 * 3,
      21 * 3,
      0,
      // 17  00001
      0,
      0,
      0x1e,
      // 18  00010.
      0,
      0,
      0x11,
      // 19  000001.
      0,
      0,
      0x16,
      // 20  000010.
      0,
      0,
      0x1a // 21  000011.
    ])
  )
  mpeg1_defineProperty(MPEG1, 'MACROBLOCK_TYPE', [
    null,
    MPEG1.MACROBLOCK_TYPE_INTRA,
    MPEG1.MACROBLOCK_TYPE_PREDICTIVE,
    MPEG1.MACROBLOCK_TYPE_B
  ])
  mpeg1_defineProperty(
    MPEG1,
    'CODE_BLOCK_PATTERN',
    new Int16Array([
      2 * 3,
      1 * 3,
      0,
      //   0
      3 * 3,
      6 * 3,
      0,
      //   1  1
      4 * 3,
      5 * 3,
      0,
      //   2  0
      8 * 3,
      11 * 3,
      0,
      //   3  10
      12 * 3,
      13 * 3,
      0,
      //   4  00
      9 * 3,
      7 * 3,
      0,
      //   5  01
      10 * 3,
      14 * 3,
      0,
      //   6  11
      20 * 3,
      19 * 3,
      0,
      //   7  011
      18 * 3,
      16 * 3,
      0,
      //   8  100
      23 * 3,
      17 * 3,
      0,
      //   9  010
      27 * 3,
      25 * 3,
      0,
      //  10  110
      21 * 3,
      28 * 3,
      0,
      //  11  101
      15 * 3,
      22 * 3,
      0,
      //  12  000
      24 * 3,
      26 * 3,
      0,
      //  13  001
      0,
      0,
      60,
      //  14  111.
      35 * 3,
      40 * 3,
      0,
      //  15  0000
      44 * 3,
      48 * 3,
      0,
      //  16  1001
      38 * 3,
      36 * 3,
      0,
      //  17  0101
      42 * 3,
      47 * 3,
      0,
      //  18  1000
      29 * 3,
      31 * 3,
      0,
      //  19  0111
      39 * 3,
      32 * 3,
      0,
      //  20  0110
      0,
      0,
      32,
      //  21  1010.
      45 * 3,
      46 * 3,
      0,
      //  22  0001
      33 * 3,
      41 * 3,
      0,
      //  23  0100
      43 * 3,
      34 * 3,
      0,
      //  24  0010
      0,
      0,
      4,
      //  25  1101.
      30 * 3,
      37 * 3,
      0,
      //  26  0011
      0,
      0,
      8,
      //  27  1100.
      0,
      0,
      16,
      //  28  1011.
      0,
      0,
      44,
      //  29  0111 0.
      50 * 3,
      56 * 3,
      0,
      //  30  0011 0
      0,
      0,
      28,
      //  31  0111 1.
      0,
      0,
      52,
      //  32  0110 1.
      0,
      0,
      62,
      //  33  0100 0.
      61 * 3,
      59 * 3,
      0,
      //  34  0010 1
      52 * 3,
      60 * 3,
      0,
      //  35  0000 0
      0,
      0,
      1,
      //  36  0101 1.
      55 * 3,
      54 * 3,
      0,
      //  37  0011 1
      0,
      0,
      61,
      //  38  0101 0.
      0,
      0,
      56,
      //  39  0110 0.
      57 * 3,
      58 * 3,
      0,
      //  40  0000 1
      0,
      0,
      2,
      //  41  0100 1.
      0,
      0,
      40,
      //  42  1000 0.
      51 * 3,
      62 * 3,
      0,
      //  43  0010 0
      0,
      0,
      48,
      //  44  1001 0.
      64 * 3,
      63 * 3,
      0,
      //  45  0001 0
      49 * 3,
      53 * 3,
      0,
      //  46  0001 1
      0,
      0,
      20,
      //  47  1000 1.
      0,
      0,
      12,
      //  48  1001 1.
      80 * 3,
      83 * 3,
      0,
      //  49  0001 10
      0,
      0,
      63,
      //  50  0011 00.
      77 * 3,
      75 * 3,
      0,
      //  51  0010 00
      65 * 3,
      73 * 3,
      0,
      //  52  0000 00
      84 * 3,
      66 * 3,
      0,
      //  53  0001 11
      0,
      0,
      24,
      //  54  0011 11.
      0,
      0,
      36,
      //  55  0011 10.
      0,
      0,
      3,
      //  56  0011 01.
      69 * 3,
      87 * 3,
      0,
      //  57  0000 10
      81 * 3,
      79 * 3,
      0,
      //  58  0000 11
      68 * 3,
      71 * 3,
      0,
      //  59  0010 11
      70 * 3,
      78 * 3,
      0,
      //  60  0000 01
      67 * 3,
      76 * 3,
      0,
      //  61  0010 10
      72 * 3,
      74 * 3,
      0,
      //  62  0010 01
      86 * 3,
      85 * 3,
      0,
      //  63  0001 01
      88 * 3,
      82 * 3,
      0,
      //  64  0001 00
      -1,
      94 * 3,
      0,
      //  65  0000 000
      95 * 3,
      97 * 3,
      0,
      //  66  0001 111
      0,
      0,
      33,
      //  67  0010 100.
      0,
      0,
      9,
      //  68  0010 110.
      106 * 3,
      110 * 3,
      0,
      //  69  0000 100
      102 * 3,
      116 * 3,
      0,
      //  70  0000 010
      0,
      0,
      5,
      //  71  0010 111.
      0,
      0,
      10,
      //  72  0010 010.
      93 * 3,
      89 * 3,
      0,
      //  73  0000 001
      0,
      0,
      6,
      //  74  0010 011.
      0,
      0,
      18,
      //  75  0010 001.
      0,
      0,
      17,
      //  76  0010 101.
      0,
      0,
      34,
      //  77  0010 000.
      113 * 3,
      119 * 3,
      0,
      //  78  0000 011
      103 * 3,
      104 * 3,
      0,
      //  79  0000 111
      90 * 3,
      92 * 3,
      0,
      //  80  0001 100
      109 * 3,
      107 * 3,
      0,
      //  81  0000 110
      117 * 3,
      118 * 3,
      0,
      //  82  0001 001
      101 * 3,
      99 * 3,
      0,
      //  83  0001 101
      98 * 3,
      96 * 3,
      0,
      //  84  0001 110
      100 * 3,
      91 * 3,
      0,
      //  85  0001 011
      114 * 3,
      115 * 3,
      0,
      //  86  0001 010
      105 * 3,
      108 * 3,
      0,
      //  87  0000 101
      112 * 3,
      111 * 3,
      0,
      //  88  0001 000
      121 * 3,
      125 * 3,
      0,
      //  89  0000 0011
      0,
      0,
      41,
      //  90  0001 1000.
      0,
      0,
      14,
      //  91  0001 0111.
      0,
      0,
      21,
      //  92  0001 1001.
      124 * 3,
      122 * 3,
      0,
      //  93  0000 0010
      120 * 3,
      123 * 3,
      0,
      //  94  0000 0001
      0,
      0,
      11,
      //  95  0001 1110.
      0,
      0,
      19,
      //  96  0001 1101.
      0,
      0,
      7,
      //  97  0001 1111.
      0,
      0,
      35,
      //  98  0001 1100.
      0,
      0,
      13,
      //  99  0001 1011.
      0,
      0,
      50,
      // 100  0001 0110.
      0,
      0,
      49,
      // 101  0001 1010.
      0,
      0,
      58,
      // 102  0000 0100.
      0,
      0,
      37,
      // 103  0000 1110.
      0,
      0,
      25,
      // 104  0000 1111.
      0,
      0,
      45,
      // 105  0000 1010.
      0,
      0,
      57,
      // 106  0000 1000.
      0,
      0,
      26,
      // 107  0000 1101.
      0,
      0,
      29,
      // 108  0000 1011.
      0,
      0,
      38,
      // 109  0000 1100.
      0,
      0,
      53,
      // 110  0000 1001.
      0,
      0,
      23,
      // 111  0001 0001.
      0,
      0,
      43,
      // 112  0001 0000.
      0,
      0,
      46,
      // 113  0000 0110.
      0,
      0,
      42,
      // 114  0001 0100.
      0,
      0,
      22,
      // 115  0001 0101.
      0,
      0,
      54,
      // 116  0000 0101.
      0,
      0,
      51,
      // 117  0001 0010.
      0,
      0,
      15,
      // 118  0001 0011.
      0,
      0,
      30,
      // 119  0000 0111.
      0,
      0,
      39,
      // 120  0000 0001 0.
      0,
      0,
      47,
      // 121  0000 0011 0.
      0,
      0,
      55,
      // 122  0000 0010 1.
      0,
      0,
      27,
      // 123  0000 0001 1.
      0,
      0,
      59,
      // 124  0000 0010 0.
      0,
      0,
      31 // 125  0000 0011 1.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'MOTION',
    new Int16Array([
      1 * 3,
      2 * 3,
      0,
      //   0
      4 * 3,
      3 * 3,
      0,
      //   1  0
      0,
      0,
      0,
      //   2  1.
      6 * 3,
      5 * 3,
      0,
      //   3  01
      8 * 3,
      7 * 3,
      0,
      //   4  00
      0,
      0,
      -1,
      //   5  011.
      0,
      0,
      1,
      //   6  010.
      9 * 3,
      10 * 3,
      0,
      //   7  001
      12 * 3,
      11 * 3,
      0,
      //   8  000
      0,
      0,
      2,
      //   9  0010.
      0,
      0,
      -2,
      //  10  0011.
      14 * 3,
      15 * 3,
      0,
      //  11  0001
      16 * 3,
      13 * 3,
      0,
      //  12  0000
      20 * 3,
      18 * 3,
      0,
      //  13  0000 1
      0,
      0,
      3,
      //  14  0001 0.
      0,
      0,
      -3,
      //  15  0001 1.
      17 * 3,
      19 * 3,
      0,
      //  16  0000 0
      -1,
      23 * 3,
      0,
      //  17  0000 00
      27 * 3,
      25 * 3,
      0,
      //  18  0000 11
      26 * 3,
      21 * 3,
      0,
      //  19  0000 01
      24 * 3,
      22 * 3,
      0,
      //  20  0000 10
      32 * 3,
      28 * 3,
      0,
      //  21  0000 011
      29 * 3,
      31 * 3,
      0,
      //  22  0000 101
      -1,
      33 * 3,
      0,
      //  23  0000 001
      36 * 3,
      35 * 3,
      0,
      //  24  0000 100
      0,
      0,
      -4,
      //  25  0000 111.
      30 * 3,
      34 * 3,
      0,
      //  26  0000 010
      0,
      0,
      4,
      //  27  0000 110.
      0,
      0,
      -7,
      //  28  0000 0111.
      0,
      0,
      5,
      //  29  0000 1010.
      37 * 3,
      41 * 3,
      0,
      //  30  0000 0100
      0,
      0,
      -5,
      //  31  0000 1011.
      0,
      0,
      7,
      //  32  0000 0110.
      38 * 3,
      40 * 3,
      0,
      //  33  0000 0011
      42 * 3,
      39 * 3,
      0,
      //  34  0000 0101
      0,
      0,
      -6,
      //  35  0000 1001.
      0,
      0,
      6,
      //  36  0000 1000.
      51 * 3,
      54 * 3,
      0,
      //  37  0000 0100 0
      50 * 3,
      49 * 3,
      0,
      //  38  0000 0011 0
      45 * 3,
      46 * 3,
      0,
      //  39  0000 0101 1
      52 * 3,
      47 * 3,
      0,
      //  40  0000 0011 1
      43 * 3,
      53 * 3,
      0,
      //  41  0000 0100 1
      44 * 3,
      48 * 3,
      0,
      //  42  0000 0101 0
      0,
      0,
      10,
      //  43  0000 0100 10.
      0,
      0,
      9,
      //  44  0000 0101 00.
      0,
      0,
      8,
      //  45  0000 0101 10.
      0,
      0,
      -8,
      //  46  0000 0101 11.
      57 * 3,
      66 * 3,
      0,
      //  47  0000 0011 11
      0,
      0,
      -9,
      //  48  0000 0101 01.
      60 * 3,
      64 * 3,
      0,
      //  49  0000 0011 01
      56 * 3,
      61 * 3,
      0,
      //  50  0000 0011 00
      55 * 3,
      62 * 3,
      0,
      //  51  0000 0100 00
      58 * 3,
      63 * 3,
      0,
      //  52  0000 0011 10
      0,
      0,
      -10,
      //  53  0000 0100 11.
      59 * 3,
      65 * 3,
      0,
      //  54  0000 0100 01
      0,
      0,
      12,
      //  55  0000 0100 000.
      0,
      0,
      16,
      //  56  0000 0011 000.
      0,
      0,
      13,
      //  57  0000 0011 110.
      0,
      0,
      14,
      //  58  0000 0011 100.
      0,
      0,
      11,
      //  59  0000 0100 010.
      0,
      0,
      15,
      //  60  0000 0011 010.
      0,
      0,
      -16,
      //  61  0000 0011 001.
      0,
      0,
      -12,
      //  62  0000 0100 001.
      0,
      0,
      -14,
      //  63  0000 0011 101.
      0,
      0,
      -15,
      //  64  0000 0011 011.
      0,
      0,
      -11,
      //  65  0000 0100 011.
      0,
      0,
      -13 //  66  0000 0011 111.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'DCT_DC_SIZE_LUMINANCE',
    new Int8Array([
      2 * 3,
      1 * 3,
      0,
      //   0
      6 * 3,
      5 * 3,
      0,
      //   1  1
      3 * 3,
      4 * 3,
      0,
      //   2  0
      0,
      0,
      1,
      //   3  00.
      0,
      0,
      2,
      //   4  01.
      9 * 3,
      8 * 3,
      0,
      //   5  11
      7 * 3,
      10 * 3,
      0,
      //   6  10
      0,
      0,
      0,
      //   7  100.
      12 * 3,
      11 * 3,
      0,
      //   8  111
      0,
      0,
      4,
      //   9  110.
      0,
      0,
      3,
      //  10  101.
      13 * 3,
      14 * 3,
      0,
      //  11  1111
      0,
      0,
      5,
      //  12  1110.
      0,
      0,
      6,
      //  13  1111 0.
      16 * 3,
      15 * 3,
      0,
      //  14  1111 1
      17 * 3,
      -1,
      0,
      //  15  1111 11
      0,
      0,
      7,
      //  16  1111 10.
      0,
      0,
      8 //  17  1111 110.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'DCT_DC_SIZE_CHROMINANCE',
    new Int8Array([
      2 * 3,
      1 * 3,
      0,
      //   0
      4 * 3,
      3 * 3,
      0,
      //   1  1
      6 * 3,
      5 * 3,
      0,
      //   2  0
      8 * 3,
      7 * 3,
      0,
      //   3  11
      0,
      0,
      2,
      //   4  10.
      0,
      0,
      1,
      //   5  01.
      0,
      0,
      0,
      //   6  00.
      10 * 3,
      9 * 3,
      0,
      //   7  111
      0,
      0,
      3,
      //   8  110.
      12 * 3,
      11 * 3,
      0,
      //   9  1111
      0,
      0,
      4,
      //  10  1110.
      14 * 3,
      13 * 3,
      0,
      //  11  1111 1
      0,
      0,
      5,
      //  12  1111 0.
      16 * 3,
      15 * 3,
      0,
      //  13  1111 11
      0,
      0,
      6,
      //  14  1111 10.
      17 * 3,
      -1,
      0,
      //  15  1111 111
      0,
      0,
      7,
      //  16  1111 110.
      0,
      0,
      8 //  17  1111 1110.
    ])
  )
  mpeg1_defineProperty(
    MPEG1,
    'DCT_COEFF',
    new Int32Array([
      1 * 3,
      2 * 3,
      0,
      //   0
      4 * 3,
      3 * 3,
      0,
      //   1  0
      0,
      0,
      0x0001,
      //   2  1.
      7 * 3,
      8 * 3,
      0,
      //   3  01
      6 * 3,
      5 * 3,
      0,
      //   4  00
      13 * 3,
      9 * 3,
      0,
      //   5  001
      11 * 3,
      10 * 3,
      0,
      //   6  000
      14 * 3,
      12 * 3,
      0,
      //   7  010
      0,
      0,
      0x0101,
      //   8  011.
      20 * 3,
      22 * 3,
      0,
      //   9  0011
      18 * 3,
      21 * 3,
      0,
      //  10  0001
      16 * 3,
      19 * 3,
      0,
      //  11  0000
      0,
      0,
      0x0201,
      //  12  0101.
      17 * 3,
      15 * 3,
      0,
      //  13  0010
      0,
      0,
      0x0002,
      //  14  0100.
      0,
      0,
      0x0003,
      //  15  0010 1.
      27 * 3,
      25 * 3,
      0,
      //  16  0000 0
      29 * 3,
      31 * 3,
      0,
      //  17  0010 0
      24 * 3,
      26 * 3,
      0,
      //  18  0001 0
      32 * 3,
      30 * 3,
      0,
      //  19  0000 1
      0,
      0,
      0x0401,
      //  20  0011 0.
      23 * 3,
      28 * 3,
      0,
      //  21  0001 1
      0,
      0,
      0x0301,
      //  22  0011 1.
      0,
      0,
      0x0102,
      //  23  0001 10.
      0,
      0,
      0x0701,
      //  24  0001 00.
      0,
      0,
      0xffff,
      //  25  0000 01. -- escape
      0,
      0,
      0x0601,
      //  26  0001 01.
      37 * 3,
      36 * 3,
      0,
      //  27  0000 00
      0,
      0,
      0x0501,
      //  28  0001 11.
      35 * 3,
      34 * 3,
      0,
      //  29  0010 00
      39 * 3,
      38 * 3,
      0,
      //  30  0000 11
      33 * 3,
      42 * 3,
      0,
      //  31  0010 01
      40 * 3,
      41 * 3,
      0,
      //  32  0000 10
      52 * 3,
      50 * 3,
      0,
      //  33  0010 010
      54 * 3,
      53 * 3,
      0,
      //  34  0010 001
      48 * 3,
      49 * 3,
      0,
      //  35  0010 000
      43 * 3,
      45 * 3,
      0,
      //  36  0000 001
      46 * 3,
      44 * 3,
      0,
      //  37  0000 000
      0,
      0,
      0x0801,
      //  38  0000 111.
      0,
      0,
      0x0004,
      //  39  0000 110.
      0,
      0,
      0x0202,
      //  40  0000 100.
      0,
      0,
      0x0901,
      //  41  0000 101.
      51 * 3,
      47 * 3,
      0,
      //  42  0010 011
      55 * 3,
      57 * 3,
      0,
      //  43  0000 0010
      60 * 3,
      56 * 3,
      0,
      //  44  0000 0001
      59 * 3,
      58 * 3,
      0,
      //  45  0000 0011
      61 * 3,
      62 * 3,
      0,
      //  46  0000 0000
      0,
      0,
      0x0a01,
      //  47  0010 0111.
      0,
      0,
      0x0d01,
      //  48  0010 0000.
      0,
      0,
      0x0006,
      //  49  0010 0001.
      0,
      0,
      0x0103,
      //  50  0010 0101.
      0,
      0,
      0x0005,
      //  51  0010 0110.
      0,
      0,
      0x0302,
      //  52  0010 0100.
      0,
      0,
      0x0b01,
      //  53  0010 0011.
      0,
      0,
      0x0c01,
      //  54  0010 0010.
      76 * 3,
      75 * 3,
      0,
      //  55  0000 0010 0
      67 * 3,
      70 * 3,
      0,
      //  56  0000 0001 1
      73 * 3,
      71 * 3,
      0,
      //  57  0000 0010 1
      78 * 3,
      74 * 3,
      0,
      //  58  0000 0011 1
      72 * 3,
      77 * 3,
      0,
      //  59  0000 0011 0
      69 * 3,
      64 * 3,
      0,
      //  60  0000 0001 0
      68 * 3,
      63 * 3,
      0,
      //  61  0000 0000 0
      66 * 3,
      65 * 3,
      0,
      //  62  0000 0000 1
      81 * 3,
      87 * 3,
      0,
      //  63  0000 0000 01
      91 * 3,
      80 * 3,
      0,
      //  64  0000 0001 01
      82 * 3,
      79 * 3,
      0,
      //  65  0000 0000 11
      83 * 3,
      86 * 3,
      0,
      //  66  0000 0000 10
      93 * 3,
      92 * 3,
      0,
      //  67  0000 0001 10
      84 * 3,
      85 * 3,
      0,
      //  68  0000 0000 00
      90 * 3,
      94 * 3,
      0,
      //  69  0000 0001 00
      88 * 3,
      89 * 3,
      0,
      //  70  0000 0001 11
      0,
      0,
      0x0203,
      //  71  0000 0010 11.
      0,
      0,
      0x0104,
      //  72  0000 0011 00.
      0,
      0,
      0x0007,
      //  73  0000 0010 10.
      0,
      0,
      0x0402,
      //  74  0000 0011 11.
      0,
      0,
      0x0502,
      //  75  0000 0010 01.
      0,
      0,
      0x1001,
      //  76  0000 0010 00.
      0,
      0,
      0x0f01,
      //  77  0000 0011 01.
      0,
      0,
      0x0e01,
      //  78  0000 0011 10.
      105 * 3,
      107 * 3,
      0,
      //  79  0000 0000 111
      111 * 3,
      114 * 3,
      0,
      //  80  0000 0001 011
      104 * 3,
      97 * 3,
      0,
      //  81  0000 0000 010
      125 * 3,
      119 * 3,
      0,
      //  82  0000 0000 110
      96 * 3,
      98 * 3,
      0,
      //  83  0000 0000 100
      -1,
      123 * 3,
      0,
      //  84  0000 0000 000
      95 * 3,
      101 * 3,
      0,
      //  85  0000 0000 001
      106 * 3,
      121 * 3,
      0,
      //  86  0000 0000 101
      99 * 3,
      102 * 3,
      0,
      //  87  0000 0000 011
      113 * 3,
      103 * 3,
      0,
      //  88  0000 0001 110
      112 * 3,
      116 * 3,
      0,
      //  89  0000 0001 111
      110 * 3,
      100 * 3,
      0,
      //  90  0000 0001 000
      124 * 3,
      115 * 3,
      0,
      //  91  0000 0001 010
      117 * 3,
      122 * 3,
      0,
      //  92  0000 0001 101
      109 * 3,
      118 * 3,
      0,
      //  93  0000 0001 100
      120 * 3,
      108 * 3,
      0,
      //  94  0000 0001 001
      127 * 3,
      136 * 3,
      0,
      //  95  0000 0000 0010
      139 * 3,
      140 * 3,
      0,
      //  96  0000 0000 1000
      130 * 3,
      126 * 3,
      0,
      //  97  0000 0000 0101
      145 * 3,
      146 * 3,
      0,
      //  98  0000 0000 1001
      128 * 3,
      129 * 3,
      0,
      //  99  0000 0000 0110
      0,
      0,
      0x0802,
      // 100  0000 0001 0001.
      132 * 3,
      134 * 3,
      0,
      // 101  0000 0000 0011
      155 * 3,
      154 * 3,
      0,
      // 102  0000 0000 0111
      0,
      0,
      0x0008,
      // 103  0000 0001 1101.
      137 * 3,
      133 * 3,
      0,
      // 104  0000 0000 0100
      143 * 3,
      144 * 3,
      0,
      // 105  0000 0000 1110
      151 * 3,
      138 * 3,
      0,
      // 106  0000 0000 1010
      142 * 3,
      141 * 3,
      0,
      // 107  0000 0000 1111
      0,
      0,
      0x000a,
      // 108  0000 0001 0011.
      0,
      0,
      0x0009,
      // 109  0000 0001 1000.
      0,
      0,
      0x000b,
      // 110  0000 0001 0000.
      0,
      0,
      0x1501,
      // 111  0000 0001 0110.
      0,
      0,
      0x0602,
      // 112  0000 0001 1110.
      0,
      0,
      0x0303,
      // 113  0000 0001 1100.
      0,
      0,
      0x1401,
      // 114  0000 0001 0111.
      0,
      0,
      0x0702,
      // 115  0000 0001 0101.
      0,
      0,
      0x1101,
      // 116  0000 0001 1111.
      0,
      0,
      0x1201,
      // 117  0000 0001 1010.
      0,
      0,
      0x1301,
      // 118  0000 0001 1001.
      148 * 3,
      152 * 3,
      0,
      // 119  0000 0000 1101
      0,
      0,
      0x0403,
      // 120  0000 0001 0010.
      153 * 3,
      150 * 3,
      0,
      // 121  0000 0000 1011
      0,
      0,
      0x0105,
      // 122  0000 0001 1011.
      131 * 3,
      135 * 3,
      0,
      // 123  0000 0000 0001
      0,
      0,
      0x0204,
      // 124  0000 0001 0100.
      149 * 3,
      147 * 3,
      0,
      // 125  0000 0000 1100
      172 * 3,
      173 * 3,
      0,
      // 126  0000 0000 0101 1
      162 * 3,
      158 * 3,
      0,
      // 127  0000 0000 0010 0
      170 * 3,
      161 * 3,
      0,
      // 128  0000 0000 0110 0
      168 * 3,
      166 * 3,
      0,
      // 129  0000 0000 0110 1
      157 * 3,
      179 * 3,
      0,
      // 130  0000 0000 0101 0
      169 * 3,
      167 * 3,
      0,
      // 131  0000 0000 0001 0
      174 * 3,
      171 * 3,
      0,
      // 132  0000 0000 0011 0
      178 * 3,
      177 * 3,
      0,
      // 133  0000 0000 0100 1
      156 * 3,
      159 * 3,
      0,
      // 134  0000 0000 0011 1
      164 * 3,
      165 * 3,
      0,
      // 135  0000 0000 0001 1
      183 * 3,
      182 * 3,
      0,
      // 136  0000 0000 0010 1
      175 * 3,
      176 * 3,
      0,
      // 137  0000 0000 0100 0
      0,
      0,
      0x0107,
      // 138  0000 0000 1010 1.
      0,
      0,
      0x0a02,
      // 139  0000 0000 1000 0.
      0,
      0,
      0x0902,
      // 140  0000 0000 1000 1.
      0,
      0,
      0x1601,
      // 141  0000 0000 1111 1.
      0,
      0,
      0x1701,
      // 142  0000 0000 1111 0.
      0,
      0,
      0x1901,
      // 143  0000 0000 1110 0.
      0,
      0,
      0x1801,
      // 144  0000 0000 1110 1.
      0,
      0,
      0x0503,
      // 145  0000 0000 1001 0.
      0,
      0,
      0x0304,
      // 146  0000 0000 1001 1.
      0,
      0,
      0x000d,
      // 147  0000 0000 1100 1.
      0,
      0,
      0x000c,
      // 148  0000 0000 1101 0.
      0,
      0,
      0x000e,
      // 149  0000 0000 1100 0.
      0,
      0,
      0x000f,
      // 150  0000 0000 1011 1.
      0,
      0,
      0x0205,
      // 151  0000 0000 1010 0.
      0,
      0,
      0x1a01,
      // 152  0000 0000 1101 1.
      0,
      0,
      0x0106,
      // 153  0000 0000 1011 0.
      180 * 3,
      181 * 3,
      0,
      // 154  0000 0000 0111 1
      160 * 3,
      163 * 3,
      0,
      // 155  0000 0000 0111 0
      196 * 3,
      199 * 3,
      0,
      // 156  0000 0000 0011 10
      0,
      0,
      0x001b,
      // 157  0000 0000 0101 00.
      203 * 3,
      185 * 3,
      0,
      // 158  0000 0000 0010 01
      202 * 3,
      201 * 3,
      0,
      // 159  0000 0000 0011 11
      0,
      0,
      0x0013,
      // 160  0000 0000 0111 00.
      0,
      0,
      0x0016,
      // 161  0000 0000 0110 01.
      197 * 3,
      207 * 3,
      0,
      // 162  0000 0000 0010 00
      0,
      0,
      0x0012,
      // 163  0000 0000 0111 01.
      191 * 3,
      192 * 3,
      0,
      // 164  0000 0000 0001 10
      188 * 3,
      190 * 3,
      0,
      // 165  0000 0000 0001 11
      0,
      0,
      0x0014,
      // 166  0000 0000 0110 11.
      184 * 3,
      194 * 3,
      0,
      // 167  0000 0000 0001 01
      0,
      0,
      0x0015,
      // 168  0000 0000 0110 10.
      186 * 3,
      193 * 3,
      0,
      // 169  0000 0000 0001 00
      0,
      0,
      0x0017,
      // 170  0000 0000 0110 00.
      204 * 3,
      198 * 3,
      0,
      // 171  0000 0000 0011 01
      0,
      0,
      0x0019,
      // 172  0000 0000 0101 10.
      0,
      0,
      0x0018,
      // 173  0000 0000 0101 11.
      200 * 3,
      205 * 3,
      0,
      // 174  0000 0000 0011 00
      0,
      0,
      0x001f,
      // 175  0000 0000 0100 00.
      0,
      0,
      0x001e,
      // 176  0000 0000 0100 01.
      0,
      0,
      0x001c,
      // 177  0000 0000 0100 11.
      0,
      0,
      0x001d,
      // 178  0000 0000 0100 10.
      0,
      0,
      0x001a,
      // 179  0000 0000 0101 01.
      0,
      0,
      0x0011,
      // 180  0000 0000 0111 10.
      0,
      0,
      0x0010,
      // 181  0000 0000 0111 11.
      189 * 3,
      206 * 3,
      0,
      // 182  0000 0000 0010 11
      187 * 3,
      195 * 3,
      0,
      // 183  0000 0000 0010 10
      218 * 3,
      211 * 3,
      0,
      // 184  0000 0000 0001 010
      0,
      0,
      0x0025,
      // 185  0000 0000 0010 011.
      215 * 3,
      216 * 3,
      0,
      // 186  0000 0000 0001 000
      0,
      0,
      0x0024,
      // 187  0000 0000 0010 100.
      210 * 3,
      212 * 3,
      0,
      // 188  0000 0000 0001 110
      0,
      0,
      0x0022,
      // 189  0000 0000 0010 110.
      213 * 3,
      209 * 3,
      0,
      // 190  0000 0000 0001 111
      221 * 3,
      222 * 3,
      0,
      // 191  0000 0000 0001 100
      219 * 3,
      208 * 3,
      0,
      // 192  0000 0000 0001 101
      217 * 3,
      214 * 3,
      0,
      // 193  0000 0000 0001 001
      223 * 3,
      220 * 3,
      0,
      // 194  0000 0000 0001 011
      0,
      0,
      0x0023,
      // 195  0000 0000 0010 101.
      0,
      0,
      0x010b,
      // 196  0000 0000 0011 100.
      0,
      0,
      0x0028,
      // 197  0000 0000 0010 000.
      0,
      0,
      0x010c,
      // 198  0000 0000 0011 011.
      0,
      0,
      0x010a,
      // 199  0000 0000 0011 101.
      0,
      0,
      0x0020,
      // 200  0000 0000 0011 000.
      0,
      0,
      0x0108,
      // 201  0000 0000 0011 111.
      0,
      0,
      0x0109,
      // 202  0000 0000 0011 110.
      0,
      0,
      0x0026,
      // 203  0000 0000 0010 010.
      0,
      0,
      0x010d,
      // 204  0000 0000 0011 010.
      0,
      0,
      0x010e,
      // 205  0000 0000 0011 001.
      0,
      0,
      0x0021,
      // 206  0000 0000 0010 111.
      0,
      0,
      0x0027,
      // 207  0000 0000 0010 001.
      0,
      0,
      0x1f01,
      // 208  0000 0000 0001 1011.
      0,
      0,
      0x1b01,
      // 209  0000 0000 0001 1111.
      0,
      0,
      0x1e01,
      // 210  0000 0000 0001 1100.
      0,
      0,
      0x1002,
      // 211  0000 0000 0001 0101.
      0,
      0,
      0x1d01,
      // 212  0000 0000 0001 1101.
      0,
      0,
      0x1c01,
      // 213  0000 0000 0001 1110.
      0,
      0,
      0x010f,
      // 214  0000 0000 0001 0011.
      0,
      0,
      0x0112,
      // 215  0000 0000 0001 0000.
      0,
      0,
      0x0111,
      // 216  0000 0000 0001 0001.
      0,
      0,
      0x0110,
      // 217  0000 0000 0001 0010.
      0,
      0,
      0x0603,
      // 218  0000 0000 0001 0100.
      0,
      0,
      0x0b02,
      // 219  0000 0000 0001 1010.
      0,
      0,
      0x0e02,
      // 220  0000 0000 0001 0111.
      0,
      0,
      0x0d02,
      // 221  0000 0000 0001 1000.
      0,
      0,
      0x0c02,
      // 222  0000 0000 0001 1001.
      0,
      0,
      0x0f02 // 223  0000 0000 0001 0110.
    ])
  )
  mpeg1_defineProperty(MPEG1, 'PICTURE_TYPE', {
    INTRA: 1,
    PREDICTIVE: 2,
    B: 3
  })
  mpeg1_defineProperty(MPEG1, 'START', {
    SEQUENCE: 0xb3,
    SLICE_FIRST: 0x01,
    SLICE_LAST: 0xaf,
    PICTURE: 0x00,
    EXTENSION: 0xb5,
    USER_DATA: 0xb2
  }) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/mpeg1-wasm.js

  function mpeg1_wasm_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (mpeg1_wasm_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      mpeg1_wasm_typeof(obj)
    )
  }
  function mpeg1_wasm_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function mpeg1_wasm_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        mpeg1_wasm_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function mpeg1_wasm_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      mpeg1_wasm_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) mpeg1_wasm_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function mpeg1_wasm_get() {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
      mpeg1_wasm_get = Reflect.get.bind()
    } else {
      mpeg1_wasm_get = function _get(target, property, receiver) {
        var base = mpeg1_wasm_superPropBase(target, property)
        if (!base) return
        var desc = Object.getOwnPropertyDescriptor(base, property)
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver)
        }
        return desc.value
      }
    }
    return mpeg1_wasm_get.apply(this, arguments)
  }
  function mpeg1_wasm_superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = mpeg1_wasm_getPrototypeOf(object)
      if (object === null) break
    }
    return object
  }
  function mpeg1_wasm_inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    })
    Object.defineProperty(subClass, 'prototype', { writable: false })
    if (superClass) mpeg1_wasm_setPrototypeOf(subClass, superClass)
  }
  function mpeg1_wasm_setPrototypeOf(o, p) {
    mpeg1_wasm_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }
    return mpeg1_wasm_setPrototypeOf(o, p)
  }
  function mpeg1_wasm_createSuper(Derived) {
    var hasNativeReflectConstruct = mpeg1_wasm_isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = mpeg1_wasm_getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = mpeg1_wasm_getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return mpeg1_wasm_possibleConstructorReturn(this, result)
    }
  }
  function mpeg1_wasm_possibleConstructorReturn(self, call) {
    if (
      call &&
      (mpeg1_wasm_typeof(call) === 'object' || typeof call === 'function')
    ) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }
    return mpeg1_wasm_assertThisInitialized(self)
  }
  function mpeg1_wasm_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }
  function mpeg1_wasm_isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
      return true
    } catch (e) {
      return false
    }
  }
  function mpeg1_wasm_getPrototypeOf(o) {
    mpeg1_wasm_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return mpeg1_wasm_getPrototypeOf(o)
  }
  function mpeg1_wasm_defineProperty(obj, key, value) {
    key = mpeg1_wasm_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function mpeg1_wasm_toPropertyKey(arg) {
    var key = mpeg1_wasm_toPrimitive(arg, 'string')
    return mpeg1_wasm_typeof(key) === 'symbol' ? key : String(key)
  }
  function mpeg1_wasm_toPrimitive(input, hint) {
    if (mpeg1_wasm_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (mpeg1_wasm_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var MPEG1WASM = /*#__PURE__*/ (function (_BaseDecoder) {
    mpeg1_wasm_inherits(MPEG1WASM, _BaseDecoder)
    var _super = mpeg1_wasm_createSuper(MPEG1WASM)
    /** 分辨率 */

    function MPEG1WASM(options) {
      var _this
      mpeg1_wasm_classCallCheck(this, MPEG1WASM)
      _this = _super.call(this, options)
      mpeg1_wasm_defineProperty(
        mpeg1_wasm_assertThisInitialized(_this),
        'options',
        null
      )
      mpeg1_wasm_defineProperty(
        mpeg1_wasm_assertThisInitialized(_this),
        'resolution',
        {
          width: 0,
          height: 0
        }
      )
      _this.onDecodeCallback = options.onVideoDecode
      _this.module = options.wasmModule
      _this.bufferSize = options.videoBufferSize || 512 * 1024
      _this.bufferMode = options.streaming
        ? BitBuffer.MODE.EVICT
        : BitBuffer.MODE.EXPAND
      _this.decodeFirstFrame = options.decodeFirstFrame !== false
      _this.hasSequenceHeader = false
      _this.options = options
      return _this
    }
    mpeg1_wasm_createClass(MPEG1WASM, [
      {
        key: 'initializeWasmDecoder',
        value: function initializeWasmDecoder() {
          if (!this.module.instance) {
            console.warn('JSMpeg: WASM module not compiled yet')
            return
          }
          this.instance = this.module.instance
          this.functions = this.module.instance.exports
          this.decoder = this.functions._mpeg1_decoder_create(
            this.bufferSize,
            this.bufferMode
          )
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          if (!this.decoder) {
            return
          }
          this.functions._mpeg1_decoder_destroy(this.decoder)
        }
      },
      {
        key: 'bufferGetIndex',
        value: function bufferGetIndex() {
          if (!this.decoder) {
            return
          }
          return this.functions._mpeg1_decoder_get_index(this.decoder)
        }
      },
      {
        key: 'bufferSetIndex',
        value: function bufferSetIndex(index) {
          if (!this.decoder) {
            return
          }
          this.functions._mpeg1_decoder_set_index(this.decoder, index)
        }
      },
      {
        key: 'bufferWrite',
        value: function bufferWrite(buffers) {
          if (!this.decoder) {
            this.initializeWasmDecoder()
          }
          var totalLength = 0
          for (var i = 0; i < buffers.length; i++) {
            totalLength += buffers[i].length
          }
          var ptr = this.functions._mpeg1_decoder_get_write_ptr(
            this.decoder,
            totalLength
          )
          for (var _i = 0; _i < buffers.length; _i++) {
            this.instance.heapU8.set(buffers[_i], ptr)
            ptr += buffers[_i].length
          }
          this.functions._mpeg1_decoder_did_write(this.decoder, totalLength)
          return totalLength
        }
      },
      {
        key: 'write',
        value: function write(pts, buffers) {
          mpeg1_wasm_get(
            mpeg1_wasm_getPrototypeOf(MPEG1WASM.prototype),
            'write',
            this
          ).call(this, pts, buffers)
          if (
            !this.hasSequenceHeader &&
            this.functions._mpeg1_decoder_has_sequence_header(this.decoder)
          ) {
            this.loadSequnceHeader()
          }
        }
      },
      {
        key: 'loadSequnceHeader',
        value: function loadSequnceHeader() {
          this.hasSequenceHeader = true
          this.frameRate = this.functions._mpeg1_decoder_get_frame_rate(
            this.decoder
          )
          this.codedSize = this.functions._mpeg1_decoder_get_coded_size(
            this.decoder
          )
          if (this.destination) {
            var _this$options$onResol, _this$options
            var w = this.functions._mpeg1_decoder_get_width(this.decoder)
            var h = this.functions._mpeg1_decoder_get_height(this.decoder)
            this.destination.resize(w, h)
            this.resolution.width = w
            this.resolution.height = h
            ;(_this$options$onResol = (_this$options = this.options)
              .onResolutionDecode) === null || _this$options$onResol === void 0
              ? void 0
              : _this$options$onResol.call(_this$options, w, h)
          }
          if (this.decodeFirstFrame) {
            this.decode()
          }
        }
      },
      {
        key: 'decode',
        value: function decode() {
          var startTime = Now()
          if (!this.decoder) {
            return false
          }
          var didDecode = this.functions._mpeg1_decoder_decode(this.decoder)
          if (!didDecode) {
            return false
          }

          // Invoke decode callbacks
          if (this.destination) {
            var ptrY = this.functions._mpeg1_decoder_get_y_ptr(this.decoder),
              ptrCr = this.functions._mpeg1_decoder_get_cr_ptr(this.decoder),
              ptrCb = this.functions._mpeg1_decoder_get_cb_ptr(this.decoder)
            var dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize)
            var dcr = this.instance.heapU8.subarray(
              ptrCr,
              ptrCr + (this.codedSize >> 2)
            )
            var dcb = this.instance.heapU8.subarray(
              ptrCb,
              ptrCb + (this.codedSize >> 2)
            )
            this.destination.render(dy, dcr, dcb, false)
          }
          this.advanceDecodedTime(1 / this.frameRate)
          var elapsedTime = Now() - startTime
          if (this.onDecodeCallback) {
            this.onDecodeCallback(this, elapsedTime)
          }
          return true
        }
      }
    ])
    return MPEG1WASM
  })(BaseDecoder) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/mp2.js

  function mp2_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (mp2_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      mp2_typeof(obj)
    )
  }
  function mp2_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function mp2_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        mp2_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function mp2_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) mp2_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) mp2_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function mp2_inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    })
    Object.defineProperty(subClass, 'prototype', { writable: false })
    if (superClass) mp2_setPrototypeOf(subClass, superClass)
  }
  function mp2_setPrototypeOf(o, p) {
    mp2_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }
    return mp2_setPrototypeOf(o, p)
  }
  function mp2_createSuper(Derived) {
    var hasNativeReflectConstruct = mp2_isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = mp2_getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = mp2_getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return mp2_possibleConstructorReturn(this, result)
    }
  }
  function mp2_possibleConstructorReturn(self, call) {
    if (call && (mp2_typeof(call) === 'object' || typeof call === 'function')) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }
    return mp2_assertThisInitialized(self)
  }
  function mp2_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }
  function mp2_isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
      return true
    } catch (e) {
      return false
    }
  }
  function mp2_getPrototypeOf(o) {
    mp2_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return mp2_getPrototypeOf(o)
  }
  function mp2_defineProperty(obj, key, value) {
    key = mp2_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function mp2_toPropertyKey(arg) {
    var key = mp2_toPrimitive(arg, 'string')
    return mp2_typeof(key) === 'symbol' ? key : String(key)
  }
  function mp2_toPrimitive(input, hint) {
    if (mp2_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (mp2_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  /**
   * Based on kjmp2 by Martin J. Fiedler
   * http://keyj.emphy.de/kjmp2/
   */
  var MP2 = /*#__PURE__*/ (function (_BaseDecoder) {
    mp2_inherits(MP2, _BaseDecoder)
    var _super = mp2_createSuper(MP2)
    function MP2(options) {
      var _this
      mp2_classCallCheck(this, MP2)
      _this = _super.call(this, options)
      _this.onDecodeCallback = options.onAudioDecode
      var bufferSize = options.audioBufferSize || 128 * 1024
      var bufferMode = options.streaming
        ? BitBuffer.MODE.EVICT
        : BitBuffer.MODE.EXPAND
      _this.bits = new BitBuffer(bufferSize, bufferMode)
      _this.left = new Float32Array(1152)
      _this.right = new Float32Array(1152)
      _this.sampleRate = 44100
      _this.D = new Float32Array(1024)
      _this.D.set(MP2.SYNTHESIS_WINDOW, 0)
      _this.D.set(MP2.SYNTHESIS_WINDOW, 512)
      _this.V = [new Float32Array(1024), new Float32Array(1024)]
      _this.U = new Int32Array(32)
      _this.VPos = 0
      _this.allocation = [new Array(32), new Array(32)]
      _this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)]
      _this.scaleFactor = [new Array(32), new Array(32)]
      _this.sample = [new Array(32), new Array(32)]
      for (var j = 0; j < 2; j++) {
        for (var i = 0; i < 32; i++) {
          _this.scaleFactor[j][i] = [0, 0, 0]
          _this.sample[j][i] = [0, 0, 0]
        }
      }
      return _this
    }
    mp2_createClass(
      MP2,
      [
        {
          key: 'decode',
          value: function decode() {
            var startTime = Now()
            var pos = this.bits.index >> 3
            if (pos >= this.bits.byteLength) {
              return false
            }
            var decoded = this.decodeFrame(this.left, this.right)
            this.bits.index = (pos + decoded) << 3
            if (!decoded) {
              return false
            }
            if (this.destination) {
              this.destination.play(this.sampleRate, this.left, this.right)
            }
            this.advanceDecodedTime(this.left.length / this.sampleRate)
            var elapsedTime = Now() - startTime
            if (this.onDecodeCallback) {
              this.onDecodeCallback(this, elapsedTime)
            }
            return true
          }
        },
        {
          key: 'getCurrentTime',
          value: function getCurrentTime() {
            var enqueuedTime = this.destination
              ? this.destination.enqueuedTime
              : 0
            return this.decodedTime - enqueuedTime
          }
        },
        {
          key: 'decodeFrame',
          value: function decodeFrame(left, right) {
            // Check for valid header: syncword OK, MPEG-Audio Layer 2
            var sync = this.bits.read(11),
              version = this.bits.read(2),
              layer = this.bits.read(2),
              hasCRC = !this.bits.read(1)
            if (
              sync !== MP2.FRAME_SYNC ||
              version !== MP2.VERSION.MPEG_1 ||
              layer !== MP2.LAYER.II
            ) {
              return 0 // Invalid header or unsupported version
            }

            var bitrateIndex = this.bits.read(4) - 1
            if (bitrateIndex > 13) {
              return 0 // Invalid bit rate or 'free format'
            }

            var sampleRateIndex = this.bits.read(2)
            var sampleRate = MP2.SAMPLE_RATE[sampleRateIndex]
            if (sampleRateIndex === 3) {
              return 0 // Invalid sample rate
            }

            if (version === MP2.VERSION.MPEG_2) {
              sampleRateIndex += 4
              bitrateIndex += 14
            }
            var padding = this.bits.read(1),
              privat = this.bits.read(1),
              mode = this.bits.read(2)

            // Parse the mode_extension, set up the stereo bound
            var bound = 0
            if (mode === MP2.MODE.JOINT_STEREO) {
              bound = (this.bits.read(2) + 1) << 2
            } else {
              this.bits.skip(2)
              bound = mode === MP2.MODE.MONO ? 0 : 32
            }

            // Discard the last 4 bits of the header and the CRC value, if present
            this.bits.skip(4)
            if (hasCRC) {
              this.bits.skip(16)
            }

            // Compute the frame size
            sampleRate = MP2.SAMPLE_RATE[sampleRateIndex]
            var bitrate = MP2.BIT_RATE[bitrateIndex],
              frameSize = ((144000 * bitrate) / sampleRate + padding) | 0

            // Prepare the quantizer table lookups
            var tab3 = 0
            var sblimit = 0
            if (version === MP2.VERSION.MPEG_2) {
              // MPEG-2 (LSR)
              tab3 = 2
              sblimit = 30
            } else {
              // MPEG-1
              var tab1 = mode === MP2.MODE.MONO ? 0 : 1
              var tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex]
              tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex]
              sblimit = tab3 & 63
              tab3 >>= 6
            }
            if (bound > sblimit) {
              bound = sblimit
            }

            // Read the allocation information
            for (var sb = 0; sb < bound; sb++) {
              this.allocation[0][sb] = this.readAllocation(sb, tab3)
              this.allocation[1][sb] = this.readAllocation(sb, tab3)
            }
            for (var _sb = bound; _sb < sblimit; _sb++) {
              this.allocation[0][_sb] = this.allocation[1][_sb] =
                this.readAllocation(_sb, tab3)
            }

            // Read scale factor selector information
            var channels = mode === MP2.MODE.MONO ? 1 : 2
            for (var _sb2 = 0; _sb2 < sblimit; _sb2++) {
              for (ch = 0; ch < channels; ch++) {
                if (this.allocation[ch][_sb2]) {
                  this.scaleFactorInfo[ch][_sb2] = this.bits.read(2)
                }
              }
              if (mode === MP2.MODE.MONO) {
                this.scaleFactorInfo[1][_sb2] = this.scaleFactorInfo[0][_sb2]
              }
            }

            // Read scale factors
            for (var _sb3 = 0; _sb3 < sblimit; _sb3++) {
              for (var _ch = 0; _ch < channels; _ch++) {
                if (this.allocation[_ch][_sb3]) {
                  var sf = this.scaleFactor[_ch][_sb3]
                  switch (this.scaleFactorInfo[_ch][_sb3]) {
                    case 0:
                      sf[0] = this.bits.read(6)
                      sf[1] = this.bits.read(6)
                      sf[2] = this.bits.read(6)
                      break
                    case 1:
                      sf[0] = sf[1] = this.bits.read(6)
                      sf[2] = this.bits.read(6)
                      break
                    case 2:
                      sf[0] = sf[1] = sf[2] = this.bits.read(6)
                      break
                    case 3:
                      sf[0] = this.bits.read(6)
                      sf[1] = sf[2] = this.bits.read(6)
                      break
                  }
                }
              }
              if (mode === MP2.MODE.MONO) {
                this.scaleFactor[1][_sb3][0] = this.scaleFactor[0][_sb3][0]
                this.scaleFactor[1][_sb3][1] = this.scaleFactor[0][_sb3][1]
                this.scaleFactor[1][_sb3][2] = this.scaleFactor[0][_sb3][2]
              }
            }

            // Coefficient input and reconstruction
            var outPos = 0
            for (var part = 0; part < 3; part++) {
              for (var granule = 0; granule < 4; granule++) {
                // Read the samples
                for (var _sb4 = 0; _sb4 < bound; _sb4++) {
                  this.readSamples(0, _sb4, part)
                  this.readSamples(1, _sb4, part)
                }
                for (var _sb5 = bound; _sb5 < sblimit; _sb5++) {
                  this.readSamples(0, _sb5, part)
                  this.sample[1][_sb5][0] = this.sample[0][_sb5][0]
                  this.sample[1][_sb5][1] = this.sample[0][_sb5][1]
                  this.sample[1][_sb5][2] = this.sample[0][_sb5][2]
                }
                for (var _sb6 = sblimit; _sb6 < 32; _sb6++) {
                  this.sample[0][_sb6][0] = 0
                  this.sample[0][_sb6][1] = 0
                  this.sample[0][_sb6][2] = 0
                  this.sample[1][_sb6][0] = 0
                  this.sample[1][_sb6][1] = 0
                  this.sample[1][_sb6][2] = 0
                }

                // Synthesis loop
                for (var p = 0; p < 3; p++) {
                  // Shifting step
                  this.VPos = (this.VPos - 64) & 1023
                  for (var _ch2 = 0; _ch2 < 2; _ch2++) {
                    MP2.MatrixTransform(
                      this.sample[_ch2],
                      p,
                      this.V[_ch2],
                      this.VPos
                    )

                    // Build U, windowing, calculate output
                    Fill(this.U, 0)
                    var dIndex = 512 - (this.VPos >> 1)
                    var vIndex = this.VPos % 128 >> 1
                    while (vIndex < 1024) {
                      for (var i = 0; i < 32; ++i) {
                        this.U[i] += this.D[dIndex++] * this.V[_ch2][vIndex++]
                      }
                      vIndex += 128 - 32
                      dIndex += 64 - 32
                    }
                    vIndex = 128 - 32 + 1024 - vIndex
                    dIndex -= 512 - 32
                    while (vIndex < 1024) {
                      for (var _i = 0; _i < 32; ++_i) {
                        this.U[_i] += this.D[dIndex++] * this.V[_ch2][vIndex++]
                      }
                      vIndex += 128 - 32
                      dIndex += 64 - 32
                    }

                    // Output samples
                    var outChannel = _ch2 === 0 ? left : right
                    for (var j = 0; j < 32; j++) {
                      outChannel[outPos + j] = this.U[j] / 2147418112
                    }
                  } // End of synthesis channel loop
                  outPos += 32
                } // End of synthesis sub-block loop
              } // Decoding of the granule finished
            }

            this.sampleRate = sampleRate
            return frameSize
          }
        },
        {
          key: 'readAllocation',
          value: function readAllocation(sb, tab3) {
            var tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb]
            var qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)]
            return qtab ? MP2.QUANT_TAB[qtab - 1] : 0
          }
        },
        {
          key: 'readSamples',
          value: function readSamples(ch, sb, part) {
            var q = this.allocation[ch][sb],
              sf = this.scaleFactor[ch][sb][part],
              sample = this.sample[ch][sb],
              val = 0
            if (!q) {
              // No bits allocated for this subband
              sample[0] = sample[1] = sample[2] = 0
              return
            }

            // Resolve scalefactor
            if (sf === 63) {
              sf = 0
            } else {
              var shift = (sf / 3) | 0
              sf = (MP2.SCALEFACTOR_BASE[sf % 3] + ((1 << shift) >> 1)) >> shift
            }

            // Decode samples
            var adj = q.levels
            if (q.group) {
              // Decode grouped samples
              val = this.bits.read(q.bits)
              sample[0] = val % adj
              val = (val / adj) | 0
              sample[1] = val % adj
              sample[2] = (val / adj) | 0
            } else {
              // Decode direct samples
              sample[0] = this.bits.read(q.bits)
              sample[1] = this.bits.read(q.bits)
              sample[2] = this.bits.read(q.bits)
            }

            // Postmultiply samples
            var scale = (65536 / (adj + 1)) | 0
            adj = ((adj + 1) >> 1) - 1
            val = (adj - sample[0]) * scale
            sample[0] =
              (val * (sf >> 12) + ((val * (sf & 4095) + 2048) >> 12)) >> 12
            val = (adj - sample[1]) * scale
            sample[1] =
              (val * (sf >> 12) + ((val * (sf & 4095) + 2048) >> 12)) >> 12
            val = (adj - sample[2]) * scale
            sample[2] =
              (val * (sf >> 12) + ((val * (sf & 4095) + 2048) >> 12)) >> 12
          }
        }
      ],
      [
        {
          key: 'MatrixTransform',
          value: function MatrixTransform(s, ss, d, dp) {
            var t01,
              t02,
              t03,
              t04,
              t05,
              t06,
              t07,
              t08,
              t09,
              t10,
              t11,
              t12,
              t13,
              t14,
              t15,
              t16,
              t17,
              t18,
              t19,
              t20,
              t21,
              t22,
              t23,
              t24,
              t25,
              t26,
              t27,
              t28,
              t29,
              t30,
              t31,
              t32,
              t33
            t01 = s[0][ss] + s[31][ss]
            t02 = (s[0][ss] - s[31][ss]) * 0.500602998235
            t03 = s[1][ss] + s[30][ss]
            t04 = (s[1][ss] - s[30][ss]) * 0.505470959898
            t05 = s[2][ss] + s[29][ss]
            t06 = (s[2][ss] - s[29][ss]) * 0.515447309923
            t07 = s[3][ss] + s[28][ss]
            t08 = (s[3][ss] - s[28][ss]) * 0.53104259109
            t09 = s[4][ss] + s[27][ss]
            t10 = (s[4][ss] - s[27][ss]) * 0.553103896034
            t11 = s[5][ss] + s[26][ss]
            t12 = (s[5][ss] - s[26][ss]) * 0.582934968206
            t13 = s[6][ss] + s[25][ss]
            t14 = (s[6][ss] - s[25][ss]) * 0.622504123036
            t15 = s[7][ss] + s[24][ss]
            t16 = (s[7][ss] - s[24][ss]) * 0.674808341455
            t17 = s[8][ss] + s[23][ss]
            t18 = (s[8][ss] - s[23][ss]) * 0.744536271002
            t19 = s[9][ss] + s[22][ss]
            t20 = (s[9][ss] - s[22][ss]) * 0.839349645416
            t21 = s[10][ss] + s[21][ss]
            t22 = (s[10][ss] - s[21][ss]) * 0.972568237862
            t23 = s[11][ss] + s[20][ss]
            t24 = (s[11][ss] - s[20][ss]) * 1.16943993343
            t25 = s[12][ss] + s[19][ss]
            t26 = (s[12][ss] - s[19][ss]) * 1.48416461631
            t27 = s[13][ss] + s[18][ss]
            t28 = (s[13][ss] - s[18][ss]) * 2.05778100995
            t29 = s[14][ss] + s[17][ss]
            t30 = (s[14][ss] - s[17][ss]) * 3.40760841847
            t31 = s[15][ss] + s[16][ss]
            t32 = (s[15][ss] - s[16][ss]) * 10.1900081235
            t33 = t01 + t31
            t31 = (t01 - t31) * 0.502419286188
            t01 = t03 + t29
            t29 = (t03 - t29) * 0.52249861494
            t03 = t05 + t27
            t27 = (t05 - t27) * 0.566944034816
            t05 = t07 + t25
            t25 = (t07 - t25) * 0.64682178336
            t07 = t09 + t23
            t23 = (t09 - t23) * 0.788154623451
            t09 = t11 + t21
            t21 = (t11 - t21) * 1.06067768599
            t11 = t13 + t19
            t19 = (t13 - t19) * 1.72244709824
            t13 = t15 + t17
            t17 = (t15 - t17) * 5.10114861869
            t15 = t33 + t13
            t13 = (t33 - t13) * 0.509795579104
            t33 = t01 + t11
            t01 = (t01 - t11) * 0.601344886935
            t11 = t03 + t09
            t09 = (t03 - t09) * 0.899976223136
            t03 = t05 + t07
            t07 = (t05 - t07) * 2.56291544774
            t05 = t15 + t03
            t15 = (t15 - t03) * 0.541196100146
            t03 = t33 + t11
            t11 = (t33 - t11) * 1.30656296488
            t33 = t05 + t03
            t05 = (t05 - t03) * 0.707106781187
            t03 = t15 + t11
            t15 = (t15 - t11) * 0.707106781187
            t03 += t15
            t11 = t13 + t07
            t13 = (t13 - t07) * 0.541196100146
            t07 = t01 + t09
            t09 = (t01 - t09) * 1.30656296488
            t01 = t11 + t07
            t07 = (t11 - t07) * 0.707106781187
            t11 = t13 + t09
            t13 = (t13 - t09) * 0.707106781187
            t11 += t13
            t01 += t11
            t11 += t07
            t07 += t13
            t09 = t31 + t17
            t31 = (t31 - t17) * 0.509795579104
            t17 = t29 + t19
            t29 = (t29 - t19) * 0.601344886935
            t19 = t27 + t21
            t21 = (t27 - t21) * 0.899976223136
            t27 = t25 + t23
            t23 = (t25 - t23) * 2.56291544774
            t25 = t09 + t27
            t09 = (t09 - t27) * 0.541196100146
            t27 = t17 + t19
            t19 = (t17 - t19) * 1.30656296488
            t17 = t25 + t27
            t27 = (t25 - t27) * 0.707106781187
            t25 = t09 + t19
            t19 = (t09 - t19) * 0.707106781187
            t25 += t19
            t09 = t31 + t23
            t31 = (t31 - t23) * 0.541196100146
            t23 = t29 + t21
            t21 = (t29 - t21) * 1.30656296488
            t29 = t09 + t23
            t23 = (t09 - t23) * 0.707106781187
            t09 = t31 + t21
            t31 = (t31 - t21) * 0.707106781187
            t09 += t31
            t29 += t09
            t09 += t23
            t23 += t31
            t17 += t29
            t29 += t25
            t25 += t09
            t09 += t27
            t27 += t23
            t23 += t19
            t19 += t31
            t21 = t02 + t32
            t02 = (t02 - t32) * 0.502419286188
            t32 = t04 + t30
            t04 = (t04 - t30) * 0.52249861494
            t30 = t06 + t28
            t28 = (t06 - t28) * 0.566944034816
            t06 = t08 + t26
            t08 = (t08 - t26) * 0.64682178336
            t26 = t10 + t24
            t10 = (t10 - t24) * 0.788154623451
            t24 = t12 + t22
            t22 = (t12 - t22) * 1.06067768599
            t12 = t14 + t20
            t20 = (t14 - t20) * 1.72244709824
            t14 = t16 + t18
            t16 = (t16 - t18) * 5.10114861869
            t18 = t21 + t14
            t14 = (t21 - t14) * 0.509795579104
            t21 = t32 + t12
            t32 = (t32 - t12) * 0.601344886935
            t12 = t30 + t24
            t24 = (t30 - t24) * 0.899976223136
            t30 = t06 + t26
            t26 = (t06 - t26) * 2.56291544774
            t06 = t18 + t30
            t18 = (t18 - t30) * 0.541196100146
            t30 = t21 + t12
            t12 = (t21 - t12) * 1.30656296488
            t21 = t06 + t30
            t30 = (t06 - t30) * 0.707106781187
            t06 = t18 + t12
            t12 = (t18 - t12) * 0.707106781187
            t06 += t12
            t18 = t14 + t26
            t26 = (t14 - t26) * 0.541196100146
            t14 = t32 + t24
            t24 = (t32 - t24) * 1.30656296488
            t32 = t18 + t14
            t14 = (t18 - t14) * 0.707106781187
            t18 = t26 + t24
            t24 = (t26 - t24) * 0.707106781187
            t18 += t24
            t32 += t18
            t18 += t14
            t26 = t14 + t24
            t14 = t02 + t16
            t02 = (t02 - t16) * 0.509795579104
            t16 = t04 + t20
            t04 = (t04 - t20) * 0.601344886935
            t20 = t28 + t22
            t22 = (t28 - t22) * 0.899976223136
            t28 = t08 + t10
            t10 = (t08 - t10) * 2.56291544774
            t08 = t14 + t28
            t14 = (t14 - t28) * 0.541196100146
            t28 = t16 + t20
            t20 = (t16 - t20) * 1.30656296488
            t16 = t08 + t28
            t28 = (t08 - t28) * 0.707106781187
            t08 = t14 + t20
            t20 = (t14 - t20) * 0.707106781187
            t08 += t20
            t14 = t02 + t10
            t02 = (t02 - t10) * 0.541196100146
            t10 = t04 + t22
            t22 = (t04 - t22) * 1.30656296488
            t04 = t14 + t10
            t10 = (t14 - t10) * 0.707106781187
            t14 = t02 + t22
            t02 = (t02 - t22) * 0.707106781187
            t14 += t02
            t04 += t14
            t14 += t10
            t10 += t02
            t16 += t04
            t04 += t08
            t08 += t14
            t14 += t28
            t28 += t10
            t10 += t20
            t20 += t02
            t21 += t16
            t16 += t32
            t32 += t04
            t04 += t06
            t06 += t08
            t08 += t18
            t18 += t14
            t14 += t30
            t30 += t28
            t28 += t26
            t26 += t10
            t10 += t12
            t12 += t20
            t20 += t24
            t24 += t02
            d[dp + 48] = -t33
            d[dp + 49] = d[dp + 47] = -t21
            d[dp + 50] = d[dp + 46] = -t17
            d[dp + 51] = d[dp + 45] = -t16
            d[dp + 52] = d[dp + 44] = -t01
            d[dp + 53] = d[dp + 43] = -t32
            d[dp + 54] = d[dp + 42] = -t29
            d[dp + 55] = d[dp + 41] = -t04
            d[dp + 56] = d[dp + 40] = -t03
            d[dp + 57] = d[dp + 39] = -t06
            d[dp + 58] = d[dp + 38] = -t25
            d[dp + 59] = d[dp + 37] = -t08
            d[dp + 60] = d[dp + 36] = -t11
            d[dp + 61] = d[dp + 35] = -t18
            d[dp + 62] = d[dp + 34] = -t09
            d[dp + 63] = d[dp + 33] = -t14
            d[dp + 32] = -t05
            d[dp + 0] = t05
            d[dp + 31] = -t30
            d[dp + 1] = t30
            d[dp + 30] = -t27
            d[dp + 2] = t27
            d[dp + 29] = -t28
            d[dp + 3] = t28
            d[dp + 28] = -t07
            d[dp + 4] = t07
            d[dp + 27] = -t26
            d[dp + 5] = t26
            d[dp + 26] = -t23
            d[dp + 6] = t23
            d[dp + 25] = -t10
            d[dp + 7] = t10
            d[dp + 24] = -t15
            d[dp + 8] = t15
            d[dp + 23] = -t12
            d[dp + 9] = t12
            d[dp + 22] = -t19
            d[dp + 10] = t19
            d[dp + 21] = -t20
            d[dp + 11] = t20
            d[dp + 20] = -t13
            d[dp + 12] = t13
            d[dp + 19] = -t24
            d[dp + 13] = t24
            d[dp + 18] = -t31
            d[dp + 14] = t31
            d[dp + 17] = -t02
            d[dp + 15] = t02
            d[dp + 16] = 0.0
          }
        }
      ]
    )
    return MP2
  })(BaseDecoder)
  mp2_defineProperty(MP2, 'FRAME_SYNC', 0x7ff)
  mp2_defineProperty(MP2, 'VERSION', {
    MPEG_2_5: 0x0,
    MPEG_2: 0x2,
    MPEG_1: 0x3
  })
  mp2_defineProperty(MP2, 'LAYER', {
    III: 0x1,
    II: 0x2,
    I: 0x3
  })
  mp2_defineProperty(MP2, 'MODE', {
    STEREO: 0x0,
    JOINT_STEREO: 0x1,
    DUAL_CHANNEL: 0x2,
    MONO: 0x3
  })
  mp2_defineProperty(
    MP2,
    'SAMPLE_RATE',
    new Uint16Array([
      44100,
      48000,
      32000,
      0,
      // MPEG-1
      22050,
      24000,
      16000,
      0 // MPEG-2
    ])
  )
  mp2_defineProperty(
    MP2,
    'BIT_RATE',
    new Uint16Array([
      32,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      160,
      192,
      224,
      256,
      320,
      384,
      // MPEG-1
      8,
      16,
      24,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      144,
      160 // MPEG-2
    ])
  )
  mp2_defineProperty(
    MP2,
    'SCALEFACTOR_BASE',
    new Uint32Array([0x02000000, 0x01965fea, 0x01428a30])
  )
  mp2_defineProperty(
    MP2,
    'SYNTHESIS_WINDOW',
    new Float32Array([
      0.0, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -1.0, -1.0, -1.0, -1.0, -1.5,
      -1.5, -2.0, -2.0, -2.5, -2.5, -3.0, -3.5, -3.5, -4.0, -4.5, -5.0, -5.5,
      -6.5, -7.0, -8.0, -8.5, -9.5, -10.5, -12.0, -13.0, -14.5, -15.5, -17.5,
      -19.0, -20.5, -22.5, -24.5, -26.5, -29.0, -31.5, -34.0, -36.5, -39.5,
      -42.5, -45.5, -48.5, -52.0, -55.5, -58.5, -62.5, -66.0, -69.5, -73.5,
      -77.0, -80.5, -84.5, -88.0, -91.5, -95.0, -98.0, -101.0, -104.0, 106.5,
      109.0, 111.0, 112.5, 113.5, 114.0, 114.0, 113.5, 112.0, 110.5, 107.5,
      104.0, 100.0, 94.5, 88.5, 81.5, 73.0, 63.5, 53.0, 41.5, 28.5, 14.5, -1.0,
      -18.0, -36.0, -55.5, -76.5, -98.5, -122.0, -147.0, -173.5, -200.5, -229.5,
      -259.5, -290.5, -322.5, -355.5, -389.5, -424.0, -459.5, -495.5, -532.0,
      -568.5, -605.0, -641.5, -678.0, -714.0, -749.0, -783.5, -817.0, -849.0,
      -879.5, -908.5, -935.0, -959.5, -981.0, -1000.5, -1016.0, -1028.5,
      -1037.5, -1042.5, -1043.5, -1040.0, -1031.5, 1018.5, 1000.0, 976.0, 946.5,
      911.0, 869.5, 822.0, 767.5, 707.0, 640.0, 565.5, 485.0, 397.0, 302.5,
      201.0, 92.5, -22.5, -144.0, -272.5, -407.0, -547.5, -694.0, -846.0,
      -1003.0, -1165.0, -1331.5, -1502.0, -1675.5, -1852.5, -2031.5, -2212.5,
      -2394.0, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5,
      -3798.5, -3955.0, -4104.5, -4245.5, -4377.5, -4499.0, -4609.5, -4708.0,
      -4792.5, -4863.5, -4919.0, -4958.0, -4979.5, -4983.0, -4967.5, -4931.5,
      -4875.0, -4796.0, -4694.5, -4569.5, -4420.0, -4246.0, -4046.0, -3820.0,
      -3567.0, 3287.0, 2979.5, 2644.0, 2280.5, 1888.0, 1467.5, 1018.5, 541.0,
      35.0, -499.0, -1061.0, -1650.0, -2266.5, -2909.0, -3577.0, -4270.0,
      -4987.5, -5727.5, -6490.0, -7274.0, -8077.5, -8899.5, -9739.0, -10594.5,
      -11464.5, -12347.0, -13241.0, -14144.5, -15056.0, -15973.5, -16895.5,
      -17820.0, -18744.5, -19668.0, -20588.0, -21503.0, -22410.5, -23308.5,
      -24195.0, -25068.5, -25926.5, -26767.0, -27589.0, -28389.0, -29166.5,
      -29919.0, -30644.5, -31342.0, -32009.5, -32645.0, -33247.0, -33814.5,
      -34346.0, -34839.5, -35295.0, -35710.0, -36084.5, -36417.5, -36707.5,
      -36954.0, -37156.5, -37315.0, -37428.0, -37496.0, 37519.0, 37496.0,
      37428.0, 37315.0, 37156.5, 36954.0, 36707.5, 36417.5, 36084.5, 35710.0,
      35295.0, 34839.5, 34346.0, 33814.5, 33247.0, 32645.0, 32009.5, 31342.0,
      30644.5, 29919.0, 29166.5, 28389.0, 27589.0, 26767.0, 25926.5, 25068.5,
      24195.0, 23308.5, 22410.5, 21503.0, 20588.0, 19668.0, 18744.5, 17820.0,
      16895.5, 15973.5, 15056.0, 14144.5, 13241.0, 12347.0, 11464.5, 10594.5,
      9739.0, 8899.5, 8077.5, 7274.0, 6490.0, 5727.5, 4987.5, 4270.0, 3577.0,
      2909.0, 2266.5, 1650.0, 1061.0, 499.0, -35.0, -541.0, -1018.5, -1467.5,
      -1888.0, -2280.5, -2644.0, -2979.5, 3287.0, 3567.0, 3820.0, 4046.0,
      4246.0, 4420.0, 4569.5, 4694.5, 4796.0, 4875.0, 4931.5, 4967.5, 4983.0,
      4979.5, 4958.0, 4919.0, 4863.5, 4792.5, 4708.0, 4609.5, 4499.0, 4377.5,
      4245.5, 4104.5, 3955.0, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5,
      2758.5, 2576.5, 2394.0, 2212.5, 2031.5, 1852.5, 1675.5, 1502.0, 1331.5,
      1165.0, 1003.0, 846.0, 694.0, 547.5, 407.0, 272.5, 144.0, 22.5, -92.5,
      -201.0, -302.5, -397.0, -485.0, -565.5, -640.0, -707.0, -767.5, -822.0,
      -869.5, -911.0, -946.5, -976.0, -1000.0, 1018.5, 1031.5, 1040.0, 1043.5,
      1042.5, 1037.5, 1028.5, 1016.0, 1000.5, 981.0, 959.5, 935.0, 908.5, 879.5,
      849.0, 817.0, 783.5, 749.0, 714.0, 678.0, 641.5, 605.0, 568.5, 532.0,
      495.5, 459.5, 424.0, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5,
      173.5, 147.0, 122.0, 98.5, 76.5, 55.5, 36.0, 18.0, 1.0, -14.5, -28.5,
      -41.5, -53.0, -63.5, -73.0, -81.5, -88.5, -94.5, -100.0, -104.0, -107.5,
      -110.5, -112.0, -113.5, -114.0, -114.0, -113.5, -112.5, -111.0, -109.0,
      106.5, 104.0, 101.0, 98.0, 95.0, 91.5, 88.0, 84.5, 80.5, 77.0, 73.5, 69.5,
      66.0, 62.5, 58.5, 55.5, 52.0, 48.5, 45.5, 42.5, 39.5, 36.5, 34.0, 31.5,
      29.0, 26.5, 24.5, 22.5, 20.5, 19.0, 17.5, 15.5, 14.5, 13.0, 12.0, 10.5,
      9.5, 8.5, 8.0, 7.0, 6.5, 5.5, 5.0, 4.5, 4.0, 3.5, 3.5, 3.0, 2.5, 2.5, 2.0,
      2.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5
    ])
  )
  mp2_defineProperty(MP2, 'QUANT_LUT_STEP_1', [
    // 32, 48, 56, 64, 80, 96,112,128,160,192,224,256,320,384 <- bitrate
    [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    // mono
    // 16, 24, 28, 32, 40, 48, 56, 64, 80, 96,112,128,160,192 <- bitrate / chan
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2] // stereo
  ])
  mp2_defineProperty(MP2, 'QUANT_TAB', {
    A: 27 | 64,
    // Table 3-B.2a: high-rate, sblimit = 27
    B: 30 | 64,
    // Table 3-B.2b: high-rate, sblimit = 30
    C: 8,
    // Table 3-B.2c:  low-rate, sblimit =  8
    D: 12 // Table 3-B.2d:  low-rate, sblimit = 12
  })
  mp2_defineProperty(MP2, 'QUANT_LUT_STEP_2', [
    //   44.1 kHz,        48 kHz,          32 kHz
    [MP2.QUANT_TAB.C, MP2.QUANT_TAB.C, MP2.QUANT_TAB.D],
    // 32 - 48 kbit/sec/ch
    [MP2.QUANT_TAB.A, MP2.QUANT_TAB.A, MP2.QUANT_TAB.A],
    // 56 - 80 kbit/sec/ch
    [MP2.QUANT_TAB.B, MP2.QUANT_TAB.A, MP2.QUANT_TAB.B] // 96+	 kbit/sec/ch
  ])
  mp2_defineProperty(MP2, 'QUANT_LUT_STEP_3', [
    // Low-rate table (3-B.2c and 3-B.2d)
    [0x44, 0x44, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34],
    // High-rate table (3-B.2a and 3-B.2b)
    [
      0x43, 0x43, 0x43, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x31,
      0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x20,
      0x20, 0x20, 0x20, 0x20, 0x20, 0x20
    ],
    // MPEG-2 LSR table (B.2 in ISO 13818-3)
    [
      0x45, 0x45, 0x45, 0x45, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x24,
      0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24,
      0x24, 0x24, 0x24, 0x24, 0x24, 0x24
    ]
  ])
  mp2_defineProperty(MP2, 'QUANT_LUT_STEP4', [
    [0, 1, 2, 17],
    [0, 1, 2, 3, 4, 5, 6, 17],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17],
    [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  ])
  mp2_defineProperty(MP2, 'QUANT_TAB', [
    {
      levels: 3,
      group: 1,
      bits: 5
    },
    //  1
    {
      levels: 5,
      group: 1,
      bits: 7
    },
    //  2
    {
      levels: 7,
      group: 0,
      bits: 3
    },
    //  3
    {
      levels: 9,
      group: 1,
      bits: 10
    },
    //  4
    {
      levels: 15,
      group: 0,
      bits: 4
    },
    //  5
    {
      levels: 31,
      group: 0,
      bits: 5
    },
    //  6
    {
      levels: 63,
      group: 0,
      bits: 6
    },
    //  7
    {
      levels: 127,
      group: 0,
      bits: 7
    },
    //  8
    {
      levels: 255,
      group: 0,
      bits: 8
    },
    //  9
    {
      levels: 511,
      group: 0,
      bits: 9
    },
    // 10
    {
      levels: 1023,
      group: 0,
      bits: 10
    },
    // 11
    {
      levels: 2047,
      group: 0,
      bits: 11
    },
    // 12
    {
      levels: 4095,
      group: 0,
      bits: 12
    },
    // 13
    {
      levels: 8191,
      group: 0,
      bits: 13
    },
    // 14
    {
      levels: 16383,
      group: 0,
      bits: 14
    },
    // 15
    {
      levels: 32767,
      group: 0,
      bits: 15
    },
    // 16
    {
      levels: 65535,
      group: 0,
      bits: 16
    } // 17
  ]) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/mp2-wasm.js

  function mp2_wasm_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (mp2_wasm_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      mp2_wasm_typeof(obj)
    )
  }
  function mp2_wasm_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function mp2_wasm_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        mp2_wasm_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function mp2_wasm_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) mp2_wasm_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) mp2_wasm_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function mp2_wasm_inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    })
    Object.defineProperty(subClass, 'prototype', { writable: false })
    if (superClass) mp2_wasm_setPrototypeOf(subClass, superClass)
  }
  function mp2_wasm_setPrototypeOf(o, p) {
    mp2_wasm_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p
          return o
        }
    return mp2_wasm_setPrototypeOf(o, p)
  }
  function mp2_wasm_createSuper(Derived) {
    var hasNativeReflectConstruct = mp2_wasm_isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = mp2_wasm_getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = mp2_wasm_getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return mp2_wasm_possibleConstructorReturn(this, result)
    }
  }
  function mp2_wasm_possibleConstructorReturn(self, call) {
    if (
      call &&
      (mp2_wasm_typeof(call) === 'object' || typeof call === 'function')
    ) {
      return call
    } else if (call !== void 0) {
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    }
    return mp2_wasm_assertThisInitialized(self)
  }
  function mp2_wasm_assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return self
  }
  function mp2_wasm_isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
      return true
    } catch (e) {
      return false
    }
  }
  function mp2_wasm_getPrototypeOf(o) {
    mp2_wasm_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return mp2_wasm_getPrototypeOf(o)
  }
  function mp2_wasm_defineProperty(obj, key, value) {
    key = mp2_wasm_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function mp2_wasm_toPropertyKey(arg) {
    var key = mp2_wasm_toPrimitive(arg, 'string')
    return mp2_wasm_typeof(key) === 'symbol' ? key : String(key)
  }
  function mp2_wasm_toPrimitive(input, hint) {
    if (mp2_wasm_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (mp2_wasm_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var MP2WASM = /*#__PURE__*/ (function (_BaseDecoder) {
    mp2_wasm_inherits(MP2WASM, _BaseDecoder)
    var _super = mp2_wasm_createSuper(MP2WASM)
    function MP2WASM(options) {
      var _this
      mp2_wasm_classCallCheck(this, MP2WASM)
      _this = _super.call(this, options)
      _this.onDecodeCallback = options.onAudioDecode
      _this.module = options.wasmModule
      _this.bufferSize = options.audioBufferSize || 128 * 1024
      _this.bufferMode = options.streaming
        ? BitBuffer.MODE.EVICT
        : BitBuffer.MODE.EXPAND
      _this.sampleRate = 0
      return _this
    }
    mp2_wasm_createClass(MP2WASM, [
      {
        key: 'initializeWasmDecoder',
        value: function initializeWasmDecoder() {
          if (!this.module.instance) {
            console.warn('JSMpeg: WASM module not compiled yet')
            return
          }
          this.instance = this.module.instance
          this.functions = this.module.instance.exports
          this.decoder = this.functions._mp2_decoder_create(
            this.bufferSize,
            this.bufferMode
          )
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          if (!this.decoder) {
            return
          }
          this.functions._mp2_decoder_destroy(this.decoder)
        }
      },
      {
        key: 'bufferGetIndex',
        value: function bufferGetIndex() {
          if (!this.decoder) {
            return
          }
          return this.functions._mp2_decoder_get_index(this.decoder)
        }
      },
      {
        key: 'bufferSetIndex',
        value: function bufferSetIndex(index) {
          if (!this.decoder) {
            return
          }
          this.functions._mp2_decoder_set_index(this.decoder, index)
        }
      },
      {
        key: 'bufferWrite',
        value: function bufferWrite(buffers) {
          if (!this.decoder) {
            this.initializeWasmDecoder()
          }
          var totalLength = 0
          for (var i = 0; i < buffers.length; i++) {
            totalLength += buffers[i].length
          }
          var ptr = this.functions._mp2_decoder_get_write_ptr(
            this.decoder,
            totalLength
          )
          for (var _i = 0; _i < buffers.length; _i++) {
            this.instance.heapU8.set(buffers[_i], ptr)
            ptr += buffers[_i].length
          }
          this.functions._mp2_decoder_did_write(this.decoder, totalLength)
          return totalLength
        }
      },
      {
        key: 'decode',
        value: function decode() {
          var startTime = Now()
          if (!this.decoder) {
            return false
          }
          var decodedBytes = this.functions._mp2_decoder_decode(this.decoder)
          if (decodedBytes === 0) {
            return false
          }
          if (!this.sampleRate) {
            this.sampleRate = this.functions._mp2_decoder_get_sample_rate(
              this.decoder
            )
          }
          if (this.destination) {
            // Create a Float32 View into the modules output channel data
            var leftPtr = this.functions._mp2_decoder_get_left_channel_ptr(
                this.decoder
              ),
              rightPtr = this.functions._mp2_decoder_get_right_channel_ptr(
                this.decoder
              )
            var leftOffset = leftPtr / Float32Array.BYTES_PER_ELEMENT,
              rightOffset = rightPtr / Float32Array.BYTES_PER_ELEMENT
            var left = this.instance.heapF32.subarray(
                leftOffset,
                leftOffset + MP2WASM.SAMPLES_PER_FRAME
              ),
              right = this.instance.heapF32.subarray(
                rightOffset,
                rightOffset + MP2WASM.SAMPLES_PER_FRAME
              )
            this.destination.play(this.sampleRate, left, right)
          }
          this.advanceDecodedTime(MP2WASM.SAMPLES_PER_FRAME / this.sampleRate)
          var elapsedTime = Now() - startTime
          if (this.onDecodeCallback) {
            this.onDecodeCallback(this, elapsedTime)
          }
          return true
        }
      },
      {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
          var enqueuedTime = this.destination
            ? this.destination.enqueuedTime
            : 0
          return this.decodedTime - enqueuedTime
        }
      }
    ])
    return MP2WASM
  })(BaseDecoder)
  mp2_wasm_defineProperty(MP2WASM, 'SAMPLES_PER_FRAME', 1152) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/decoder/index.js

  var Decoder = {
    Base: BaseDecoder,
    MPEG1Video: MPEG1,
    MPEG1VideoWASM: MPEG1WASM,
    MP2Audio: MP2,
    MP2AudioWASM: MP2WASM
  }
  /* harmony default export */ var decoder = Decoder // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/demuxer/ts.js
  function ts_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (ts_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      ts_typeof(obj)
    )
  }
  function ts_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function ts_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        ts_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function ts_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) ts_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) ts_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function ts_defineProperty(obj, key, value) {
    key = ts_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function ts_toPropertyKey(arg) {
    var key = ts_toPrimitive(arg, 'string')
    return ts_typeof(key) === 'symbol' ? key : String(key)
  }
  function ts_toPrimitive(input, hint) {
    if (ts_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (ts_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var TS = /*#__PURE__*/ (function () {
    /** @type {BitBuffer} */

    /** @type {{[key:string]: {destination: MPEG1|MPEG1WASM|MP2|MP2WASM,currentLength: number,totalLength: number, pts: number, buffers: BitBuffer}}} */

    function TS(options) {
      ts_classCallCheck(this, TS)
      ts_defineProperty(this, 'bits', void 0)
      ts_defineProperty(this, 'pesPacketInfo', void 0)
      this.bits = null
      this.leftoverBytes = null
      this.guessVideoFrameEnd = true
      this.pidsToStreamIds = {}
      this.pesPacketInfo = {}
      this.startTime = 0
      this.currentTime = 0
    }
    ts_createClass(TS, [
      {
        key: 'connect',
        value: function connect(streamId, destination) {
          this.pesPacketInfo[streamId] = {
            destination: destination,
            currentLength: 0,
            totalLength: 0,
            pts: 0,
            buffers: []
          }
        }
      },
      {
        key: 'write',
        value: function write(buffer) {
          if (this.leftoverBytes) {
            var totalLength = buffer.byteLength + this.leftoverBytes.byteLength
            this.bits = new BitBuffer(totalLength)
            this.bits.write([this.leftoverBytes, buffer])
          } else {
            this.bits = new BitBuffer(buffer)
          }
          while (this.bits.has(188 << 3) && this.parsePacket()) {}
          var leftoverCount = this.bits.byteLength - (this.bits.index >> 3)
          this.leftoverBytes =
            leftoverCount > 0
              ? this.bits.bytes.subarray(this.bits.index >> 3)
              : null
        }
      },
      {
        key: 'parsePacket',
        value: function parsePacket() {
          // Check if we're in sync with packet boundaries; attempt to resync if not.
          if (this.bits.read(8) !== 0x47) {
            if (!this.resync()) {
              // Couldn't resync; maybe next time...
              return false
            }
          }
          var end = (this.bits.index >> 3) + 187
          var transportError = this.bits.read(1),
            payloadStart = this.bits.read(1),
            transportPriority = this.bits.read(1),
            pid = this.bits.read(13),
            transportScrambling = this.bits.read(2),
            adaptationField = this.bits.read(2),
            continuityCounter = this.bits.read(4)

          // If this is the start of a new payload; signal the end of the previous
          // frame, if we didn't do so already.
          var streamId = this.pidsToStreamIds[pid]
          if (payloadStart && streamId) {
            var pi = this.pesPacketInfo[streamId]
            if (pi && pi.currentLength) {
              this.packetComplete(pi)
            }
          }

          // Extract current payload
          if (adaptationField & 0x1) {
            if (adaptationField & 0x2) {
              var adaptationFieldLength = this.bits.read(8)
              this.bits.skip(adaptationFieldLength << 3)
            }
            if (payloadStart && this.bits.nextBytesAreStartCode()) {
              this.bits.skip(24)
              streamId = this.bits.read(8)
              this.pidsToStreamIds[pid] = streamId
              var packetLength = this.bits.read(16)
              this.bits.skip(8)
              var ptsDtsFlag = this.bits.read(2)
              this.bits.skip(6)
              var headerLength = this.bits.read(8)
              var payloadBeginIndex = this.bits.index + (headerLength << 3)
              var _pi = this.pesPacketInfo[streamId]
              if (_pi) {
                var pts = 0
                if (ptsDtsFlag & 0x2) {
                  // The Presentation Timestamp is encoded as 33(!) bit
                  // integer, but has a "marker bit" inserted at weird places
                  // in between, making the whole thing 5 bytes in size.
                  // You can't make this shit up...
                  this.bits.skip(4)
                  var p32_30 = this.bits.read(3)
                  this.bits.skip(1)
                  var p29_15 = this.bits.read(15)
                  this.bits.skip(1)
                  var p14_0 = this.bits.read(15)
                  this.bits.skip(1)

                  // Can't use bit shifts here; we need 33 bits of precision,
                  // so we're using JavaScript's double number type. Also
                  // divide by the 90khz clock to get the pts in seconds.
                  pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000
                  this.currentTime = pts
                  if (this.startTime === -1) {
                    this.startTime = pts
                  }
                }
                var payloadLength = packetLength
                  ? packetLength - headerLength - 3
                  : 0
                this.packetStart(_pi, pts, payloadLength)
              }

              // Skip the rest of the header without parsing it
              this.bits.index = payloadBeginIndex
            }
            if (streamId) {
              // Attempt to detect if the PES packet is complete. For Audio (and
              // other) packets, we received a total packet length with the PES
              // header, so we can check the current length.

              // For Video packets, we have to guess the end by detecting if this
              // TS packet was padded - there's no good reason to pad a TS packet
              // in between, but it might just fit exactly. If this fails, we can
              // only wait for the next PES header for that stream.

              var _pi2 = this.pesPacketInfo[streamId]
              if (_pi2) {
                var start = this.bits.index >> 3
                var complete = this.packetAddData(_pi2, start, end)
                var hasPadding = !payloadStart && adaptationField & 0x2
                if (complete || (this.guessVideoFrameEnd && hasPadding)) {
                  this.packetComplete(_pi2)
                }
              }
            }
          }
          this.bits.index = end << 3
          return true
        }
      },
      {
        key: 'resync',
        value: function resync() {
          // Check if we have enough data to attempt a resync. We need 5 full packets.
          if (!this.bits.has((188 * 6) << 3)) {
            return false
          }
          var byteIndex = this.bits.index >> 3

          // Look for the first sync token in the first 187 bytes
          for (var i = 0; i < 187; i++) {
            if (this.bits.bytes[byteIndex + i] === 0x47) {
              // Look for 4 more sync tokens, each 188 bytes appart
              var foundSync = true
              for (var j = 1; j < 5; j++) {
                if (this.bits.bytes[byteIndex + i + 188 * j] !== 0x47) {
                  foundSync = false
                  break
                }
              }
              if (foundSync) {
                this.bits.index = (byteIndex + i + 1) << 3
                return true
              }
            }
          }

          // In theory, we shouldn't arrive here. If we do, we had enough data but
          // still didn't find sync - this can only happen if we were fed garbage
          // data. Check your source!
          // console.warn('JSMpeg: Possible garbage data. Skipping.')
          this.bits.skip(187 << 3)
          return false
        }
      },
      {
        key: 'packetStart',
        value: function packetStart(pi, pts, payloadLength) {
          pi.totalLength = payloadLength
          pi.currentLength = 0
          pi.pts = pts
        }
      },
      {
        key: 'packetAddData',
        value: function packetAddData(pi, start, end) {
          pi.buffers.push(this.bits.bytes.subarray(start, end))
          pi.currentLength += end - start
          var complete =
            pi.totalLength !== 0 && pi.currentLength >= pi.totalLength
          return complete
        }
      },
      {
        key: 'packetComplete',
        value: function packetComplete(pi) {
          // 在这里将视频流写入了解码器
          pi.destination.write(pi.pts, pi.buffers)
          pi.totalLength = 0
          pi.currentLength = 0
          pi.buffers = []
        }
      }
    ])
    return TS
  })()
  ts_defineProperty(TS, 'STREAM', {
    PACK_HEADER: 0xba,
    SYSTEM_HEADER: 0xbb,
    PROGRAM_MAP: 0xbc,
    PRIVATE_1: 0xbd,
    PADDING: 0xbe,
    PRIVATE_2: 0xbf,
    AUDIO_1: 0xc0,
    VIDEO_1: 0xe0,
    DIRECTORY: 0xff
  }) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/demuxer/index.js

  var Demuxer = {
    TS: TS
  }
  /* harmony default export */ var demuxer = Demuxer // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/renderer/canvas2d.js
  function canvas2d_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (canvas2d_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      canvas2d_typeof(obj)
    )
  }
  function canvas2d_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function canvas2d_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        canvas2d_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function canvas2d_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) canvas2d_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) canvas2d_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function canvas2d_defineProperty(obj, key, value) {
    key = canvas2d_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function canvas2d_toPropertyKey(arg) {
    var key = canvas2d_toPrimitive(arg, 'string')
    return canvas2d_typeof(key) === 'symbol' ? key : String(key)
  }
  function canvas2d_toPrimitive(input, hint) {
    if (canvas2d_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (canvas2d_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var CanvasRenderer = /*#__PURE__*/ (function () {
    /** @type {HTMLCanvasElement} */

    /**
     *
     * @param {import('../../types').PlayerOptions} options
     */
    function CanvasRenderer(options) {
      var _options$canvas
      canvas2d_classCallCheck(this, CanvasRenderer)
      canvas2d_defineProperty(this, 'canvas', void 0)
      this.canvas =
        (_options$canvas = options.canvas) !== null &&
        _options$canvas !== void 0
          ? _options$canvas
          : document.createElement('canvas')
      this.width = this.canvas.width
      this.height = this.canvas.height
      this.enabled = true
      this.context = this.canvas.getContext('2d')
    }
    canvas2d_createClass(CanvasRenderer, [
      {
        key: 'destroy',
        value: function destroy() {
          // Nothing to do here
        }
      },
      {
        key: 'clear',
        value: function clear() {
          if (!this.context) return
          var w = this.canvas.width,
            h = this.canvas.height
          this.context.fillStyle = '#000'
          this.context.fillRect(0, 0, w, h)
        }
      },
      {
        key: 'resize',
        value: function resize(width, height) {
          this.width = width | 0
          this.height = height | 0
          this.canvas.width = this.width
          this.canvas.height = this.height
          this.imageData = this.context.getImageData(
            0,
            0,
            this.width,
            this.height
          )
          Fill(this.imageData.data, 255)
        }
      },
      {
        key: 'renderProgress',
        value: function renderProgress(progress) {
          var w = this.canvas.width,
            h = this.canvas.height,
            ctx = this.context
          ctx.fillStyle = '#222'
          ctx.fillRect(0, 0, w, h)
          ctx.fillStyle = '#fff'
          ctx.fillRect(0, h - h * progress, w, h * progress)
        }
      },
      {
        key: 'render',
        value: function render(y, cb, cr) {
          this.YCbCrToRGBA(y, cb, cr, this.imageData.data)
          this.context.putImageData(this.imageData, 0, 0)
        }
      },
      {
        key: 'YCbCrToRGBA',
        value: function YCbCrToRGBA(y, cb, cr, rgba) {
          if (!this.enabled) {
            return
          }

          // Chroma values are the same for each block of 4 pixels, so we proccess
          // 2 lines at a time, 2 neighboring pixels each.
          // I wish we could use 32bit writes to the RGBA buffer instead of writing
          // each byte separately, but we need the automatic clamping of the RGBA
          // buffer.

          var w = ((this.width + 15) >> 4) << 4,
            w2 = w >> 1
          var yIndex1 = 0,
            yIndex2 = w,
            yNext2Lines = w + (w - this.width)
          var cIndex = 0,
            cNextLine = w2 - (this.width >> 1)
          var rgbaIndex1 = 0,
            rgbaIndex2 = this.width * 4,
            rgbaNext2Lines = this.width * 4
          var cols = this.width >> 1,
            rows = this.height >> 1
          var ccb, ccr, r, g, b
          for (var row = 0; row < rows; row++) {
            for (var col = 0; col < cols; col++) {
              ccb = cb[cIndex]
              ccr = cr[cIndex]
              cIndex++
              r = ccb + ((ccb * 103) >> 8) - 179
              g = ((ccr * 88) >> 8) - 44 + ((ccb * 183) >> 8) - 91
              b = ccr + ((ccr * 198) >> 8) - 227

              // Line 1
              var y1 = y[yIndex1++]
              var y2 = y[yIndex1++]
              rgba[rgbaIndex1] = y1 + r
              rgba[rgbaIndex1 + 1] = y1 - g
              rgba[rgbaIndex1 + 2] = y1 + b
              rgba[rgbaIndex1 + 4] = y2 + r
              rgba[rgbaIndex1 + 5] = y2 - g
              rgba[rgbaIndex1 + 6] = y2 + b
              rgbaIndex1 += 8

              // Line 2
              var y3 = y[yIndex2++]
              var y4 = y[yIndex2++]
              rgba[rgbaIndex2] = y3 + r
              rgba[rgbaIndex2 + 1] = y3 - g
              rgba[rgbaIndex2 + 2] = y3 + b
              rgba[rgbaIndex2 + 4] = y4 + r
              rgba[rgbaIndex2 + 5] = y4 - g
              rgba[rgbaIndex2 + 6] = y4 + b
              rgbaIndex2 += 8
            }
            yIndex1 += yNext2Lines
            yIndex2 += yNext2Lines
            rgbaIndex1 += rgbaNext2Lines
            rgbaIndex2 += rgbaNext2Lines
            cIndex += cNextLine
          }
        }
      }
    ])
    return CanvasRenderer
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/renderer/index.js

  var Renderer = {
    Canvas2D: CanvasRenderer,
    WebGL: WebGLRenderer
  }
  /* harmony default export */ var renderer = Renderer // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/source/ajax.js
  function ajax_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (ajax_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      ajax_typeof(obj)
    )
  }
  function ajax_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function ajax_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        ajax_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function ajax_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) ajax_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) ajax_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function ajax_toPropertyKey(arg) {
    var key = ajax_toPrimitive(arg, 'string')
    return ajax_typeof(key) === 'symbol' ? key : String(key)
  }
  function ajax_toPrimitive(input, hint) {
    if (ajax_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (ajax_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }
  var AjaxSource = /*#__PURE__*/ (function () {
    function AjaxSource(url, options) {
      ajax_classCallCheck(this, AjaxSource)
      this.url = url
      this.destination = null
      this.request = null
      this.streaming = false
      this.completed = false
      this.established = false
      this.progress = 0
      this.onEstablishedCallback = options.onSourceEstablished
      this.onCompletedCallback = options.onSourceCompleted
    }
    ajax_createClass(AjaxSource, [
      {
        key: 'connect',
        value: function connect(destination) {
          this.destination = destination
        }
      },
      {
        key: 'start',
        value: function start() {
          this.request = new XMLHttpRequest()
          this.request.onreadystatechange = function () {
            if (
              this.request.readyState === this.request.DONE &&
              this.request.status === 200
            ) {
              this.onLoad(this.request.response)
            }
          }.bind(this)
          this.request.onprogress = this.onProgress.bind(this)
          this.request.open('GET', this.url)
          this.request.responseType = 'arraybuffer'
          this.request.send()
        }
      },
      {
        key: 'resume',
        value: function resume(secondsHeadroom) {
          // Nothing to do here
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          this.request.abort()
        }
      },
      {
        key: 'onProgress',
        value: function onProgress(ev) {
          this.progress = ev.loaded / ev.total
        }
      },
      {
        key: 'onLoad',
        value: function onLoad(data) {
          this.established = true
          this.completed = true
          this.progress = 1
          if (this.onEstablishedCallback) {
            this.onEstablishedCallback(this)
          }
          if (this.onCompletedCallback) {
            this.onCompletedCallback(this)
          }
          if (this.destination) {
            this.destination.write(data)
          }
        }
      }
    ])
    return AjaxSource
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/source/ajax-progressive.js

  function ajax_progressive_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (ajax_progressive_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      ajax_progressive_typeof(obj)
    )
  }
  function ajax_progressive_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function ajax_progressive_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        ajax_progressive_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function ajax_progressive_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      ajax_progressive_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) ajax_progressive_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function ajax_progressive_toPropertyKey(arg) {
    var key = ajax_progressive_toPrimitive(arg, 'string')
    return ajax_progressive_typeof(key) === 'symbol' ? key : String(key)
  }
  function ajax_progressive_toPrimitive(input, hint) {
    if (ajax_progressive_typeof(input) !== 'object' || input === null)
      return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (ajax_progressive_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var AjaxProgressiveSource = /*#__PURE__*/ (function () {
    function AjaxProgressiveSource(url, options) {
      ajax_progressive_classCallCheck(this, AjaxProgressiveSource)
      this.url = url
      this.destination = null
      this.request = null
      this.streaming = false
      this.completed = false
      this.established = false
      this.progress = 0
      this.fileSize = 0
      this.loadedSize = 0
      this.chunkSize = options.chunkSize || 1024 * 1024
      this.isLoading = false
      this.loadStartTime = 0
      this.throttled = options.throttled !== false
      this.aborted = false
      this.onEstablishedCallback = options.onSourceEstablished
      this.onCompletedCallback = options.onSourceCompleted
    }
    ajax_progressive_createClass(AjaxProgressiveSource, [
      {
        key: 'connect',
        value: function connect(destination) {
          this.destination = destination
        }
      },
      {
        key: 'start',
        value: function start() {
          this.request = new XMLHttpRequest()
          this.request.onreadystatechange = function () {
            if (this.request.readyState === this.request.DONE) {
              this.fileSize = parseInt(
                this.request.getResponseHeader('Content-Length')
              )
              this.loadNextChunk()
            }
          }.bind(this)
          this.request.onprogress = this.onProgress.bind(this)
          this.request.open('HEAD', this.url)
          this.request.send()
        }
      },
      {
        key: 'resume',
        value: function resume(secondsHeadroom) {
          if (this.isLoading || !this.throttled) {
            return
          }

          // Guess the worst case loading time with lots of safety margin. This is
          // somewhat arbitrary...
          var worstCaseLoadingTime = this.loadTime * 8 + 2
          if (worstCaseLoadingTime > secondsHeadroom) {
            this.loadNextChunk()
          }
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          this.request.abort()
          this.aborted = true
        }
      },
      {
        key: 'loadNextChunk',
        value: function loadNextChunk() {
          var start = this.loadedSize,
            end = Math.min(
              this.loadedSize + this.chunkSize - 1,
              this.fileSize - 1
            )
          if (start >= this.fileSize || this.aborted) {
            this.completed = true
            if (this.onCompletedCallback) {
              this.onCompletedCallback(this)
            }
            return
          }
          this.isLoading = true
          this.loadStartTime = Now()
          this.request = new XMLHttpRequest()
          this.request.onreadystatechange = function () {
            if (
              this.request.readyState === this.request.DONE &&
              this.request.status >= 200 &&
              this.request.status < 300
            ) {
              this.onChunkLoad(this.request.response)
            } else if (this.request.readyState === this.request.DONE) {
              // Retry?
              if (this.loadFails++ < 3) {
                this.loadNextChunk()
              }
            }
          }.bind(this)
          if (start === 0) {
            this.request.onprogress = this.onProgress.bind(this)
          }
          this.request.open('GET', this.url + '?' + start + '-' + end)
          this.request.setRequestHeader('Range', 'bytes=' + start + '-' + end)
          this.request.responseType = 'arraybuffer'
          this.request.send()
        }
      },
      {
        key: 'onProgress',
        value: function onProgress(ev) {
          this.progress = ev.loaded / ev.total
        }
      },
      {
        key: 'onChunkLoad',
        value: function onChunkLoad(data) {
          var isFirstChunk = !this.established
          this.established = true
          this.progress = 1
          this.loadedSize += data.byteLength
          this.loadFails = 0
          this.isLoading = false
          if (isFirstChunk && this.onEstablishedCallback) {
            this.onEstablishedCallback(this)
          }
          if (this.destination) {
            this.destination.write(data)
          }
          this.loadTime = Now() - this.loadStartTime
          if (!this.throttled) {
            this.loadNextChunk()
          }
        }
      }
    ])
    return AjaxProgressiveSource
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/source/fetch.js

  function fetch_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (fetch_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      fetch_typeof(obj)
    )
  }
  function fetch_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function fetch_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        fetch_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function fetch_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) fetch_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) fetch_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function fetch_toPropertyKey(arg) {
    var key = fetch_toPrimitive(arg, 'string')
    return fetch_typeof(key) === 'symbol' ? key : String(key)
  }
  function fetch_toPrimitive(input, hint) {
    if (fetch_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (fetch_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }
  var FetchSource = /*#__PURE__*/ (function () {
    function FetchSource(url, options) {
      fetch_classCallCheck(this, FetchSource)
      this.url = url
      this.destination = null
      this.request = null
      this.streaming = true
      this.completed = false
      this.established = false
      this.progress = 0
      this.aborted = false
      this.onEstablishedCallback = options.onSourceEstablished
      this.onCompletedCallback = options.onSourceCompleted
    }
    fetch_createClass(FetchSource, [
      {
        key: 'connect',
        value: function connect(destination) {
          this.destination = destination
        }
      },
      {
        key: 'start',
        value: function start() {
          var params = {
            method: 'GET',
            headers: new Headers(),
            keepAlive: 'default'
          }
          self
            .fetch(this.url, params)
            .then(
              function (res) {
                if (res.ok && res.status >= 200 && res.status <= 299) {
                  this.progress = 1
                  this.established = true
                  return this.pump(res.body.getReader())
                } else {
                  //error
                }
              }.bind(this)
            )
            .catch(function (err) {
              throw err
            })
        }
      },
      {
        key: 'pump',
        value: function pump(reader) {
          return reader
            .read()
            .then(
              function (result) {
                if (result.done) {
                  this.completed = true
                } else {
                  if (this.aborted) {
                    return reader.cancel()
                  }
                  if (this.destination) {
                    this.destination.write(result.value.buffer)
                  }
                  return this.pump(reader)
                }
              }.bind(this)
            )
            .catch(function (err) {
              throw err
            })
        }
      },
      {
        key: 'resume',
        value: function resume(secondsHeadroom) {
          // Nothing to do here
        }
      },
      {
        key: 'abort',
        value: function abort() {
          this.aborted = true
        }
      }
    ])
    return FetchSource
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/source/websocket.js

  function websocket_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (websocket_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      websocket_typeof(obj)
    )
  }
  function websocket_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function websocket_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        websocket_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function websocket_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      websocket_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) websocket_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function websocket_defineProperty(obj, key, value) {
    key = websocket_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function websocket_toPropertyKey(arg) {
    var key = websocket_toPrimitive(arg, 'string')
    return websocket_typeof(key) === 'symbol' ? key : String(key)
  }
  function websocket_toPrimitive(input, hint) {
    if (websocket_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (websocket_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var WSSource = /*#__PURE__*/ (function () {
    /** @type {TS} */

    /** @type {WebSocket} */

    /** @type {string} */

    /**
     *
     * @param {string} url
     * @param {import('../../types').PlayerOptions} options
     */
    function WSSource(url, options) {
      websocket_classCallCheck(this, WSSource)
      websocket_defineProperty(this, 'timer', {
        heartbeat: null,
        streamInterrupt: null
      })
      websocket_defineProperty(this, 'reconnectInterval', void 0)
      websocket_defineProperty(this, 'shouldAttemptReconnect', void 0)
      websocket_defineProperty(this, 'progress', 0)
      websocket_defineProperty(this, 'reconnectTimeoutId', 0)
      websocket_defineProperty(this, 'reconnectCount', 0)
      websocket_defineProperty(this, 'callbacks', {
        connect: [],
        data: []
      })
      websocket_defineProperty(this, 'streaming', true)
      websocket_defineProperty(this, 'completed', false)
      websocket_defineProperty(this, 'established', false)
      websocket_defineProperty(this, 'isPaused', false)
      websocket_defineProperty(this, 'isStreamInterrupt', false)
      websocket_defineProperty(this, 'destination', void 0)
      websocket_defineProperty(this, 'socket', void 0)
      websocket_defineProperty(this, 'url', void 0)
      websocket_defineProperty(this, 'onEstablishedCallback', void 0)
      websocket_defineProperty(this, 'onCompletedCallback', void 0)
      websocket_defineProperty(this, 'onClosedCallback', void 0)
      websocket_defineProperty(this, 'onStreamInterruptCallback', void 0)
      websocket_defineProperty(this, 'onConnectedCallback', void 0)
      websocket_defineProperty(
        this,
        'onStreamTimeoutFirstReceiveCallback',
        void 0
      )
      this.url = url
      this.options = options
      this.reconnectInterval =
        options.reconnectInterval !== undefined ? options.reconnectInterval : 5
      this.shouldAttemptReconnect = !!this.reconnectInterval
      this.onEstablishedCallback = options.onSourceEstablished
      this.onCompletedCallback = options.onSourceCompleted // Never used
      this.onClosedCallback = options.onSourceClosed
      this.onConnectedCallback = options.onSourceConnected
      this.onStreamInterruptCallback = options.onSourceStreamInterrupt
      this.onStreamContinueCallback = options.onSourceStreamContinue
    }
    websocket_createClass(WSSource, [
      {
        key: 'connect',
        value: function connect(destination) {
          this.destination = destination
        }
      },
      {
        key: 'changeUrl',
        value: function changeUrl() {
          var url =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          clearTimeout(this.timer.streamInterrupt)
          if (typeof url === 'string' && url !== '') {
            if (this.url !== url) {
              this.destroy()
              this.url = url
              this.start()
            }
          } else {
            this.destroy()
            this.url = ''
          }
        }
      },
      {
        key: 'reload',
        value: function reload() {
          this.destroy()
          this.start()
        }
      },
      {
        key: 'destroy',
        value: function destroy() {
          var _this$socket
          clearTimeout(this.reconnectTimeoutId)
          this.reconnectTimeoutId = 0
          this.shouldAttemptReconnect = false
          ;(_this$socket = this.socket) === null || _this$socket === void 0
            ? void 0
            : _this$socket.close()
          if (this.socket) {
            this.socket.onmessage = null
            this.socket.onopen = null
            this.socket.onerror = null
            this.socket.onclose = null
            this.socket.onmessage = null
            this.socket = null
          }
        }
      },
      {
        key: 'start',
        value: function start() {
          this.reconnectTimeoutId = 0
          this.reconnectCount = 0
          this.shouldAttemptReconnect = !!this.reconnectInterval
          this.progress = 0
          this.established = false
          this.isPaused = false
          this.wsConnect()
        }
      },
      {
        key: 'wsConnect',
        value: function wsConnect() {
          if (!this.url) return
          // 连java的websocket时，第二个参数要么传值，要么不传值，不能传null，否则会一直出现连接失败的问题
          try {
            var _this$options
            this.socket = new WebSocket(
              this.url,
              (_this$options = this.options) === null ||
              _this$options === void 0
                ? void 0
                : _this$options.protocols
            )
            this.socket.binaryType = 'arraybuffer'
            this.socket.onmessage = this.onMessage.bind(this)
            this.socket.onopen = this.onOpen.bind(this)
            this.socket.onerror = this.onError.bind(this)
            this.socket.onclose = this.onClose.bind(this)
          } catch (error) {
            console.error('websocket connect error: ', error)
          }
        }
      },
      {
        key: 'pause',
        value: function pause() {
          if (!this.isPaused) {
            var _this$socket2
            clearTimeout(this.timer.streamInterrupt)
            this.isPaused = true
            if (
              ((_this$socket2 = this.socket) === null ||
              _this$socket2 === void 0
                ? void 0
                : _this$socket2.readyState) === WebSocket.OPEN
            ) {
              this.socket.onmessage = null
            }
          }
          //  if (this.reconnectTimeoutId) {
          //   clearTimeout(this.reconnectTimeoutId)
          //   this.reconnectTimeoutId = null
          // }
        }
      },
      {
        key: 'continue',
        value: function _continue() {
          // Nothing to do here
          if (this.isPaused) {
            var _this$socket3
            this.isPaused = false
            if (this.socket == null) {
              this.start()
            } else if (
              ((_this$socket3 = this.socket) === null ||
              _this$socket3 === void 0
                ? void 0
                : _this$socket3.readyState) === WebSocket.OPEN
            ) {
              this.socket.onmessage = this.onMessage.bind(this)
              this.startStreamTimeoutTimer()
            }
          }
        }
      },
      {
        key: 'onOpen',
        value: function onOpen() {
          this.progress = 1
          this.reconnectTimeoutId = 0
          this.reconnectCount = 0
          this.isOpened = true
          if (this.onConnectedCallback) {
            this.onConnectedCallback(this)
          }
          this.startStreamTimeoutTimer()
        }
      },
      {
        key: 'onError',
        value: function onError(err) {
          // console.error(err)
        }
      },
      {
        key: 'onClose',
        value: function onClose() {
          this.established = false
          if (this.progress >= 1) {
            // progress>=1，表示已经建立连接后的断开
            this.progress = 0
            if (this.onClosedCallback) {
              this.onClosedCallback(this)
            }
            clearTimeout(this.reconnectTimeoutId)
            this.reconnectTimeoutId = setTimeout(this.start.bind(this), 5000)
            return
          }
          if (this.shouldAttemptReconnect && this.reconnectCount < 10) {
            // 最多重连10次
            clearTimeout(this.reconnectTimeoutId)
            this.reconnectTimeoutId = setTimeout(
              this.wsConnect.bind(this),
              this.reconnectInterval * 1000
            )
            this.reconnectCount += 1
            console.log('websocket 重连次数： ', this.reconnectCount)
          }
        }

        /**
         *
         * @param {MessageEvent} ev
         */
      },
      {
        key: 'onMessage',
        value: function onMessage(ev) {
          this.startStreamTimeoutTimer()
          try {
            if (!this.established) {
              var _this$onEstablishedCa
              this.established = true
              this.isStreamInterrupt = false
              ;(_this$onEstablishedCa = this.onEstablishedCallback) === null ||
              _this$onEstablishedCa === void 0
                ? void 0
                : _this$onEstablishedCa.call(this, this)
              console.log(ev)
            } else if (this.isStreamInterrupt) {
              var _this$onStreamContinu
              this.isStreamInterrupt = false
              ;(_this$onStreamContinu = this.onStreamContinueCallback) ===
                null || _this$onStreamContinu === void 0
                ? void 0
                : _this$onStreamContinu.call(this, this)
            }
            if (this.destination) {
              this.destination.write(ev.data)
            }
          } catch (error) {
            var _error$message
            if (
              ((_error$message = error.message) === null ||
              _error$message === void 0
                ? void 0
                : _error$message.indexOf('memory access out of bounds')) > -1
            ) {
              this.reload()
            } else {
              console.error(error)
            }
          }
          if (this.recorder) {
            try {
              var _this$recorder$write, _this$recorder
              ;(_this$recorder$write = (_this$recorder = this.recorder)
                .write) === null || _this$recorder$write === void 0
                ? void 0
                : _this$recorder$write.call(_this$recorder, ev.data)
            } catch (error) {
              this.recorder = null
            }
          }
        }
      },
      {
        key: 'startStreamTimeoutTimer',
        value: function startStreamTimeoutTimer() {
          var _this = this
          if (this.timer.streamInterrupt) {
            clearTimeout(this.timer.streamInterrupt)
          }
          this.timer.streamInterrupt = setTimeout(function () {
            console.warn('[JSMpeg]: 等待视频流超时')
            _this.timer.streamInterrupt = null
            _this.isStreamInterrupt = true
            if (_this.onStreamInterruptCallback) {
              _this.onStreamInterruptCallback()
            }
          }, 5000)
        }
      }
    ])
    return WSSource
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/source/index.js

  var Source = {
    Ajax: AjaxSource,
    AjaxProgressive: AjaxProgressiveSource,
    Fetch: FetchSource,
    WebSocket: WSSource
  }
  /* harmony default export */ var source = Source // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/wasm-module.js
  function wasm_module_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (wasm_module_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      wasm_module_typeof(obj)
    )
  }
  function wasm_module_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function wasm_module_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        wasm_module_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function wasm_module_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      wasm_module_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) wasm_module_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function wasm_module_toPropertyKey(arg) {
    var key = wasm_module_toPrimitive(arg, 'string')
    return wasm_module_typeof(key) === 'symbol' ? key : String(key)
  }
  function wasm_module_toPrimitive(input, hint) {
    if (wasm_module_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (wasm_module_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var WASM = /*#__PURE__*/ (function () {
    function WASM() {
      wasm_module_classCallCheck(this, WASM)
      this.stackSize = 5 * 1024 * 1024 // emscripten default
      this.pageSize = 64 * 1024 // wasm page size
      this.onInitCallback = null
      this.ready = false
    }
    wasm_module_createClass(
      WASM,
      [
        {
          key: 'write',
          value: function write(buffer) {
            this.loadFromBuffer(buffer, this.onInitCallback)
          }
        },
        {
          key: 'loadFromFile',
          value: function loadFromFile(url, callback) {
            this.onInitCallback = callback
            var ajax = new source.Ajax(url, {})
            ajax.connect(this)
            ajax.start()
          }
        },
        {
          key: 'loadFromBuffer',
          value: function loadFromBuffer(buffer, callback) {
            this.moduleInfo = this.readDylinkSection(buffer)
            if (!this.moduleInfo) {
              this.callback && this.callback(null)
              return
            }
            this.memory = new WebAssembly.Memory({
              initial: 256
            })
            var env = {
              memory: this.memory,
              memoryBase: 0,
              __memory_base: 0,
              table: new WebAssembly.Table({
                initial: this.moduleInfo.tableSize,
                element: 'anyfunc'
              }),
              tableBase: 0,
              __table_base: 0,
              abort: this.c_abort.bind(this),
              ___assert_fail: this.c_assertFail.bind(this),
              _sbrk: this.c_sbrk.bind(this)
            }
            this.brk = this.align(this.moduleInfo.memorySize + this.stackSize)
            WebAssembly.instantiate(buffer, {
              env: env
            }).then(
              function (results) {
                this.instance = results.instance
                if (this.instance.exports.__post_instantiate) {
                  this.instance.exports.__post_instantiate()
                }
                this.createHeapViews()
                this.ready = true
                callback && callback(this)
              }.bind(this)
            )
          }
        },
        {
          key: 'createHeapViews',
          value: function createHeapViews() {
            this.instance.heapU8 = new Uint8Array(this.memory.buffer)
            this.instance.heapU32 = new Uint32Array(this.memory.buffer)
            this.instance.heapF32 = new Float32Array(this.memory.buffer)
          }
        },
        {
          key: 'align',
          value: function align(addr) {
            var a = Math.pow(2, this.moduleInfo.memoryAlignment)
            return Math.ceil(addr / a) * a
          }
        },
        {
          key: 'c_sbrk',
          value: function c_sbrk(size) {
            var previousBrk = this.brk
            this.brk += size
            if (this.brk > this.memory.buffer.byteLength) {
              var bytesNeeded = this.brk - this.memory.buffer.byteLength
              var pagesNeeded = Math.ceil(bytesNeeded / this.pageSize)
              this.memory.grow(pagesNeeded)
              this.createHeapViews()
            }
            return previousBrk
          }
        },
        {
          key: 'c_abort',
          value: function c_abort(size) {
            console.warn('JSMPeg: WASM abort', arguments)
          }
        },
        {
          key: 'c_assertFail',
          value: function c_assertFail(size) {
            console.warn('JSMPeg: WASM ___assert_fail', arguments)
          }
        },
        {
          key: 'readDylinkSection',
          value: function readDylinkSection(buffer) {
            // Read the WASM header and dylink section of the .wasm binary data
            // to get the needed table size and static data size.

            // https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
            // https://github.com/kripken/emscripten/blob/20602efb955a7c6c20865a495932427e205651d2/src/support.js

            var bytes = new Uint8Array(buffer)
            var next = 0
            function readVarUint() {
              var ret = 0
              var mul = 1
              while (1) {
                var byte = bytes[next++]
                ret += (byte & 0x7f) * mul
                mul *= 0x80
                if (!(byte & 0x80)) {
                  return ret
                }
              }
            }
            function matchNextBytes(expected) {
              for (var i = 0; i < expected.length; i++) {
                var b =
                  typeof expected[i] === 'string'
                    ? expected[i].charCodeAt(0)
                    : expected[i]
                if (bytes[next++] !== b) {
                  return false
                }
              }
              return true
            }

            // Make sure we have a wasm header
            if (!matchNextBytes([0, 'a', 's', 'm'])) {
              console.warn('JSMpeg: WASM header not found')
              return null
            }

            // Make sure we have a dylink section
            next = 9
            var sectionSize = readVarUint()
            if (!matchNextBytes([6, 'd', 'y', 'l', 'i', 'n', 'k'])) {
              console.warn('JSMpeg: No dylink section found in WASM')
              return null
            }
            return {
              memorySize: readVarUint(),
              memoryAlignment: readVarUint(),
              tableSize: readVarUint(),
              tableAlignment: readVarUint()
            }
          }
        }
      ],
      [
        {
          key: 'IsSupported',
          value: function IsSupported() {
            return !!window.WebAssembly
          }
        },
        {
          key: 'GetModule',
          value: function GetModule() {
            WASM.CACHED_MODULE = WASM.CACHED_MODULE || new WASM()
            return WASM.CACHED_MODULE
          }
        }
      ]
    )
    return WASM
  })() // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/player.js

  function player_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (player_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      player_typeof(obj)
    )
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object)
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object)
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable
        })),
        keys.push.apply(keys, symbols)
    }
    return keys
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {}
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            player_defineProperty(target, key, source[key])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
    }
    return target
  }
  function player_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function player_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        player_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function player_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) player_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) player_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function player_defineProperty(obj, key, value) {
    key = player_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function player_toPropertyKey(arg) {
    var key = player_toPrimitive(arg, 'string')
    return player_typeof(key) === 'symbol' ? key : String(key)
  }
  function player_toPrimitive(input, hint) {
    if (player_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (player_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  // The build process may append `JSMpeg.WASM_BINARY_INLINED = base64data;`
  // to the minified source.
  // If this property is present, jsmpeg will use the inlined binary data
  // instead of trying to load a jsmpeg.wasm file via Ajax.
  /**
   * @class {import('../jsmpeg').JSMpegPlayer}
   * @description 基于jsmpeg二次封装
   */
  var Player = /*#__PURE__*/ (function () {
    /**
     *
     * @param {string} url
     * @param {import('../types').PlayerOptions} options
     */
    function Player(url) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
      player_classCallCheck(this, Player)
      player_defineProperty(this, 'source', null)
      player_defineProperty(this, 'canvas', null)
      player_defineProperty(this, 'contianer', null)
      player_defineProperty(this, 'recorder', {
        /** 录制持续时间 */
        duration: 0,
        timer: null,
        /** @type {'canvas'|'ws'} */
        mode: '',
        running: false,
        saveName: '',
        /**
         * @type {MediaRecorder}
         * 媒体录制器
         */
        mediaRecorder: null,
        /**
         * @type {MediaStream}
         * 视频流
         */
        stream: null,
        /**
         * @type {ArrayBuffer[]}
         * 视频数据块
         */
        chunks: null,
        startTiming: function startTiming() {
          var _this = this
          this.duration = 0
          this.timer = setInterval(function () {
            _this.duration += 1
          }, 1000)
        },
        pauseTiming: function pauseTiming() {
          clearInterval(this.timer)
          this.timer = null
        },
        continueTiming: function continueTiming() {
          var _this2 = this
          this.timer = setInterval(function () {
            _this2.duration += 1
          }, 1000)
        },
        stopTiming: function stopTiming() {
          this.pauseTiming()
          this.duration = 0
        },
        clear: function clear() {
          this.running = false
          this.mediaRecorder = null
          this.stream = null
          this.chunks = null
        }
      })
      player_defineProperty(this, 'store', {
        canvasAngle: 0
      })
      player_defineProperty(this, 'loop', false)
      player_defineProperty(this, 'isPlaying', false)
      player_defineProperty(this, 'isBackground', false)
      Object.defineProperty(this, 'currentTime', {
        get: this.getCurrentTime,
        set: this.setCurrentTime
      })
      Object.defineProperty(this, 'volume', {
        get: this.getVolume,
        set: this.setVolume
      })
      this.init(url, options)
    }
    /**
     *
     * @param {string} url
     * @param {import('../types').PlayerOptions} options
     */
    player_createClass(Player, [
      {
        key: 'isRecording',
        get:
          /** @type {WSSource|AjaxSource|AjaxProgressiveSource} */

          /** @type {HTMLCanvasElement} */

          /** @type {HTMLElement} */

          /** 录制器属性 */

          /** 变量存储器 */

          /** 是否循环播放 */

          /** 是否正在播放 */

          /** 表示播放器处于后台（不可见状态） */

          function get() {
            return this.recorder.running
          }
        /** 录制持续时间 */
      },
      {
        key: 'recordingDuration',
        get: function get() {
          return this.recorder.duration
        }
      },
      {
        key: 'init',
        value: function init(url, options) {
          this.options = options
          this.initCanvas()
          this.initSource(url)
          this.maxAudioLag = options.maxAudioLag || 0.25
          this.loop = options.loop !== false
          this.autoplay = !!options.autoplay || options.streaming
          this.demuxer = new demuxer.TS(options)
          this.source.connect(this.demuxer)

          // this.demuxer.write(new Array(1024).fill(255))

          if (!options.disableWebAssembly && WASM.IsSupported()) {
            this.wasmModule = WASM.GetModule()
            options.wasmModule = this.wasmModule
          }
          this.initVideo()
          this.initAudio()
          this.paused = true
          this.unpauseOnShow = false
          document.addEventListener(
            'visibilitychange',
            this.showHide.bind(this)
          )

          // If we have WebAssembly support, wait until the module is compiled before
          // loading the source. Otherwise the decoders won't know what to do with
          // the source data.
          if (this.wasmModule) {
            if (this.wasmModule.ready) {
              this.startLoading()
            } else if (Player.WASM_BINARY_INLINED) {
              var wasm = Base64ToArrayBuffer(Player.WASM_BINARY_INLINED)
              this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this))
            } else {
              this.wasmModule.loadFromFile(
                'jsmpeg.wasm',
                this.startLoading.bind(this)
              )
            }
          } else {
            this.startLoading()
          }
          this.renderer.clear()
        }
      },
      {
        key: 'initCanvas',
        value: function initCanvas() {
          var options = this.options
          if (!(options.canvas instanceof HTMLCanvasElement)) {
            options.canvas = document.createElement('canvas')
          }
          this.canvas = options.canvas
          if (typeof options.contianer === 'string') {
            options.contianer = document.querySelector(options.contianer)
          } else if (!options.contianer && this.canvas.parentElement) {
            options.contianer = this.canvas.parentElement
          }
          if (!(options.contianer instanceof HTMLElement)) {
            throw new Error('[Player] 找不到容器元素')
          }
          this.contianer = options.contianer
          if (!this.contianer.contains(this.canvas)) {
            this.contianer.appendChild(this.canvas)
          }
        }
      },
      {
        key: 'initSource',
        value: function initSource() {
          var url =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null
          var options = this.options
          this.url = url
          if (options.source) {
            this.source = new options.source(url, options)
            options.streaming = !!this.source.streaming
          } else if (url.match(/^wss?:\/\//)) {
            this.source = new source.WebSocket(
              url,
              _objectSpread(
                _objectSpread({}, options),
                {},
                {
                  onSourceEstablished: this.handleSourceEstablished.bind(this),
                  onSourceClosedCallback: this.handleSourceClosed.bind(this),
                  onSourceStreamInterrupt:
                    this.handleSourceStreamInterrupt.bind(this),
                  onSourceConnected: this.handleSourceConnected.bind(this)
                }
              )
            )
            options.streaming = true
          } else if (options.progressive !== false) {
            this.source = new source.AjaxProgressive(url, options)
            options.streaming = false
          } else {
            this.source = new source.Ajax(url, options)
            options.streaming = false
          }
          if (this.source.destination == null && this.demuxer) {
            this.source.connect(this.demuxer)
          }
        }
      },
      {
        key: 'initVideo',
        value: function initVideo() {
          var options = this.options
          if (options.video !== false) {
            this.video = options.wasmModule
              ? new decoder.MPEG1VideoWASM(options)
              : new decoder.MPEG1Video(options)
            this.video.player = this
            this.renderer =
              !options.disableGl && renderer.WebGL.IsSupported()
                ? new renderer.WebGL(options)
                : new renderer.Canvas2D(options)
            this.demuxer.connect(demuxer.TS.STREAM.VIDEO_1, this.video)
            this.video.connect(this.renderer)
          }
        }
      },
      {
        key: 'initAudio',
        value: function initAudio() {
          var options = this.options
          if (options.audio !== false && audio_output.WebAudio.IsSupported()) {
            this.audio = options.wasmModule
              ? new decoder.MP2AudioWASM(options)
              : new decoder.MP2Audio(options)
            this.audioOut = new audio_output.WebAudio(options)
            this.demuxer.connect(demuxer.TS.STREAM.AUDIO_1, this.audio)
            this.audio.connect(this.audioOut)
          }
        }
      },
      {
        key: 'setUrl',
        value: function setUrl() {
          var url =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : ''
          if (this.isPlaying) this.stop(true)
          if (this.source instanceof WSSource) {
            this.source.changeUrl(url)
          } else {
            this.source.url = url
            if (!!url && !this.isBackground) {
              this.play()
            }
          }
        }

        /**
         *
         * @param {keyof import('../types').PlayerOptions} name
         * @param {any} value
         */
      },
      {
        key: 'setOption',
        value: function setOption(name, value) {
          console.log('setOption: ', name, value)
          if (player_typeof(value) === undefined) return
          switch (name) {
            case 'pauseWhenHidden':
              this.options.pauseWhenHidden = value
              break
          }
        }
      },
      {
        key: 'startLoading',
        value: function startLoading() {
          var _this$source
          ;(_this$source = this.source) === null || _this$source === void 0
            ? void 0
            : _this$source.start()
          if (this.autoplay) {
            this.play()
          }
        }
      },
      {
        key: 'showHide',
        value: function showHide(ev) {
          if (!this.options.pauseWhenHidden) {
            this.play()
            return
          }
          if (document.visibilityState === 'hidden') {
            this.unpauseOnShow = this.wantsToPlay
            this.intoBackground()
          } else if (this.unpauseOnShow) {
            this.intoFront()
          }
        }
      },
      {
        key: 'getVolume',
        value: function getVolume() {
          return this.audioOut ? this.audioOut.volume : 0
        }
      },
      {
        key: 'setVolume',
        value: function setVolume(volume) {
          if (this.audioOut) {
            this.audioOut.volume = volume
          }
        }
      },
      {
        key: 'intoFront',
        value: function intoFront() {
          this.isBackground = false
          if (this.paused) {
            this.play()
          }
        }
      },
      {
        key: 'intoBackground',
        value: function intoBackground() {
          this.isBackground = true
          if (this.options.pauseWhenHidden) {
            this.pause()
          }
        }
        /**
         * 旋转画布
         * @param {number} angle 角度
         * @param {boolean} append 是否为追加角度
         * @returns
         */
      },
      {
        key: 'rotate',
        value: function rotate(angle) {
          var append =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false
          if (!this.canvas || typeof angle !== 'number') return
          var canvas = this.canvas
          angle = append ? this.store.canvasAngle + angle : angle
          angle =
            angle >= 360 ? angle - 360 : angle <= -360 ? angle + 360 : angle
          if ((Math.abs(angle) / 90) % 2 === 1) {
            // 如果是90整数倍，表示为垂直状态
            var containerBound = this.contianer.getBoundingClientRect(),
              canvasBound = canvas.getBoundingClientRect()
            if (canvas.width > canvas.height) {
              // 宽>高，取容器高度作为canvas最大宽度
              canvas.style.width = containerBound.height + 'px'
            } else {
              // 宽<=高，取容器宽度作为canvas最大高度
              canvas.style.height = containerBound.width + 'px'
            }
          } else {
            canvas.style.width = null
            canvas.style.height = null
          }
          canvas.style.transform = 'rotate('.concat(angle, 'deg)')
          this.store.canvasAngle = angle
        }
        /**
         * 截图
         * @author 刘灿民
         * @param {string} name
         */
      },
      {
        key: 'snapshot',
        value: function snapshot() {
          var name =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 'jsmpeg'
          if (this.canvas) {
            var mime = 'image/png',
              url = this.canvas.toDataURL(mime)
            download(
              url.replace(mime, 'image/octet-stream'),
              ''.concat(name, '_snapshot_').concat(Date.now(), '.png'),
              mime
            )
          }
        }
        /**
         * 视频录制
         * @author 刘灿民
         * @param {string} name
         * @param {'ws'|'canvas'} mode
         */
      },
      {
        key: 'recording',
        value: function recording() {
          var name =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 'JSMpeg'
          var mode =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 'ws'
          try {
            if (!this.isPlaying) {
              return
            }
            if (this.isRecording || this.recorder.stream) {
              // 停止录制
              this.recorder.stopTiming()
              // https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
              if (
                this.recorder.mode === 'canvas' &&
                this.recorder.mediaRecorder &&
                this.recorder.stream instanceof MediaStream
              ) {
                this.recorder.mediaRecorder.stop()
                download(
                  this.recorder.chunks,
                  ''.concat(this.recorder.saveName, '.webm'),
                  'video/webm;codecs=vp9'
                )
                this.recorder.mediaRecorder = null
              } else if (
                this.recorder.mode === 'ws' &&
                this.recorder.chunks instanceof Array
              ) {
                download(
                  this.recorder.chunks,
                  ''.concat(this.recorder.saveName, '.ts'),
                  'video/MP2T'
                )
                this.source.recorder = undefined
              }
              this.recorder.clear()
              this.recorder.running = false
            } else {
              // 开始录制
              if (mode === 'canvas') {
                var _this$canvas
                // 此方法兼容性较差，captureStream、MediaRecorder好像都是新规范，有些浏览器不支持
                var chunks = []
                /** @type {MediaStream} */
                var stream =
                  (_this$canvas = this.canvas) === null ||
                  _this$canvas === void 0
                    ? void 0
                    : _this$canvas.captureStream(25)
                var mediaRecorder = new MediaRecorder(stream, {
                  mimeType: 'video/webm;codecs=vp9'
                })
                mediaRecorder.ondataavailable = function (e) {
                  chunks.push(e.data)
                }
                mediaRecorder.start()
                this.recorder.mediaRecorder = mediaRecorder
                this.recorder.chunks = chunks
                this.recorder.stream = stream
                this.recorder.mode = 'canvas'
                this.recorder.running = true
                // this.recording.recorder = new MediaRecorder(this.recording.stream)
              } else if (mode === 'ws') {
                // 服务端转发过来的流就是ffmpeg已转码的ts视频流数据，所以在websocket收到数据的时候，存放到数组中即可实现录制

                this.recorder.chunks = []
                this.recorder.chunks.write = function (data) {
                  this.push(data)
                }
                this.source.recorder = this.recorder.chunks
                this.recorder.mode = 'ws'
                this.recorder.running = true
              } else return
              this.recorder.saveName = ''
                .concat(name, '_\u5F55\u5236_')
                .concat(new Date().toLocaleTimeString())
              this.recorder.startTiming()
            }
          } catch (error) {
            console.error(error)
          }
        }
        /**
         *
         * @returns
         */
      },
      {
        key: 'play',
        value: function play() {
          if (this.animationId) {
            return
          } else if (this.isBackground) {
            this.wantsToPlay = true
            return
          }
          this.animationId = requestAnimationFrame(this.update.bind(this))
          this.wantsToPlay = true
          this.paused = false
          if (this.source.isPaused) {
            this.source.continue()
          }
          if (this.recorder.running) {
            this.recorder.continueTiming()
          }
        }

        /**
         *
         * @returns
         */
      },
      {
        key: 'pause',
        value: function pause() {
          var _this$source2
          if (this.paused) {
            return
          }
          cancelAnimationFrame(this.animationId)
          ;(_this$source2 = this.source) === null || _this$source2 === void 0
            ? void 0
            : _this$source2.pause()
          this.animationId = null
          this.wantsToPlay = false
          this.isPlaying = false
          this.paused = true
          if (this.audio && this.audio.canPlay) {
            // Seek to the currentTime again - audio may already be enqueued a bit
            // further, so we have to rewind it.
            this.audioOut.stop()
            this.seek(this.currentTime)
          }
          if (this.options.onPause) {
            this.options.onPause(this)
          }
          if (this.recorder.running) {
            this.recorder.pauseTiming()
          }
        }
      },
      {
        key: 'stop',
        value: function stop() {
          var clear =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true
          this.pause()
          this.seek(0)
          if (this.video && this.options.decodeFirstFrame !== false) {
            this.video.decode()
          }
          if (clear) {
            this.clearPlayer()
          }
        }
      },
      {
        key: 'clearPlayer',
        value: function clearPlayer() {
          this.renderer.clear()
          if (this.video.hasSequenceHeader) {
            var _this$options$videoBu
            var bufferSize =
              (_this$options$videoBu = this.options.videoBufferSize) !== null &&
              _this$options$videoBu !== void 0
                ? _this$options$videoBu
                : 512 * 1024
            var bufferMode = this.options.streaming
              ? BitBuffer.MODE.EVICT
              : BitBuffer.MODE.EXPAND
            this.video.bits = new BitBuffer(bufferSize, bufferMode)
            // this.demuxer.write(new BitBuffer(bufferSize, bufferMode))
          }
        }
      },
      {
        key: 'reload',
        value: function reload() {}
      },
      {
        key: 'destroy',
        value: function destroy() {
          var _this$canvas2
          this.pause()
          this.source.destroy()
          this.video && this.video.destroy()
          this.renderer && this.renderer.destroy()
          this.audio && this.audio.destroy()
          this.audioOut && this.audioOut.destroy()
          ;(_this$canvas2 = this.canvas) === null || _this$canvas2 === void 0
            ? void 0
            : _this$canvas2.remove()
          this.canvas = null
          this.options.canvas = null
        }
      },
      {
        key: 'seek',
        value: function seek(time) {
          var startOffset =
            this.audio && this.audio.canPlay
              ? this.audio.startTime
              : this.video.startTime
          if (this.video) {
            this.video.seek(time + startOffset)
          }
          if (this.audio) {
            this.audio.seek(time + startOffset)
          }
          this.startTime = Now() - time
        }
      },
      {
        key: 'getCurrentTime',
        value: function getCurrentTime() {
          return this.video.currentTime - this.video.startTime
          // return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video.currentTime - this.video.startTime
        }
      },
      {
        key: 'setCurrentTime',
        value: function setCurrentTime(time) {
          this.seek(time)
        }
      },
      {
        key: 'update',
        value: function update() {
          var _this3 = this,
            _this$options$onUpdat,
            _this$options
          this.animationId = requestAnimationFrame(this.update.bind(this))
          if (!this.source.established) {
            if (this.renderer) {
              this.renderer.clear()
              // this.renderer.renderProgress(this.source.progress)
            }

            return
          }
          if (!this.isPlaying) {
            this.isPlaying = true
            this.startTime = Now() - this.currentTime
            if (this.options.onPlay) {
              this.options.onPlay(this)
            }
          }
          try {
            if (this.options.streaming) {
              this.updateForStreaming()
            } else {
              this.updateForStaticFile()
            }
          } catch (error) {
            var _error$message
            if (
              (_error$message = error.message) !== null &&
              _error$message !== void 0 &&
              _error$message.includes('memory access out of bounds')
            ) {
              console.error('内存溢出，尝试重新加载')
              this.destroy()
              setTimeout(function () {
                return _this3.init(_this3.url, _this3.options)
              }, 3000)
            } else {
              console.error(error)
            }
          }
          ;(_this$options$onUpdat = (_this$options = this.options).onUpdate) ===
            null || _this$options$onUpdat === void 0
            ? void 0
            : _this$options$onUpdat.call(_this$options)
        }
      },
      {
        key: 'updateForStreaming',
        value: function updateForStreaming() {
          // 当流到达时，立即解码所有已经缓冲的，以减少播放延迟。

          if (this.video) {
            // console.log('update')
            this.video.decode()
          }
          if (this.audio) {
            var decoded = false
            do {
              // 如果已经有很多音频流排队，禁用输出并跟上编码。
              if (this.audioOut.enqueuedTime > this.maxAudioLag) {
                this.audioOut.resetEnqueuedTime()
                this.audioOut.enabled = false
              }
              decoded = this.audio.decode()
            } while (decoded)
            this.audioOut.enabled = true
          }
        }
      },
      {
        key: 'nextFrame',
        value: function nextFrame() {
          if (this.source.established && this.video) {
            return this.video.decode()
          }
          return false
        }
      },
      {
        key: 'updateForStaticFile',
        value: function updateForStaticFile() {
          var notEnoughData = false,
            headroom = 0

          // If we have an audio track, we always try to sync the video to the audio.
          // Gaps and discontinuities are far more percetable in audio than in video.

          if (this.audio && this.audio.canPlay) {
            // Do we have to decode and enqueue some more audio data?
            while (
              !notEnoughData &&
              this.audio.decodedTime - this.audio.currentTime < 0.25
            ) {
              notEnoughData = !this.audio.decode()
            }

            // Sync video to audio
            if (this.video && this.video.currentTime < this.audio.currentTime) {
              notEnoughData = !this.video.decode()
            }
            headroom = this.demuxer.currentTime - this.audio.currentTime
          } else if (this.video) {
            // Video only - sync it to player's wallclock
            var targetTime = Now() - this.startTime + this.video.startTime,
              lateTime = targetTime - this.video.currentTime,
              frameTime = 1 / this.video.frameRate
            if (this.video && lateTime > 0) {
              // If the video is too far behind (>2 frames), simply reset the
              // target time to the next frame instead of trying to catch up.
              if (lateTime > frameTime * 2) {
                this.startTime += lateTime
              }
              notEnoughData = !this.video.decode()
            }
            headroom = this.demuxer.currentTime - targetTime
          }

          // Notify the source of the playhead headroom, so it can decide whether to
          // continue loading further data.
          this.source.continue(headroom)

          // If we failed to decode and the source is complete, it means we reached
          // the end of our data. We may want to loop.
          if (notEnoughData && this.source.completed) {
            if (this.loop) {
              this.seek(0)
            } else {
              this.pause()
              if (this.options.onEnded) {
                this.options.onEnded(this)
              }
            }
          }

          // If there's not enough data and the source is not completed, we have
          // just stalled.
          else if (notEnoughData && this.options.onStalled) {
            this.options.onStalled(this)
          }
        }
      },
      {
        key: 'handleSourceConnected',
        value: function handleSourceConnected() {
          var _this$options$onSourc, _this$options2
          ;(_this$options$onSourc = (_this$options2 = this.options)
            .onSourceConnected) === null || _this$options$onSourc === void 0
            ? void 0
            : _this$options$onSourc.call(_this$options2, this)
        }
      },
      {
        key: 'handleSourceEstablished',
        value: function handleSourceEstablished() {
          var _this$options$onSourc2, _this$options3
          if (this.isBackground) {
            this.source.pause()
          } else if (this.paused) {
            this.play()
          }
          ;(_this$options$onSourc2 = (_this$options3 = this.options)
            .onSourceEstablished) === null || _this$options$onSourc2 === void 0
            ? void 0
            : _this$options$onSourc2.call(_this$options3, this)
        }
      },
      {
        key: 'handleSourceStreamInterrupt',
        value: function handleSourceStreamInterrupt() {
          if (this.options.onSourceStreamInterrupt) {
            this.options.onSourceStreamInterrupt(this)
          }
        }
      },
      {
        key: 'handleSourceClosed',
        value: function handleSourceClosed() {
          this.pause()
          if (this.isRecording) {
            this.recording()
          }
          if (this.options.onSourceClosed) {
            this.options.onSourceClosed(this)
          }
        }
      }
    ])
    return Player
  })()
  player_defineProperty(
    Player,
    'WASM_BINARY_INLINED',
    'AGFzbQEAAAAADwZkeWxpbmuA0MACBAAAAAE0CWAEf39/fwBgAX8Bf2ACf38Bf2ABfwBgAn9/AGABfwF9YAZ/f39/f38AYAN/f38Bf2AAAAJGBANlbnYOX19fYXNzZXJ0X2ZhaWwAAANlbnYFX3NicmsAAQNlbnYNX19tZW1vcnlfYmFzZQN/AANlbnYGbWVtb3J5AgCAAgM9PAIDAgEEBAMBBQEBAQEBAQEDBAMGAwQAAwAAAAIDAgEEBAEBAQEBAAACAwIBAgECAQEBAQMEAwMCBwcHCAYLAn8BQQALfwFBAAsHggYfEl9fcG9zdF9pbnN0YW50aWF0ZQA9BV9mcmVlADgHX21hbGxvYwAxB19tZW1jcHkAOghfbWVtbW92ZQA7B19tZW1zZXQAPBNfbXAyX2RlY29kZXJfY3JlYXRlAB0TX21wMl9kZWNvZGVyX2RlY29kZQAmFF9tcDJfZGVjb2Rlcl9kZXN0cm95AB4WX21wMl9kZWNvZGVyX2RpZF93cml0ZQAiFl9tcDJfZGVjb2Rlcl9nZXRfaW5kZXgAICFfbXAyX2RlY29kZXJfZ2V0X2xlZnRfY2hhbm5lbF9wdHIAJCJfbXAyX2RlY29kZXJfZ2V0X3JpZ2h0X2NoYW5uZWxfcHRyACUcX21wMl9kZWNvZGVyX2dldF9zYW1wbGVfcmF0ZQAjGl9tcDJfZGVjb2Rlcl9nZXRfd3JpdGVfcHRyAB8WX21wMl9kZWNvZGVyX3NldF9pbmRleAAhFV9tcGVnMV9kZWNvZGVyX2NyZWF0ZQACFV9tcGVnMV9kZWNvZGVyX2RlY29kZQARFl9tcGVnMV9kZWNvZGVyX2Rlc3Ryb3kAAxhfbXBlZzFfZGVjb2Rlcl9kaWRfd3JpdGUABxlfbXBlZzFfZGVjb2Rlcl9nZXRfY2JfcHRyABAdX21wZWcxX2RlY29kZXJfZ2V0X2NvZGVkX3NpemUACxlfbXBlZzFfZGVjb2Rlcl9nZXRfY3JfcHRyAA8dX21wZWcxX2RlY29kZXJfZ2V0X2ZyYW1lX3JhdGUAChlfbXBlZzFfZGVjb2Rlcl9nZXRfaGVpZ2h0AA0YX21wZWcxX2RlY29kZXJfZ2V0X2luZGV4AAUYX21wZWcxX2RlY29kZXJfZ2V0X3dpZHRoAAwcX21wZWcxX2RlY29kZXJfZ2V0X3dyaXRlX3B0cgAEGF9tcGVnMV9kZWNvZGVyX2dldF95X3B0cgAOIl9tcGVnMV9kZWNvZGVyX2hhc19zZXF1ZW5jZV9oZWFkZXIACRhfbXBlZzFfZGVjb2Rlcl9zZXRfaW5kZXgABgql2AE8IQEBf0GcBBAxIgJBAEGcBBA8GiACIAAgARAqNgKAASACC08AIAAoAoABECsgAEFAaygCAEUEQCAAEDgPCyAAKAKEARA4IAAoAogBEDggACgCjAEQOCAAKAKQARA4IAAoApQBEDggACgCmAEQOCAAEDgLDAAgACgCgAEgARAsCwsAIAAoAoABKAIECw0AIAAoAoABIAE2AgQLOQEBfyAAKAKAASICIAEgAigCDGo2AgwgAEFAaygCAARADwsgACgCgAFBswEQLkF/RgRADwsgABAIC6sGAQt/IAAoAgQhAiAAKAIIIQMgACAAKAKAAUEMEDA2AgQgACAAKAKAAUEMEDA2AgggACgCgAEiASABKAIEQQRqNgIEIAAoAoABQQQQMCEBIAAjACABQQJ0aigCADYCACAAKAKAASIBIAEoAgRBHmo2AgQgACgCgAFBARAwBEBBACEBA0AgACgCgAFBCBAwQf8BcSEEIAEjAEFAa2otAAAgAEGcA2pqIAQ6AAAgAUEBaiIBQcAARw0ACwUgACMAKQKAATcCnAMgACMAKQKIATcCpAMgACMAKQKQATcCrAMgACMAKQKYATcCtAMgACMAKQKgATcCvAMgACMAKQKoATcCxAMgACMAKQKwATcCzAMgACMAKQK4ATcC1AMLIAAoAoABQQEQMARAQQAhAQNAIAEjAEFAa2otAAAgAEHcA2pqIAAoAoABQQgQMDoAACABQQFqIgFBwABHDQALBSAAQpCgwICBgoSIEDcC3AMgAEKQoMCAgYKEiBA3AuQDIABCkKDAgIGChIgQNwLsAyAAQpCgwICBgoSIEDcC9AMgAEKQoMCAgYKEiBA3AvwDIABCkKDAgIGChIgQNwKEBCAAQpCgwICBgoSIEDcCjAQgAEKQoMCAgYKEiBA3ApQECyAAQUBrIgsoAgAEQCACIAAoAgRGBEAgAyAAKAIIRgRADwsLIABBhAFqIgMoAgAQOCAAQYgBaiIEKAIAEDggAEGMAWoiBigCABA4IABBkAFqIgcoAgAQOCAAQZQBaiIIKAIAEDggAEGYAWoiASgCABA4BSAAQZgBaiEBIABBjAFqIQYgAEGIAWohBCAAQZQBaiEIIABBhAFqIQMgAEGQAWohBwsgACAAKAIEQQ9qIgJBBHUiCTYCDCAAIAAoAghBD2oiBUEEdSIKNgIQIAAgCSAKbDYCFCAAIAJBcHEiAjYCGCAAIAVBcHEiBTYCHCAAIAIgBWwiAjYCICAAIAlBA3Q2AiQgACAKQQN0NgIoIAMgAhAxNgIAIAQgAkECdSIAEDE2AgAgBiAAEDE2AgAgByACEDE2AgAgCCAAEDE2AgAgASAAEDE2AgAgC0EBNgIACwoAIABBQGsoAgALBwAgACoCAAsHACAAKAIgCwcAIAAoAgQLBwAgACgCCAsIACAAKAKQAQsIACAAKAKUAQsIACAAKAKYAQsqACAAQUBrKAIARQRAQQAPCyAAKAKAAUEAEC5Bf0YEQEEADwsgABASQQEL3wIBAn8jASECIwFBEGokASAAKAKAASIBIAEoAgRBCmo2AgQgACAAKAKAAUEDEDA2AiwgACgCgAEiASABKAIEQRBqNgIEIAAoAiwiAUF/akEBSwRAIAIkAQ8LIAFBAkYEQCAAIAAoAoABQQEQMDYCMCAAIAAoAoABQQMQMCIBNgI0IAEEQCAAIAFBf2oiATYCOCAAQQEgAXQ2AjwFIAIkAQ8LCwNAAkAgACgCgAEQLSIBQbIBaw4EAQAAAQALCyABQX9qQa8BSQRAA0AgACABQf8BcRATIAAoAoABEC0iAUF/akGvAUkNAAsLIAFBf0cEQCAAKAKAASIBIAEoAgRBIGs2AgQLIAAoAixBf2pBAk8EQCACJAEPCyACIAApApABNwIAIAIgACgCmAE2AgggACAAKQKEATcCkAEgACAAKAKMATYCmAEgACACKQIANwKEASAAIAIoAgg2AowBIAIkAQuSAQAgAEEBNgJIIAAgACgCDCABQX9qbEF/ajYCTCAAQgA3AmQgAEIANwJsIABBgAE2AnQgAEGAATYCeCAAQYABNgJ8IAAgACgCgAFBBRAwNgJEIAAoAoABQQEQMARAA0AgACgCgAEiASABKAIEQQhqNgIEIAAoAoABQQEQMA0ACwsDQCAAEBQgACgCgAEQL0UNAAsLngkBBH8gACgCgAEhAgJAAkADQAJAIAJBARAwIAFqIQEjAEHAAWogAUECdGooAgAiAUF/TA0AIwBBwAFqIAFBAnRqKAIADQEMAgsLIAFBAmohAkEAIQEMAQsgAUECaiIBQbwBRgRAAkADQAJAIAAoAoABIQJBACEBA0AgAkEBEDAgAWohASMAQcABaiABQQJ0aigCACIBQX9MDQEjAEHAAWogAUECdGooAgANAAsgAUECaiIBQbwBRg0BDAILCyABQQJqIQJBACEBDAILCyABQbkBRgRAQQAhAQNAAkAgAUEhaiEBIAAoAoABIQNBACECA0AgA0EBEDAgAmohAiMAQcABaiACQQJ0aigCACICQX9MDQEjAEHAAWogAkECdGooAgANAAsgAkECaiICQbkBRg0BDAMLCyACQQJqIQIFIAEhAkEAIQELCyABIwBBwAFqIAJBAnRqKAIAaiECIAAoAkgEQCAAQQA2AkggACAAKAJMIAJqIgE2AkwFAkAgACgCTCIBIAJqIAAoAhROBEAPCyACQQFMBEAgACABQQFqIgE2AkwMAQsgAEGAATYCdCAAQYABNgJ4IABBgAE2AnwgACgCLEECRgRAIABCADcCZCAAQgA3AmwLIAAgAUEBaiIBNgJMA0AgACABIAAoAgwiBG0iAzYCUCAAIAEgAyAEbGs2AlQgACAAKAJkIAAoAmggACgCkAEgACgClAEgACgCmAEQFSACQX9qIQMgACAAKAJMQQFqIgE2AkwgAkECSgRAIAMhAgwBCwsLCyAAIAEgACgCDCIDbSICNgJQIAAgASACIANsazYCVAJAAkACQAJAIAAoAixBAWsOAgABAgsgACgCgAEhAkEAIQEDQAJAIAJBARAwIAFqIQMjAEHQCGogA0ECdGooAgAhASADQQNGDQBB5A0gAXZBAXFFDQELCyAAQdgAaiIDIwAgAUECdGpB2AhqKAIAIgI2AgAgAyEBDAILIAAoAoABIQJBACEBA0ACQCACQQEQMCABaiEDIwBBgAlqIANBAnRqKAIAIQEgA0EbRg0AIwBBgAlqIAFBAnRqKAIADQELCyAAQdgAaiIDIwAgAUECdGpBiAlqKAIAIgI2AgAgAyEBDAELIABB2ABqIgEoAgAhAgsgACACQQFxIgM2AlwgACACQQhxNgJgIAJBEHEEQCAAIAAoAoABQQUQMDYCRCAAKAJcIQMLIAMEQCAAQgA3AmQgAEIANwJsBSAAQYABNgJ0IABBgAE2AnggAEGAATYCfCAAEBYgACAAKAJkIAAoAmggACgCkAEgACgClAEgACgCmAEQFQsgASgCAEECcQR/IAAoAoABIQJBACEBA0ACQCACQQEQMCABaiEDIwBBsApqIANBAnRqKAIAIQEgA0HDAUYNACMAQbAKaiABQQJ0aigCAA0BCwsjACABQQJ0akG4CmooAgAFQT9BACAAKAJcGwsiAUEgcQRAIABBABAXCyABQRBxBEAgAEEBEBcLIAFBCHEEQCAAQQIQFwsgAUEEcQRAIABBAxAXCyABQQJxBEAgAEEEEBcLIAFBAXFFBEAPCyAAQQUQFwuEJwEPfyAAKAKEASEKIAAoAowBIRAgACgCiAEhESAAKAIYIghBcGohCyACQQFxQQBHIQwgACgCVCIJQQR0IAFBAXVqIAggACgCUCINQQR0IAJBAXVqbGohByAJIAggDWxqQQJ0IgkgCEECdCIGaiENIAZBAEohBgJAIAFBAXEEQCAMBEAgBkUNAiALQQJ1IQsDQCAJQQJ0IApqIAMgB0EDaiIGai0AACADIAYgCGpqLQAAaiIGIAMgB0EEaiIMai0AACADIAggDGpqLQAAaiIMakEWdEGAgIAEakGAgIB4cSADIAdBAmoiDmotAAAgAyAIIA5qai0AAGoiDiAGakEOdEGAgAJqQYCA/AdxIAMgB0EBaiIGai0AACADIAYgCGpqLQAAaiIGIAMgB2otAAAgAyAHIAhqai0AAGpBAmpqQQJ2Qf8BcSAGIA5qQQZ0QYABakGA/gNxcnJyNgIAIAlBAWpBAnQgCmogAyAHQQdqIgZqLQAAIAMgBiAIamotAABqIgYgAyAHQQhqIg5qLQAAIAMgCCAOamotAABqIg5qQRZ0QYCAgARqQYCAgHhxIAMgB0EGaiIPai0AACADIAggD2pqLQAAaiIPIAZqQQ50QYCAAmpBgID8B3EgAyAHQQVqIgZqLQAAIAMgBiAIamotAABqIgYgDEECampBAnZB/wFxIAYgD2pBBnRBgAFqQYD+A3FycnI2AgAgCUECakECdCAKaiADIAdBC2oiBmotAAAgAyAGIAhqai0AAGoiBiADIAdBDGoiDGotAAAgAyAIIAxqai0AAGoiDGpBFnRBgICABGpBgICAeHEgAyAHQQpqIg9qLQAAIAMgCCAPamotAABqIg8gBmpBDnRBgIACakGAgPwHcSADIAdBCWoiBmotAAAgAyAGIAhqai0AAGoiBiAOQQJqakECdkH/AXEgBiAPakEGdEGAAWpBgP4DcXJycjYCACAJQQNqQQJ0IApqIAMgB0EPaiIGai0AACADIAYgCGpqLQAAaiIGIAMgB0EQaiIOai0AACADIAggDmpqLQAAampBFnRBgICABGpBgICAeHEgAyAHQQ5qIg5qLQAAIAMgCCAOamotAABqIg4gBmpBDnRBgIACakGAgPwHcSADIAdBDWoiBmotAAAgAyAGIAhqai0AAGoiBiAMQQJqakECdkH/AXEgBiAOakEGdEGAAWpBgP4DcXJycjYCACAHIAhqIQcgCUEEaiALaiIJIA1IDQALBSAGRQ0CIAtBAnUhCwNAIAlBAnQgCmogAyAHQQNqai0AACIGIAMgB0EEamotAAAiDGpBF3RBgICABGpBgICAeHEgAyAHQQJqai0AACIOIAZqQQ90QYCAAmpBgID8B3EgDiADIAdBAWpqLQAAIgZqQQd0QYABakGA/gNxIAMgB2otAABBAWogBmpBAXZB/wFxcnJyNgIAIAlBAWpBAnQgCmogAyAHQQdqai0AACIGIAMgB0EIamotAAAiDmpBF3RBgICABGpBgICAeHEgAyAHQQZqai0AACIPIAZqQQ90QYCAAmpBgID8B3EgDyADIAdBBWpqLQAAIgZqQQd0QYABakGA/gNxIAxBAWogBmpBAXZB/wFxcnJyNgIAIAlBAmpBAnQgCmogAyAHQQtqai0AACIGIAMgB0EMamotAAAiDGpBF3RBgICABGpBgICAeHEgAyAHQQpqai0AACIPIAZqQQ90QYCAAmpBgID8B3EgDyADIAdBCWpqLQAAIgZqQQd0QYABakGA/gNxIA5BAWogBmpBAXZB/wFxcnJyNgIAIAlBA2pBAnQgCmogAyAHQQ9qai0AACIGIAMgB0EQamotAABqQRd0QYCAgARqQYCAgHhxIAMgB0EOamotAAAiDiAGakEPdEGAgAJqQYCA/AdxIA4gAyAHQQ1qai0AACIGakEHdEGAAWpBgP4DcSAMQQFqIAZqQQF2Qf8BcXJycjYCACAHIAhqIQcgCUEEaiALaiIJIA1IDQALCwUgDARAIAZFDQIgC0ECdSELA0AgCUECdCAKaiADIAdBA2oiBmotAAAgAyAGIAhqai0AAGpBF3RBgICABGpBgICAeHEgAyAHQQJqIgZqLQAAIAMgBiAIamotAABqQQ90QYCAAmpBgID8B3EgAyAHIAhqai0AACADIAdqLQAAQQFqakEBdkH/AXEgAyAHQQFqIgZqLQAAIAMgBiAIamotAABqQQd0QYABakGA/gNxcnJyNgIAIAlBAWpBAnQgCmogAyAHQQdqIgZqLQAAIAMgBiAIamotAABqQRd0QYCAgARqQYCAgHhxIAMgB0EGaiIGai0AACADIAYgCGpqLQAAakEPdEGAgAJqQYCA/AdxIAMgB0EEaiIGai0AAEEBaiADIAYgCGpqLQAAakEBdkH/AXEgAyAHQQVqIgZqLQAAIAMgBiAIamotAABqQQd0QYABakGA/gNxcnJyNgIAIAlBAmpBAnQgCmogAyAHQQtqIgZqLQAAIAMgBiAIamotAABqQRd0QYCAgARqQYCAgHhxIAMgB0EKaiIGai0AACADIAYgCGpqLQAAakEPdEGAgAJqQYCA/AdxIAMgB0EIaiIGai0AAEEBaiADIAYgCGpqLQAAakEBdkH/AXEgAyAHQQlqIgZqLQAAIAMgBiAIamotAABqQQd0QYABakGA/gNxcnJyNgIAIAlBA2pBAnQgCmogAyAHQQ9qIgZqLQAAIAMgBiAIamotAABqQRd0QYCAgARqQYCAgHhxIAMgB0EOaiIGai0AACADIAYgCGpqLQAAakEPdEGAgAJqQYCA/AdxIAMgB0EMaiIGai0AAEEBaiADIAYgCGpqLQAAakEBdkH/AXEgAyAHQQ1qIgZqLQAAIAMgBiAIamotAABqQQd0QYABakGA/gNxcnJyNgIAIAcgCGohByAJQQRqIAtqIgkgDUgNAAsFIAZFDQIgC0ECdSELA0AgCUECdCAKaiADIAdqLQAAIAMgB0EBamotAABBCHRyIAMgB0ECamotAABBEHRyIAMgB0EDamotAABBGHRyNgIAIAlBAWpBAnQgCmogAyAHQQRqai0AACADIAdBBWpqLQAAQQh0ciADIAdBBmpqLQAAQRB0ciADIAdBB2pqLQAAQRh0cjYCACAJQQJqQQJ0IApqIAMgB0EIamotAAAgAyAHQQlqai0AAEEIdHIgAyAHQQpqai0AAEEQdHIgAyAHQQtqai0AAEEYdHI2AgAgCUEDakECdCAKaiADIAdBDGpqLQAAIAMgB0ENamotAABBCHRyIAMgB0EOamotAABBEHRyIAMgB0EPamotAABBGHRyNgIAIAcgCGohByAJQQRqIAtqIgkgDUgNAAsLCwsgACgCJCIDQXhqIQcgAkECbSICQQFxQQBHIQggACgCVCIJQQN0IAFBAm0iCkEBdWogAyAAKAJQIgFBA3QgAkEBdWpsaiEAIAkgASADbGpBAXQiASADQQF0IglqIQIgCUEASiEJIApBAXEEQCAIBEAgCUUEQA8LIAdBAnUhDgNAIAMgAEEBaiIHaiEJIAMgAEECaiIIaiEKIAMgAEEDaiILaiENIAMgAEEEaiIGaiEMIAUgC2otAAAgBSANai0AAGoiDyAFIAZqLQAAIAUgDGotAABqIhJqQRZ0QYCAgARqQYCAgHhxIAUgCGotAAAgBSAKai0AAGoiEyAPakEOdEGAgAJqQYCA/AdxIAUgB2otAAAgBSAJai0AAGoiDyAAIAVqLQAAIAUgACADaiIUai0AAGpBAmpqQQJ2Qf8BcSAPIBNqQQZ0QYABakGA/gNxcnJyIQ8gAUECdCARaiAEIAtqLQAAIAQgDWotAABqIgsgBCAGai0AACAEIAxqLQAAaiITakEWdEGAgIAEakGAgIB4cSAEIAhqLQAAIAQgCmotAABqIgggC2pBDnRBgIACakGAgPwHcSAEIAdqLQAAIAQgCWotAABqIgcgACAEai0AACAEIBRqLQAAakECampBAnZB/wFxIAcgCGpBBnRBgAFqQYD+A3FycnI2AgAgAUECdCAQaiAPNgIAIAMgAEEFaiIHaiEJIAMgAEEGaiIIaiEKIAMgAEEHaiILaiENIAMgAEEIaiIGaiEMIAUgC2otAAAgBSANai0AAGoiDyAFIAZqLQAAIAUgDGotAABqakEWdEGAgIAEakGAgIB4cSAFIAhqLQAAIAUgCmotAABqIhQgD2pBDnRBgIACakGAgPwHcSAFIAdqLQAAIAUgCWotAABqIg8gEkECampBAnZB/wFxIA8gFGpBBnRBgAFqQYD+A3FycnIhDyABQQFqIhJBAnQgEWogBCALai0AACAEIA1qLQAAaiILIAQgBmotAAAgBCAMai0AAGpqQRZ0QYCAgARqQYCAgHhxIAQgCGotAAAgBCAKai0AAGoiCCALakEOdEGAgAJqQYCA/AdxIAQgB2otAAAgBCAJai0AAGoiByATQQJqakECdkH/AXEgByAIakEGdEGAAWpBgP4DcXJycjYCACASQQJ0IBBqIA82AgAgACADaiEAIAFBAmogDmoiASACSA0ACwUgCUUEQA8LIAdBAnUhCwNAIAQgAEEBaiINai0AACEHIAQgAEECaiIGai0AACEJIAQgAEEDaiIMai0AACEIIAQgAEEEaiIOai0AACEKIAUgDGotAAAiDCAFIA5qLQAAIg5qQRd0QYCAgARqQYCAgHhxIAUgBmotAAAiBiAMakEPdEGAgAJqQYCA/AdxIAUgDWotAAAiDSAAIAVqLQAAQQFqakEBdkH/AXEgBiANakEHdEGAAWpBgP4DcXJyciENIAFBAnQgEWogCCAKakEXdEGAgIAEakGAgIB4cSAIIAlqQQ90QYCAAmpBgID8B3EgACAEai0AAEEBaiAHakEBdkH/AXEgByAJakEHdEGAAWpBgP4DcXJycjYCACABQQJ0IBBqIA02AgAgBCAAQQVqIg1qLQAAIQcgBCAAQQZqIgZqLQAAIQkgBCAAQQdqIgxqLQAAIQggBSAMai0AACIMIAUgAEEIaiIPai0AAGpBF3RBgICABGpBgICAeHEgBSAGai0AACIGIAxqQQ90QYCAAmpBgID8B3EgBSANai0AACINIA5BAWpqQQF2Qf8BcSAGIA1qQQd0QYABakGA/gNxcnJyIQ0gAUEBaiIGQQJ0IBFqIAggBCAPai0AAGpBF3RBgICABGpBgICAeHEgCCAJakEPdEGAgAJqQYCA/AdxIApBAWogB2pBAXZB/wFxIAcgCWpBB3RBgAFqQYD+A3FycnI2AgAgBkECdCAQaiANNgIAIAAgA2ohACABQQJqIAtqIgEgAkgNAAsLBSAIBEAgCUUEQA8LIAdBAnUhDgNAIAMgAEEBaiIHaiEJIAMgAEECaiIIaiEKIAMgAEEDaiILaiENIAUgC2otAAAgBSANai0AAGpBF3RBgICABGpBgICAeHEgBSAIai0AACAFIApqLQAAakEPdEGAgAJqQYCA/AdxIAUgACADaiIGai0AACAAIAVqLQAAQQFqakEBdkH/AXEgBSAHai0AACAFIAlqLQAAakEHdEGAAWpBgP4DcXJyciEMIAFBAnQgEWogBCALai0AACAEIA1qLQAAakEXdEGAgIAEakGAgIB4cSAEIAhqLQAAIAQgCmotAABqQQ90QYCAAmpBgID8B3EgBCAGai0AACAAIARqLQAAQQFqakEBdkH/AXEgBCAHai0AACAEIAlqLQAAakEHdEGAAWpBgP4DcXJycjYCACABQQJ0IBBqIAw2AgAgAyAAQQRqIgdqIQkgAyAAQQVqIghqIQogAyAAQQZqIgtqIQ0gAyAAQQdqIgZqIQwgBSAGai0AACAFIAxqLQAAakEXdEGAgIAEakGAgIB4cSAFIAtqLQAAIAUgDWotAABqQQ90QYCAAmpBgID8B3EgBSAJai0AACAFIAdqLQAAQQFqakEBdkH/AXEgBSAIai0AACAFIApqLQAAakEHdEGAAWpBgP4DcXJyciEPIAFBAWoiEkECdCARaiAEIAZqLQAAIAQgDGotAABqQRd0QYCAgARqQYCAgHhxIAQgC2otAAAgBCANai0AAGpBD3RBgIACakGAgPwHcSAEIAlqLQAAIAQgB2otAABBAWpqQQF2Qf8BcSAEIAhqLQAAIAQgCmotAABqQQd0QYABakGA/gNxcnJyNgIAIBJBAnQgEGogDzYCACAAIANqIQAgAUECaiAOaiIBIAJIDQALBSAJRQRADwsgB0ECdSEHA0AgACAFai0AACAFIABBAWoiCWotAABBCHRyIAUgAEECaiIIai0AAEEQdHIgBSAAQQNqIgpqLQAAQRh0ciELIAFBAnQgEWogACAEai0AACAEIAlqLQAAQQh0ciAEIAhqLQAAQRB0ciAEIApqLQAAQRh0cjYCACABQQJ0IBBqIAs2AgAgBSAAQQRqIglqLQAAIAUgAEEFaiIIai0AAEEIdHIgBSAAQQZqIgpqLQAAQRB0ciAFIABBB2oiC2otAABBGHRyIQ0gAUEBaiIGQQJ0IBFqIAQgCWotAAAgBCAIai0AAEEIdHIgBCAKai0AAEEQdHIgBCALai0AAEEYdHI2AgAgBkECdCAQaiANNgIAIAAgA2ohACABQQJqIAdqIgEgAkgNAAsLCwu8BAEDfyAAKAJgRQRAIAAoAixBAkcEQA8LIABCADcCZCAAQgA3AmwPCyAAKAKAASECA0ACQCACQQEQMCABaiEBIwBBoBZqIAFBAnRqKAIAIgFBf0wNACMAQaAWaiABQQJ0aigCAA0BCwsjACABQQJ0akGoFmooAgAiAQRAIAAoAjxBAUcEQCAAKAKAASAAKAI4EDAgAUEAIAFrIAFBf0obQX9qIAAoAjh0aiICQX9zIAJBAWogAUEASBshAQsFQQAhAQsgACAAKAJsIAFqIgE2AmwCQAJAIAEgACgCPCICQQR0IgNIBEAgAUEAIANrSARAIAEgAkEFdGohAQwCCwUgASACQQV0ayEBDAELDAELIAAgATYCbAsgACABNgJkIAAoAjAEQCAAIAFBAXQ2AmQLIAAoAoABIQJBACEBA0ACQCACQQEQMCABaiEBIwBBoBZqIAFBAnRqKAIAIgFBf0wNACMAQaAWaiABQQJ0aigCAA0BCwsjACABQQJ0akGoFmooAgAiAQRAIAAoAjxBAUcEQCAAKAKAASAAKAI4EDAgAUEAIAFrIAFBf0obQX9qIAAoAjh0aiICQX9zIAJBAWogAUEASBshAQsFQQAhAQsgACAAKAJwIAFqIgE2AnACQAJAIAEgACgCPCICQQR0IgNIBEAgAUEAIANrSARAIAEgAkEFdGohAQwCCwUgASACQQV0ayEBDAELDAELIAAgATYCcAsgACABNgJoIAAoAjBFBEAPCyAAIAFBAXQ2AmgLpAgBBX8gACgCXAR/An8gAUEESCIFBH8gACgCdCEDIAAoAoABIQYDfyAGQQEQMCACaiEEIwBB0BxqIARBAnRqKAIAIQIjAEHQHGogBEEuRg0CGiMAQdAcaiACQQJ0aigCAA0AIwBB0BxqCwUgAEH4AGogAEH8AGogAUEERhsoAgAhAyAAKAKAASEGA38gBkEBEDAgAmohBCMAQbAeaiAEQQJ0aigCACECIwBBsB5qIARBLkYNAhojAEGwHmogAkECdGooAgANACMAQbAeagsLCyEEIAAgAkECakECdCAEaigCACICQQBKBH8gACgCgAEgAhAwIgRBASACQX9qdHEEfyADIARqBSAEQQFqQX8gAnRyIANqCwUgAwsiAjYCnAEgBQR/IABBnAFqIQMgAEH0AGoFIABBnAFqIQMgAEH4AGogAEH8AGogAUEERhsLIAI2AgAgAyACQQh0NgIAIABBnANqIQVBAQUgAEHcA2ohBUEACyECA0ACQCAAKAKAASEGQQAhAwNAAkAgBkEBEDAgA2ohBCMAQZAgaiAEQQJ0aigCACEDIARB/AFGDQAjAEGQIGogA0ECdGooAgANAQsLIwBBkCBqIANBAmoiA0ECdGooAgAhBgJAAkAgA0EIRiACQQBKcQR/IAAoAoABQQEQMEUNAwwBBQJ/IANBzQBHDQIgACgCgAFBBhAwIQMCQAJAIAAoAoABQQgQMCIEIgYEQCAGQYABRgRADAIFDAMLAAsgACgCgAFBCBAwDAILIAAoAoABQQgQMEGAfmoMAQsgBEGAfmogBCAEQYABShsLCyEEDAELIAZB/wFxIgNBACADayAAKAKAAUEBEDBFGyEEIAZBCHUhAwsgAiADaiIGIwBBQGtqLQAAIgMgBWotAAAgACgCREEAIARBAXQiAkEfdUEBciAAKAJcGyACamxsIgJBBHVBAEEBQX8gAkEPShsgAkEQcRtrIgJBgHAgAkGAcEobIQIgAEGcAWogA0ECdGogAyMAQZA1amotAAAgAkH/DyACQf8PSBtsNgIAIAZBAWohAgwBCwsgAUEESARAIABBhAFqIQUgAUEDdEEIcSAAKAJUIAAoAhgiAyAAKAJQbGpBBHRyIANBA3RBACABQQJxG2ohBAUgAEGMAWogAEGIAWogAUEERhshBSAAKAJQIAAoAhgiAUECdGwgACgCVEEDdGohBCABQQF1IQMLIANBeGohAyAFKAIAIQUgAkEBRiECIABBnAFqIQEgACgCXARAIAIEQCABKAIAQYABakEIdSAFIAQgAxAYIAFBADYCAAUgARAZIAEgBSAEIAMQGiABQQBBgAIQPBoLBSACBEAgASgCAEGAAWpBCHUgBSAEIAMQGyABQQA2AgAFIAEQGSABIAUgBCADEBwgAUEAQYACEDwaCwsL7AYAIAEgAmogAEEAIABBAEobIgBB/wEgAEH/AUgbQf8BcSIAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA0EIaiIDaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAACABIAIgA2oiAmogADoAACABIAJBAWpqIAA6AAAgASACQQJqaiAAOgAAIAEgAkEDamogADoAACABIAJBBGpqIAA6AAAgASACQQVqaiAAOgAAIAEgAkEGamogADoAACABIAJBB2pqIAA6AAAgASACIANqIgJqIAA6AAAgASACQQFqaiAAOgAAIAEgAkECamogADoAACABIAJBA2pqIAA6AAAgASACQQRqaiAAOgAAIAEgAkEFamogADoAACABIAJBBmpqIAA6AAAgASACQQdqaiAAOgAAIAEgAiADaiICaiAAOgAAIAEgAkEBamogADoAACABIAJBAmpqIAA6AAAgASACQQNqaiAAOgAAIAEgAkEEamogADoAACABIAJBBWpqIAA6AAAgASACQQZqaiAAOgAAIAEgAkEHamogADoAAAubBgEUfwNAIAFBEGpBAnQgAGoiBygCACIGIAFBMGpBAnQgAGoiDSgCACIJaiEFIAFBCGpBAnQgAGoiDigCACICIAFBOGpBAnQgAGoiDygCACIDaiEEIAIgA2siEEHZA2wgAUEoakECdCAAaiIKKAIAIgIgAUEYakECdCAAaiIRKAIAIgNrIgtBvH5sQYABampBCHUgBCACIANqIghqIgJrIgMgBCAIa0HqAmxBgAFqQQh1ayEEIAFBAnQgAGoiCCgCACIMIAFBIGpBAnQgAGoiEigCACITayIUIAYgCWtB6gJsQYABakEIdSAFayIJaiEGIAggAiAMIBNqIgggBWoiDGo2AgAgDiADIAZqNgIAIAcgFCAJayIHIARrNgIAIBEgC0HZA2xBgAFqIBBBxAFsakEIdSAEaiIJIAggBWsiBWo2AgAgEiAFIAlrNgIAIAogBCAHajYCACANIAYgA2s2AgAgDyAMIAJr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aiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAiAFIAI2AgAMAgsgBSAAKAIIQQYQMDYCACAAIANBgANsaiABQQxsaiAAKAIIQQYQMCICNgLUAiAAIANBgANsaiABQQxsaiACNgLQAgsLCyADQQFqIgMgCEkNAAsgAUEBaiIBIAtHDQALCwsLaiALQSBJIRsgAEHMtgFqIQQgAEHMCGohHCAAQcz2AGohHSAAQcwLaiEeIABBzJYBaiEfA0BBACEWIBQhAwNAIBgEQEEAIQEDQCAAQQAgASAOECggAEEBIAEgDhAoIAFBAWoiASANSA0ACwsgGQRAIA0hAQNAIABBACABIA4QKCAAQcwLaiABQQxsaiAAQcwIaiABQQxsaigCADYCACAAIAFBDGxqQdALaiAAIAFBDGxqQdAIaigCADYCACAAIAFBDGxqQdQLaiAAIAFBDGxqQdQIaigCADYCACABQQFqIgEgC0gNAAsLIBsEQCALIQEDQCAAQcwIaiABQQxsakEANgIAIAAgAUEMbGpB0AhqQQA2AgAgACABQQxsakHUCGpBADYCACAAQcwLaiABQQxsakEANgIAIAAgAUEMbGpB0AtqQQA2AgAgACABQQxsakHUC2pBADYCACABQQFqIgFBIEcNAAsLIAAoAgQhASADIRFBACESA0AgACABQcAHakH/B3EiATYCBCAcIBIgHSABECkgBEIANwIAIARCADcCCCAEQgA3AhAgBEIANwIYIARCADcCICAEQgA3AiggBEIANwIwIARCADcCOCAEQUBrQgA3AgAgBEIANwJIIARCADcCUCAEQgA3AlggBEIANwJgIARCADcCaCAEQgA3AnAgBEIANwJ4IAAoAgQiD0EBdSETQf8HIA9BgAFvQQF1IgxrIgFBgH9xIRUgAUEHdkEGdEHABGohEEGABCATayEGIAwhAQNAIAYhB0EAIQkgASECA0AgB0EBaiEIIAJBAWohBSAAQcy2AWogCUECdGoiCiAAQczWAGogB0ECdGoqAgAgAEHM9gBqIAJBAnRqKgIAlCAKKAIAspKoNgIAIAlBAWoiCUEgRwRAIAghByAFIQIMAQsLIAFBgAFqIQIgBkFAayEGIAFBgAdIBEAgAiEBDAELC0HgByAMIBVqayIBQYAISARAIBAgE2tBoHxqIQYD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IkogWCBLk7tEujBFka7n9D+itiJLk7tEuEt/Zp6g5j+itiI6kiEqIANBMGpBAnQgAmogTSA8kow4AgAgA0EvakECdCACaiApICiSIEwgSZIgJJIiKJKMIik4AgAgA0ExakECdCACaiApOAIAIANBLmpBAnQgAmogRiBFkiAjkowiKTgCACADQTJqQQJ0IAJqICk4AgAgA0EtakECdCACaiAwIC2SIEAgPpIgJpIiKZIiPCAokowiKDgCACADQTNqQQJ0IAJqICg4AgAgA0EsakECdCACaiA2IE+SIFEgUJIgNZIiKJKMIjY4AgAgA0E0akECdCACaiA2OAIAIANBK2pBAnQgAmogPCA/IDiSIDOSIjwgJJIiJJKMIjY4AgAgA0E1akECdCACaiA2OAIAIANBKmpBAnQgAmogPSBSkiA7kiI9ICOSjCIjOAIAIANBNmpBAnQgAmogIzgCACADQSlqQQJ0IAJqIEsgSpIgOpIiIyAkkowiJDgCACADQTdqQQJ0IAJqICQ4AgAgA0EoakECdCACaiBIIE6SIDGSjCIkOAIAIANBOGpBAnQgAmogJDgCACADQSdqQQJ0IAJqICMgPCArkiIjkowiJDgCACADQTlqQQJ0IAJqICQ4AgAgA0EmakECdCACaiA9ICeSjCIkOAIAIANBOmpBAnQgAmogJDgCACADQSVqQQJ0IAJqICkgLSAwk7tEuEt/Zp6g5j+itiIpkiItICOSjCIjOAIAIANBO2pBAnQgAmogIzgCACADQSRqQQJ0IAJqICggR5KMIiM4AgAgA0E8akECdCACaiAjOAIAIANBI2pBAnQgAmogLSArIDKSIiOSjCIoOAIAIANBPWpBAnQgAmogKDgCACADQSJqQQJ0IAJqICcgU5KMIic4AgAgA0E+akECdCACaiAnOAIAIANBIWpBAnQgAmogIyBCkowiIzgCACADQT9qQQJ0IAJqICM4AgAgA0EgakECdCACaiA0jDgCACADQQJ0IAJqIDQ4AgAgA0EfakECdCACaiAsjDgCACADQQFqQQJ0IAJqICw4AgAgA0EeakECdCACaiA5jDgCACADQQJqQQJ0IAJqIDk4AgAgA0EdakECdCACaiApICaSIjQgQZIiI4w4AgAgA0EDakECdCACaiAjOAIAIANBHGpBAnQgAmogL4w4AgAgA0EEakECdCACaiAvOAIAIANBG2pBAnQgAmogNCA3IDOSIjSSIi+MOAIAIANBBWpBAnQgAmogLzgCACADQRpqQQJ0IAJqIEQgO5IiL4w4AgAgA0EGakECdCACaiAvOAIAIANBGWpBAnQgAmogNCA6kiI0jDgCACADQQdqQQJ0IAJqIDQ4AgAgA0EYakECdCACaiAxjDgCACADQQhqQQJ0IAJqIDE4AgAgA0EXakECdCACaiAqjDgCACADQQlqQQJ0IAJqICo4AgAgA0EWakECdCACaiA7IC6SIjGMOAIAIANBCmpBAnQgAmogMTgCACADQRVqQQJ0IAJqIEMgJpIiMYw4AgAgA0ELakECdCACaiAxOAIAIANBFGpBAnQgAmogNYw4AgAgA0EMakECdCACaiA1OAIAIANBE2pBAnQgAmogJiAlkiImjDgCACADQQ1qQQJ0IAJqICY4AgAgA0ESakECdCACaiAujDgCACADQQ5qQQJ0IAJqIC44AgAgA0ERakECdCACaiAljDgCACADQQ9qQQJ0IAJqICU4AgAgA0EQakECdCACakMAAAAAOAIACy8BAX9BFBAxIgIgATYCECACIAAQMTYCACACIAA2AgggAkEANgIMIAJBADYCBCACCw0AIAAoAgAQOCAAEDgL6QEBBH8gACgCCCIDIAAoAgwiAmsiBCABSQRAAkAgACgCEEECRgRAIAAgACgCACABIARrIANBAXQiAiACIARqIAFJGyIBEDk2AgAgACABNgIIIAAoAgQgACgCDCIBQQN0IgJNDQEgACACNgIEDAELIAIgACgCBCIFQQN2IgNGIAMgBGogAUlyBEAgAEEANgIMIABBADYCBEEAIQEMAQsgAwRAIAAoAgAiASABIANqIAIgA2sQOxogACAAKAIMIANrIgE2AgwgACAAKAIEIAVBeHFrNgIEBSACIQELCwUgAiEBCyAAKAIAIAFqC40BAQR/IAAoAgRBB2pBA3YiASAAKAIMIgRJBEACQCAAKAIAIQIDQAJAIAFBAWohAyABIAJqLAAARQRAIAIgA2osAABFBEAgAiABQQJqaiwAAEEBRg0CCwsgAyAETw0CIAMhAQwBCwsgACABQQN0QSBqNgIEIAIgAUEDamotAAAPCwsgACAEQQN0NgIEQX8LqQEBBH8gACgCBEEHakEDdiICIAAoAgwiBUkEQAJAIAAoAgAh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aiIGQRBLDQALIAMgCWohAyAIayECIQEMAgsgAyABKAIAIgU6AAAgAyABLAABOgABIAJBbGpBcHEiCEESaiIJIAFqIAJBbmogA0ECaiEEIAJBfmohBiABQQJqIQIgBSEBA0AgBCACKAICIgVBEHQgAUEQdnI2AgAgBCACKAIGIgFBEHQgBUEQdnI2AgQgBCACKAIKIgVBEHQgAUEQdnI2AgggBCACKAIOIgFBEHQgBUEQdnI2AgwgAkEQaiECIARBEGohBCAGQXBqIgZBEUsNAAsgAyAJaiEDIAhrIQIhAQwBCyADIAEoAgAiBToAACACQWxqQXBxIghBEWoiCSABaiACQW9qIANBAWohBCACQX9qIQYgAUEBaiECIAUhAQNAIAQgAigCAyIFQRh0IAFBCHZyNgIAIAQgAigCByIBQRh0IAVBCHZyNgIEIAQgAigCCyIFQRh0IAFBCHZyNgIIIAQgAigCDyIBQRh0IAVBCHZyNgIMIAJBEGohAiAEQRBqIQQgBkFwaiIGQRJLDQALIAMgCWohAyAIayECIQELCyACQRBxBEAgAyABLAAAOgAAIAMgASwAAToAASADIAEsAAI6AAIgAyABLAADOgADIAMgASwABDoABCADIAEsAAU6AAUgAyABLAAGOgAGIAMgASwABzoAByADIAEsAAg6AAggAyABLAAJOgAJIAMgASwACjoACiADIAEsAAs6AAsgAyABLAAMOgAMIAMgASwADToADSADIAEsAA46AA4gAyABLAAPOgAPIANBEGohAyABQRBqIQELIAJBCHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgAyABLAAEOgAEIAMgASwABToABSADIAEsAAY6AAYgAyABLAAHOgAHIANBCGohAyABQQhqIQELIAJBBHEEQCADIAEsAAA6AAAgAyABLAABOgABIAMgASwAAjoAAiADIAEsAAM6AAMgA0EEaiEDIAFBBGohAQsgAkECcQRAIAMgASwAADoAACADIAEsAAE6AAEgA0ECaiEDIAFBAmohAQsgAkEBcUUEQCAADwsgAyABLAAAOgAAIAALwAMBBn8gACABRgRAIAAPCyABIAJqIABLIAAgAmoiBSABS3FFBEAgACABIAIQOhogAA8LIAEgACIDc0EDcUUhBCADIAFJBH8gBARAIANBA3EEQAJAA0AgAgRAIAJBf2ohAiABQQFqIQQgAyABLAAAOgAAIANBAWoiA0EDcQRAIAQhAQwCBSAEIQEMAwsACwsgAA8LCyACQQNLBEAgAkF8aiIGQXxxIgdBBGoiCCADaiACIQQgASECA0AgAyACKAIANgIAIANBBGohAyACQQRqIQIgBEF8aiIEQQNLDQALIQMgBiAHayECIAEgCGohAQsLIAJFBEAgAA8LA0AgAUEBaiEEIANBAWohBSADIAEsAAA6AAAgAkF/aiICBEAgBSEDIAQhAQwBCwsgAAUgBARAIAVBA3EEQAJAA0AgAgRAIAMgAkF/aiICaiIAIAEgAmosAAA6AAAgAEEDcUUNAgwBCwsgAw8LCyACQQNLBEAgAiEAA0AgAyAAQXxqIgBqIAAgAWooAgA2AgAgAEEDSw0ACyACQQNxIQILCyACRQRAIAMPCwNAIAMgAkF/aiICaiABIAJqLAAAOgAAIAINAAsgAwsLgwMCA38BfgJAIAJFDQAgACACQX9qaiABQf8BcSIDOgAAIAAgAzoAACACQQNJDQAgACACQX5qaiADOgAAIAAgAzoAASAAIAJBfWpqIAM6AAAgACADOgACIAJBB0kNACAAIAJBfGpqIAM6AAAgACADOgADIAJBCUkNACAAQQAgAGtBA3EiBWoiBCABQf8BcUGBgoQIbCIDNgIAIAQgAiAFa0F8cSICaiIBQXxqIAM2AgAgAkEJSQ0AIAQgAzYCBCAEIAM2AgggAUF0aiADNgIAIAFBeGogAzYCACACQRlJDQAgBCADNgIMIAQgAzYCECAEIAM2AhQgBCADNgIYIAFBZGogAzYCACABQWhqIAM2AgAgAUFsaiADNgIAIAFBcGogAzYCACACIARBBHFBGHIiAmsiAUEfTQ0AIAOtIgYgBkIghoQhBiACIARqIQIDQCACIAY3AwAgAiAGNwMIIAIgBjcDECACIAY3AxggAkEgaiECIAFBYGoiAUEfSw0ACyAADwsgAAsVACMAQbDOAGokASMBQYCAwAJqJAILC6xNAQAjAAulTQAAAADZzr9BAADAQQAAyEGPwu9BAADwQQAASEKPwm9CAABwQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgQCQIDChEYIBkSCwQFDBMaISgwKSIbFA0GBw4VHCMqMTg5MiskHRYPFx4lLDM6OzQtJh8nLjU8PTYvNz4/CBATFhobHSIQEBYYGx0iJRMWGhsdIiImFhYaGx0iJSgWGhsdICMoMBobHSAjKDA6GhsdIiYuOEUbHSMmLjhFUwMAAAAGAAAAAAAAAAkAAAAMAAAAAAAAAAAAAAAAAAAAAQAAAA8AAAASAAAAAAAAABUAAAAYAAAAAAAAABsAAAAeAAAAAAAAACEAAAAkAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAgAAACcAAAAqAAAAAAAAAC0AAAAwAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAABAAAADMAAAA2AAAAAAAAADkAAAA8AAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAABgAAAD8AAABCAAAAAAAAAEUAAABIAAAAAAAAAEsAAABOAAAAAAAAAFEAAABUAAAAAAAAAP////9XAAAAAAAAAP////9aAAAAAAAAAF0AAABgAAAAAAAAAGMAAABmAAAAAAAAAGkAAABsAAAAAAAAAG8AAAByAAAAAAAAAAAAAAAAAAAACQAAAAAAAAAAAAAACAAAAHUAAAB4AAAAAAAAAHsAAAB+AAAAAAAAAIEAAACEAAAAAAAAAIcAAACKAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAAAAAAAAAAADAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAI0AAAD/////AAAAAP////+QAAAAAAAAAJMAAACWAAAAAAAAAJkAAACcAAAAAAAAAJ8AAACiAAAAAAAAAKUAAACoAAAAAAAAAKsAAACuAAAAAAAAALEAAAC0AAAAAAAAALcAAAD/////AAAAAP////+6AAAAAAAAAL0AAADAAAAAAAAAAMMAAADGAAAAAAAAAMkAAADMAAAAAAAAAM8AAADSAAAAAAAAANUAAADYAAAAAAAAANsAAADeAAAAAAAAAAAAAAAAAAAAFQAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAEwAAAAAAAAAAAAAAEgAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAIwAAAAAAAAAAAAAAIgAAAAAAAAAAAAAAIQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAHQAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAGwAAAAAAAAAAAAAAGgAAAAAAAAAAAAAAGQAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAFgAAAAAAAAAAAAAAAAAAAAMAAAAGAAAAAAAAAP////8JAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEQAAAAMAAAAGAAAAAAAAAAkAAAAMAAAAAAAAAAAAAAAAAAAACgAAAA8AAAASAAAAAAAAAAAAAAAAAAAAAgAAABUAAAAYAAAAAAAAAAAAAAAAAAAACAAAABsAAAAeAAAAAAAAACEAAAAkAAAAAAAAAP////8nAAAAAAAAAAAAAAAAAAAAEgAAAAAAAAAAAAAAGgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEQAAAAAAAAAAAAAABgAAAAMAAAAAAAAACQAAABIAAAAAAAAADAAAAA8AAAAAAAAAGAAAACEAAAAAAAAAJAAAACcAAAAAAAAAGwAAABUAAAAAAAAAHgAAACoAAAAAAAAAPAAAADkAAAAAAAAANgAAADAAAAAAAAAARQAAADMAAAAAAAAAUQAAAEsAAAAAAAAAPwAAAFQAAAAAAAAALQAAAEIAAAAAAAAASAAAAE4AAAAAAAAAAAAAAAAAAAA8AAAAaQAAAHgAAAAAAAAAhAAAAJAAAAAAAAAAcgAAAGwAAAAAAAAAfgAAAI0AAAAAAAAAVwAAAF0AAAAAAAAAdQAAAGAAAAAAAAAAAAAAAAAAAAAgAAAAhwAAAIoAAAAAAAAAYwAAAHsAAAAAAAAAgQAAAGYAAAAAAAAAAAAAAAAAAAAEAAAAWgAAAG8AAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAsAAAAlgAAAKgAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA+AAAAtwAAALEAAAAAAAAAnAAAALQAAAAAAAAAAAAAAAAAAAABAAAApQAAAKIAAAAAAAAAAAAAAAAAAAA9AAAAAAAAAAAAAAA4AAAAqwAAAK4AAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAoAAAAmQAAALoAAAAAAAAAAAAAAAAAAAAwAAAAwAAAAL0AAAAAAAAAkwAAAJ8AAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAMAAAA8AAAAPkAAAAAAAAAAAAAAAAAAAA/AAAA5wAAAOEAAAAAAAAAwwAAANsAAAAAAAAA/AAAAMYAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAADAAAAzwAAAAUBAAAAAAAA8wAAAO0AAAAAAAAAzAAAANUAAAAAAAAA0gAAAOoAAAAAAAAAyQAAAOQAAAAAAAAA2AAAAN4AAAAAAAAAAgEAAP8AAAAAAAAACAEAAPYAAAAAAAAA/////xoBAAAAAAAAHQEAACMBAAAAAAAAAAAAAAAAAAAhAAAAAAAAAAAAAAAJAAAAPgEAAEoBAAAAAAAAMgEAAFwBAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAKAAAAFwEAAAsBAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAASAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAiAAAAUwEAAGUBAAAAAAAANQEAADgBAAAAAAAADgEAABQBAAAAAAAARwEAAEEBAAAAAAAAXwEAAGIBAAAAAAAALwEAACkBAAAAAAAAJgEAACABAAAAAAAALAEAABEBAAAAAAAAVgEAAFkBAAAAAAAAOwEAAEQBAAAAAAAAUAEAAE0BAAAAAAAAawEAAHcBAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAVAAAAdAEAAG4BAAAAAAAAaAEAAHEBAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAjAAAAAAAAAAAAAAANAAAAAAAAAAAAAAAyAAAAAAAAAAAAAAAxAAAAAAAAAAAAAAA6AAAAAAAAAAAAAAAlAAAAAAAAAAAAAAAZAAAAAAAAAAAAAAAtAAAAAAAAAAAAAAA5AAAAAAAAAAAAAAAaAAAAAAAAAAAAAAAdAAAAAAAAAAAAAAAmAAAAAAAAAAAAAAA1AAAAAAAAAAAAAAAXAAAAAAAAAAAAAAArAAAAAAAAAAAAAAAuAAAAAAAAAAAAAAAqAAAAAAAAAAAAAAAWAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAzAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAnAAAAAAAAAAAAAAAvAAAAAAAAAAAAAAA3AAAAAAAAAAAAAAAbAAAAAAAAAAAAAAA7AAAAAAAAAAAAAAAfAAAAAAAAAAAAAAADAAAABgAAAAAAAAAMAAAACQAAAAAAAAAAAAAAAAAAAAAAAAASAAAADwAAAAAAAAAYAAAAFQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAEAAAAbAAAAHgAAAAAAAAAkAAAAIQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAP7///8qAAAALQAAAAAAAAAwAAAAJwAAAAAAAAA8AAAANgAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAP3///8zAAAAOQAAAAAAAAD/////RQAAAAAAAABRAAAASwAAAAAAAABOAAAAPwAAAAAAAABIAAAAQgAAAAAAAABgAAAAVAAAAAAAAABXAAAAXQAAAAAAAAD/////YwAAAAAAAABsAAAAaQAAAAAAAAAAAAAAAAAAAPz///9aAAAAZgAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAPn///8AAAAAAAAAAAUAAABvAAAAewAAAAAAAAAAAAAAAAAAAPv///8AAAAAAAAAAAcAAAByAAAAeAAAAAAAAAB+AAAAdQAAAAAAAAAAAAAAAAAAAPr///8AAAAAAAAAAAYAAACZAAAAogAAAAAAAACWAAAAkwAAAAAAAACHAAAAigAAAAAAAACcAAAAjQAAAAAAAACBAAAAnwAAAAAAAACEAAAAkAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAPj///+rAAAAxgAAAAAAAAAAAAAAAAAAAPf///+0AAAAwAAAAAAAAACoAAAAtwAAAAAAAAClAAAAugAAAAAAAACuAAAAvQAAAAAAAAAAAAAAAAAAAPb///+xAAAAwwAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAsAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAPD///8AAAAAAAAAAPT///8AAAAAAAAAAPL///8AAAAAAAAAAPH///8AAAAAAAAAAPX///8AAAAAAAAAAPP///8AAAAAAAAAAAAAAAAGAAAAAwAAAAAAAAASAAAADwAAAAAAAAAJAAAADAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAIAAAAbAAAAGAAAAAAAAAAVAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAIQAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAMAAAAnAAAAKgAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAYAAAAwAAAALQAAAAAAAAAzAAAA/////wAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAYAAAADAAAAAAAAAAwAAAAJAAAAAAAAABIAAAAPAAAAAAAAABgAAAAVAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAB4AAAAbAAAAAAAAAAAAAAAAAAAAAwAAACQAAAAhAAAAAAAAAAAAAAAAAAAABAAAACoAAAAnAAAAAAAAAAAAAAAAAAAABQAAADAAAAAtAAAAAAAAAAAAAAAAAAAABgAAADMAAAD/////AAAAAAAAAAAAAAAABwAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAwAAAAYAAAAAAAAADAAAAAkAAAAAAAAAAAAAAAAAAAABAAAAFQAAABgAAAAAAAAAEgAAAA8AAAAAAAAAJwAAABsAAAAAAAAAIQAAAB4AAAAAAAAAKgAAACQAAAAAAAAAAAAAAAAAAAABAQAAPAAAAEIAAAAAAAAANgAAAD8AAAAAAAAAMAAAADkAAAAAAAAAAAAAAAAAAAABAgAAMwAAAC0AAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAADAAAAUQAAAEsAAAAAAAAAVwAAAF0AAAAAAAAASAAAAE4AAAAAAAAAYAAAAFoAAAAAAAAAAAAAAAAAAAABBAAARQAAAFQAAAAAAAAAAAAAAAAAAAABAwAAAAAAAAAAAAACAQAAAAAAAAAAAAABBwAAAAAAAAAAAAD//wAAAAAAAAAAAAABBgAAbwAAAGwAAAAAAAAAAAAAAAAAAAABBQAAaQAAAGYAAAAAAAAAdQAAAHIAAAAAAAAAYwAAAH4AAAAAAAAAeAAAAHsAAAAAAAAAnAAAAJYAAAAAAAAAogAAAJ8AAAAAAAAAkAAAAJMAAAAAAAAAgQAAAIcAAAAAAAAAigAAAIQAAAAAAAAAAAAAAAAAAAABCAAAAAAAAAAAAAAEAAAAAAAAAAAAAAACAgAAAAAAAAAAAAABCQAAmQAAAI0AAAAAAAAApQAAAKsAAAAAAAAAtAAAAKgAAAAAAAAAsQAAAK4AAAAAAAAAtwAAALoAAAAAAAAAAAAAAAAAAAABCgAAAAAAAAAAAAABDQAAAAAAAAAAAAAGAAAAAAAAAAAAAAADAQAAAAAAAAAAAAAFAAAAAAAAAAAAAAACAwAAAAAAAAAAAAABCwAAAAAAAAAAAAABDAAA5AAAAOEAAAAAAAAAyQAAANIAAAAAAAAA2wAAANUAAAAAAAAA6gAAAN4AAAAAAAAA2AAAAOcAAAAAAAAAzwAAAMAAAAAAAAAAzAAAAL0AAAAAAAAAxgAAAMMAAAAAAAAA8wAAAAUBAAAAAAAAEQEAAPAAAAAAAAAA9gAAAO0AAAAAAAAA+QAAAAIBAAAAAAAAFwEAABQBAAAAAAAA/AAAAP8AAAAAAAAADgEAABoBAAAAAAAACAEAAAsBAAAAAAAAAAAAAAAAAAADAgAAAAAAAAAAAAAEAQAAAAAAAAAAAAAHAAAAAAAAAAAAAAACBAAAAAAAAAAAAAACBQAAAAAAAAAAAAABEAAAAAAAAAAAAAABDwAAAAAAAAAAAAABDgAAOwEAAEEBAAAAAAAATQEAAFYBAAAAAAAAOAEAACMBAAAAAAAAdwEAAGUBAAAAAAAAIAEAACYBAAAAAAAA/////3EBAAAAAAAAHQEAAC8BAAAAAAAAPgEAAGsBAAAAAAAAKQEAADIBAAAAAAAAUwEAADUBAAAAAAAAUAEAAFwBAAAAAAAASgEAACwBAAAAAAAAdAEAAFkBAAAAAAAAXwEAAG4BAAAAAAAARwEAAGIBAAAAAAAAaAEAAEQBAAAAAAAAfQEAAJgBAAAAAAAAoQEAAKQBAAAAAAAAhgEAAHoBAAAAAAAAswEAALYBAAAAAAAAgAEAAIMBAAAAAAAAAAAAAAAAAAACCAAAjAEAAJIBAAAAAAAA0QEAAM4BAAAAAAAAAAAAAAAAAAAIAAAAmwEAAI8BAAAAAAAArQEAALABAAAAAAAAxQEAAJ4BAAAAAAAAqgEAAKcBAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAJAAAAAAAAAAAAAAALAAAAAAAAAAAAAAABFQAAAAAAAAAAAAACBgAAAAAAAAAAAAADAwAAAAAAAAAAAAABFAAAAAAAAAAAAAACBwAAAAAAAAAAAAABEQAAAAAAAAAAAAABEgAAAAAAAAAAAAABEwAAvAEAAMgBAAAAAAAAAAAAAAAAAAADBAAAywEAAMIBAAAAAAAAAAAAAAAAAAAFAQAAiQEAAJUBAAAAAAAAAAAAAAAAAAAEAgAAvwEAALkBAAAAAAAABAIAAAcCAAAAAAAA5gEAANoBAAAAAAAA/gEAAOMBAAAAAAAA+AEAAPIBAAAAAAAA1wEAABkCAAAAAAAA+wEAAPUBAAAAAAAACgIAAAECAAAAAAAAFgIAABMCAAAAAAAA1AEAAN0BAAAAAAAA7AEAAO8BAAAAAAAAJQIAACICAAAAAAAADQIAABACAAAAAAAAAAAAAAAAAAAHAQAAAAAAAAAAAAACCgAAAAAAAAAAAAACCQAAAAAAAAAAAAABFgAAAAAAAAAAAAABFwAAAAAAAAAAAAABGQAAAAAAAAAAAAABGAAAAAAAAAAAAAADBQAAAAAAAAAAAAAEAwAAAAAAAAAAAAANAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAFAgAAAAAAAAAAAAABGgAAAAAAAAAAAAAGAQAAHAIAAB8CAAAAAAAA4AEAAOkBAAAAAAAATAIAAFUCAAAAAAAAAAAAAAAAAAAbAAAAYQIAACsCAAAAAAAAXgIAAFsCAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAWAAAATwIAAG0CAAAAAAAAAAAAAAAAAAASAAAAPQIAAEACAAAAAAAANAIAADoCAAAAAAAAAAAAAAAAAAAUAAAAKAIAAEYCAAAAAAAAAAAAAAAAAAAVAAAALgIAAEMCAAAAAAAAAAAAAAAAAAAXAAAAZAIAAFICAAAAAAAAAAAAAAAAAAAZAAAAAAAAAAAAAAAYAAAAWAIAAGcCAAAAAAAAAAAAAAAAAAAfAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAdAAAAAAAAAAAAAAAaAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAQAAAANwIAAGoCAAAAAAAAMQIAAEkCAAAAAAAAjgIAAHkCAAAAAAAAAAAAAAAAAAAlAAAAhQIAAIgCAAAAAAAAAAAAAAAAAAAkAAAAdgIAAHwCAAAAAAAAAAAAAAAAAAAiAAAAfwIAAHMCAAAAAAAAlwIAAJoCAAAAAAAAkQIAAHACAAAAAAAAiwIAAIICAAAAAAAAnQIAAJQCAAAAAAAAAAAAAAAAAAAjAAAAAAAAAAAAAAALAQAAAAAAAAAAAAAoAAAAAAAAAAAAAAAMAQAAAAAAAAAAAAAKAQAAAAAAAAAAAAAgAAAAAAAAAAAAAAAIAQAAAAAAAAAAAAAJAQAAAAAAAAAAAAAmAAAAAAAAAAAAAAANAQAAAAAAAAAAAAAOAQAAAAAAAAAAAAAhAAAAAAAAAAAAAAAnAAAAAAAAAAAAAAABHwAAAAAAAAAAAAABGwAAAAAAAAAAAAABHgAAAAAAAAAAAAACEAAAAAAAAAAAAAABHQAAAAAAAAAAAAABHAAAAAAAAAAAAAAPAQAAAAAAAAAAAAASAQAAAAAAAAAAAAARAQAAAAAAAAAAAAAQAQAAAAAAAAAAAAADBgAAAAAAAAAAAAACCwAAAAAAAAAAAAACDgAAAAAAAAAAAAACDQAAAAAAAAAAAAACDAAAAAAAAAAAAAACDwAAICwqJiAZEQksPjo0LCMYDCo6NzEqIRcMJjQxLCYeFAogLComIBkRCRkjIR4ZFA4HERgXFBEOCQUJDAwKCQcFAgAAAAAAAAC/AAAAvwAAAL8AAAC/AAAAvwAAAL8AAIC/AACAvwAAgL8AAIC/AADAvwAAwL8AAADAAAAAwAAAIMAAACDAAABAwAAAYMAAAGDAAACAwAAAkMAAAKDAAACwwAAA0MAAAODAAAAAwQAACMEAABjBAAAowQAAQMEAAFDBAABowQAAeMEAAIzBAACYwQAApMEAALTBAADEwQAA1MEAAOjBAAD8wQAACMIAABLCAAAewgAAKsIAADbCAABCwgAAUMIAAF7CAABqwgAAesIAAITCAACLwgAAk8IAAJrCAAChwgAAqcIAALDCAAC3wgAAvsIAAMTCAADKwgAA0MIAANVCAADaQgAA3kIAAOFCAADjQgAA5EIAAORCAADjQgAA4EIAAN1CAADXQgAA0EIAAMhCAAC9QgAAsUIAAKNCAACSQgAAfkIAAFRCAAAmQgAA5EEAAGhBAACAvwAAkMEAABDCAABewgAAmcIAAMXCAAD0wgAAE8MAgC3DAIBIwwCAZcMAwIHDAECRwwBAocMAwLHDAMDCwwAA1MMAwOXDAMD3wwAABcQAIA7EAEAXxABgIMQAgCnEAIAyxABAO8QA4EPEAEBMxABAVMQA4FvEACBjxADAacQA4G/EAEB1xAAgesQAAH7EAJCAxACwgcQAUILEAHCCxAAAgsQA8IDEAKB+RAAAekQAAHREAKBsRADAY0QAYFlEAIBNRADgP0QAwDBEAAAgRABgDUQAgPJDAIDGQwBAl0MAAElDAAC5QgAAtMEAABDDAECIwwCAy8MA4AjEAIAtxACAU8QAwHrEAKCRxABwpsQAwLvEAHDRxACQ58QA8P3EAEgKxQCgFcUACCHFAGgsxQC4N8UA6ELFAOhNxQC4WMUAOGPFAGhtxQAwd8UARIDFAKyExQDMiMUAmIzFAAyQxQAgk8UAxJXFAPyXxQC4mcUA8JrFAJybxQC4m8UAPJvFAByaxQBYmMUA4JXFALSSxQDMjsUAIIrFALCExQDgfMUAwG7FAPBexQBwTUUAODpFAEAlRQCIDkUAAOxEAHC3RACgfkQAQAdEAAAMQgCA+cMAoITEAEDOxACoDcUA0DXFAJBfxQBwhcUA3JvFAPyyxQDQysUAUOPFAGz8xQAOC8YALBjGAIolxgAiM8YA7EDGAOROxgACXcYAQGvGAJZ5xgD/g8YAOIvGAHGSxgComcYA2KDGAP6nxgAVr8YAGbbGAAa9xgDZw8YAjcrGAB7RxgCK18YAyt3GAN3jxgC+6cYAae/GANz0xgAT+sYACv/GAN8Bx4AWBMcAKgbHgBcIxwDfCccAfgvHgPQMx4BBDseAYw/HAFoQx4AkEccAwxHHADQSxwB4EscAjxJHAHgSRwA0EkcAwxFHgCQRRwBaEEeAYw9HgEEOR4D0DEcAfgtHAN8JR4AXCEcAKgZHgBYERwDfAUcACv9GABP6RgDc9EYAae9GAL7pRgDd40YAyt1GAIrXRgAe0UYAjcpGANnDRgAGvUYAGbZGABWvRgD+p0YA2KBGAKiZRgBxkkYAOItGAP+DRgCWeUYAQGtGAAJdRgDkTkYA7EBGACIzRgCKJUYALBhGAA4LRgBs/EUAUONFANDKRQD8skUA3JtFAHCFRQCQX0UA0DVFAKgNRQBAzkQAoIREAID5QwAADMIAQAfEAKB+xABwt8QAAOzEAIgOxQBAJcUAODrFAHBNRQDwXkUAwG5FAOB8RQCwhEUAIIpFAMyORQC0kkUA4JVFAFiYRQAcmkUAPJtFALibRQCcm0UA8JpFALiZRQD8l0UAxJVFACCTRQAMkEUAmIxFAMyIRQCshEUARIBFADB3RQBobUUAOGNFALhYRQDoTUUA6EJFALg3RQBoLEUACCFFAKAVRQBICkUA8P1EAJDnRABw0UQAwLtEAHCmRACgkUQAwHpEAIBTRACALUQA4AhEAIDLQwBAiEMAABBDAAC0QQAAucIAAEnDAECXwwCAxsMAgPLDAGANxAAAIMQAwDDEAOA/xACATcQAYFnEAMBjxACgbMQAAHTEAAB6xACgfkQA8IBEAACCRABwgkQAUIJEALCBRACQgEQAAH5EACB6RABAdUQA4G9EAMBpRAAgY0QA4FtEAEBURABATEQA4ENEAEA7RACAMkQAgClEAGAgRABAF0QAIA5EAAAFRADA90MAwOVDAADUQwDAwkMAwLFDAEChQwBAkUMAwIFDAIBlQwCASEMAgC1DAAATQwAA9EIAAMVCAACZQgAAXkIAABBCAACQQQAAgD8AAGjBAADkwQAAJsIAAFTCAAB+wgAAksIAAKPCAACxwgAAvcIAAMjCAADQwgAA18IAAN3CAADgwgAA48IAAOTCAADkwgAA48IAAOHCAADewgAA2sIAANVCAADQQgAAykIAAMRCAAC+QgAAt0IAALBCAACpQgAAoUIAAJpCAACTQgAAi0IAAIRCAAB6QgAAakIAAF5CAABQQgAAQkIAADZCAAAqQgAAHkIAABJCAAAIQgAA/EEAAOhBAADUQQAAxEEAALRBAACkQQAAmEEAAIxBAAB4QQAAaEEAAFBBAABAQQAAKEEAABhBAAAIQQAAAEEAAOBAAADQQAAAsEAAAKBAAACQQAAAgEAAAGBAAABgQAAAQEAAACBAAAAgQAAAAEAAAABAAADAPwAAwD8AAIA/AACAPwAAgD8AAIA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/IAAwADgAQABQAGAAcACAAKAAwADgAAABQAGAAQgAEAAYACAAKAAwADgAQABQAGAAcACAAJAAoAAAAAAAAAAAAESsgLsAfQAAIlbAXYA+AAAAAAEBAQICAgICAgICAgAAAAAAAAAAAQEBAgICAgIAAERENDQ0NDQ0NDQ0NAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0NDQkJCQkJCQkIxMTExMTExMTExMTEgICAgICAgAABFRUVFNDQ0NDQ0NCQkJCQkJCQkJCQkJCQkJCQkJCQAAAABAhEAAAAAAAAAAAAAAAAAAQIDBAUGEQAAAAAAAAAAAAECAwQFBgcICQoLDA0OEQABAwUGBwgJCgsMDQ4PEBEAAQIEBQYHCAkKCwwNDg8RAAECAwQFBgcICQoLDA0ODwMAAQUFAAEHBwAAAwkAAQoPAAAEHwAABT8AAAZ/AAAH/wAACP8BAAn/AwAK/wcAC/8PAAz/HwAN/z8ADv9/AA///wAQAAAAAAAAAAAAAAAAAAAAAupflgEwikIBCAgMW1tbXltec2l6ZSA+IDAAL2hvbWUvZG9taW5pYy9wcm9qZWN0cy9lbXNkay9mYXN0Y29tcC9lbXNjcmlwdGVuLy9zeXN0ZW0vbGliL2VtbWFsbG9jLmNwcABnZXRGcmVlTGlzdEluZGV4AE1JTl9GUkVFTElTVF9JTkRFWCA8PSBpbmRleCAmJiBpbmRleCA8IE1BWF9GUkVFTElTVF9JTkRFWABnZXRBZnRlcihyZWdpb24pIDw9IHNicmsoMCkAZW1tYWxsb2NfbWFsbG9jAHJlZ2lvbi0+Z2V0VXNlZCgpAGdldFBheWxvYWQAKGNoYXIqKWV4dHJhUHRyID09IChjaGFyKilwdHIgKyBzYnJrU2l6ZQBhbGxvY2F0ZVJlZ2lvbgAhbGFzdFJlZ2lvbgAhZmlyc3RSZWdpb24AZmlyc3RSZWdpb24AcHRyID09IGdldEFmdGVyKGxhc3RSZWdpb24pAGV4dGVuZExhc3RSZWdpb24AYWRkVG9GcmVlTGlzdABnZXRCaWdFbm91Z2hGcmVlTGlzdEluZGV4AHBheWxvYWRTaXplID49IHNpemUAcG9zc2libHlTcGxpdFJlbWFpbmRlcgBleHRyYSA+PSBNSU5fUkVHSU9OX1NJWkUAdG90YWxTcGxpdFNpemUgPj0gTUlOX1JFR0lPTl9TSVpFAG1lcmdlSW50b0V4aXN0aW5nRnJlZVJlZ2lvbgByZWdpb24gPT0gbGFzdFJlZ2lvbgBlbW1hbGxvY19yZWFsbG9j'
  ) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/video-element.js

  function video_element_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (video_element_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      video_element_typeof(obj)
    )
  }
  function video_element_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function video_element_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        video_element_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function video_element_createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      video_element_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) video_element_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function video_element_defineProperty(obj, key, value) {
    key = video_element_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function video_element_toPropertyKey(arg) {
    var key = video_element_toPrimitive(arg, 'string')
    return video_element_typeof(key) === 'symbol' ? key : String(key)
  }
  function video_element_toPrimitive(input, hint) {
    if (video_element_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (video_element_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  var VideoElement = /*#__PURE__*/ (function () {
    function VideoElement(element) {
      video_element_classCallCheck(this, VideoElement)
      var url = element.dataset.url
      if (!url) {
        throw 'VideoElement has no `data-url` attribute'
      }

      // Setup the div container, canvas and play button
      function addStyles(element, styles) {
        for (var name in styles) {
          element.style[name] = styles[name]
        }
      }
      this.container = element
      addStyles(this.container, {
        display: 'inline-block',
        position: 'relative',
        minWidth: '80px',
        minHeight: '80px'
      })
      this.canvas = document.createElement('canvas')
      this.canvas.width = 960
      this.canvas.height = 540
      addStyles(this.canvas, {
        display: 'block',
        width: '100%'
      })
      this.container.appendChild(this.canvas)
      this.playButton = document.createElement('div')
      this.playButton.innerHTML = VideoElement.PLAY_BUTTON
      addStyles(this.playButton, {
        zIndex: 2,
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        maxWidth: '75px',
        maxHeight: '75px',
        margin: 'auto',
        opacity: '0.7',
        cursor: 'pointer'
      })
      this.container.appendChild(this.playButton)

      // Parse the data-options - we try to decode the values as json. This way
      // we can get proper boolean and number values. If JSON.parse() fails,
      // treat it as a string.
      var options = {
        canvas: this.canvas
      }
      for (var option in element.dataset) {
        try {
          options[option] = JSON.parse(element.dataset[option])
        } catch (err) {
          options[option] = element.dataset[option]
        }
      }

      // Create the player instance
      this.player = new Player(url, options)
      element.playerInstance = this.player

      // Setup the poster element, if any
      if (
        options.poster &&
        !options.autoplay &&
        !this.player.options.streaming
      ) {
        options.decodeFirstFrame = false
        this.poster = new Image()
        this.poster.src = options.poster
        this.poster.addEventListener('load', this.posterLoaded)
        addStyles(this.poster, {
          display: 'block',
          zIndex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        })
        this.container.appendChild(this.poster)
      }

      // Add the click handler if this video is pausable
      if (!this.player.options.streaming) {
        this.container.addEventListener('click', this.onClick.bind(this))
      }

      // Hide the play button if this video immediately begins playing
      if (options.autoplay || this.player.options.streaming) {
        this.playButton.style.display = 'none'
      }

      // Set up the unlock audio buton for iOS devices. iOS only allows us to
      // play audio after a user action has initiated playing. For autoplay or
      // streaming players we set up a muted speaker icon as the button. For all
      // others, we can simply use the play button.
      if (this.player.audioOut && !this.player.audioOut.unlocked) {
        var unlockAudioElement = this.container
        if (options.autoplay || this.player.options.streaming) {
          this.unmuteButton = document.createElement('div')
          this.unmuteButton.innerHTML = VideoElement.UNMUTE_BUTTON
          addStyles(this.unmuteButton, {
            zIndex: 2,
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            width: '75px',
            height: '75px',
            margin: 'auto',
            opacity: '0.7',
            cursor: 'pointer'
          })
          this.container.appendChild(this.unmuteButton)
          unlockAudioElement = this.unmuteButton
        }
        this.unlockAudioBound = this.onUnlockAudio.bind(
          this,
          unlockAudioElement
        )
        unlockAudioElement.addEventListener(
          'touchstart',
          this.unlockAudioBound,
          false
        )
        unlockAudioElement.addEventListener(
          'click',
          this.unlockAudioBound,
          true
        )
      }
    }
    video_element_createClass(VideoElement, [
      {
        key: 'onUnlockAudio',
        value: function onUnlockAudio(element, ev) {
          if (this.unmuteButton) {
            ev.preventDefault()
            ev.stopPropagation()
          }
          this.player.audioOut.unlock(
            function () {
              if (this.unmuteButton) {
                this.unmuteButton.style.display = 'none'
              }
              element.removeEventListener('touchstart', this.unlockAudioBound)
              element.removeEventListener('click', this.unlockAudioBound)
            }.bind(this)
          )
        }
      },
      {
        key: 'onClick',
        value: function onClick(ev) {
          if (this.player.isPlaying) {
            this.player.pause()
            this.playButton.style.display = 'block'
          } else {
            this.player.play()
            this.playButton.style.display = 'none'
            if (this.poster) {
              this.poster.style.display = 'none'
            }
          }
        }
      }
    ])
    return VideoElement
  })()
  video_element_defineProperty(
    VideoElement,
    'PLAY_BUTTON',
    '<svg style="max-width: 75px; max-height: 75px;" ' +
      'viewBox="0 0 200 200" alt="Play video">' +
      '<circle cx="100" cy="100" r="90" fill="none" ' +
      'stroke-width="15" stroke="#fff"/>' +
      '<polygon points="70, 55 70, 145 145, 100" fill="#fff"/>' +
      '</svg>'
  )
  video_element_defineProperty(
    VideoElement,
    'UNMUTE_BUTTON',
    '<svg style="max-width: 75px; max-height: 75px;" viewBox="0 0 75 75">' +
      '<polygon class="audio-speaker" stroke="none" fill="#fff" ' +
      'points="39,13 22,28 6,28 6,47 21,47 39,62 39,13"/>' +
      '<g stroke="#fff" stroke-width="5">' +
      '<path d="M 49,50 69,26"/>' +
      '<path d="M 69,50 49,26"/>' +
      '</g>' +
      '</svg>'
  ) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/modules/jsmpeg.js

  function jsmpeg_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (jsmpeg_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      jsmpeg_typeof(obj)
    )
  }
  function jsmpeg_classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function jsmpeg_defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(
        target,
        jsmpeg_toPropertyKey(descriptor.key),
        descriptor
      )
    }
  }
  function jsmpeg_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) jsmpeg_defineProperties(Constructor.prototype, protoProps)
    if (staticProps) jsmpeg_defineProperties(Constructor, staticProps)
    Object.defineProperty(Constructor, 'prototype', { writable: false })
    return Constructor
  }
  function jsmpeg_defineProperty(obj, key, value) {
    key = jsmpeg_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function jsmpeg_toPropertyKey(arg) {
    var key = jsmpeg_toPrimitive(arg, 'string')
    return jsmpeg_typeof(key) === 'symbol' ? key : String(key)
  }
  function jsmpeg_toPrimitive(input, hint) {
    if (jsmpeg_typeof(input) !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (jsmpeg_typeof(res) !== 'object') return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }
  /*! jsmpeg v1.0 | (c) Dominic Szablewski | MIT license */

  // This sets up the JSMpeg "Namespace". The object is empty apart from the Now()
  // utility function and the automatic CreateVideoElements() after DOMReady.
  var JSMpeg = /*#__PURE__*/ (function () {
    function JSMpeg() {
      jsmpeg_classCallCheck(this, JSMpeg)
    }
    jsmpeg_createClass(JSMpeg, null, [
      {
        key: 'CreateVideoElements',
        value:
          // The Player sets up the connections between source, demuxer, decoders,
          // renderer and audio output. It ties everything together, is responsible
          // of scheduling decoding and provides some convenience methods for
          // external users.

          // A Video Element wraps the Player, shows HTML controls to start/pause
          // the video and handles Audio unlocking on iOS. VideoElements can be
          // created directly in HTML using the <div class="jsmpeg"/> tag.

          // The BitBuffer wraps a Uint8Array and allows reading an arbitrary number
          // of bits at a time. On writing, the BitBuffer either expands its
          // internal buffer (for static files) or deletes old data (for streaming).

          // A Source provides raw data from HTTP, a WebSocket connection or any
          // other mean. Sources must support the following API:
          //   .connect(destinationNode)
          //   .write(buffer)
          //   .start() - start reading
          //   .resume(headroom) - continue reading; headroom to play pos in seconds
          //   .established - boolean, true after connection is established
          //   .completed - boolean, true if the source is completely loaded
          //   .progress - float 0-1

          // A Demuxer may sit between a Source and a Decoder. It separates the
          // incoming raw data into Video, Audio and other Streams. API:
          //   .connect(streamId, destinationNode)
          //   .write(buffer)
          //   .currentTime – float, in seconds
          //   .startTime - float, in seconds

          // A Decoder accepts an incoming Stream of raw Audio or Video data, buffers
          // it and upon `.decode()` decodes a single frame of data. Video decoders
          // call `destinationNode.render(Y, Cr, CB)` with the decoded pixel data;
          // Audio decoders call `destinationNode.play(left, right)` with the decoded
          // PCM data. API:
          //   .connect(destinationNode)
          //   .write(pts, buffer)
          //   .decode()
          //   .seek(time)
          //   .currentTime - float, in seconds
          //   .startTime - float, in seconds

          // A Renderer accepts raw YCrCb data in 3 separate buffers via the render()
          // method. Renderers typically convert the data into the RGBA color space
          // and draw it on a Canvas, but other output - such as writing PNGs - would
          // be conceivable. API:
          //   .render(y, cr, cb) - pixel data as Uint8Arrays
          //   .enabled - wether the renderer does anything upon receiving data

          // Audio Outputs accept raw Stero PCM data in 2 separate buffers via the
          // play() method. Outputs typically play the audio on the user's device.
          // API:
          //   .play(sampleRate, left, right) - rate in herz; PCM data as Uint8Arrays
          //   .stop()
          //   .enqueuedTime - float, in seconds
          //   .enabled - wether the output does anything upon receiving data

          function CreateVideoElements() {
            var elements = document.querySelectorAll('.jsmpeg')
            for (var i = 0; i < elements.length; i++) {
              new VideoElement(elements[i])
            }
          }
      }
    ])
    return JSMpeg
  })() // Automatically create players for all found <div class="jsmpeg"/> elements.
  // if (document.readyState === 'complete') {
  // 	JSMpeg.CreateVideoElements();
  // }
  // else {
  // 	document.addEventListener('DOMContentLoaded', JSMpeg.CreateVideoElements);
  // }
  jsmpeg_defineProperty(JSMpeg, 'Player', Player)
  jsmpeg_defineProperty(JSMpeg, 'VideoElement', VideoElement)
  jsmpeg_defineProperty(JSMpeg, 'BitBuffer', BitBuffer)
  jsmpeg_defineProperty(JSMpeg, 'Source', source)
  jsmpeg_defineProperty(JSMpeg, 'Demuxer', demuxer)
  jsmpeg_defineProperty(JSMpeg, 'Decoder', decoder)
  jsmpeg_defineProperty(JSMpeg, 'Renderer', renderer)
  jsmpeg_defineProperty(JSMpeg, 'AudioOutput', audio_output) // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg/index.js

  /* harmony default export */ var jsmpeg = JSMpeg // CONCATENATED MODULE: ./src/utils/fullscreen.js
  var fullscreen = {
    get element() {
      var _ref, _ref2, _ref3, _document$fullscreenE
      return (_ref =
        (_ref2 =
          (_ref3 =
            (_document$fullscreenE = document.fullscreenElement) !== null &&
            _document$fullscreenE !== void 0
              ? _document$fullscreenE
              : document.msFullscreenElement) !== null && _ref3 !== void 0
            ? _ref3
            : document.mozFullScreenElement) !== null && _ref2 !== void 0
          ? _ref2
          : document.webkitFullscreenElement) !== null && _ref !== void 0
        ? _ref
        : null
    },
    /**
     *
     * @param {HTMLElement} el
     * @param {()=>void} exitCb
     */
    request: function request(el, exitCb) {
      var _this = this
      if (el instanceof HTMLElement) {
        var _ref4, _ref5, _el$requestFullScreen
        var cb = function cb(ev) {
          console.log('fullscreen -> resize ', ev)
          el.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
          })
          if (!_this.element) {
            exitCb === null || exitCb === void 0 ? void 0 : exitCb()
            window.removeEventListener('resize', cb)
            console.log('此元素请求的全屏已退出', el)
          }
        }
        window.addEventListener('resize', cb, false)
        var requestMethod =
          (_ref4 =
            (_ref5 =
              (_el$requestFullScreen = el.requestFullScreen) !== null &&
              _el$requestFullScreen !== void 0
                ? _el$requestFullScreen
                : //W3C
                  el.webkitRequestFullScreen) !== null && _ref5 !== void 0
              ? _ref5
              : //FireFox
                el.mozRequestFullScreen) !== null && _ref4 !== void 0
            ? _ref4
            : //Chrome等
              el.msRequestFullScreen //IE11
        requestMethod === null || requestMethod === void 0
          ? void 0
          : requestMethod.call(el)
      }
    },
    exit: function exit(el) {
      var _ref6, _ref7, _document$exitFullscr
      if (!this.isFullscreen()) return
      var exitMethod =
        (_ref6 =
          (_ref7 =
            (_document$exitFullscr = document.exitFullscreen) !== null &&
            _document$exitFullscr !== void 0
              ? _document$exitFullscr
              : //W3C
                document.mozCancelFullScreen) !== null && _ref7 !== void 0
            ? _ref7
            : //FireFox
              document.webkitCancelFullScreen) !== null && _ref6 !== void 0
          ? _ref6
          : //Chrome等
            document.msExiFullscreen //IE11
      exitMethod === null || exitMethod === void 0
        ? void 0
        : exitMethod.call(document)
    },
    isFullscreen: function isFullscreen() {
      return this.element != null
    }
  }
  /* harmony default export */ var utils_fullscreen = fullscreen // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/jsmpeg-player/jsmpeg-player.vue?vue&type=script&lang=js&
  function jsmpeg_playervue_type_script_lang_js_typeof(obj) {
    '@babel/helpers - typeof'
    return (
      (jsmpeg_playervue_type_script_lang_js_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }),
      jsmpeg_playervue_type_script_lang_js_typeof(obj)
    )
  }
  function jsmpeg_playervue_type_script_lang_js_ownKeys(
    object,
    enumerableOnly
  ) {
    var keys = Object.keys(object)
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object)
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable
        })),
        keys.push.apply(keys, symbols)
    }
    return keys
  }
  function jsmpeg_playervue_type_script_lang_js_objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {}
      i % 2
        ? jsmpeg_playervue_type_script_lang_js_ownKeys(
            Object(source),
            !0
          ).forEach(function (key) {
            jsmpeg_playervue_type_script_lang_js_defineProperty(
              target,
              key,
              source[key]
            )
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : jsmpeg_playervue_type_script_lang_js_ownKeys(Object(source)).forEach(
            function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            }
          )
    }
    return target
  }
  function jsmpeg_playervue_type_script_lang_js_defineProperty(
    obj,
    key,
    value
  ) {
    key = jsmpeg_playervue_type_script_lang_js_toPropertyKey(key)
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  function jsmpeg_playervue_type_script_lang_js_toPropertyKey(arg) {
    var key = jsmpeg_playervue_type_script_lang_js_toPrimitive(arg, 'string')
    return jsmpeg_playervue_type_script_lang_js_typeof(key) === 'symbol'
      ? key
      : String(key)
  }
  function jsmpeg_playervue_type_script_lang_js_toPrimitive(input, hint) {
    if (
      jsmpeg_playervue_type_script_lang_js_typeof(input) !== 'object' ||
      input === null
    )
      return input
    var prim = input[Symbol.toPrimitive]
    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default')
      if (jsmpeg_playervue_type_script_lang_js_typeof(res) !== 'object')
        return res
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (hint === 'string' ? String : Number)(input)
  }

  /** 补零 */
  function prefixPadZero(num) {
    return (num >= 10 ? '' : '0') + num
  }

  /**
   * 将秒转换为时：分：秒
   */
  function formatTime(time) {
    var seconds = parseInt(time % 60),
      minutes = parseInt(time / 60),
      hours = parseInt(minutes / 60)
    return time < 3600
      ? ''.concat(prefixPadZero(minutes), ':').concat(prefixPadZero(seconds))
      : ''
          .concat(prefixPadZero(hours), ':')
          .concat(prefixPadZero(minutes), ':')
          .concat(prefixPadZero(seconds))
  }
  var defaultOptions = function defaultOptions() {
    return {
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
    }
  }
  /* harmony default export */ var jsmpeg_playervue_type_script_lang_js_ = {
    name: 'jsmpeg-player',
    inheritAttrs: false,
    // #region 组件基础
    props: {
      url: String,
      title: String,
      options: {
        type: Object,
        default: defaultOptions
      },
      /** 是否可关闭（单击关闭按钮，仅抛出事件） */
      closeable: Boolean,
      /** 是否处于后台，如el-tabs的切换，路由的切换等 */
      inBackground: Boolean,
      /** 是否现实持续播放时间 */
      showDuration: {
        type: Boolean,
        default: true
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
        default: '拼命加载中...'
      }
    },
    components: {},
    inject: {
      /** @returns {any} */
      rootTabs: {
        default: ''
      }
    },
    // #endregion
    // #region 数据相关
    data: function data() {
      return {
        loading: false,
        /** @type {import('./jsmpeg/types').JSMpegPlayer} */
        player: null,
        lastVolume: 0,
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
          fullscreen: false
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
      /** @returns {string} */ displayTitle: function displayTitle() {
        return this.title || this.url
      },
      /** @returns {boolean} */ paused: function paused() {
        var _this$player$paused, _this$player
        return (_this$player$paused =
          (_this$player = this.player) === null || _this$player === void 0
            ? void 0
            : _this$player.paused) !== null && _this$player$paused !== void 0
          ? _this$player$paused
          : true
      },
      /** @returns {number} */
      volume: {
        /** @returns {number} */ set: function set(val) {
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
        /** @returns {number} */ get: function get() {
          var _this$player$volume, _this$player2
          return (_this$player$volume =
            (_this$player2 = this.player) === null || _this$player2 === void 0
              ? void 0
              : _this$player2.volume) !== null && _this$player$volume !== void 0
            ? _this$player$volume
            : 100
        }
      },
      /** @returns {number} */ volumePercent: function volumePercent() {
        return parseInt(this.volume * 100)
      },
      /** @returns {number} */
      currentTime: {
        set: function set(val) {
          this.player.currentTime = val
        },
        get: function get() {
          var _this$player$currentT, _this$player3
          return (_this$player$currentT =
            (_this$player3 = this.player) === null || _this$player3 === void 0
              ? void 0
              : _this$player3.currentTime) !== null &&
            _this$player$currentT !== void 0
            ? _this$player$currentT
            : 0
        }
      },
      /** @returns {string} */ currentTimeLabel: function currentTimeLabel() {
        return formatTime(this.currentTime)
      },
      /** @returns {boolean} */ isMuted: function isMuted() {
        return this.volume === 0
      },
      /** @returns {boolean} */ isRecording: function isRecording() {
        return this.player && this.player.isRecording
      },
      /** @returns {number} */ recordingDuration: function recordingDuration() {
        return this.player ? this.player.recordingDuration : 0
      },
      /** @returns {string} */ recordingDurationLabel:
        function recordingDurationLabel() {
          return formatTime(this.recordingDuration)
        },
      /** @returns {boolean} */ showCloseBtn: function showCloseBtn() {
        return this.closeable && !this.flags.fullscreen
      },
      /** @returns {boolean} */ showTitle: function showTitle() {
        return this.flags.playerHover
        // &&
        // (this.$slots.title || this.title || this.showCloseBtn)
      }
    },

    watch: {
      url: function url(nval) {
        var _this$player4
        // this.rotate(0)
        // if (this.player) {
        //   this.player.setUrl(nval)
        // } else {
        //   this.initPlayer()
        // }
        ;(_this$player4 = this.player) === null || _this$player4 === void 0
          ? void 0
          : _this$player4.destroy()
        if (this.url == null || this.url == '') {
          this.player = null
        } else {
          this.initPlayer()
        }
      },
      options: {
        deep: true,
        handler: function handler() {
          this.destroyPlayer()
          this.initPlayer()
        }
      },
      inBackground: function inBackground(nval) {
        if (nval) {
          this.intoBackground()
        } else {
          this.intoFront()
        }
      }
    },
    // #endregion
    // #region 生命周期
    mounted: function mounted() {
      var _this = this
      if (this.rootTabs) {
        this.rootTabs.$on('tab-click', function (tab) {
          try {
            var _tab$$el
            // 处理el-tabs切换标签时，el-table右侧可能出现空白的Bug
            if (
              !(
                (_tab$$el = tab.$el) !== null &&
                _tab$$el !== void 0 &&
                _tab$$el.contains(_this.$el)
              )
            ) {
              _this.intoBackground()
              _this.$emit('update:inBackground', true)
            }
          } catch (error) {}
        })
      }
      window.addEventListener('unload', function () {
        _this.destroyPlayer()
      })
      this.init()
    },
    beforeDestroy: function beforeDestroy() {
      this.destroyPlayer()
    },
    // #endregion

    methods: {
      init: function init() {
        this.initPlayer()
      },
      initPlayer: function initPlayer() {
        var _this2 = this
        if (!this.url) return
        this.loading = true
        this.player = new jsmpeg.Player(
          this.url,
          jsmpeg_playervue_type_script_lang_js_objectSpread(
            jsmpeg_playervue_type_script_lang_js_objectSpread(
              {
                contianer: this.$refs['canvas-wrap']
              },
              this.options
            ),
            {},
            {
              onVideoDecode: function onVideoDecode(decoder, time) {
                _this2.$emit('video-decode', decoder, time)
              },
              onAudioDecode: function onAudioDecode(decoder, time) {
                _this2.$emit('audio-decode', decoder, time)
              },
              onPlay: function onPlay(player) {
                _this2.loading = false
                console.log('onPlay')
                _this2.$emit('play', player)
              },
              onPause: function onPause(player) {
                _this2.loading = false
                console.log('onPause')
                _this2.$emit('pause', player)
              },
              onEnded: function onEnded(player) {
                console.log('onEnded')
                _this2.$emit('ended', player)
              },
              onStalled: function onStalled(player) {
                console.log('onStalled')
                _this2.$emit('stalled', player)
              },
              onSourceEstablished: function onSourceEstablished(source) {
                console.log('onSourceEstablished')
                _this2.flags.noSignal = false
                _this2.loading = false
                clearTimeout(_this2.timers.noSignal)
                _this2.timers.noSignal = null
                _this2.$emit('source-established', source)
              },
              onSourceCompleted: function onSourceCompleted(source) {
                console.log('onSourceCompleted')
                _this2.$emit('source-completed', source)
              },
              onSourceConnected: function onSourceConnected() {
                console.log('onSourceConnected')
                clearTimeout(_this2.timers.noSignal)
                _this2.loading = true
                _this2.flags.noSignal = false
                _this2.$emit('source-connected')
              },
              onSourceStreamInterrupt: function onSourceStreamInterrupt() {
                console.log('onSourceStreamInterrupt')
                _this2.loading = true
                clearTimeout(_this2.timers.noSignal)
                _this2.timers.noSignal = setTimeout(
                  _this2.handleNoSignal,
                  15000
                )
                _this2.$emit('source-interrupt')
              },
              onSourceStreamContinue: function onSourceStreamContinue() {
                console.log('onSourceStreamContinue')
                clearTimeout(_this2.timers.noSignal)
                _this2.timers.noSignal = null
                _this2.loading = false
                _this2.flags.noSignal = false
                _this2.$emit('source-continue')
              },
              onSourceClosed: function onSourceClosed() {
                console.log('onSourceClosed')
                clearTimeout(_this2.timers.noSignal)
                _this2.$emit('source-closed')
                _this2.handleNoSignal()
              },
              onResolutionDecode: function onResolutionDecode(width, height) {
                // 从流中获取到视频的分辨率
                _this2.flags.gotResolution = true
                _this2.settingPlayer(
                  'autoStretch',
                  _this2.playerSettings.autoStretch
                )
                _this2.$emit('resolution-decode', width, height)
              }
            }
          )
        )
        this.playerSettings.backgroudPlay = !this.options.pauseWhenHidden
        if (this.defaultMute) {
          this.volume = 0
        }
        this.timers.noSignal = setTimeout(this.handleNoSignal, 15000)
        for (var key in this.playerSettings) {
          this.settingPlayer(key, this.playerSettings[key])
        }
        console.log('player', this.player)
      },
      rotate: function rotate(angle) {
        var append =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : false
        this.player.rotate(angle, append)
      },
      // #region 方法
      /**
       * 进入画中画模式
       * @deprecated 未实现
       */
      requesPip: function requesPip() {
        // if (!document.pictureInPictureElement) {
        //   this.$refs.canvas.requestPictureInPicture()
        // }
      },
      /**
       * 退出画中画模式
       * @deprecated 未实现
       */
      exitPip: function exitPip() {
        // document.exitPictureInPicture()
      },
      /**
       * 切换全屏模式
       */
      toggleFullscreen: function toggleFullscreen() {
        var _this3 = this
        if (this.flags.fullscreen) {
          utils_fullscreen.exit(this.$el)
        } else {
          utils_fullscreen.request(this.$el, function () {
            _this3.flags.fullscreen = false
          })
        }
        this.flags.fullscreen = !this.flags.fullscreen
      },
      play: function play() {
        var _this$player5
        if (!this.url) return
        this.loading = true
        if (!this.player) {
          this.initPlayer()
        }
        ;(_this$player5 = this.player) === null || _this$player5 === void 0
          ? void 0
          : _this$player5.play()
      },
      /**
       * 切换播放模式
       */
      togglePlay: function togglePlay() {
        if (this.paused) {
          this.play()
        } else {
          this.pause()
        }
      },
      pause: function pause() {
        var _this$player6
        ;(_this$player6 = this.player) === null || _this$player6 === void 0
          ? void 0
          : _this$player6.pause()
      },
      intoFront: function intoFront() {
        var _this$player7
        ;(_this$player7 = this.player) === null || _this$player7 === void 0
          ? void 0
          : _this$player7.intoFront()
      },
      intoBackground: function intoBackground() {
        var _this$player8
        ;(_this$player8 = this.player) === null || _this$player8 === void 0
          ? void 0
          : _this$player8.intoBackground()
      },
      stop: function stop(clear) {
        var _this$player9
        ;(_this$player9 = this.player) === null || _this$player9 === void 0
          ? void 0
          : _this$player9.stop(clear)
      },
      nextFrame: function nextFrame() {
        var _this$player10
        ;(_this$player10 = this.player) === null || _this$player10 === void 0
          ? void 0
          : _this$player10.nextFrame()
      },
      destroyPlayer: function destroyPlayer() {
        var _this$player11
        this.stop()
        ;(_this$player11 = this.player) === null || _this$player11 === void 0
          ? void 0
          : _this$player11.destroy()
        this.player = null
      },
      mute: function mute() {
        this.lastVolume = this.volume
        this.volume = 0
      },
      toggleMute: function toggleMute() {
        if (this.isMuted) {
          this.volume = this.lastVolume ? this.lastVolume : 1
        } else {
          this.mute()
        }
        this.$emit('volume-change', this.volume)
      },
      /** 截图 */ snapshot: function snapshot() {
        var _this$player12
        ;(_this$player12 = this.player) === null || _this$player12 === void 0
          ? void 0
          : _this$player12.snapshot(this.displayTitle)
      },
      recording: function recording() {
        var _this$player13
        ;(_this$player13 = this.player) === null || _this$player13 === void 0
          ? void 0
          : _this$player13.recording(this.title)
      },
      /**
       * @param
       */
      settingPlayer: function settingPlayer(optionName, value) {
        var _this$player14
        if (!this.player) return
        switch (optionName) {
          case 'autoStretch':
            if (!this.flags.gotResolution) return
            var canvas = this.player.canvas
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
            break
          default:
            ;(_this$player14 = this.player) === null ||
            _this$player14 === void 0
              ? void 0
              : _this$player14.setOption(optionName, value)
            break
        }
      },
      // #endregion
      handleToolbar: function handleToolbar(cmd) {
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
      handleNoSignal: function handleNoSignal() {
        this.flags.noSignal = true
        this.loading = false
        this.stop()
        this.$emit('no-signal')
      },
      handlePlayerMouseEnter: function handlePlayerMouseEnter() {
        this.flags.playerHover = true
      },
      handleCanvasMouseMove: function handleCanvasMouseMove() {
        var _this4 = this
        this.flags.playerHover = true
        clearTimeout(this.timers.canvasMouseMove)
        this.timers.canvasMouseMove = setTimeout(function () {
          _this4.flags.playerHover = false
        }, 3000)
      },
      handlePlayerMouseLeave: function handlePlayerMouseLeave() {
        clearTimeout(this.timers.canvasMouseMove)
        this.flags.playerHover = false
      },
      handleCanvasClick: function handleCanvasClick() {},
      handleToolbarMouseEnter: function handleToolbarMouseEnter() {
        this.flags.playerHover = true
        clearTimeout(this.timers.canvasMouseMove)
      },
      handleToolbarMouseLeave: function handleToolbarMouseLeave() {}
    }
  } // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg-player.vue?vue&type=script&lang=js&
  /* harmony default export */ var jsmpeg_player_jsmpeg_playervue_type_script_lang_js_ =
    jsmpeg_playervue_type_script_lang_js_ // CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
  /* globals __VUE_SSR_CONTEXT__ */

  // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
  // This module is a runtime utility for cleaner component module output and will
  // be included in the final webpack user bundle.

  function normalizeComponent(
    scriptExports,
    render,
    staticRenderFns,
    functionalTemplate,
    injectStyles,
    scopeId,
    moduleIdentifier /* server only */,
    shadowMode /* vue-cli only */
  ) {
    // Vue.extend constructor export interop
    var options =
      typeof scriptExports === 'function'
        ? scriptExports.options
        : scriptExports

    // render functions
    if (render) {
      options.render = render
      options.staticRenderFns = staticRenderFns
      options._compiled = true
    }

    // functional template
    if (functionalTemplate) {
      options.functional = true
    }

    // scopedId
    if (scopeId) {
      options._scopeId = 'data-v-' + scopeId
    }

    var hook
    if (moduleIdentifier) {
      // server build
      hook = function (context) {
        // 2.3 injection
        context =
          context || // cached call
          (this.$vnode && this.$vnode.ssrContext) || // stateful
          (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__
        }
        // inject component styles
        if (injectStyles) {
          injectStyles.call(this, context)
        }
        // register component module identifier for async chunk inferrence
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier)
        }
      }
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook
    } else if (injectStyles) {
      hook = shadowMode
        ? function () {
            injectStyles.call(
              this,
              (options.functional ? this.parent : this).$root.$options
                .shadowRoot
            )
          }
        : injectStyles
    }

    if (hook) {
      if (options.functional) {
        // for template-only hot-reload because in that case the render fn doesn't
        // go through the normalizer
        options._injectStyles = hook
        // register for functional component in vue file
        var originalRender = options.render
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context)
          return originalRender(h, context)
        }
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
      }
    }

    return {
      exports: scriptExports,
      options: options
    }
  } // CONCATENATED MODULE: ./src/components/jsmpeg-player/jsmpeg-player.vue

  /* normalize component */

  var component = normalizeComponent(
    jsmpeg_player_jsmpeg_playervue_type_script_lang_js_,
    render,
    staticRenderFns,
    false,
    null,
    null,
    null
  )

  /* harmony default export */ var jsmpeg_player = component.exports // CONCATENATED MODULE: ./src/components/jsmpeg-player/index.js
  // JsmpegPlayer.install = function(Vue) {
  //   Vue.component(JsmpegPlayer.name, JsmpegPlayer)
  // }

  /* harmony default export */ var components_jsmpeg_player = jsmpeg_player // CONCATENATED MODULE: ./src/index.js
  var _ref

  // import './components/jsmpeg-player/styles/index.scss'

  // export function install(Vue) {
  //   if (install.installed) return

  //   install.installed = true

  //   Vue.component(JsmpegPlayer.name, JsmpegPlayer)
  // }

  // const plugin = {
  //   install
  // }

  // let GlobalVue = null
  // if (typeof window !== 'undefined') {
  //   GlobalVue = window.Vue
  // } else if (typeof global !== 'undefined') {
  //   GlobalVue = global.Vue
  // }
  // if (GlobalVue) {
  //   GlobalVue.use(plugin)
  // }

  // export default {
  //   install,
  //   JsmpegPlayer
  // }
  components_jsmpeg_player.install = function (Vue) {
    Vue.component(components_jsmpeg_player.name, components_jsmpeg_player)
  }
  console.log((_ref = null) !== null && _ref !== void 0 ? _ref : 1231313)
  /* harmony default export */ var src_0 = components_jsmpeg_player // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
  /* harmony default export */ var entry_lib = src_0

  module.exports = __webpack_exports__['default']
  /******/
})()
