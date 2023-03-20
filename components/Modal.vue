<template>
  <div class="modal" @click="closeHandler">
    <div class="modal__content">
      <span class="modal__close-btn" @click.stop="closeHandler"><component :is="IconClose" /></span>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { IconClose } from '@/components/icons';

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};

const { isOpen, onClose } = defineProps<ModalType>();

const closeHandler = (evt: MouseEvent) => {
  const { target, currentTarget } = evt;

  if (target !== currentTarget) return;

  onClose();
};

onMounted(() => {
  console.log('Mounted');
});

onUnmounted(() => {
  console.log('Unmounted');
});
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

  background: rgba($gray-600, $alpha: 0.9);

  opacity: 1;
  @include setTransition(opacity);

  &--hidden {
    pointer-events: none;

    opacity: 0;

    /* & > .modal__content {
      transform: translate(-50%, -50%) scale(1.1);
    } */
  }
}

.modal__content {
  position: absolute;
  left: 50%;
  bottom: 10px;

  min-width: 355px;

  overflow: hidden;

  background-color: rgba($gray-700, 0.95);
  border-radius: 25px;

  transform: translateX(-50%) scale(1);
  /* @include setTransition(transform); */

  @include breakpoint(desktop) {
    bottom: 50%;

    transform: translate(-50%, 50%) scale(1);
  }
}

.modal__close-btn {
  cursor: pointer;

  position: absolute;
  right: 10px;
  top: 10px;

  width: 40px;
  height: 40px;
  padding: 8px;

  color: $gray-500;

  border-radius: 50%;
  background-color: $gray-600;

  & > * {
    pointer-events: none;
  }
}
</style>
