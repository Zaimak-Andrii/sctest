<template>
  <span class="icon" :style="cssVars">
    <component :is="icon" />
  </span>
</template>

<script lang="ts" setup>
type IconProps = {
  icon: any;
  size?: string;
  padding?: string;
  radius?: string;
};

const props = withDefaults(defineProps<IconProps>(), {
  padding: '0',
  radius: '0',
  size: '25px',
});

const { icon, size, radius, padding } = toRefs(props);

const cssVars: any = computed(() => ({
  '--icon-size': size.value,
  '--icon-radius': radius.value,
  '--icon-padding': padding.value,
}));
</script>

<style lang="scss" scoped>
.icon {
  display: block;

  width: var(--icon-size);
  height: var(--icon-size);

  padding: var(--icon-padding);

  border-radius: var(--icon-radius);
}
</style>
