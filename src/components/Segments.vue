<script setup>
defineProps({
	segments: {
		type: Array,
		required: true
	}
})
</script>


<template>
	<!--===== SEGMENTS AREA STARTS =======-->
	<div class="choose-section-area"
		style="background-image: url(/assets/img/bg/header-bg8.png); background-position: center; background-repeat: no-repeat; background-size: cover">
		<div class="space14"></div>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 m-auto">
					<div class="heading2 text-center space-margin60">
						<h5 style="color: white;">The Segments</h5>
						<div class="space18"></div>
						<h2 style="color: white;">Three Radical Formats :</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div v-for="(segment, index) in segments" :key="index" class="col-lg-4 col-md-6">
					<div class="choose-widget-boxarea">
						<div class="icons" style="background-color: #D92B3A;">
							<img src="/assets/img/icons/choose-icons1.svg" alt="" />
						</div>
						<div class="space24"></div>
						<div class="content-area">
							<a href="#">{{ segment.title }}</a>
							<div class="space16"></div>
							<p>{{ segment.description }}</p>

							<ul v-if="segment.tracks">
								<li v-for="(track, i) in segment.tracks" :key="i">
									• {{ track }}
								</li>
							</ul>

							<p v-if="segment.format"><strong style="color: #D92B3A;">Format:</strong> {{ segment.format }}</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	<!--===== SEGMENTS AREA ENDS =======-->
</template>