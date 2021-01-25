<template>

  <!--LONG TEXT FIELD (TEXTAREA)-->

  <v-textarea class="long-text-field"
              :name="element.name"
              :label="element.label"
              :value="element.value"
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