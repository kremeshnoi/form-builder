<template>

  <!--DATE PICKER-->

  <div class="date-picker__container">
    <p class="date-picker__label"
       :name="element.name"
       :label="element.label"> {{ element.label }}
    </p>
    <v-date-picker class="date-picker"
                   v-model="picker"
                   :value="element.value"
                   elevation="4"
                   @change="handler(picker)">
    </v-date-picker>
  </div>

</template>

<script>

  import { mapMutations } from "vuex";

  export default {
    name: "DatePicker",
    props: ["element"],
    data() {
      return {
        picker: new Date().toISOString().substr(0, 10),
      }
    },
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

<style lang="sass" scoped>

  // DATE PICKER

  .date-picker
    width: min-content

    &__label
      font-size: 16px
      height: 20px
      line-height: 20px
      color: rgba(0, 0, 0, 0.6)

</style>