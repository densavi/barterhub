<script setup>
import  './contacts.scss';
import iconLeft from '@/assets/images/contacts-1.png';
import iconRight from '@/assets/images/contacts-2.png';
</script>

<template>
  <section class="contacts" id="contacts">
    <div class="container">
      <div class="contacts__wrap">
        <h3 class="contacts__title">Свяжитесь с нами: через Telegram или email</h3>
        <p class="contacts__description">
          Свяжитесь с нами: используйте Telegram-бот или напишите на email — мы всегда на связи!
        </p>
        <div class="contacts__btns-group">
          <a class="contact-link contact-link__transparent" href="mailto:barterhub@support.club">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.5 4h-16a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22.5 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2.5 7"/>
            </svg>

            barterhub@support.club
          </a>
          <a class="contact-link contact-link__white" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.712 14.403a1 1 0 0 1 .33-.674l.733-.658L8.94 14.22a1 1 0 0 1-.827.107l-4.027-1.253 5.625 1.33Zm0 0-.294 4.132a1 1 0 0 0 .998 1.07c.37 0 .695-.083.985-.25.242-.14.424-.322.523-.42l.01-.01m-2.222-4.522 2.223 4.521m0 0 1.357-1.297 3.408 2.495a.977.977 0 0 0 .104.067c.491.274 1.17.487 1.844.182.67-.303.967-.954 1.096-1.522h0l.003-.014 2.674-12.527.007-.032c.156-.726.086-1.53-.487-2.081-.584-.563-1.373-.556-1.97-.334h0l-.008.003L4.208 9.896h0l-.004.002a3.02 3.02 0 0 0-.903.519c-.247.216-.514.557-.555 1.024-.044.5.19.897.461 1.15.257.24.576.388.879.482l7.849 5.851Z"/>
            </svg>
            Перейти в телеграм
          </a>
        </div>
        <p class="contacts__text">
          Для партнерства:
          <a href="mailto:barterhub@partners.club">barterhub@partners.club</a>
        </p>
        <img class="contacts__icon contacts__icon-1" :src="iconLeft" alt="">
        <img class="contacts__icon contacts__icon-2" :src="iconRight" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>