<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
    <!--===== code of conduct AREA STARTS =======-->
    <div class="attent10-section-area sp3" style="background-color: #000238">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="event6-widget-boxarea" data-aos="fade-left" data-aos-duration="1000">
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                <div class="content-area">
                                    <img src="/assets/img/logo/logo-8.png" alt=""
                                        style="height: 200px; width: 250px;" />
                                    <h3 class="text-anime-style-3" style="color: #000238;">Code of Conduct</h3>
                                    <div class="space16"></div>
                                    <p style="color: #000238;">{{ text }}</p>

                                </div>
                            </div>
                            <div class="col-lg-1"></div>
                            <div class="col-lg-6">
                                <div class="img1 image-anime">
                                    <img src="/assets/img/all-images/event/event-img5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--===== code of conduct AREA ENDS =======-->
</template>