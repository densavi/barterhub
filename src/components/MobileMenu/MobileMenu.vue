<script>
import './MobileMenu.scss';
export default {
  name: 'MobileMenu',
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
}
</script>

<template>
  <div class="mobile-menu" :class="{'active' : isMenuClosed}">
    <ul class="mobile-menu__nav">
      <li v-for="item in menu" :key="item.link">
        <a :href="item.link" @click="toggleMenuState">{{ item.title }}</a>
      </li>
    </ul>

    <div class="mobile-menu__foot">
      <div class="mobile-menu__btns-group">
        <a class="btn" href="#">Войти</a>
        <a class="btn btn-blue" href="#">Регистрация</a>
      </div>
      <div class="mobile-menu__langs">
        <span class="current">{{ langs.find(i => i.isCurrent)?.title }}</span>
        <a v-for="item in langs.filter(i => !i.isCurrent)" :key="item.title" :href="item.link">
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>