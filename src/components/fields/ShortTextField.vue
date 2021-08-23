<template>

  <v-text-field
    ma-0
    counter
    outlined
    maxlength="25"
    v-bind:value="value"
    v-on:change="handler"
    v-bind:name="element.name"
    v-bind:label="element.label"
    class="short-text-field">
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "ShortTextField",
    props: ["value", "element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT",
      }),
      handler(value) {
        this.$emit("input", value)
      }
    }
  }

</script>

<style lang="sass" scoped>

  .short-text-field
    max-width: 400px

</style>