<template>
  <Modal>
    <ModalContent v-if="isActive" width-class="w-[380px]" @closeModal="$emit('close')">
      <div class="p-6">
        <div class="leading-5">
          <slot />
        </div>
        <div class="mt-6 flex items-center gap-2">
          <Button
            :text="confirmText"
            :icon="confirmIcon"
            :class="isDestructiveAction ? '!bg-red !border-red' : null"
            theme="primary"
            type="button"
            class="mr-2"
            @click="$emit('confirm')" />
          <button
            v-if="hasCancel"
            type="button"
            class="hover:text-green"
            @click="$emit('close')">Cancel</button>
        </div>
      </div>
    </ModalContent>
  </Modal>
</template>

<script setup>
import Button from '../Button.vue'
import Modal from './Modal.vue'
import ModalContent from './ModalContent.vue'

defineProps({
  confirmIcon: {
    type: Object,
    default: null
  },
  confirmText: {
    type: String,
    default: 'Confirm'
  },
  hasCancel: {
    type: Boolean,
    default: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isDestructiveAction: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close', 'confirm'])
</script>