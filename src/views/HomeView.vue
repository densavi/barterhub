<template>
  <div class="header-bg">
    <SiteHeader
        @toggleMenu="toggleMenu"
        :isMenuClosed="isMenuClosed"
        :menu="menu"
        :langs="langs"
    />
    <HeroSection />
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
  height: 808px;
}
</style>