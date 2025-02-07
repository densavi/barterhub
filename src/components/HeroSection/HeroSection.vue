<script>
import './HeroSection.scss';

import ModalCurrencies from "@/components/ModalCurrencies/ModalCurrencies.vue";
import PopularDestinations from "@/components/HeroSection/PopularDestinations.vue";

export default {
  name: 'HeroSection',
  props: {
    currencies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      modalType: '',
      isModalVisible: false,
    };
  },
  components: {
    ModalCurrencies,
    PopularDestinations,
  },
  methods: {
    swapValues() {
      this.currencies.forEach((currency) => {
        if ((currency.give === true && currency.receive === false) ||
            (currency.give === false && currency.receive === true)) {
          currency.give = !currency.give;
          currency.receive = !currency.receive;
        }
      });
    },
    openModal(val) {
      this.modalType = val;
      this.isModalVisible = true;
    },
  },
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrap">
        <div class="hero__info">
          <h1 class="hero__title">
            Быстрый и надежный обмен
          </h1>
          <div class="hero__description">
            Наша главная ценность — это наша репутация и доверие наших клиентов. Мы работаем и развиваемся для вас!
          </div>

          <div class="desktop">
            <PopularDestinations />
          </div>

          <a class="hero__how-works desktop" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
              <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22.014c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z"/>
              <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 8.014 6 4-6 4v-8Z"/>
            </svg>
            Как это работает?
          </a>
        </div>
        <div class="hero__exchange">
          <div class="hero__header">
            Обмен
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M5.666 9.667A1.667 1.667 0 0 0 7.333 8c0-.92-.333-1.333-.667-2C5.952 4.571 6.517 3.297 8 2c.333 1.667 1.333 3.267 2.666 4.333 1.334 1.067 2 2.334 2 3.667a4.667 4.667 0 0 1-9.333 0c0-.769.289-1.53.667-2a1.667 1.667 0 0 0 1.666 1.667Z"/>
              </svg>
              Курс: 1 USDT = 0,820.51 ETH
            </span>
          </div>
          <div class="hero__wrapper">
            <div class="hero__give" v-for="currency in currencies.filter(c => c.give)" :key="currency.id">
              <div class="hero__head">
                Отдаете
                <p>Min:<span>100</span> - Max:<span>15000</span></p>
              </div>
              <div class="hero__bottom">
                <input type="number" placeholder="0.00">
                <button class="hero__btn" @click="openModal('give')">
                  <img :src="currency.icon" :alt="currency.name">
                  <p>
                    {{ currency.name }}
                    <span>{{ currency.network }}</span>
                  </p>
                  <svg class="hero__btn--arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                       viewBox="0 0 16 16">
                    <path stroke="#2D2D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="m6 12 4-4-4-4"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="hero__swap">
              <button @click="swapValues">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <path fill="#fff" d="M0 0h48v48H0z"/>
                  <rect width="39" height="39" x="4.5" y="4.5" fill="#fff" stroke="#D6DEEB" rx="19.5"/>
                  <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="m32.1 27.6-3.6 3.6-3.6-3.6m3.6 3.6V16.8m-12.6 3.6 3.6-3.6 3.6 3.6m-3.6-3.6v14.4"/>
                </svg>
              </button>
            </div>
            <div class="hero__receive" v-for="currency in currencies.filter(c => c.receive)" :key="currency.id">
              <div class="hero__head">
                Получаете
                <p>Резерв: <span>0.0023</span></p>
              </div>
              <div class="hero__bottom">
                <input type="number" placeholder="0.00">
                <button class="hero__btn" @click="openModal('receive')">
                  <img :src="currency.icon" :alt="currency.name">
                  <p>
                    {{ currency.name }}
                    <span>{{ currency.network }}</span>
                  </p>
                  <svg class="hero__btn--arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                       viewBox="0 0 16 16">
                    <path stroke="#2D2D2E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                          d="m6 12 4-4-4-4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="hero__quote">
            Обмен происходит автоматически после подтверждений сети Tether TRC20 USDT. <strong>Среднее время вывода
            средств на карту составляет от 5 до 60 минут.</strong>
          </div>

          <div class="hero__accept">
            <label for="accept">
              <input type="checkbox" id="accept">
              <span>
                <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 45.701 45.7" xml:space="preserve"
                >
                <g>
                  <g>
                    <path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
                      c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
                      c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/>
                  </g>
                </g>
                </svg>
              </span>
              <p>Я согласен(a) с <a href="#">условиями и положениями</a>.</p>

            </label>
          </div>

          <button class="btn btn-blue btn-big btn-icon">Сделать Обмен</button>
        </div>
      </div>
      <div class="mobile">
        <PopularDestinations />
      </div>

      <a class="hero__how-works mobile" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25">
          <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22.014c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10Z"/>
          <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 8.014 6 4-6 4v-8Z"/>
        </svg>
        Как это работает?
      </a>
    </div>
  </section>
  <ModalCurrencies
      :show="isModalVisible"
      @update:show="isModalVisible = $event"
      :currencies="currencies"
      :modalType="modalType"
      @update:currencies="$emit('update:currencies', $event)"
  />
</template>


<style lang="scss" scoped>
.desktop {
  @media (max-width: $mobile) {
    display: none;
  }
}

.mobile {
  display: none;
  @media (max-width: $mobile) {
    display: flex;
  }
}
</style>
