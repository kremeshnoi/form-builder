<template>

  <!--  SHORT TEXT FIELD-->

  <v-text-field class="short-text-field"
                :value="value"
                :name="element.name"
                :label="element.label"
                ma-0
                counter
                outlined
                maxlength="25"
                @change="handler"
  >
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "ShortTextField",
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

<style lang="sass" scoped>

  // SHORT TEXT FIELD

  .short-text-field
    max-width: 400px

</style>