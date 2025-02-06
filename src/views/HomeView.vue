<template>
  <div class="header-bg">
    <SiteHeader
        @toggleMenu="toggleMenu"
        :isMenuClosed="isMenuClosed"
        :menu="menu"
        :langs="langs"
    />
    <HeroSection :currencies="currencies" />
  </div>
  <ReviewsSection />
  <FaqSection />
  <ContactUs />
  <Footer />
  <MobileMenu
      :isMenuClosed="isMenuClosed"
      @toggleMenu="toggleMenu"
      :menu="menu"
      :langs="langs"
  />
</template>

<script>
import { ref } from 'vue';
import SiteHeader from "@/components/Header/SiteHeader.vue";
import HeroSection from "@/components/HeroSection/HeroSection.vue";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection.vue";
import FaqSection from "@/components/FaqSection/FaqSection.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import Footer from '@/components/Footer/SiteFooter.vue';
import MobileMenu from "@/components/MobileMenu/MobileMenu.vue";


import usdttrc20Icon from '@/assets/images/usdtrtc20.svg';
import ethIcon from '@/assets/images/eth.svg';
import bitcoinIcon from '@/assets/images/bitcoin-btc-logo.svg';
import bnbIcon from '@/assets/images/bnb-bnb-logo.svg';
import maticIcon from '@/assets/images/polygon-matic-logo.svg';

export default {
  name: 'HomeView',
  components: {
    MobileMenu,
    SiteHeader,
    HeroSection,
    ReviewsSection,
    FaqSection,
    ContactUs,
    Footer,
  },
  data() {
    return {
      menu: [
        {title: 'Обменник', link: '#hero'},
        {title: 'Преимущество', link: '#reviews'},
        {title: 'FAQ', link: '#faq'},
        {title: 'Контакты', link: '#contacts'},
      ],
      langs: [
        {title: 'Рус', link: '#', isCurrent: true},
        {title: 'Eng', link: '#', isCurrent: false}
      ],
      currencies: [
        {
          id: 1,
          name: 'USDT',
          network: 'TRC20',
          icon: usdttrc20Icon,
          give: true,
          receive: false,
        },
        {
          id: 2,
          name: 'ETH',
          network: 'ERC20',
          icon: ethIcon,
          give: false,
          receive: true,
        },
        {
          id: 3,
          name: 'BTC',
          network: 'Bitcoin',
          icon: bitcoinIcon,
          give: false,
          receive: false,
        },
        {
          id: 4,
          name: 'BNB',
          network: 'BEP20',
          icon: bnbIcon,
          give: false,
          receive: false,
        },
        {
          id: 5,
          name: 'MATIC',
          network: 'Polygon',
          icon: maticIcon,
          give: false,
          receive: false,
        }
      ]
    }
  },
  setup() {
    const isMenuClosed = ref(false);

    const toggleMenu = () => {
      isMenuClosed.value = !isMenuClosed.value;
      if (isMenuClosed.value) {
        document.body.classList.add('b-hidden');
      } else {
        document.body.classList.remove('b-hidden');
      }
    }

    return {
      isMenuClosed,
      toggleMenu
    }
  }
}

</script>

<style scoped lang="scss">
.header-bg {
  background: url('@/assets/images/header-bg.png') top right / cover no-repeat;
}
</style>