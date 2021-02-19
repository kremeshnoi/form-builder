<template>

  <!-- NUMBER FIELD-->
  <v-text-field
    ma-0
    outlined
    hide-details
    type="number"
    :value="value"
    @change="handler"
    :name="element.name"
    :label="element.label">
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "NumberField",
    props: ["value", "element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT",
      }),
      handler(value) {
        this.$emit("input", value);
      }
    }
  }

</script>
