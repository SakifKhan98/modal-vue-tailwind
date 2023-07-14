<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Teleport to="body">
    <transition
      appear
      enter-active-class="transition opacity 0.5s"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition opacity 0.5s"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <slot />
    </transition>
  </Teleport>
</template>