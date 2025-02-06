<script setup>
import './Faq.scss';
import faqIcons from '@/assets/images/faq-icons.png';
import {ref} from 'vue';

const faqs = ref([
  {
    question: 'Какое время нужно для обработки моего заказа?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    open: false,
  },
  {
    question: 'Какая комиссия взимается за обмен?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    open: false,
  },
  {
    question: 'Какая минимальная сумма обмена?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    open: false,
  },
  {
    question: 'Какие методы оплаты доступны на платформе?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    open: false,
  },
  {
    question: 'Что такое подтверждение от сети Bitcoin?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    open: false,
  },
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};

</script>

<template>
  <section class="faq" id="faq">
    <div class="container">
      <div class="faq__wrap">
        <div class="faq__info">
          <h3 class="title">FAQ’s</h3>
          <p class="faq__description">
            Ответы на часто задаваемые вопросы о нашей платформе, услугах и процессе покупки.
          </p>
          <a href="#" class="btn btn-blue faq__btn">Больше ответов</a>
          <img class="faq__icons" :src="faqIcons" alt="">
        </div>
        <div class="faq__questions">
          <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq__item"
              @click="toggleFaq(index)"
          >
            <div class="faq__question">
              {{ faq.question }}
              <svg :class="{ 'open': faq.open }" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10.5 7 7 7-7"/>
              </svg>

            </div>
            <div v-if="faq.open" class="faq__answer">
              {{ faq.answer }}
            </div>
          </div>
        </div>
        <div class="btn-mobile">
          <a href="#" class="btn btn-blue">Больше ответов</a>
        </div>
      </div>
    </div>
  </section>
</template>

