<template>
  <div>
    <button
      type="button"
      @click="expandIsActive = true"
      class="rounded-md bg-amber-600 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100">
      Show Modal
    </button>
  </div>
  <Modal>
    <ModalContent v-if="expandIsActive" @close-modal="expandIsActive = false">
        <div class="border-b px-8 py-6">
          <div class="flex flex-col items-center justify-between gap-6">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex atque adipisci deserunt ducimus quas fugiat pariatur veritatis expedita architecto iste rem corrupti, consectetur natus omnis minus vero quisquam officia.
            </div>
              <button type="button" class="rounded-md bg-red-700 bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100" @click="expandIsActive = false">CLOSE</button>
          </div>
        </div>
    </ModalContent>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './modal/Modal.vue';
import ModalContent from './modal/ModalContent.vue';
// import ModalConfirmation from '../components/modal/ModalConfirmation.vue';

const expandIsActive = ref(false)

</script>