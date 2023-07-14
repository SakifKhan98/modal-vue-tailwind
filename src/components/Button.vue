<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :type="type"
    :disabled="isDisabled || isLoading"
    :class="[
      {'opacity-20': isDisabled},
      {'w-full': fullWidth},
      size === 'sm' ? 'h-[28px]' : 'h-[40px]',
      classes['text-color'],
      classes['bg-color'],
      classes['border-color'],
      {[`active:top-px ${classes['hover:bg-color']} ${classes['hover:border-color']} ${classes['hover:text-color']}`]: !isLoading && !isDisabled}
    ]"
    class="px-6 border rounded relative cursor-pointer transition-colors duration-100">
    <span v-if="!isLoading" class="flex items-center justify-center gap-2">
      <component v-if="icon" :is="icon" class="-ml-1" />
      <span class="font-medium">{{ text }}</span>
    </span>
    <Loader v-else :color="classes['loader-color']" />
    <div v-if="isDisabled" class="absolute top-0 left-0 w-full h-full" @click="$emit('clickDisabled')" />
  </button>
</template>

<script setup>
import Loader from '@/components/loader/Loader.vue'

const props = defineProps({
  fullWidth: {
    type: Boolean,
    defualt: false
  },
  icon: {
    type: Object,
    default: null
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default'
  },
  text: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: 'primary'
  },
  type: {
    type: String,
    default: 'button'
  }
})

defineEmits(['clickDisabled'])

let classes = {
  'bg-color': 'bg-black',
  'hover:bg-color': 'hover:bg-green',
  'border-color': 'border-black',
  'hover:border-color': 'hover:border-green',
  'text-color': 'text-white',
  'hover:text-color': 'hover:text-white',
  'loader-color': 'bg-white'
}

switch (props.theme) {
  case 'primary-rev':
    classes = {
      ...classes,
      'border-color': 'border-white',
    }
    break
  case 'secondary':
    classes = {
      ...classes,
      'bg-color': 'bg-white',
      'border-color': 'border-black',
      'text-color': 'text-black'
    }
    break
}
</script>