<script setup>
const props = defineProps({
	whoWeAre: {
		type: Object,
		default: () => ({ description: '', link: { text: '', url: '' } }),
	}
})
</script>


<template>
	<!--===== WHO WE ARE AREA STARTS =======-->
	<div class="about10-section-area sp1" style="background-color: #000238;">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="about10-images">
						<div class="img1" data-aos="zoom-in" data-aos-duration="1000">
							<img src="/assets/img/all-images/about/about-img7.png" alt="" />
						</div>
						<div class="img2" data-aos="zoom-in" data-aos-duration="1100">
							<img src="/assets/img/all-images/about/about-img8.png" alt="" />
						</div>
						<div class="img3" data-aos="zoom-in" data-aos-duration="1200">
							<img src="/assets/img/all-images/about/about-img9.png" alt="" />
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="about-header heading13">
						<h3 data-aos="fade-left" data-aos-duration="800">
							<img src="/assets/img/logo/logo-1.png" alt="" />
							Who We Are
						</h3>
						<div class="space18"></div>
						<p data-aos="fade-left" data-aos-duration="900">{{ whoWeAre.description }}</p>
						<div class="space12"></div>
						<div class="space32"></div>
						<div class="btn-area1" data-aos="fade-left" data-aos-duration="1200">
							<a :href="whoWeAre.link.url" class="vl-btn10">
								{{ whoWeAre.link.text }}
								<img src="/assets/img/icons/arrow2.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--===== WHO WE ARE AREA ENDS =======-->
</template>