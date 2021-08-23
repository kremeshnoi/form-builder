<template>

  <v-textarea
    ma-0
    counter
    outlined
    maxlength="500"
    v-bind:value="value"
    v-on:change="handler"
    v-bind:name="element.name"
    v-bind:label="element.label">
  </v-textarea>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "LongTextField",
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