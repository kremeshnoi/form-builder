<template>

  <!--DEMO MODAL-->
  <v-dialog
    persistent
    max-width="800"
    class="demo-modal"
    v-model="isVisible">

    <v-card v-if="!showResult">
      <v-toolbar dark color="primary" class="demo-modal__header">
        <v-btn icon dark @click="cancel()">
          <v-icon> mdi-close </v-icon>
        </v-btn>
        <v-toolbar-title> Demo </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <!--MODAL FORM CONTENT-->
      <div class="form-content">
        <h2> {{ currentForm.title }} </h2>

        <v-form class="form-content__elements">
          <keep-alive
            :key="itemIndex"
            v-for="(item, itemIndex) in currentForm.elements">

            <component
              :element="item"
              v-model="item.value"
              v-bind:is="item.type"
              class="form-content__element">
            </component>
          </keep-alive>
        </v-form>

        <v-btn @click="submit()"> Submit </v-btn>
      </div>
    </v-card>

    <!--PREVIEW-->
    <v-card class="preview" v-if="showResult">
      <h2 class="preview__title"> {{ currentForm.title }} </h2>

      <section class="preview__content">
        <div v-for="(item, itemIndex) in currentForm.elements" :key="itemIndex">
        <p class="preview__item"> {{ item.label }} : {{ item.value }} </p>
        </div>
      </section>

      <v-btn
        class="preview__button"
        @click="back()"> Back to edit
      </v-btn>
    </v-card>
  </v-dialog>

</template>

<script>

  import { mapMutations, mapState } from "vuex"
  import RadioBox from "@/components/fields/RadioBox"
  import TextField from "@/components/fields/TextField"
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
      TextField,
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
        clear: "CLEAR_DEMO_FORM"
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
        this.clear
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

  // DEMO MODAL
  .demo-modal
    width: auto !important
    &__header
      margin: 0 0 40px 0

  // FORM CONTENT
  .form-content
    padding: 0 40px 40px 40px
    &__elements
      margin: 40px 0 40px 0
    &__element
      margin: 40px 0 40px 0

  // PREVIEW
  .preview
    display: flex
    text-align: start
    align-items: center
    flex-direction: column
    padding: 40px 40px 40px 40px
    &__content
      width: 100%
    &__title
      font-size: 32px
      margin: 0 0 20px 0
    &__item
      font-size: 22px
      font-weight: 300
    &__button
      smargin: 20px 0 0 0

</style>