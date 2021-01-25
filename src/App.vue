<template>

	<v-app class="app">
		<router-view/>
	</v-app>

</template>

<script>

export default {
	name: "App"
};

</script>

<style lang="sass">

	.v-application--wrap
		min-height: 100% !important

</style>