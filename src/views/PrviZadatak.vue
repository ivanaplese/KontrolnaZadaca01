<template>
	<v-container fill-height fluid class="background">
		<v-row>
			<v-col cols="12">
				<v-card class="pa-3" outlined width="600px">
					<v-card-title></v-card-title>
					<v-card-text>
						<v-form></v-form>
					</v-card-text>
					<v-card-actions>
						<v-btn
							color="black"
							class="white--text"
							elevation="0"
							@click="obrisiSveUnesenePodatke">
							BRISI PODATKE
						</v-btn>
						<v-spacer></v-spacer>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<template>
	<v-card class="mx-auto" max-width="344" title="Dodaj studenta">
		<v-container>
			<v-text-field v-model="first" color="primary" label="Ime" variant="underlined"></v-text-field>

			<v-text-field v-model="last" color="primary" label="Prezime" variant="underlined"></v-text-field>

			<v-text-field v-model="email" color="primary" label="Broj dolazaka" variant="underlined"></v-text-field>

			<v-text-field v-model="password" color="primary" label="Rezultati prvog kolokvija" placeholder=""
				variant="underlined"></v-text-field>
			<v-text-field v-model="email" color="primary" label="Rezultat drugog kolokvija"
				variant="underlined"></v-text-field>
			<v-text-field v-model="email" color="primary" label="Kontinuirano pracenje" variant="underlined"></v-text-field>


		</v-container>

		<v-divider></v-divider>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn :disabled="isDisabled" color="success">
				Brisi podatke
				<v-icon icon="mdi-chevron-right" end></v-icon>
			</v-btn>

			<v-btn color="success">
				Očisti
				<v-icon icon="mdi-chevron-right" end></v-icon>
			</v-btn>

			<v-btn color="success">
				OK
				<v-icon icon="mdi-chevron-right" end></v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	name: "prvi-zadatak",
	data() {
		return {};
	},
	watch: {},
	methods: {
		ocistiFormu() { },
		dodajStudenta() {
			let noviStudent = {
				//Dodaj propertyje
			};
			//ovo ne diraj
			let studenti = JSON.parse(localStorage.getItem("studenti"));
			if (!studenti) {
				studenti = [];
			}
			studenti.push(noviStudent);
			localStorage.setItem("studenti", JSON.stringify(studenti));
		},
		obrisiSveUnesenePodatke() {
			localStorage.clear();
		},
	},
};
</script>
