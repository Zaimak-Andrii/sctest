<template>
  <div class="socials">
    <p class="socials__title">Оберіть спосіб звязку</p>
    <div class="socials__wrapper">
      <FormRadio value="telegram" name="socials" @change="changeHandler" checked :icon="IconTelegram" />
      <FormRadio value="skype" name="socials" @change="changeHandler" :icon="IconSkype" />

      <FormInput
        name="social"
        class="socials__input"
        :value="value"
        @input="changeInputHandler"
        type="text"
        :placeholder="pl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IconTelegram, IconSkype } from '@/components/icons';

type SocialsProps = {
  name: string;
  value: string;
};

const emit = defineEmits(['update:input']);
const props = defineProps<SocialsProps>();
const { value } = toRefs(props);

const socials = ref('telegram');

const changeHandler = (value: string) => {
  socials.value = value;
};

const pl = computed(() => {
  return socials.value === 'telegram' ? '@телеграм_адреса' : '@скайп_адреса';
});

const changeInputHandler = (evt: Event) => {
  emit('update:input', (evt.target as HTMLInputElement).name, (evt.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.socials {
  padding-top: 15px;
  padding-bottom: 15px;

  text-align: center;
}

.socials__wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  width: 100%;
}

.socials__title {
  margin-bottom: 10px;

  @extend %hairline-small;
}

.socials__input {
  flex-grow: 1;
  /* width: 200px; */
}
</style>
