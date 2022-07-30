const path = require('path')
const fsExtra = require('fs-extra')
const fs = require('fs')

//引入vite导出的build方法
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

//基础配置
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')

// 组件目录
const componentsDir = path.resolve(__dirname, '../src')

// 输出目录
const outputDir = path.resolve(__dirname, '../build')
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 生成package.json

// 创建package.json文件
const createPackageJson = name => {
  const fileStr = `{
      "name": "${name ? name : 'bun-design'}",
      "version": "0.0.0",
      "main": "${name ? 'index.umd.js' : 'bun-design.umd.js'}",
      "module": "${name ? 'index.mjs' : 'bun-design.mjs'}",
      "author": "肉包子",
      "github": "",
      "description": "像小蛋糕一样，虽然小，但它很甜！",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/xzp-git/bun-design.git"
      },
      "keywords": ["vue3", "组件库", "tsx", "UI"],
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/xzp-git/bun-design/issues"
      }
    }`
  if (name) {
    //单个组件, 输出对应的package.json
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

// 执行创建
//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'bun-design',
          fileName: 'bun-design',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  // 创建package.json
  createPackageJson()
}

// 执行创建
//全量构建
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  )
  // 创建package.json
  createPackageJson(name)
}
const buildLib = async () => {
  await buildAll()

  fs.readdirSync(componentsDir)
    .filter(name => {
      // 过滤组件目录 只要目录不要文件 且目录中包含index.ts
      const componentDir = path.resolve(componentsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()
