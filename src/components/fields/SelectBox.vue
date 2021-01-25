<template>

  <!--SELECT BOX-->

  <div class="select-box"
       v-if="element && element.items">
    <v-select class="select-box__select"
              :value="value"
              :name="element.name"
              :label="element.label"
              :items="element.items"
              ma-0
              outlined
              hide-details
              @change="handler">
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
