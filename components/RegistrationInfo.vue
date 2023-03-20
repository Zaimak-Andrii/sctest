<template>
  <div class="info">
    <div class="info__content">
      <h2 class="info__title">Зможеш обрати свій варіант</h2>

      <ul class="list">
        <li class="list__item">
          <Icon :icon="IconCheck" size="45px" padding="10px" radius="50%" class="list__item-icon-color" />
          <div class="list__item-wrapper">
            <h3 class="list__item-title">CPA</h3>
            <p class="list__item-desc">$25 і вище</p>
          </div>
        </li>
        <li class="list__item">
          <Icon :icon="IconCheck" size="45px" padding="10px" radius="50%" class="list__item-icon-color" />
          <div class="list__item-wrapper">
            <h3 class="list__item-title">REVSHARE</h3>
            <p class="list__item-desc">Піднімай до 60%</p>
          </div>
        </li>
        <li class="list__item">
          <Icon :icon="IconCheck" size="45px" padding="10px" radius="50%" class="list__item-icon-color" />
          <div class="list__item-wrapper">
            <h3 class="list__item-title">Гібрід</h3>
            <p class="list__item-desc">Зробимо як скажеш</p>
          </div>
        </li>
      </ul>
    </div>
    <Slider class="info__slider" />
  </div>
</template>

<script setup>
import { Icon, IconCheck, IconArrow } from '@/components/icons';
</script>

<style lang="scss" scoped>
.info {
  @include breakpoint(false, desktop) {
    @include visibilityHidden();
  }

  @include breakpoint(desktop) {
    width: 385px;
    padding-top: 65px;
    padding-left: 53px;
    padding-bottom: 107px;
    padding-right: 53px;

    background: url('/images/registration-top-bg.svg'), url('/images/registration-bottom-bg.svg'), $primary-green;
    background-repeat: no-repeat;
    background-position: top left, bottom left;
  }
}
.info__content {
  margin-right: 59px;
}

.info__title {
  margin-bottom: 65px;

  font-family: 'Gilroy';
  font-size: 25px;
  font-weight: 400;
  line-height: 1.6;

  color: $gray-100;
}

.list__item {
  @include breakpoint(desktop) {
    display: flex;
    align-items: center;
    gap: 25px;

    color: $gray-100;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
}
.list__item-icon-color {
  background-color: rgba(#ffffff, 0.2);
}

.list__item-title {
  @extend %button-text-small;
}

.list__item-desc {
  @extend %caption-text-normal;
}

.info__slider {
  margin-top: 82px;
}
</style>
