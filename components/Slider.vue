<template>
  <div class="slider">
    <Icon :icon="IconArrow" size="16px" class="arrow-icon-color arrow-icon-left" />
    <span class="dot dot--active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <Icon :icon="IconArrow" size="16px" class="arrow-icon-color" />
  </div>
</template>

<script setup>
import { Icon, IconArrow } from '@/components/icons';
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 82px;

  color: $gray-300;
}

.arrow-icon-color {
  color: $gray-300;
}
.arrow-icon-left {
  transform: scaleX(-1);
}
.dot {
  display: block;

  width: 8px;
  height: 8px;

  background-color: $gray-300;
  border-radius: 50%;

  &--active {
    background-color: $primary-yellow;
  }
}
</style>
