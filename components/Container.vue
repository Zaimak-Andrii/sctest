<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  --container-px: 15px;
  max-width: getBreakpoint(mobile);
  margin-left: auto;
  margin-right: auto;

  padding-left: var(--container-px);
  padding-right: var(--container-px);

  @include breakpoint(desktop) {
    --container-px: 120px;
    max-width: getBreakpoint(desktop);
  }
}
</style>
