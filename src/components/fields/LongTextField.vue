<template>

  <v-textarea
    ma-0
    counter
    outlined
    :value="value"
    maxlength="500"
    @change="handler"
    :name="element.name"
    :label="element.label">
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