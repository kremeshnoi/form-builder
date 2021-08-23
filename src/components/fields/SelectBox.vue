<template>

  <div v-if="element && element.items">
    <v-select
      ma-0
      outlined
      hide-details
      v-bind:value="value"
      v-on:change="handler"
      v-bind:name="element.name"
      v-bind:label="element.label"
      v-bind:items="element.items">
    </v-select>
  </div>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "SelectBox",
    props: ["value", "element"],
    methods: {
      ...mapMutations({
        updateFormElement: "UPDATE_FORM_ELEMENT"
      }),
      handler(value) {
        this.$emit("input", value)
      }
    }
  }

</script>
