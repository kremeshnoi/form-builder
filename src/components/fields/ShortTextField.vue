<template>

  <!--  SHORT TEXT FIELD-->

  <v-text-field class="short-text-field"
                :name="element.name"
                :label="element.label"
                :value="element.value"
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
    props: ["element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT",
      }),
      handler(value) {
        this.updateFormElement({ ...this.element, value });
      }
    }
  }

</script>

<style lang="sass" scoped>

  // SHORT TEXT FIELD

  .short-text-field
    max-width: 400px

</style>