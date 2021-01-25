<template>

  <!-- NUMBER FIELD-->

  <v-text-field class="number-filed"
                :value="value"
                :name="element.name"
                :label="element.label"
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
