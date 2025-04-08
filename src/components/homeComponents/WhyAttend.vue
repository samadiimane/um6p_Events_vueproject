<script setup>
defineProps({
	points: {
		type: Array,
		default: () => [
			"Global Insights: Engage with 150+ leaders shaping work's evolution across continents",
			"Practical Frameworks: Take home actionable strategies for human-AI collaboration",
			"Unconventional Formats: Experience debate-driven sessions and hands-on workshops"
		]
	}
})
</script>

<template>
	<!--===== WHY ATTEND AREA STARTS =======-->
	<div class="choose-section-area"
		style="background-image: url(/assets/img/bg/header-bg8.png); background-position: center; background-repeat: no-repeat; background-size: cover">
		<div class="space14"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-4 m-auto">
					<div class="heading2 text-center space-margin60">
						<h5 style="color: white;">why choose us</h5>
						<div class="space18"></div>
						<h2 style="color: white;">Why Attend Event?</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div v-for="(point, index) in points" :key="index" class="col-lg-4 col-md-6">
					<div class="choose-widget-boxarea">
						<div class="icons" style="background-color: #D92B3A;">
							<img src="/assets/img/logo/logo-1.png" alt="" />
						</div>
						<div class="space24"></div>
						<div class="content-area">
							<h3>{{ point.split(':')[0] }}</h3>
							<div class="space16"></div>
							<p>{{ point.split(':')[1] }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--===== WHY ATTEND AREA ENDS =======-->
</template>