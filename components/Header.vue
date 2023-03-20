<template>
  <header class="header">
    <Container class="header-container">
      <nav class="site-nav">
        <Logo class="header-logo" />
        <ul class="header-auth">
          <!-- // TODO: Add button as link -->
          <li><Button size="small" variant="dark" @click="clickLoginHandler">Вхід</Button></li>
          <li><Button size="small" @click="clickRegistrationHandler">Реєстрація</Button></li>
        </ul>
      </nav>
    </Container>
  </header>
  <ClientOnly>
    <Teleport to="#modal">
      <Modal v-if="isModalOpen" :is-open="isModalOpen" :on-close="() => (isModalOpen = false)">
        <!-- <Registration /> -->
        <component :is="modalContent" />
        <!-- <Login /> -->
      </Modal>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import Login from '@/components/Login.vue';
import Registration from '@/components/Registration.vue';

const isModalOpen = ref(false);
const modalContent = ref(null);

const login = markRaw(Login);
const registration = markRaw(Registration);

const clickLoginHandler = () => {
  modalContent.value = login;
  isModalOpen.value = true;
};

const clickRegistrationHandler = () => {
  modalContent.value = registration;
  isModalOpen.value = true;
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: inset 0px 0px 0px 1px $gray-700;
}

.header-auth {
  display: flex;
  gap: 10px;

  @include breakpoint(desktop) {
    position: absolute;
    right: 0;
  }
}
.header-container {
  @include breakpoint(desktop) {
    --container-px: 24px;
  }
}
.site-nav {
  --nav-py: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: var(--nav-py);
  padding-bottom: var(--nav-py);

  @include breakpoint(desktop) {
    --nav-py: 24px;
    justify-content: center;
  }
}
.header-logo {
  height: 30px;

  @include breakpoint(desktop) {
    height: 45px;
  }
}
</style>
