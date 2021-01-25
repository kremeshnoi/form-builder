<template>

  <!--SELECT BOX-->

  <div class="select-box"
       v-if="element && element.items">
    <v-select class="select-box__select"
              :name="element.name"
              :label="element.label"
              :value="element.value"
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
    props: ["element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT"
      }),
      handler(value) {
        this.updateFormElement({ ...this.element, value });
      }
    }
  }

</script>
