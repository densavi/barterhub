<template>
  <div class="currencies" v-if="isVisible">
    <svg class="currencies__close" @click="close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="currentColor"/>
    </svg>
    <button
        v-for="currency in filteredCurrencies"
        :key="currency.id"
        class="currencies__item"
        @click="handleClick(currency.id)"
    >
      <img v-if="currency.icon" :src="currency.icon" alt="">
      {{ currency.name }} ({{ currency.network }})
    </button>
  </div>
  <div class="currencies__overlay" v-if="isVisible" @click="close"></div>
</template>

<script>
export default {
  name: "Modal-Currencies",
  props: {
    show: Boolean,
    modalType: String,
    currencies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isVisible: this.show,
    };
  },
  watch: {
    show(newVal) {
      this.isVisible = newVal;
    }
  },
  methods: {
    close() {
      this.isVisible = false;
      this.$emit('update:show', false);
    },
    updateCurrencies(id) {
      if (this.modalType === 'give') {
        const updatedCurrencies = this.currencies.map(currency => ({
          ...currency,
          give: currency.id === id
        }));

        this.$emit('update:currencies', updatedCurrencies);
      }

      if (this.modalType === 'receive') {
        const updatedCurrencies = this.currencies.map(currency => ({
          ...currency,
          receive: currency.id === id
        }));

        this.$emit('update:currencies', updatedCurrencies);
      }
    },
    handleClick(id) {
      this.updateCurrencies(id);
      this.close();
    }
  },
  computed: {
    filteredCurrencies() {
      if (this.modalType === 'give') {
        return this.currencies.filter(currency => currency.receive !== true);
      }
      if (this.modalType === 'receive') {
        return this.currencies.filter(currency => currency.give !== true);
      }
      return this.currencies;
    },
  },
}
</script>


<style scoped lang="scss">
.currencies {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  max-width: 535px;
  padding: 20px 0;
  width: 100%;
  background: #fff;
  border-radius: 24px;

  button {
    width: 100%;
    padding: 10px 28px;
    text-align: left;
    cursor: pointer;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }

    &:hover {
      background: #F6F8FA;
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(#000, .6);
  }

  &__close {
    position: absolute;
    left: 100%;
    bottom: 100%;
    width: 32px;
    height: 32px;
    display: flex;
    z-index: 103;
    cursor: pointer;
    color: #fff;
    transition: opacity .5s ease;

    &:hover {
      opacity: .65;
    }
  }
}
</style>