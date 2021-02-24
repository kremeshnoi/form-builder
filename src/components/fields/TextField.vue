<template>

  <!--TEXT FIELD-->
  <v-text-field
    ma-0
    counter
    outlined
    :value="value"
    maxlength="100"
    @change="handler"
    :name="element.name"
    :label="element.label">
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
