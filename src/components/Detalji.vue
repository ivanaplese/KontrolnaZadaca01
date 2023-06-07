<template>
	<v-dialog width="400" height="600">
		<v-container>
			<v-row class="text-center">
				<v-col cols="12" class="pa-0">
					<v-card outlined class="pa-3">
						<v-card-title></v-card-title>
						<v-card-text></v-card-text>
						<v-card-actions></v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-dialog>
</template>
<script>
export default {
	name: "Detalji",
	props: [],
	data() {
		return {};
	},
	methods: {
		zatvoriFormu() {},
		popuniPolja() {},
	},
	created() {},
};
</script>
