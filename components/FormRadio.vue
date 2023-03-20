<template>
  <div class="form-group">
    <label class="form-label">
      <input
        class="form-input__radio"
        :name="name"
        type="radio"
        :value="value"
        @change="changeHandler"
        :checked="checked"
      />
      <span class="form-input__icon">
        <component :is="icon" />
      </span>
      <p v-if="label" class="form-label__text">
        {{ label }}
      </p>
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['change']);

const changeHandler = (evt: Event) => {
  emit('change', (evt.target as HTMLInputElement).value);
};

type FormInputProps = {
  name: string;
  value: string;
  checked?: boolean;
  label?: null | string;
  icon: any;
};

const props = defineProps<FormInputProps>();
const { name, label, value, checked, icon } = toRefs(props);
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
}

.form-label {
  width: fit-content;
}

.form-label__text {
  display: block;
  margin-bottom: 12px;

  @extend %hairline-small;
}

.form-input {
  position: relative;
}

.form-input__radio {
  @include visibilityHidden();
}

.form-input__icon {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* position: absolute;
  right: 14px;
  top: calc(50% + 2px); */

  width: 45px;
  height: 45px;
  padding: 10px;

  border-radius: 50%;

  @include setTransition(background-color);

  :checked + & {
    background-color: $gray-600;
  }
}
</style>
