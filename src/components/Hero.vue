<script setup>
defineProps({
  hero: {
    type: Object,
    default: () => ({
      title: 'FUTURE FORWARD SUMMIT',
      tagline: 'Redefining Work for the AI Era',
      edition: '1st edition: HUMANS AT THE CORE: Designing Work That Works',
      date: 'June 5-6, 2025',
      location: 'Casablanca',
      cta: {
        text: 'Register Now',
        link: '/register'
      }
    }),
    required: true
  }
})
</script>

<template>
  <div class="hero8-slider-area">
    <video autoplay loop muted playsinline class="hero-video" poster="/assets/img/bg/header-bg-1.jpg">
      <source src="/assets/videos/bg-1.mp4" type="video/mp4" />
    </video>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 m-auto">
          <div class="hero8-header text-center">
            <h5>
              <img src="/assets/img/logo/logo-1.png" alt="Logo" />
              {{ hero.title }}
            </h5>

            <div class="space32"></div>

            <h1 class="text-anime-style-3">{{ hero.tagline }}</h1>

            <div class="space24"></div>

            <h1 class="text-anime-style-3">
              <span class="conferences">
                {{ hero.edition }}
              </span>
            </h1>

            <div class="space40"></div>

            <div class="btn-area1">
              <a :href="hero.cta.link" class="vl-btn8">
                <span class="demo">{{ hero.cta.text }}</span>
                <span class="arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="arrow-btnarea">
      <a href="#">
        <div class="content">
          <h6 class="circle rotateme">
            <span style="transform: rotate(0deg);">F</span>
            <span style="transform: rotate(17deg);">U</span>
            <span style="transform: rotate(34deg);">T</span>
            <span style="transform: rotate(51deg);">U</span>
            <span style="transform: rotate(68deg);">R</span>
            <span style="transform: rotate(85deg);">E</span>
            <span style="transform: rotate(102deg);"> </span>
            <span style="transform: rotate(119deg);">F</span>
            <span style="transform: rotate(136deg);">O</span>
            <span style="transform: rotate(153deg);">R</span>
            <span style="transform: rotate(170deg);">W</span>
            <span style="transform: rotate(187deg);">A</span>
            <span style="transform: rotate(204deg);">R</span>
            <span style="transform: rotate(221deg);">D</span>
            <span style="transform: rotate(238deg);"> </span>
            <span style="transform: rotate(255deg);">S</span>
            <span style="transform: rotate(272deg);">U</span>
            <span style="transform: rotate(289deg);">M</span>
            <span style="transform: rotate(306deg);">M</span>
            <span style="transform: rotate(323deg);">I</span>
            <span style="transform: rotate(340deg);">T</span>
          </h6>
          <img src="/assets/img/icons/arrow1.svg" alt="" class="arrow1" />
        </div>
      </a>
    </div>

    <div class="date-btn aniamtion-key-1">
      <h4>{{ hero.date.split(',')[1] }}</h4>
      <div class="space14"></div>
      <p>{{ hero.date.split(',')[0] }}</p>
      <div class="space20"></div>
      <span>{{ hero.location }}</span>
    </div>
  </div>
</template>
