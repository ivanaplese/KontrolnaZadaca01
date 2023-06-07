<template>
	<v-app>
		<v-app-bar app flat color="white">
			<v-img
				alt="Logo"
				class="shrink mr-3"
				contain
				src="../src/assets/fipu_hr.png"
				transition="scale-transition"
				width="250" />
			<v-btn class="mr-3" text tile to="/prvi">#1 Zadatak</v-btn>
			<v-btn class="mr-3" text tile to="/drugi">#2 Zadatak</v-btn>
			<v-spacer></v-spacer>
			<v-slider
				v-if="isTaskShown"
				v-model="taskHeight"
				class="mr-3"
				hide-details
				color="red darken-3"
				label="H"
				min="100"
				max="2400"></v-slider>
			<v-slider
				v-if="isTaskShown"
				v-model="taskWidth"
				class="mr-3"
				hide-details
				color="red darken-3"
				label="W"
				min="100"
				max="800"></v-slider>
			<v-checkbox
				v-model="isTaskShown"
				class="mr-3"
				hide-details
				color="red darken-3"></v-checkbox>
		</v-app-bar>
		<v-main>
			<div class="contain">
				<div class="top-content">
					<definicija-zadatka
						v-if="isTaskShown"
						:viewName="currentView"
						:height="taskHeight"
						:width="taskWidth" />
				</div>
				<div class="main-content">
					<router-view />
				</div>
			</div>
		</v-main>
	</v-app>
</template>

<script>
import DefinicijaZadatka from "./components/DefinicijaZadatka.vue";
export default {
	name: "App",
	components: {
		DefinicijaZadatka,
	},
	data() {
		return {
			isTaskShown: false,
			taskHeight: 300,
			taskWidth: 500,
			currentView: this.$route.name,
		};
	},
	methods: {},
	watch: {
		$route: function () {
			this.currentView = this.$route.name;
		},
	},
	mounted() {},
};
</script>
<style>
.contain {
	position: relative;
	width: 100%;
	height: 100%;
}
.top-content {
	position: absolute;
	top: 2%;
	left: 2%;
	z-index: 2;
}
.main-content {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
</style>
