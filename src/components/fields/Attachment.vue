<template>

  <!--  ATTACHMENT-->

  <v-file-input class="attachment"
                :name="element.name"
                :label="element.label"
                :value="element.value"
                outlined
                show-size
                hide-details
                @change="handler">
  </v-file-input>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "Attachment",
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