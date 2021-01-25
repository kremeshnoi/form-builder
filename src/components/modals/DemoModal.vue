<template>

	<!--DEMO MODAL-->

  <v-dialog class="demo-modal"
            v-model="isVisible"
            persistent
            max-width="800">

    <v-card class="demo-modal__card" v-if="!showResult">
      <v-toolbar class="demo-modal__header"
                 dark
                 color="primary">
        <v-btn class="demo-modal__header-button"
               icon
               dark
               @click="cancel()">
          <v-icon class="demo-modal__header-button-icon"> mdi-close
          </v-icon>
        </v-btn>
        <v-toolbar-title class="demo-modal__header-title "> Demo
        </v-toolbar-title>
        <v-spacer class="demo-modal__header-space"></v-spacer>
      </v-toolbar>

			<!--MODAL FORM CONTENT-->

      <div class="demo-modal__form-content form-content">
        <h2 class="form-content__title"> {{ currentForm.title }}
        </h2>

        <v-form class="form-content__elements">
          <keep-alive class="form-content__elements-wrapper"
                      v-for="(item, itemIndex) in currentForm.elements"
                      :key="itemIndex">
            <component class="form-content__element"
                       v-model="item.value"
                       :element="item"
                       v-bind:is="item.type">

            </component>
          </keep-alive>
        </v-form>

        <v-btn class="demo-modal__submit"
               @click="submit()"> Submit
        </v-btn>
      </div>
    </v-card>

    <v-card class="demo-modal__preview preview"
            v-if="showResult">

      <h2 class="preview__title"> {{ currentForm.title }}
      </h2>

      <section class="preview__content">
        <div v-for="(item, itemIndex) in currentForm.elements"
             :key="itemIndex">
          <p class="preview__item"> {{ item.label }} : {{ item.value }} </p>
        </div>
      </section>

      <v-btn class="preview__back-button"
             @click="back()"> Back to edit
      </v-btn>
    </v-card>

  </v-dialog>

</template>

<script>

  import TextField from "@/components/fields/TextField";
  import ShortTextField from "@/components/fields/ShortTextField";
  import LongTextField from "@/components/fields/LongTextField";
  import NumberField from "@/components/fields/NumberField";
  import SelectBox from "@/components/fields/SelectBox";
  import RadioBox from "@/components/fields/RadioBox";
  import DateTimePicker from "@/components/fields/DateTimePicker";
  import Attachment from "@/components/fields/Attachment";
  import {mapMutations, mapState} from "vuex";

  export default {
    name: "DemoModal",
    components: {
      TextField,
      ShortTextField,
      LongTextField,
      NumberField,
      SelectBox,
      RadioBox,
	    DateTimePicker,
      Attachment
    },
    data() {
      return {
        showResult: false,
        isVisible: false,
        currentForm: {}
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
        this.currentForm = (value || {});
        this.isVisible = !!value;
      }
    },
    methods: {
      cancel() {
        this.clear;
      },
      submit() {
        this.showResult = true;
      },
      back() {
        this.showResult = false;
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
	  flex-direction: column
	  align-items: center
	  text-align: start
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
	    margin: 20px 0 0 0

</style>