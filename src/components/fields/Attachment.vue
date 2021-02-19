<template>

  <!--  ATTACHMENT-->
  <v-file-input
    outlined
    show-size
    hide-details
    :value="value"
    v-model="value"
    @change="handler"
    :name="element.name"
    :label="element.label">
  </v-file-input>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "Attachment",
    props: ["value", "element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT"
      }),
      handler(value) {
        this.$emit("input", value);
      }
    }
  }

</script>