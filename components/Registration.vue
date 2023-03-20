<template>
  <div class="registration">
    <RegistrationInfo class="registration-info" />
    <div class="registration-form">
      <span class="registration__title-wrapper">
        <Icon :icon="IconUser" size="45px" padding="10px" radius="15px" class="registration__icon-color" />
        <h2 class="registration__title">Реєстрація</h2>
      </span>
      <form class="form" @submit.prevent="submitHandler">
        <FormInput
          name="name"
          :value="data.name"
          @update:input="changeInputHandler"
          type="text"
          placeholder="Ваше ім'я"
        />
        <FormInput
          name="email"
          :value="data.email"
          @update:input="changeInputHandler"
          type="email"
          placeholder="Ваш email"
        />
        <FormInput
          name="password"
          :value="data.password"
          @update:input="changeInputHandler"
          type="password"
          placeholder="Ваш пароль"
        />
        <FormInput
          name="confirmPassword"
          :value="data.confirmPassword"
          @update:input="changeInputHandler"
          type="password"
          placeholder="Повторіть пароль"
        />

        <FormSocial name="social" :value="data.social" @update:input="changeInputHandler" />

        <Button type="submit">Реєстрація</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Icon, IconUser } from '@/components/icons';

const data = reactive({ name: '', email: '', password: '', confirmPassword: '', social: '' });

const changeInputHandler = (name, value) => {
  data[name] = value;
};

const submitHandler = () => {
  console.log(data);
};
</script>

<style lang="scss" scoped>
.registration {
  @include breakpoint(desktop) {
    display: flex;
  }
}

.registration-info {
  @include breakpoint(false, desktop) {
    @include visibilityHidden();
  }
}

.registration-form {
  padding: 25px 30px;

  @include breakpoint(desktop) {
    min-width: 385px;
    padding: 60px 45px 45px;
  }
}

.registration__title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 25px;

  @include breakpoint(desktop) {
    flex-direction: column;
  }
}

.registration__title {
  @extend %headline-5;
  color: white;
}

.registration__icon-color {
  color: $gray-100;
  background-color: $primary-green;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
