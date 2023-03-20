<template>
  <div class="form-group">
    <label class="form-label">
      <p v-if="label" class="form-label__text">
        {{ label }}
      </p>
      <span class="form-input">
        <input
          class="form-input__text"
          :name="name"
          :class="{ 'form-input__text--error': error }"
          :type="computedType"
          :value="inputValue"
          @input="changeInputHandler"
          :placeholder="placeholder"
        />
        <Icon v-if="icon" size="24px" :icon="icon" class="form-input__icon" @click.stop="clickIconHandler" />
      </span>
    </label>
    <p v-if="error" class="form-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { Icon, IconCircleClose, IconEyeOpen, IconEyeClose } from '@/components/icons';

type FormInputProps = {
  type: 'text' | 'password' | 'email' | 'tel';
  value: string;
  name: string;
  placeholder: string;
  label?: null | string;
  error?: null | string;
};

const emit = defineEmits(['update:input']);

const props = withDefaults(defineProps<FormInputProps>(), {
  type: 'text',
  placeholder: '',
});

const { type, label, value, name, placeholder, error } = toRefs(props);
const inputValue = ref(value);
const isShowPassword = ref(false);

const computedType = computed<FormInputProps['type']>(() => {
  if (type.value === 'password') {
    return isShowPassword.value ? 'text' : 'password';
  }

  return type.value;
});

const icon = computed(() => {
  if (type.value === 'password') {
    return isShowPassword.value ? IconEyeClose : IconEyeOpen;
  }

  if (error?.value) return IconCircleClose;

  return null;
});

const clickIconHandler = () => {
  if (!error?.value) {
    isShowPassword.value = !isShowPassword.value;
  }
  if (error?.value) {
    inputValue.value = '';
  }
};

const changeInputHandler = (evt: Event) => {
  emit('update:input', (evt.target as HTMLInputElement).name, (evt.target as HTMLInputElement).value);
};
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
