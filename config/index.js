import { defineConfig } from '@tarojs/cli'
import UnoCSS from 'unocss/webpack'

export default defineConfig(async (merge, { command, mode }) => {
  return {
    projectName: '',
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
      [
        '@tarojs/plugin-framework-vue3',
        {
          vueLoaderOption: {
            compilerOptions: {
              whitespace: 'preserve'
            }
          }
        }
      ]
    ],
    framework: 'vue3',
    compiler: 'webpack5',
    mini: {
      webpackChain (chain) {
        chain.plugin('unocss').use(UnoCSS())
      }
    }
  }
})
