<script setup>
import HeroAgenda from '@/components/agendaComponents/HeroAgenda.vue'
import Footer from '@/components/Footer.vue'
import Agenda from '@/components/agendaComponents/Agenda.vue'


import { ref, onMounted } from 'vue'

const apiUrl = 'https://api-event-53s5.onrender.com/api/v1/summit/agenda'

const agendaData = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    agendaData.value = data
  } catch (error) {
    console.error("Failed to fetch agenda data:", error)
  }
})
</script>

<template>
    <HeroAgenda />
    <Agenda v-if="agendaData" :data="agendaData" />
    <Footer />
</template>