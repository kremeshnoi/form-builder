<template>

  <!-- FIXME: Attachment info value is not displayed in the input after the component is rendered -->

  <v-file-input
    outlined
    show-size
    hide-details
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
        if (value) {
          // FIXME: Handle create object url error
          const url = URL.createObjectURL(value)
          this.$emit("input", { value, url })
        }
      }
    }
  }

</script>