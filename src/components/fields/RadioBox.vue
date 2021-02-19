<template>

  <!--RADIO BOX-->
  <div class="radio-box_">
    <p class="radio-box__label"> {{ element.label }} </p>
    <v-radio-group row hide-details>
      <v-radio
        :label="item"
        :value="value"
        :key="itemIndex"
        :name="element.name"
        @change="handler(item)"
        v-for="(item, itemIndex) in element.items">
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

  import { mapMutations } from "vuex";

  export default {
    name: "RadioBox",
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

<style lang="sass" scoped>

  // RADIO BOX
  .radio-box
    &__label
      color: rgba(0, 0, 0, 0.6)
      font-size: 16px

</style>