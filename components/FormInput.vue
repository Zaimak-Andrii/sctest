<template>
  <div class="form-group">
    <label class="form-label">
      <p v-if="label" class="form-label__text">
        {{ label }}
      </p>
      <span class="form-input">
        <input
          class="form-input__text"
          :class="{ 'form-input__text--error': error }"
          :type="computedType"
          v-model="value"
          :placeholder="placeholder"
        />
        <span v-if="icon" class="form-input__icon"> <component :is="icon" /> </span>
      </span>
    </label>
    <p v-if="error" class="form-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import IconCircleClose from './IconCircleClose.vue';

type FormInputProps = {
  type: 'text' | 'password' | 'email' | 'tel';
  value: string;
  placeholder: string;
  label?: null | string;
  error?: null | string;
};

const { type, label, value, placeholder, error } = withDefaults(defineProps<FormInputProps>(), {
  type: 'text',
  placeholder: '',
});

const isShowPassword = ref(false);

const computedType = computed<FormInputProps['type']>(() => {
  if (type === 'password') {
    return isShowPassword.value ? 'text' : 'password';
  }

  return type;
});

const icon = computed(() => {
  if (error) return IconCircleClose;

  return null;
});
</script>

<style lang="scss" scoped>
.form-group {
  width: 100%;
}

.form-label {
  width: 100%;
}

.form-label__text {
  display: block;
  margin-bottom: 12px;

  @extend %hairline-small;
}

.form-input {
  position: relative;
}

.form-input__text {
  width: 100%;
  padding: 14px;

  @extend %button-text-small;
  color: $gray-300;

  background: none;
  outline: none;
  border: 2px solid $gray-600;
  border-radius: 70px;

  @include setTransition(border-color, color);

  &::placeholder {
    color: $gray-500;
  }

  &:hover:not(.form-input__text--error) {
    border-color: $gray-500;
  }

  &:focus:not(.form-input__text--error) {
    border-color: $primary-yellow;
    color: $gray-300;
  }

  &--success {
    border-color: $primary-green;
  }

  &--error {
    color: $primary-orange;
    border-color: $primary-orange;
  }
}

.form-input__icon {
  cursor: pointer;

  position: absolute;
  right: 14px;
  top: calc(50% + 2px);

  width: 24px;
  height: 24px;

  color: $gray-500;

  transform: translateY(-50%);
}

.form-error {
  margin-top: 5px;

  @extend %input-text-error;
  color: $primary-orange;
}
</style>
