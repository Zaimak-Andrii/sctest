<template>
  <div class="login">
    <span class="login__title-wrapper">
      <span class="login__icon"><component :is="IconLock" /></span>
      <h2 class="login__title">Вхід</h2>
    </span>
    <form class="form" @submit.prevent="submitHandler">
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
      <Button type="submit">Війти</Button>
    </form>
  </div>
</template>
<script setup>
import { IconLock } from '@/components/icons';

const data = reactive({ email: '', password: '' });

const changeInputHandler = (name, value) => {
  data[name] = value;
};

const submitHandler = () => {
  console.log(data);
};
</script>
<style lang="scss" scoped>
.login {
  padding: 25px 30px;
}

.login__title-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 25px;
}

.login__title {
  color: white;
  @extend %headline-5;
}

.login__icon {
  display: block;

  width: 45px;
  height: 45px;
  padding: 10px;

  color: $gray-100;

  border-radius: 15px;
  background-color: $primary-orange;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
