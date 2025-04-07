<script setup>
import { onMounted, nextTick } from 'vue'

const props = defineProps({
	whoWeAre: {
		type: Object,
		default: () => ({
			description: '',
			link: { text: '', url: '' },
		}),
	},
})

onMounted(async () => {
	await nextTick()
	if (window.AOS) {
		window.AOS.refreshHard()
		console.log('[AOS] Refreshed on dynamic mount.')
	}
})
</script>

<template>
	<div class="about10-section-area sp1" style="background-color: #000238;">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="about10-images">
						<div class="img1" data-aos="zoom-in" data-aos-duration="1000">
							<img src="/assets/img/all-images/about/about-img7.png" alt="About 1" />
						</div>
						<div class="img2" data-aos="zoom-in" data-aos-duration="1100">
							<img src="/assets/img/all-images/about/about-img8.png" alt="About 2" />
						</div>
						<div class="img3" data-aos="zoom-in" data-aos-duration="1200">
							<img src="/assets/img/all-images/about/about-img9.png" alt="About 3" />
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="about-header heading13">
						<h3 data-aos="fade-left" data-aos-duration="800">
							<img src="/assets/img/logo/logo-1.png" alt="Logo" />
							Who We Are
						</h3>
						<div class="space18"></div>

						<p data-aos="fade-left" data-aos-duration="900">
							{{ whoWeAre.description }}
						</p>

						<div class="space12"></div>
						<div class="space32"></div>
						<div
							v-if="whoWeAre.link.text && whoWeAre.link.url"
							class="btn-area1"
							data-aos="fade-left"
							data-aos-duration="1200"
						>
							<a :href="whoWeAre.link.url" class="vl-btn10">
								{{ whoWeAre.link.text }}
								<img src="/assets/img/icons/arrow2.svg" alt="Arrow Icon" />
							</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>