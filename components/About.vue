<template>
  <section class="about">
    <Container class="about__container">
      <div class="about__wrapper">
        <h2 class="about__title">Володарі Трафіку</h2>
        <p class="about__text">
          SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує
          очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані
          одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.
        </p>
        <span class="about__stars"><Star /><Star /><Star /><Star /><Star /></span>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 50px;
}

.about__container {
  @include breakpoint(desktop) {
    --container-px: 270px;

    display: flex;
    flex-direction: column-reverse;
  }
}

.about__wrapper {
  --about-wrapper-py: 25px;
  --about-wrapper-px: 25px;
  --about-wrapper-gap: 25px;
  display: flex;
  flex-direction: column;
  gap: var(--about-wrapper-gap);

  padding: var(--about-wrapper-py) var(--about-wrapper-px);

  border-radius: 24px;

  background: url('/images/graph.png'), rgba($gray-700, 0.5);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 182px;

  @include breakpoint(desktop) {
    --about-wrapper-py: 39px;
    --about-wrapper-px: 44px;
  }
}

.about__title {
  position: relative;
  width: fit-content;

  margin-left: auto;
  margin-right: auto;

  @extend %headline;
  font-size: 25px;
  line-height: 1;
  color: $gray-200;

  text-align: center;

  &::before,
  &::after {
    --image-position: -30px;

    content: '';
    position: absolute;
    display: block;

    width: 20px;
    height: 25px;

    background-image: url('/images/about-title-mobile.png');
    background-repeat: no-repeat;
  }

  &::before {
    top: 0;
    left: var(--image-position);
  }

  &::after {
    top: 0;
    right: var(--image-position);
    transform: scaleX(-1);
  }

  @include breakpoint(desktop) {
    font-size: 40px;
    line-height: 1.2;

    &::before,
    &::after {
      --image-position: -61px;
      width: 36px;
      height: 45px;

      background-image: url('/images/about-title-desktop.png');
    }
  }
}

.about__text {
  @extend %caption-text-normal;
  text-align: center;

  color: $gray-500;
}

.about__stars {
  display: flex;
  gap: 25px;

  width: 175px;
  height: 15px;
  margin: 0 auto;
}
</style>
