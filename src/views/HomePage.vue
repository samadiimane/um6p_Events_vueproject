<script setup>
import Hero from '@/components/homeComponents/Hero.vue';
import WhyAttend from '@/components/homeComponents/WhyAttend.vue';
import Footer from '@/components/Footer.vue';
import Countdown from '@/components/homeComponents/Countdown.vue';
import Map from '@/components/homeComponents/Map.vue';

import { ref, onMounted } from 'vue'

const heroData = ref(null)
const whyAttendData = ref([])
const countdownData = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('https://api-event-53s5.onrender.com/api/v1/summit/home')
    const data = await res.json()
    heroData.value = data.hero
    whyAttendData.value = data.whyAttend.points

    const countdownRes = await fetch('https://api-event-53s5.onrender.com/api/v1/summit/countdown')
    const countdownJson = await countdownRes.json()
    countdownData.value = countdownJson
  } catch (err) {
    console.error('Error fetching homepage data:', err)
  }
})
</script>


<template>
    <Hero v-if="heroData" :hero="heroData" />
    <WhyAttend v-if="whyAttendData" :points="whyAttendData" />
    <Countdown v-if="countdownData" :countdown="countdownData" />
    <Map />
    <Footer />
</template>