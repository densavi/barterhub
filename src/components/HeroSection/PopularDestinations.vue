<style scoped lang="scss">
.destinations {
  margin-bottom: 36px;
  @media (max-width: $mobile) {
    margin-bottom: 18px;
  }
}
.heading {
  margin: 0 0 20px;
  font-weight: 600;
  @media (max-width: $mobile) {
    margin-bottom: 10px;
  }
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 1120px) {
    gap: 12px 6px;
  }
  @media (max-width: $tablet) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.item {
  height: 46px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 7px;
  border: 1px solid #D6DEEB;
  border-radius: 50px;
  background: #fff;
  padding-right: 18px;
}

.icons {
  display: flex;
  align-items: center;
}

.icon1 {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-right: -4px;
}

.icon2 {
  border: 3px solid #fff;
  width: 38px;
  height: 38px;
  object-fit: contain;
  border-radius: 50px;
}

.head {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}

.foot {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #6B6B6B;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
}

</style>

<template>
  <div class="destinations">
    <h4 class="heading">Популярные направления:</h4>
    <div class="list">
      <div v-for="item in items" :key="item.price" class="item">
        <div class="icons">
          <img class="icon1" :src="item.icon1" alt="">
          <img class="icon2" :src="item.icon2" alt="">
        </div>
        <div class="wrap">
          <div class="head">
            {{ item.price }}
          </div>
          <div class="foot">
            {{ item.name1 }}
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" fill="none" viewBox="0 0 7 10">
              <path fill="#2D2D2E" d="M3.889 5.002 0 1.112 1.111.003l5 5-5 5L0 8.89 3.889 5Z"/>
            </svg>
            {{ item.name2 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import tetherIcon from '@/assets/images/tether.svg';
import ethIcon from '@/assets/images/eth1.svg';
import bitcoinIcon from '@/assets/images/bitcoin-btc-logo.svg';
import bnbIcon from '@/assets/images/bnb-bnb-logo.svg';
import solIcon from '@/assets/images/sol.svg';
import xrpIcon from '@/assets/images/xrp.svg';
import visaIcon from '@/assets/images/visa.svg';

export default {
  name: "PopularDestinations",
  data() {
    return {
      items: [
        {
          name1: 'USDT',
          name2: 'ETH',
          icon1: tetherIcon,
          icon2: ethIcon,
          price: '2817.91'
        },
        {
          name1: 'BNB',
          name2: 'BTC',
          icon1: bnbIcon,
          icon2: bitcoinIcon,
          price: '104917.17'
        },
        {
          name1: 'SOL',
          name2: 'XRP',
          icon1: solIcon,
          icon2: xrpIcon,
          price: '19384.01'
        },
        {
          name1: 'BTC',
          name2: 'ETH',
          icon1: bitcoinIcon,
          icon2: ethIcon,
          price: '249101.52'
        },
        {
          name1: 'USD',
          name2: 'USDT',
          icon1: visaIcon,
          icon2: tetherIcon,
          price: '1.03'
        },
      ]
    }
  }
}
</script>

