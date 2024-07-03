import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// svg插件 自定义svg图标组件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 配置vant ui组件库的解析器
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'node:path'
import path from 'path'
// 必须安装 Terser，因为旧版插件使用 Terser 进行缩小
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // 样式重复引入，类型声明文件重复;按需引入vant组件
    Components({
      dts: false,
      resolvers: [VantResolver({ importStyle: false })]
    }),
    //自动导入依赖,比如使用ref reactive时候，不需要import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          axios: [['default', 'axios']]
        }
      ],
      resolvers: [VantResolver()]
    }),
    //兼容
    legacy({
      targets: ['android >= 6', 'ios >=9', 'since 2016'],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: [
        'es.symbol',
        'es.promise',
        'es.promise.finally',
        'es/map',
        'es/set',
        'es.array.filter',
        'es.array.for-each',
        'es.array.flat-map',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all'
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')]
    })
  ],
  // server:{
  //   https:false
  // },
  // build:{

  // },

  resolve: {
    // extensions: ['.js', '.ts', '.json', '.tsx', '.mjs', '.d.ts'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //预加载，解决开发过程中自动编译问题
  optimizeDeps: {
    include: ['vue', 'vant/es']
  }
})
