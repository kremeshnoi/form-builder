<template>

  <v-file-input
    outlined
    show-size
    hide-details
    v-model="value"
    v-bind:value="value"
    v-on:change="handler"
    v-bind:name="element.name"
    v-bind:label="element.label">
  </v-file-input>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "Attachment",
    props: ["value", "element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT"
      }),
      handler(value) {
        this.$emit("input", value)
      }
    }
  }

</script>