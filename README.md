# vue-tpl-preset

The template preset base on vue 2.x and vue-cli 3.x

> Now the preset only support the mobile app template

## UI-Components

* mobile template: [Vant](https://youzan.github.io/vant/#/zh-CN/intro)

## Core Packages

1. axios (for http-request)
2. lodash (for utils)

## Usage

1. Use remote repo directly

```bash
$ vue create --preset direct:https://github.com/DaveJump/vue-tpl-preset.git --clone your-project

// begin your project
$ cd your-project
$ yarn dev
```

2. Install npm package

```bash
$ npm install -g @djp/vue-tpl-preset
$ vue-tpl create your-project
```