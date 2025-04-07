<script setup>
import CodeOfConduct from '@/components/aboutComponents/CodeOfConduct.vue';
import Footer from '@/components/Footer.vue';
import HeroAbout from '@/components/aboutComponents/HeroAbout.vue';
import OurMission from '@/components/aboutComponents/OurMission.vue';
import Segments from '@/components/aboutComponents/Segments.vue';
import WhoWeAre from '@/components/aboutComponents/WhoWeAre.vue';

import { ref, onMounted } from 'vue'

const OurMissionData = ref(null)
const WhoWeAreData = ref(null)
const SegmentsData = ref(null)
const CodeOfConductText = ref(null)


onMounted(async () => {
    try {
        const res = await fetch('https://api-event-53s5.onrender.com/api/v1/summit/about')
        const data = await res.json()

        OurMissionData.value = data.mission;
        WhoWeAreData.value = data.whoWeAre;
        SegmentsData.value = data.segments;
        CodeOfConductText.value = data.codeOfConduct

    } catch (err) {
        console.error('Error fetching aboutpage data:', err)
    }
})
</script>


<template>
    <HeroAbout />
    <OurMission :mission="OurMissionData" />
    <WhoWeAre v-if="WhoWeAreData" :whoWeAre="WhoWeAreData" />
    <Segments v-if="SegmentsData" :segments="SegmentsData" />
    <CodeOfConduct :text="CodeOfConductText" />
    <Footer />
</template>