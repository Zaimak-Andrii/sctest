<template>
  <main class="main-page">
    <section class="benefits">
      <Container class="benefits__container">
        <h2 class="benefits__title">Тим, хто нагоняє Траф</h2>
        <ul class="benefits__list">
          <li class="benefits__list-item">
            <BenefitItem
              icon=""
              title="Круті акції, призи та прибуткова бонусна програма"
              desc="Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!"
            />
          </li>
          <li class="benefits__list-item">
            <BenefitItem
              icon=""
              title="Особлива підтримка для кожного 24/7"
              desc="У вас буде свій персональний менеджер"
            />
          </li>
          <li class="benefits__list-item">
            <BenefitItem
              icon=""
              title="Детальна статистика"
              desc="Миттєве оновлення, зрозуміла система відображення статистики"
            />
          </li>
        </ul>
      </Container>
    </section>
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

.benefits {
}

.benefits__container {
}

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
