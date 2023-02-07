# vue3-card-flip

## 使用理由
✔ 2KB
✔ 属性控制翻转 \ 速度可控
✔ 无依赖
✔ 代码结构简单，随时查看源码

## 安装
```
npm i vue3-card-flip -S
```

## 使用
```vue
<template>
    <CardFilp       
        class="card"
        :state="state"
        :duration="duration"
        @click="flip"
    >
        <template v-slot:front>
            <div class="card__front">
                正面
            </div>
        </template>
        <template v-slot:back>
            <div class="card__back">
                背面
            </div>
        </template>
    </CardFilp>
</template>

<script setup>
import 'vue3-card-flip/dist/style.css'; // 记得引入这个css，不然会无效
import CardFilp from 'vue3-card-flip';
import { ref } from 'vue';

const state = ref('front');
const duration = ref(0.6);

const flip = () => {
    state.value = state.value === 'front' ? 'back' : 'front';
}
</script>


<style lang="scss">
.card {
    width: 100px;
    height: 100px;
    &__front,&__back {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }
    &__front {
        background: #a5d7d2;
    }
    &__back {
        background: #c3d5f1;
    }
}
</style>
```
