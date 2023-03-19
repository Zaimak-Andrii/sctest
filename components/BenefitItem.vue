<template>
  <div class="container">
    <span class="icon"><component :is="icon" /></span>
    <div class="content-wrapper">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ desc }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
type BenefitItemProps = {
  icon: any;
  title: string;
  desc: string;
};
defineProps<BenefitItemProps>();
</script>
<style lang="scss" scoped>
.container {
  --benefit-item-container-gap: 25px;

  @include breakpoint(false, desktop) {
    display: flex;
    align-items: center;
    gap: var(--benefit-item-container-gap);

    padding-left: 15px;
    padding-right: 15px;
  }

  @include breakpoint(desktop) {
    text-align: center;
  }
}
.content-wrapper {
}
.icon {
  --benefit-item-icon-size: 45px;
  --benefit-item-icon-p: 10px;
  display: block;
  margin: 0 auto;

  min-width: var(--benefit-item-icon-size);
  max-width: var(--benefit-item-icon-size);
  height: var(--benefit-item-icon-size);
  padding: var(--benefit-item-icon-p);

  color: $gray-600;

  background: $primary-yellow;
  border-radius: 15px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @include breakpoint(desktop) {
    --benefit-item-icon-size: 65px;
    --benefit-item-icon-p: 15px;
    margin-bottom: var(--benefit-item-container-gap);
  }
}
.title {
  --benefit-item-title-px: 47.5px;
  @extend %body-text-normal-bold;
  color: $gray-400;

  @include breakpoint(desktop) {
    min-height: 48px;
    padding-left: var(--benefit-item-title-px);
    padding-right: var(--benefit-item-title-px);
    margin-bottom: var(--benefit-item-container-gap);
  }
}
.desc {
  @extend %caption-text-normal;
  color: $gray-500;
}
</style>
