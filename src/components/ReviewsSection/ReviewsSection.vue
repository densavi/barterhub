<script>
import './ReviewsSection.scss';

import bestChangeLogo from '@/assets/images/bestchange.svg';
import scanbitLogo from '@/assets/images/scanbit.svg';
import exchangeLogo from '@/assets/images/exchange.svg';
import obmifyLogo from '@/assets/images/obmify.svg';
import kursLogo from '@/assets/images/kurs.svg';

export default {
  name: "ReviewsSection",
  data() {
    return {
      platforms: [
        {
          logo: bestChangeLogo,
          domain: 'bestchange.com',
          link: '#',
        },
        {
          logo: scanbitLogo,
          domain: 'scanbit.com.ua',
          link: '#',
        },
        {
          logo: exchangeLogo,
          domain: 'exchangesumo.com',
          link: '#',
        },
        {
          logo: obmifyLogo,
          domain: 'obmify.com',
          link: '#',
        },
        {
          logo: kursLogo,
          domain: 'kurs.expert',
          link: '#',
        },
      ]
    }
  }
}
</script>

<template>
<section class="reviews">
  <div class="container">
    <h3 class="reviews__title">Наши клиенты говорят</h3>
    <div class="reviews__descr">
      Мы поддерживаем резервы на высоком уровне, особенно по ликвидным активам. Если нужного объема нет, свяжитесь с нами!
    </div>

    <h5 class="reviews__heading">
      Отзывы на платформах:
    </h5>

    <div class="reviews__platforms">
      <div v-for="platform in platforms" :key="platform.domain" class="reviews__platform">
        <img class="reviews__logo" :src="platform.logo" alt="">
        <a class="reviews__link" :href="platform.link">{{ platform.domain }}</a>
      </div>
    </div>


    <div class="reviews__btn">
      <a class="btn btn-blue" href="#">Показать еще...</a>
    </div>

  </div>
</section>
</template>

<style scoped lang="scss">

</style>