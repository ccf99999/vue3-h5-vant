// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { createSvgIconsPlugin } from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import Components from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/unplugin-auto-import/dist/vite.js";
import path from "path";
import legacy from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import { createHtmlPlugin } from "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/vue3/%E9%97%AE%E8%AF%8A%E9%A1%B9%E7%9B%AEvue3/consult-patient-vue3/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    createHtmlPlugin(),
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
        "vue",
        "vue-router",
        "pinia",
        {
          axios: [["default", "axios"]]
        }
      ],
      resolvers: [VantResolver()]
    }),
    //兼容
    legacy({
      targets: ["android >= 6", "ios >=9", "since 2016"],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      polyfills: [
        "es.symbol",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.filter",
        "es.array.for-each",
        "es.array.flat-map",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all"
      ]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/icons")]
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
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  //预加载，解决开发过程中自动编译问题
  optimizeDeps: {
    include: ["vue", "vant/es"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUzXFxcXFx1OTVFRVx1OEJDQVx1OTg3OVx1NzZFRXZ1ZTNcXFxcY29uc3VsdC1wYXRpZW50LXZ1ZTNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHZ1ZTNcXFxcXHU5NUVFXHU4QkNBXHU5ODc5XHU3NkVFdnVlM1xcXFxjb25zdWx0LXBhdGllbnQtdnVlM1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovdnVlMy8lRTklOTclQUUlRTglQUYlOEElRTklQTElQjklRTclOUIlQUV2dWUzL2NvbnN1bHQtcGF0aWVudC12dWUzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIHN2Z1x1NjNEMlx1NEVGNiBcdTgxRUFcdTVCOUFcdTRFNDlzdmdcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuLy8gXHU5MTREXHU3RjZFdmFudCB1aVx1N0VDNFx1NEVGNlx1NUU5M1x1NzY4NFx1ODlFM1x1Njc5MFx1NTY2OFxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbi8vIFx1NUZDNVx1OTg3Qlx1NUI4OVx1ODhDNSBUZXJzZXJcdUZGMENcdTU2RTBcdTRFM0FcdTY1RTdcdTcyNDhcdTYzRDJcdTRFRjZcdTRGN0ZcdTc1MjggVGVyc2VyIFx1OEZEQlx1ODg0Q1x1N0YyOVx1NUMwRlxuaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXG5cbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGNyZWF0ZUh0bWxQbHVnaW4oKSxcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICAgIC8vIFx1NjgzN1x1NUYwRlx1OTFDRFx1NTkwRFx1NUYxNVx1NTE2NVx1RkYwQ1x1N0M3Qlx1NTc4Qlx1NThGMFx1NjYwRVx1NjU4N1x1NEVGNlx1OTFDRFx1NTkwRDtcdTYzMDlcdTk3MDBcdTVGMTVcdTUxNjV2YW50XHU3RUM0XHU0RUY2XG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkdHM6IGZhbHNlLFxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKHsgaW1wb3J0U3R5bGU6IGZhbHNlIH0pXVxuICAgIH0pLFxuICAgIC8vXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU0RjlEXHU4RDU2LFx1NkJENFx1NTk4Mlx1NEY3Rlx1NzUyOHJlZiByZWFjdGl2ZVx1NjVGNlx1NTAxOVx1RkYwQ1x1NEUwRFx1OTcwMFx1ODk4MWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAncGluaWEnLFxuICAgICAgICB7XG4gICAgICAgICAgYXhpb3M6IFtbJ2RlZmF1bHQnLCAnYXhpb3MnXV1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXVxuICAgIH0pLFxuICAgIC8vXHU1MTdDXHU1QkI5XG4gICAgbGVnYWN5KHtcbiAgICAgIHRhcmdldHM6IFsnYW5kcm9pZCA+PSA2JywgJ2lvcyA+PTknLCAnc2luY2UgMjAxNiddLFxuICAgICAgbW9kZXJuUG9seWZpbGxzOiB0cnVlLFxuICAgICAgcmVuZGVyTGVnYWN5Q2h1bmtzOiB0cnVlLFxuICAgICAgYWRkaXRpb25hbExlZ2FjeVBvbHlmaWxsczogWydyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXSxcbiAgICAgIHBvbHlmaWxsczogW1xuICAgICAgICAnZXMuc3ltYm9sJyxcbiAgICAgICAgJ2VzLnByb21pc2UnLFxuICAgICAgICAnZXMucHJvbWlzZS5maW5hbGx5JyxcbiAgICAgICAgJ2VzL21hcCcsXG4gICAgICAgICdlcy9zZXQnLFxuICAgICAgICAnZXMuYXJyYXkuZmlsdGVyJyxcbiAgICAgICAgJ2VzLmFycmF5LmZvci1lYWNoJyxcbiAgICAgICAgJ2VzLmFycmF5LmZsYXQtbWFwJyxcbiAgICAgICAgJ2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydGllcycsXG4gICAgICAgICdlcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5JyxcbiAgICAgICAgJ2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InLFxuICAgICAgICAnZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnLFxuICAgICAgICAnZXMub2JqZWN0LmtleXMnLFxuICAgICAgICAnZXMub2JqZWN0LnRvLXN0cmluZycsXG4gICAgICAgICd3ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoJyxcbiAgICAgICAgJ2VzbmV4dC5nbG9iYWwtdGhpcycsXG4gICAgICAgICdlc25leHQuc3RyaW5nLm1hdGNoLWFsbCdcbiAgICAgIF1cbiAgICB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ljb25zJyldXG4gICAgfSlcbiAgXSxcbiAgLy8gc2VydmVyOntcbiAgLy8gICBodHRwczpmYWxzZVxuICAvLyB9LFxuICAvLyBidWlsZDp7XG5cbiAgLy8gfSxcblxuICByZXNvbHZlOiB7XG4gICAgLy8gZXh0ZW5zaW9uczogWycuanMnLCAnLnRzJywgJy5qc29uJywgJy50c3gnLCAnLm1qcycsICcuZC50cyddLFxuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgLy9cdTk4ODRcdTUyQTBcdThGN0RcdUZGMENcdTg5RTNcdTUxQjNcdTVGMDBcdTUzRDFcdThGQzdcdTdBMEJcdTRFMkRcdTgxRUFcdTUyQThcdTdGMTZcdThCRDFcdTk1RUVcdTk4OThcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWyd2dWUnLCAndmFudC9lcyddXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlVLFNBQVMsZUFBZSxXQUFXO0FBRTVXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUd4QixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLFVBQVU7QUFFakIsT0FBTyxZQUFZO0FBRW5CLFNBQVMsd0JBQXdCO0FBakJ3SixJQUFNLDJDQUEyQztBQW9CMU8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsaUJBQWlCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBO0FBQUEsSUFFWixXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxXQUFXLENBQUMsYUFBYSxFQUFFLGFBQWEsTUFBTSxDQUFDLENBQUM7QUFBQSxJQUNsRCxDQUFDO0FBQUE7QUFBQSxJQUVELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPLENBQUMsQ0FBQyxXQUFXLE9BQU8sQ0FBQztBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzVCLENBQUM7QUFBQTtBQUFBLElBRUQsT0FBTztBQUFBLE1BQ0wsU0FBUyxDQUFDLGdCQUFnQixXQUFXLFlBQVk7QUFBQSxNQUNqRCxpQkFBaUI7QUFBQSxNQUNqQixvQkFBb0I7QUFBQSxNQUNwQiwyQkFBMkIsQ0FBQyw2QkFBNkI7QUFBQSxNQUN6RCxXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUFBLElBQ3JELENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsU0FBUztBQUFBO0FBQUEsSUFFUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsT0FBTyxTQUFTO0FBQUEsRUFDNUI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
