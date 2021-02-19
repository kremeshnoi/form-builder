<template>

  <!--SELECT BOX-->
  <div v-if="element && element.items">
    <v-select
      ma-0
      outlined
      hide-details
      :value="value"
      @change="handler"
      :name="element.name"
      :label="element.label"
      :items="element.items">
    </v-select>
  </div>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "SelectBox",
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
