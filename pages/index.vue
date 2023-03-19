<template>
  <main class="main-page">
    <Benefits />
    <About />
  </main>
</template>

<style lang="scss" scoped>
.main-page {
  --main-py: 50px;
  --main-gap: 50px;

  display: flex;
  flex-direction: column;
  gap: var(--main-gap);

  padding-top: var(--main-py);
  padding-bottom: var(--main-py);

  @include breakpoint(desktop) {
    --main-py: 100px;
    --main-gap: 125px;

    flex-direction: column-reverse;
  }
}
</style>
