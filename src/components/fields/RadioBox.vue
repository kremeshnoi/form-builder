<template>

  <!-- FIXME: Attachment info value is not displayed in the input after the component is rendered -->

  <div class="radio-box">
    <p class="radio-box__label"> {{ element.label }} </p>
    <v-radio-group row hide-details>
      <v-radio
        v-bind:key="value"
        v-bind:label="value"
        v-bind:value="value"
        v-bind:name="element.name"
        v-on:change="handler(value)"
        v-for="(value) in element.items">
      </v-radio>
      <v-radio
        disabled
        label="Disabled"
        value="Disabled"
        v-if="element.items.length === 0">
      </v-radio>
    </v-radio-group>
  </div>

</template>

<script>

  import { mapMutations } from "vuex"

  export default {
    name: "RadioBox",
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

<style lang="sass" scoped>

  .radio-box
    &__label
      font-size: 16px
      color: rgba(0, 0, 0, 0.6)

</style>