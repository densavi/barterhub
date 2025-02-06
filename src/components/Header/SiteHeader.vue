<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <div class="header__left">
          <a href="/" class="header__logo">
            <img :src="logo" alt="">
          </a>
          <HeaderLang :langs="langs"/>
        </div>
        <ul class="header__nav">
          <li v-for="item in menu" :key="item.link">
            <a :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
        <div class="header__right">
          <a class="btn" href="#">Войти</a>
          <a class="btn btn-blue" href="#">Регистрация</a>
          <button class="mobile-menu-open" :class="{ 'active': isMenuClosed }" @click="toggleMenuState"><span></span></button>
        </div>
      </div>
    </div>
  </header>


</template>


<script>
import './Header.scss';
import './MobileMenu.scss';
import HeaderLang from "@/components/Header/HeaderLang.vue";

export default {
  name: "SiteHeader",
  data() {
    return {
      logo: require("@/assets/images/logo.png")
    };
  },
  components: {
    HeaderLang,
  },
  props: {
    isMenuClosed: Boolean,
    menu: {
      type: Array,
      required: true,
    },
    langs: {
      type: Array,
      required: true,
    }
  },
  methods: {
    toggleMenuState() {
      this.$emit('toggleMenu', !this.isMenuClosed);
    }
  }
};
</script>