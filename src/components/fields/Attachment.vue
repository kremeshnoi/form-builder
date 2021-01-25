<template>

  <!--  ATTACHMENT-->

  <v-file-input class="attachment"
                v-model="value"
                :value="value"
                :name="element.name"
                :label="element.label"
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