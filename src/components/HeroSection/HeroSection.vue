<script>
import './HeroSection.scss';

import ModalCurrencies from "@/components/ModalCurrencies/ModalCurrencies.vue";

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
        <div class="hero__info">info</div>
        <div class="hero__exchange">
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
                  <path stroke="#3372E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m32.1 27.6-3.6 3.6-3.6-3.6m3.6 3.6V16.8m-12.6 3.6 3.6-3.6 3.6 3.6m-3.6-3.6v14.4"/>
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
        </div>
      </div>
    </div>
  </section>
  <ModalCurrencies
      :show="isModalVisible"
      @update:show="isModalVisible = $event"
      :currencies="currencies"
      :modalType="modalType"
  />
</template>