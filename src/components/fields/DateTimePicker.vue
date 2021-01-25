<template>

	<v-datetime-picker :label="element.label"
	                   v-model="datetime"
	                   @input="handler">

		<template slot="dateIcon">
			<v-icon> mdi-calendar </v-icon>
		</template>

		<template slot="timeIcon">
			<v-icon>mdi-alarm</v-icon>
		</template>

	</v-datetime-picker>

</template>

<script>

	export default {
		props: ["value", "element"],
		name: "DateTimePicker",
		data () {
			return {
				datetime: null
			}
		},
		methods: {
			handler(value) {
				this.$emit("input", value);
			}
		}
	}

</script>
