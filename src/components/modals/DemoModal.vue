<template>

  <v-dialog
    persistent
    max-width="800"
    class="demo-modal"
    v-model="isVisible">

    <v-card v-if="!showResult" rounded="0">
      <v-toolbar dark color="primary" class="demo-modal__header">
        <v-btn icon dark v-on:click="cancel()">
          <v-icon> mdi-close </v-icon>
        </v-btn>
        <v-toolbar-title> Demo </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <div class="form-content">
        <h2> {{ currentForm.title }} </h2>

        <v-form class="form-content__elements">
          <keep-alive
            v-bind:key="itemIndex"
            v-for="(item, itemIndex) in currentForm.elements">

            <component
              v-bind:element="item"
              v-model="item.value"
              v-bind:is="item.type"
              class="form-content__element">
            </component>
          </keep-alive>
        </v-form>

        <v-btn v-on:click="submit()"> Submit </v-btn>
      </div>
    </v-card>

    <v-card class="preview" v-if="showResult">
      <h2 class="preview__title"> {{ currentForm.title }} </h2>

      <section class="preview__content">
        <div v-for="(item, itemIndex) in currentForm.elements" v-bind:key="itemIndex">
          <p class="preview__item" v-if="item.value && item.value.url" >
            <img class="preview__image" v-bind:src="item.value.url" alt="image">
          </p>
          <p v-else class="preview__item"> <strong>{{ item.label }}</strong> : {{ item.value }} </p>
        </div>
      </section>

      <v-btn
        class="preview__button"
        v-on:click="back()"> Back to edit
      </v-btn>
    </v-card>
  </v-dialog>

</template>

<script>

  import { mapMutations, mapState } from "vuex"
  import RadioBox from "@/components/fields/RadioBox"
  import SelectBox from "@/components/fields/SelectBox"
  import Attachment from "@/components/fields/Attachment"
  import NumberField from "@/components/fields/NumberField"
  import LongTextField from "@/components/fields/LongTextField"
  import ShortTextField from "@/components/fields/ShortTextField"
  import DateTimePicker from "@/components/fields/DateTimePicker"

  export default {
    name: "DemoModal",
    components: {
      RadioBox,
      SelectBox,
      Attachment,
      NumberField,
      LongTextField,
      DateTimePicker,
      ShortTextField
    },
    data() {
      return {
        currentForm: {},
        isVisible: false,
        showResult: false
      }
    },
    computed: {
      ...mapState({
        form: (state) => state.formsModule.demoForm
      }),
      ...mapMutations({
        clearDemoForm: "CLEAR_DEMO_FORM"
      })
    },
    watch: {
      form(value){
        this.isVisible = !!value
        this.currentForm = (value || {})
      }
    },
    methods: {
      cancel() {
        this.clearDemoForm
      },
      submit() {
        this.showResult = true
      },
      back() {
        this.showResult = false
      }
    }
  }

</script>

<style lang="sass" scoped>

  .demo-modal
    width: auto !important
    &__header
      margin: 0 0 40px 0
      border-top-right-radius: 0 !important

  .form-content
    padding: 0 40px 40px 40px
    &__elements
      margin: 40px 0 40px 0
    &__element
      margin: 40px 0 40px 0

  .preview
    display: flex
    text-align: start
    align-items: center
    flex-direction: column
    padding: 40px 40px 40px 40px
    &__content
      width: 100%
    &__title
      width: 100%
      font-size: 32px
      margin: 0 0 20px 0
    &__item
      font-size: 22px
      font-weight: 300
    &__image
      width: 100%
      max-width: 240px
    &__button
      width: 100%
      margin: 20px 0 0 0

</style>