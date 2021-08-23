<template>

  <v-text-field
    ma-0
    counter
    outlined
    maxlength="100"
    v-bind:value="value"
    v-on:change="handler"
    v-bind:name="element.name"
    v-bind:label="element.label">
  </v-text-field>

</template>

<script>

  export default {
    name: "TextField",
    props: ["value", "element"],
    methods: {
      handler(value) {
        this.$emit("input", value)
      }
    }
  }

</script>
