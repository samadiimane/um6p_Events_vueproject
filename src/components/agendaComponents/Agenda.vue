<script setup>
import { onMounted, nextTick } from 'vue'

const props = defineProps({
  data: Object
});

onMounted(async () => {
  await nextTick();
  if (window.AOS) {
    window.AOS.refreshHard();
    console.log('[AOS] Refreshed on dynamic mount.');
  }
})
</script>

<template>
  <div class="event8-section-area sp1" style="background-color: #000238;" v-if="data?.days?.length">
    <div class="container">
      <!-- TABS HEADER -->
      <div class="row">
        <div class="col-lg-10 m-auto">
          <div class="event8-header space-margin60">
            <div class="tabs-button">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li v-for="(day, index) in data.days" :key="index" class="nav-item" role="presentation">
                  <button 
                    class="nav-link" 
                    :class="{ active: index === 0 }" 
                    :id="`pills-day${index}-tab`"
                    data-bs-toggle="pill" 
                    :data-bs-target="`#pills-day${index}`" 
                    type="button" 
                    role="tab"
                    :aria-controls="`pills-day${index}`" 
                    :aria-selected="index === 0 ? 'true' : 'false'">
                    <span class="calender">
                      <img src="/assets/img/icons/calender2.svg" alt="" />
                    </span>
                    <span class="pl-8">
                      <span class="day">Day {{ index + 1 }}</span>
                      <span class="date">{{ day.date }}</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Download Button -->
            <div class="btn-area" v-if="data.overview?.downloadLink">
              <div class="btn-area1">
                <a class="vl-btn8" :href="data.overview.downloadLink" download>
                  <span class="demo">
                    Download Full Agenda <i class="fa-solid fa-download"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TABS CONTENT -->
      <div class="row">
        <div class="col-lg-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="tab-content" id="pills-tabContent">
            <div 
              v-for="(day, index) in data.days" 
              :key="'content-' + index" 
              :id="`pills-day${index}`"
              class="tab-pane fade" 
              :class="{ show: index === 0, active: index === 0 }" 
              role="tabpanel"
              :aria-labelledby="`pills-day${index}-tab`" 
              tabindex="0">

              <div class="event-widget-area">
                <!-- Loop through events -->
                <div class="row" v-for="(event, i) in day.events" :key="i" style="margin-bottom: 2rem;">
                  <div class="col-lg-10 m-auto">
                    <div class="event2-boxarea box1 p-4">
                      <div class="row align-items-center">
                        <div class="col-lg-10">
                          <div class="content-area">
                            <h3>{{ event.title }}</h3>
                          </div>
                           <!-- Sessions block moved inside the event loop -->
                      <div class="row" v-if="event.sessions?.length" style="margin-top: 2rem;">
                        <div class="col-lg-10 m-auto">
                          <div class="event2-boxarea box1 p-4">
                            <div class="content-area">
                              <h5>Sessions</h5>
                              <ul 
                                v-for="(session, j) in event.sessions" 
                                :key="j" 
                                class="mt-3" 
                                style="list-style: none; padding-left: 0;">
                                <li>• {{ session }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- End sessions block -->
                        </div>
                        <div class="col-lg-2">
                          <div class="img1">
                            <img src="/assets/img/all-images/event/event-img22.png" style="height: 70px; width: 150px;" alt="" />
                          </div>
                        </div>
                        <div class="space22"></div>
                        <div class="col-lg-12">
                          <div class="list">
                            <ul>
                              <li class="content-area">
                                   <h5><img src="/assets/img/icons/clock1.svg" alt="" />&nbsp; {{ event.time }}</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End event loop -->
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
