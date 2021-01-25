<template>

  <!-- NUMBER FIELD-->

  <v-text-field class="number-filed"
                :name="element.name"
                :label="element.label"
                :value="element.value"
                ma-0
                outlined
                hide-details
                type="number"
                @change="handler">
  </v-text-field>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "NumberField",
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
