<template>
    <div 
        class="vue3-card-flip"
        :class="cardClass"
    >
        <div 
            class="vue3-card-flip__front"
            :style="faceStyle"
        >
            <slot name="front"></slot>
        </div>
        <div 
            class="vue3-card-flip__back"
            :style="faceStyle"
        >
            <slot name="back"></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    state: {
        type: String,
        default: 'front', // front back
    },
    duration: {
        type: Number,
        default: 0.6,
    }
})
const cardClass = computed(() => {
    return {
        'is-front': props.state === 'front',
        'is-back': props.state === 'back'
    }
});
const faceStyle = computed(() => {
    return {
        '-webkit-transition': `${props.duration}s`,
        '-moz-transition': `${props.duration}s`,
        '-o-transition': `${props.duration}s`,
        '-ms-transition': `${props.duration}s`,
        'transition': `${props.duration}s`
    }
})

</script>

<style lang="scss">
.vue3-card-flip {
    width: 200px;
    height: 200px;
    position: relative;
    margin: auto;
    perspective: 1000;
    transition: transform 30s;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;      
}
.vue3-card-flip__front, .vue3-card-flip__back{
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
}
.vue3-card-flip__back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.vue3-card-flip.is-back .vue3-card-flip__back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.vue3-card-flip.is-back .vue3-card-flip__front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.vue3-card-flip__front {
  z-index: 2;
}
</style>