<template>

  <!--TEXT FIELD-->

  <v-text-field class="v-text-field"
                :name="element.name"
                :label="element.label"
                :value="element.value"
                ma-0
                counter
                outlined
                maxlength="100"
                @change="handler">
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "TextField",
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
