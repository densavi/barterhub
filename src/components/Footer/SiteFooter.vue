<script>


import './footer.scss';

import fbIcon from '@/assets/images/fb.svg';
import instIcon from '@/assets/images/inst.svg';
import tgIcon from '@/assets/images/tg.svg';
import discordIcon from '@/assets/images/discord.svg';

export default {
  name: "SiteFooter",
  data() {
    return {
      logo: require('@/assets/images/logo.png'),
      socials: [
        {
          id: 1,
          icon: fbIcon,
          link: '#',
        },
        {
          id: 2,
          icon: instIcon,
          link: '#',
        },
        {
          id: 3,
          icon: tgIcon,
          link: '#',
        },
        {
          id: 4,
          icon: discordIcon,
          link: '#',
        },
      ]
    }
  }
}


</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="footer__wrap">
      <div class="footer__left">
        <a href="/" class="footer__logo">
          <img :src="logo" alt="">
        </a>

        <ul class="footer__contacts">
          <li>
            <span>Поддержка</span>
            <a href="mailto:barterhub@support.club">barterhub@support.club</a>
          </li>
          <li>
            <span>Партнерство</span>
            <a href="mailto:barterhub@support.club">barterhub@support.club</a>
          </li>
        </ul>

        <ul class="footer__socials">
          <li v-for="item in socials" :key="item.id">
            <a target="_blank" :href="item.link">
              <img :src="item.icon" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__right">
        <nav class="footer__nav">
          <h5 class="footer__heading">Обмен наличных</h5>
          <ul>
            <li><a class="footer__link" href="#">Обмен USDT Варшава</a></li>
            <li><a class="footer__link" href="#">Обмен USDT Стамбул</a></li>
            <li><a class="footer__link" href="#">Обмен USDT Бали (Индонезия)</a></li>
            <li><a class="footer__link" href="#">Обмен USDT Ницца (Франция)</a></li>
          </ul>
        </nav>
        <nav class="footer__nav">
          <h5 class="footer__heading">Направления безналичные</h5>
          <ul>
            <li><a class="footer__link" href="#">Обмен Bitcoin BTC на Monobank UAH</a></li>
            <li><a class="footer__link" href="#">Обмен Tether TRC-20 USDT на Monobank UAH</a></li>
            <li><a class="footer__link" href="#">Обмен Ethereum ETH на Monobank UAH</a></li>
            <li><a class="footer__link" href="#">Обмен Tether BEP20 USDT на Monobank UAH</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="footer__foot">
      <p class="footer__copy">©2025 BarterHub</p>
      <ul class="footer__menu">
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>
  </div>
</footer>
</template>

<style scoped lang="scss">

</style>