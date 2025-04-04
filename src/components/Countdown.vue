<script setup>
const props = defineProps({
  countdown: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <!--===== COUTDOWN AREA STARTS =======-->
	<div class="about8-section-area sp4"
		style="background-image: url(/assets/img/bg/header-bg8.png); background-position: center; background-repeat: no-repeat; background-size: cover">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6">
					<div class="space50 d-lg-none d-block"></div>
					<div class="about8-images">
						<img src="/assets/img/all-images/about/about-img10.png" alt=""
							class="about-img10 aniamtion-key-1" />
						<div class="img1" >
							<img src="/assets/img/all-images/about/about-img19.png" alt="" />
						</div>
						<div class="img2 aniamtion-key-1">
							<img src="/assets/img/all-images/about/about-img20.png" alt="" />
						</div>
						<div class="img3 aniamtion-key-1">
							<img src="/assets/img/all-images/about/about-img8.png" alt="" />
						</div>
					</div>
				</div>
				<div class="col-lg-2"></div>
				<div class="col-lg-4">
					<div class="space60 d-lg-none d-block"></div>
					<div class="side-img1-area">
						<!-- <img src="assets/img/all-images/about/about-img21.png" alt=""> -->
						<div class="counter-box">
							<h3>+20</h3>
							<p>Speakers</p>
						</div>
						<div class="img1">
							<img src="/assets/img/all-images/about/about-img22.png" alt="" />
						</div>
						<div class="img2">
							<img src="/assets/img/all-images/about/about-img23.png" alt="" />
						</div>
						<div class="img3">
							<img src="/assets/img/all-images/about/about-img24.png" alt="" />
						</div>
						<div class="img4">
							<img src="/assets/img/all-images/about/about-img25.png" alt="" />
						</div>

						<div class="counter-box2">
							<h3>+15</h3>
							<p>Session</p>
						</div>
						<div class="counter-box3">
							<h3>+12</h3>
							<p>Attendance</p>
						</div>

						<div class="counter-box4">
							<h3>+18</h3>
							<p>Sponsors</p>
						</div>
					</div>
					<div class="div d-lg-none d-block" style="margin-bottom: 200px"></div>
				</div>
			</div>
		</div>
		<div class="others8-section-area sp1">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 m-auto">
						<div class="heading11 text-center space-margin80">
							<h5>event day countdown</h5>
							<div class="space28"></div>
							<h2 class="text-anime-style-3">Countdown: Hurry Up!</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-3 col-md-6">
						<div class="cta-counter-box">
							<img src="/assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
                            <h2>{{ countdown.daysRemaining }}</h2>
                            <h3 style="line-height: 30px; text-align: center; color: white; margin-top: 20%;">Days</h3>
						</div>
						<div class="space50 d-lg-none d-block"></div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="cta-counter-box">
							<img src="/assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
							<h2>{{ countdown.hoursRemaining }}</h2>
                            <h3 style="line-height: 30px; text-align: center; color: white; margin-top: 20%;">Hours</h3>
						</div>
						<div class="space50 d-lg-none d-block"></div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="cta-counter-box">
							<img src="/assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
							<h2>{{ countdown.minutesRemaining }}</h2>
                            <h3 style="line-height: 30px; text-align: center; color: white; margin-top: 20%;">Minutes</h3>
						</div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="cta-counter-box">
							<img src="/assets/img/elements/elements23.png" alt="" class="elements23 keyframe5" />
							<h2>{{ countdown.secondsRemaining }}</h2>
                            <h3 style="line-height: 30px; text-align: center; color: white; margin-top: 20%;">Seconds</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--===== COUNTDOWN AREA ENDS =======-->
</template>