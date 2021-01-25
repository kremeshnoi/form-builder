<template>

  <!--RADIO BOX-->

  <div class="radio-box_">
    <p class="radio-box__label"> {{ element.label }}
    </p>
    <v-radio-group class="radio-box__group"
                   row
                   hide-details>

      <v-radio class="radio-box__item"
               v-for="(item, itemIndex) in element.items"
               :value="value"
               :name="element.name"
               :label="item"
               :key="itemIndex"
               @change="handler(item)">
      </v-radio>

      <v-radio class="radio-box__item radio-box__item_disabled"
               v-if="element.items.length === 0"
               label="Disabled"
               value="Disabled"
               disabled>
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