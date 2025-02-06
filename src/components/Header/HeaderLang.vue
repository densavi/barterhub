<script>
export default {
  name: 'HeaderLang',
  props: {
    langs: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="lang">
    <button class="lang__btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
        <path fill="currentColor" d="M10.585 18.33a8.333 8.333 0 1 1 0-16.666 8.333 8.333 0 0 1 0 16.667Zm-1.908-1.943a14.917 14.917 0 0 1-1.402-5.556H3.97a6.673 6.673 0 0 0 4.707 5.556Zm.267-5.556a13.254 13.254 0 0 0 1.641 5.626 13.253 13.253 0 0 0 1.642-5.626H8.944Zm8.257 0h-3.305a14.917 14.917 0 0 1-1.402 5.556A6.674 6.674 0 0 0 17.2 10.83ZM3.97 9.164h3.304c.108-1.978.6-3.855 1.402-5.556A6.674 6.674 0 0 0 3.97 9.164Zm4.973 0h3.283a13.253 13.253 0 0 0-1.642-5.627 13.254 13.254 0 0 0-1.64 5.627Zm3.55-5.556a14.917 14.917 0 0 1 1.402 5.556H17.2a6.674 6.674 0 0 0-4.707-5.556Z"/>
      </svg>
      {{ langs.find(i => i.isCurrent)?.title }}
      <svg class="lang__arrow" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
        <path fill="currentColor" d="m12.586 13.172 4.95-4.95 1.414 1.415L12.586 16 6.222 9.637l1.414-1.414 4.95 4.95Z"/>
      </svg>
    </button>

    <div class="lang__list">
      <a v-for="item in langs.filter(i => !i.isCurrent)" :key="item.title" :href="item.link">
        {{ item.title }}
      </a>
    </div>

  </div>
</template>

<style scoped lang="scss">
.lang {
  position: relative;
  @media (max-width: $mobile) {
    display: none;
  }
  &__btn {
    width: 96px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: $black;
    background: transparent;
    border: 0;
    transition: color .5s ease;
    cursor: pointer;
  }
  &__arrow {
    transition: transform .5s ease;
  }

  &__list {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    gap: 6px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease;
    a {
      text-decoration: none;
      transition: color .5s ease;
      color: $black;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      &:hover {
        color: $blue-dark;
      }
    }
  }

  &:hover {
    .lang__btn {
      color: $blue-dark;
    }
    .lang__arrow {
      transform: rotate(180deg);
    }
    .lang__list {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>