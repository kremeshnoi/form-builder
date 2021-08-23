<template>

  <v-text-field
    ma-0
    outlined
    hide-details
    type="number"
    v-bind:value="value"
    v-on:change="handler"
    v-bind:name="element.name"
    v-bind:label="element.label">
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "NumberField",
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
