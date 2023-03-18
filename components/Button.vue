<template>
  <button class="button" :class="['button--' + size, 'button--' + variant, 'button--icon-' + icon]">
    <span class="button-icon">
      <Star />
    </span>
    <span
      class="button-text"
      :class="{
        'button-text--hidden': icon === 'only',
      }"
    >
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
type ButtonProps = {
  variant?: 'primary' | 'light' | 'dark';
  icon?: 'hidden' | 'left' | 'right' | 'only';
  size?: 'small' | 'medium';
};

const { variant, icon, size } = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  icon: 'hidden',
});
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;

  padding: 16px 24px;

  @extend %button-text;

  border-radius: 90px;

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }

  &--primary {
    color: $gray-800;

    background-color: $primary-yellow;

    & .button-icon {
      color: $gray-700;
    }

    &:hover:enabled,
    &:focus:enabled {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), $primary-yellow;
    }
  }

  &--light {
    color: $gray-100;

    @include setTransition(background-color);

    & .button-icon {
      color: $gray-500;
    }

    &:hover:enabled,
    &:focus:enabled,
    &:disabled {
      background-color: $gray-700;
      & .button-icon {
        color: $gray-100;
      }
    }
  }

  &--dark {
    color: $gray-100;

    box-shadow: inset 0px 0px 0px 2px $gray-500;

    @include setTransition(color, background-color, box-shadow);

    & .button-icon {
      color: $gray-100;
    }

    &:hover:enabled,
    &:focus:enabled,
    &:disabled {
      background-color: $gray-100;
      color: $gray-700;
      box-shadow: inset 0px 0px 0px 2px transparent;

      & .button-icon {
        color: $gray-700;
      }
    }
  }

  &--small {
    padding: 12px 16px;

    @extend %button-text-small;
  }

  &--icon-left {
    flex-direction: row;

    & .button-icon {
      margin-right: 12px;
    }
  }

  &--icon-right {
    flex-direction: row-reverse;

    & .button-icon {
      margin-left: 12px;
    }
  }

  &--icon-only {
    padding: 12px;

    border-radius: 48px;

    & .button-icon {
      width: 24px;
      height: 24px;
    }

    &.button--small {
      padding: 8px;
    }
  }

  &--icon-hidden {
    & .button-icon {
      display: none;
    }
  }
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  @include setTransition(color);
}

.button-text {
  &--hidden {
    display: none;
  }
}
</style>
