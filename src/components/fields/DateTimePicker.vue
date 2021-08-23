<template>

  <!-- FIXME: DateTime info value is not displayed in the input after the component is rendered -->
  <!-- Perhaps the author of the package did not forward the necessary props -->

	<v-datetime-picker
    v-bind:value="value"
    v-on:input="handler"
    v-bind:okText="'next'"
    v-bind:label="element.label">
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
		methods: {
			handler(value) {
			  if (value) {
          this.$emit("input", value)
        }
			}
		}
  }

</script>

<style lang="sass">

  .v-picker__title
    border-top-left-radius: 0 !important
    border-top-right-radius: 0 !important

  .v-application--is-ltr .v-card__actions > .v-btn.v-btn + .v-btn
    color: #1976D2 !important

</style>