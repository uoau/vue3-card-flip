<template>
    <div class="demo-page">
        <div class="control">
            <div><button @click="clickBtn">翻转</button></div>
            <div>翻转速度: <input type="number" v-model="duration"/></div>
        </div>
        <CardFilp       
            class="card"
            :state="state"
            :duration="duration"
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
    </div>
</template>

<script setup>
import '../dist/style.css';
import CardFilp from '../dist/vue3-card-flip.es';
import { ref } from 'vue';

const state = ref('front');
const duration = ref(0.6);

const clickBtn = () => {
    state.value = state.value === 'front' ? 'back' : 'front';
}
</script>
 
<style lang="scss">
.control {
    div {
        font-size: 14px;
        margin-bottom: 16px;
    }
}
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