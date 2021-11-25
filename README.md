# vite-vue-rename

1. 安装

```Bash
$ npm i -D vite-plugin-vue-rename

```


2. vite.config.js 中引入

&ensp;&ensp;&ensp;&ensp;1. vite-plugin-vue-rename 插件需要在 @vitejs/plugin-vue 前面

```JavaScript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginVueRename from 'vite-plugin-vue-rename'

// https://vitejs.dev/config/
export default () => {
    return defineConfig({
        // rename 插件需要在 vue 前面
        plugins: [VitePluginVueRename(), vue()],
    })
}

```
![](https://github.com/xyuh111/vite-plugin-vue-rename/blob/master/IMG/d52729ca.png)


3. 组件中使用

```JavaScript
<template>
    <div>
        <h1>This is a home page</h1>
    </div>
</template>
// 在 setup 模式下的 script 标签上添加 name 属性，设置组件名称
<script lang="ts" setup name="views-home">
import { onMounted } from 'vue'
onMounted(() => {})
</script>
```
![](https://github.com/xyuh111/vite-plugin-vue-rename/blob/master/IMG/78b2f5d0.png)


4. vite-plugin-vue-rename 插件处理后，

```JavaScript
<template>
    <div>
        <h1>This is a home page</h1>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "views-home"
});
</script>

<script lang="ts" setup name="views-home">

import { onMounted } from 'vue'
onMounted(() => {})
</script>


```


```JavaScript
// setup 模式下
// name="views-home" 在 vite-plugin-vue-rename 处理后会加上一段设置组件名称的script 标签
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "views-home"
});
</script>
```

![](https://github.com/xyuh111/vite-plugin-vue-rename/blob/master/IMG/azYucG5n.png)

