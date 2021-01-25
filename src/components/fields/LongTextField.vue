<template>

  <!--LONG TEXT FIELD (TEXTAREA)-->

  <v-textarea class="long-text-field"
              :value="value"
              :name="element.name"
              :label="element.label"
              ma-0
              counter
              outlined
              maxlength="500"
              @change="handler">
  </v-textarea>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "LongTextField",
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