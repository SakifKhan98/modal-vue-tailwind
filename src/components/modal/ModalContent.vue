<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 z-[200] bg-black/50">
    <div class="absolute top-0 bottom-0 right-0 left-0 overflow-y-scroll z-[200]">
      <div :class="widthClass" class="mx-auto my-20">
        <div ref="modalEl" :class="bgColor" class="rounded-md">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { useClickOutside } from '../../composables/sensors.js'
  
  defineProps({
    bgColor: {
      type: String,
      default: 'bg-white'
    },
    widthClass: {
      type: String,
      default: 'w-[980px]'
    }
  })
  
  const emit = defineEmits(['closeModal'])
  
  const modalEl = ref()
  
  useClickOutside(modalEl, () => {
    emit('closeModal')
  })
  
  onMounted(() => {
    document.body.classList.add('overflow-hidden')
  })
  
  onUnmounted(() => {
    document.body.classList.remove('overflow-hidden')
  })
  </script>