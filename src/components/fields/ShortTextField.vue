<template>

  <v-text-field
    ma-0
    counter
    outlined
    :value="value"
    maxlength="25"
    @change="handler"
    :name="element.name"
    :label="element.label"
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