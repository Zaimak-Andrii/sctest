<template>
  <section class="benefits">
    <Container class="benefits__container">
      <h2 class="benefits__title">Тим, хто нагоняє Траф</h2>
      <ul class="benefits__list">
        <li v-for="{ id, title, icon, desc } in benefits" :key="id" class="benefits__list-item">
          <BenefitItem :icon="icon" :title="title" :desc="desc" />
        </li>
      </ul>
    </Container>
  </section>
</template>

<script setup>
import { IconSmile, IconChart, IconMegaphone } from '@/components/icons/';

const benefits = [
  {
    id: 1,
    icon: IconMegaphone,
    title: 'Круті акції, призи та прибуткова бонусна програма',
    desc: 'Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!',
  },
  {
    id: 2,
    icon: IconSmile,
    title: 'Особлива підтримка для кожного 24/7',
    desc: 'У вас буде свій персональний менеджер',
  },
  {
    id: 3,
    icon: IconChart,
    title: 'Детальна статистика',
    desc: 'Миттєве оновлення, зрозуміла система відображення статистики',
  },
];
</script>

<style lang="scss" scoped>
.benefits__title {
  --benefits-title-mb: 35px;
  margin-bottom: var(--benefits-title-mb);

  @extend %headline;
  font-size: 25px;
  line-height: 1;
  color: $gray-200;

  text-align: center;

  @include breakpoint(desktop) {
    --benefits-title-mb: 75px;

    font-size: 40px;
    line-height: 1.2;
  }
}
.benefits__list {
  @include breakpoint(desktop) {
    display: flex;
    gap: 82.5px;
  }
}
.benefits__list-item {
  @include breakpoint(false, desktop) {
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  @include breakpoint(desktop) {
    flex: 1;
  }
}
</style>
