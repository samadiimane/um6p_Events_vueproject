<script setup>
const props = defineProps({
  mission: {
    type: String,
    default: ''
  }
})
</script>

<template>
    <!--===== OUR MISSION AREA STARTS =======-->
	<div class="attent10-section-area sp3" style="background-color: #000238">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 m-auto">
					<div class="heading13 text-center">
						<h3 class="m-3"><img src="/assets/img/logo/logo-1.png" alt="" />OUR MISSION</h3>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="event6-widget-boxarea" data-aos="fade-left" data-aos-duration="1000">
						<div class="row align-items-center">
							<div class="col-lg-5">
								<div class="content-area">
									<h3 class="text-anime-style-3" style="color: #000238;">Future Forward Summit</h3>
									<div class="space16"></div>
									<p style="color: #000238;">{{ mission }}</p>

								</div>
							</div>
							<div class="col-lg-1"></div>
							<div class="col-lg-6">
								<div class="img1 image-anime">
									<img src="/assets/img/all-images/event/event-img25.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--===== OUR MISSION AREA ENDS =======-->
</template>