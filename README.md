# way-jsmpeg-player

fork from [vue-jsmpeg-player](https://github.com/vCloudSail/jsmpeg-player)

# 介绍

相对于原组件剔除了elementUI并对界面进了修改；

**全局组件**
```javascript
// main.js
import Vue from 'vue'

import { WayJsmpegPlayer } from 'way-jsmpeg-player';
import 'way-jsmpeg-player/lib/way-jsmpeg-player.css';
Vue.use(JSMpegPlayer)

// 或者

import { WayJsmpegPlayer } from 'way-jsmpeg-player';
import 'way-jsmpeg-player/lib/way-jsmpeg-player.css';

Vue.component(WayJsmpegPlayer.name, WayJsmpegPlayer)
```

**局部组件**
```javascript
import { WayJsmpegPlayer } from 'way-jsmpeg-player';
import 'way-jsmpeg-player/lib/way-jsmpeg-player.css';

export default {
  ...

  components: { WayJsmpegPlayer },

  ...
}

```

**使用**
```javascript
<template>
  <div>
    <way-jsmpeg-player :url="url" />
  </div>
</template>

<script>

export default {
  components: {},

  data() {
    return {
      url: "ws://localhost:8089/xxx",
    }
  },
  computed: {
  },

  mounted() {
  },
  beforeDestroy() {
  },
  methods: {}
}
</script>

<style lang="scss">
</style>

```

# 使用说明

## 属性 & Props：

| 名称           | 类型    | 说明                                                                         |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| url            | string  | 视频流地址(推荐websocket，实际上jsmpeg.js原生也支持http方式，但没有经过测试) |
| title          | string  | 播放器标题                                                                   |
| no-signal-text | string  | 无信号时的显示文本                                                           |
| options        | object  | jsmpeg原生选项，直接透传，详见下表                                           |
| closeable      | boolean | 是否可关闭（单击关闭按钮，仅抛出事件）                                       |
| in-background  | boolean | 是否处于后台，如el-tabs的切换，路由的切换等，支持.sync修饰符                 |
| show-duration  | boolean | 是否现实持续播放时间                                                         |
| default-mute   | boolean | 默认静音                                                                     |
| with-toolbar   | boolean | 是否需要工具栏                                                               |
|alwaysShowToolbar| boolean | 是否总是显示工具栏 （with-toolbar需要设置为true）                                                            |
| loading-text   | boolean | 加载时的文本，默认为：拼命加载中...                                          |

**原生属性：**

| 名称                  | 类型              | 说明                                                                                                                                   |
| --------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| canvas                | HTMLCanvasElement | 用于视频渲染的HTML Canvas元素。如果没有给出，渲染器将创建自己的Canvas元素。                                                            |
| loop                  | boolean           | 是否循环播放视频(仅静态文件)，默认=true                                                                                                |
| autoplay              | boolean           | 是否立即开始播放（仅限静态文件），默认=false                                                                                           |
| audio                 | boolean           | 是否解码音频，默认=true                                                                                                                |
| video                 | boolean           | 是否解码视频，默认=true                                                                                                                |
| poster                | string            | 预览图像的URL，用来在视频播放之前作为海报显示。                                                                                        |
| pauseWhenHidden       | boolean           | 当页面处于非活动状态时是否暂停播放，默认=true（请注意，浏览器通常会在非活动选项卡中限制 JS）                                           |
| disableGl             | boolean           | 是否禁用WebGL，始终使用Canvas2D渲染器，默认=false                                                                                      |
| disableWebAssembly    | boolean           | 是否禁用WebAssembly并始终使用JavaScript解码器，默认=false(不建议设置为true)                                                            |
| preserveDrawingBuffer | boolean           | WebGL上下文是否创建必要的“截图”                                                                                                        |
| progressive           | boolean           | 是否以块的形式加载数据(仅静态文件)。当启用时，回放可以在完整加载源之前开始。                                                           |
| throttled             | boolean           | 当不需要回放时是否推迟加载块。默认=progressive                                                                                         |
| chunkSize             | number            | 使用时，以字节为单位加载的块大小。默认(1 mb)1024*1024                                                                                  |
| decodeFirstFrame      | boolean           | 是否解码并显示视频的第一帧，一般用于设置画布大小以及使用初始帧作为"poster"图像。当使用自动播放或流媒体资源时，此参数不受影响。默认true |
| maxAudioLag           | number            | 流媒体时，以秒为单位的最大排队音频长度（可以理解为能接受的最大音画不同步时间）。                                                       |
| videoBufferSize       | number            | 流媒体时，视频解码缓冲区的字节大小。默认的512 * 1024 (512 kb)。对于非常高的比特率，您可能需要增加此值。                                |
| audioBufferSize       | number            | 流媒体时，音频解码缓冲区的字节大小。默认的128 * 1024 (128 kb)。对于非常高的比特率，您可能需要增加此值。                                |

##  事件 & Emits：

支持jsmpeg.js所有原生事件，并转换为短横线命名法，[jsmpeg官方文档 - 事件](https://github.com/phoboslab/jsmpeg#usage)

| 名称                  | 参数          | 说明                                                         |
| --------------------- | ------------- | ------------------------------------------------------------ |
| **以下是vue组件事件** | -             | -                                                            |
| volume-change         | number        | 当音量变化时触发                                             |
| muted                 | number        | 当静音时触发                                                 |
| **以下是原生事件**    | -             | -                                                            |
| video-decode          | -             | onVideoDecode                                                |
| audio-decode          | -             | onAudioDecode                                                |
| play                  | -             | onPlay                                                       |
| pause                 | -             | onPause                                                      |
| ended                 | -             | onEnded                                                      |
| stalled               | -             | onStalled                                                    |
| source-established    | -             | onSourceEstablished                                          |
| source-completed      | -             | onSourceCompleted                                            |
| **以下是扩展事件**    | -             | -                                                            |
| source-connected      | -             | 当websocket连接上服务端时触发                                |
| source-interrupt      | -             | 当websocket超过一定时间（5s）没有收到流时触发                |
| source-continue       | -             | 当onSourceStreamInterrupt触发后websocket第一次接收到流时触发 |
| source-closed         | -             | 当websocket关闭后触发                                        |
| resolution-decode     | width, height | 当获取到视频分辨率后触发                                     |

## 插槽 & Slot:
| 名称      | 参数 | 说明                                             |
| --------- | ---- | ------------------------------------------------ |
| title     | 无   | 标题插槽，使用此插槽后title属性失效              |
| no-signal | 无   | 无信号时的插槽，使用此插槽后noSignalText属性失效 |

## 功能 & 计划
- [ ] 剔除element-ui的依赖，自行实现部分组件
# 运行DEMO

1. 拉取git仓库
2. 运行cmd: npm i
3. 运行cmd: npm run dev:full
4. 会分别弹出两个命令行窗口，一个是ffmpeg转码，一个是中转服务器
