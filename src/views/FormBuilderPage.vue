<template>

  <!--FORM BUILDER-->

  <v-app class="form-builder">
    <v-main class="form-builder__main">
      <v-container class="form-builder__container">

        <!--NAVIGATION-->

        <v-system-bar class="form-builder__navigation navigation"
                      app>
          <router-link class="navigation__link"
                       to="/">
            <v-icon class="navigation__icon"> mdi-home
            </v-icon> Homepage
          </router-link>
          <v-spacer class="navigation__spacer">
          </v-spacer>
          <span class="navigation__title"> Form builder
          </span>
        </v-system-bar>

        <h1 class="form-builder__title"> Form Builder
          <span class="form-builder__title-id"
                v-if="formUid"> ID: {{ formUid }}
          </span>
        </h1>

        <!--FORM BUILDER SIDEBAR-->

<!--        <v-navigation-drawer class="form-builder__sidebar sidebar"-->
<!--                             app-->
<!--                             right>-->
<!--          <FormElements class="sidebar__elements"/>-->
<!--        </v-navigation-drawer>-->

        <!--FORM BUILDER MAIN AREA-->

<!--        <section class="form-builder__main-area">-->
<!--          <FormArea/>-->
<!--          <FormEditModal/>-->
<!--        </section>-->
      </v-container>
    </v-main>
  </v-app>

</template>

<script>

  import { mapMutations, mapGetters } from "vuex";
  // import FormElements from "@/components/FormElements";
  // import FormArea from "@/components/FormArea";
  // import FormEditModal from "@/components/modals/FormEditModal";

  export default {
    name: "FormBuilderPage",
    components: {
      // FormEditModal,
      // FormArea,
      // FormElements
    },
    data() {
      return {
        formUid: null
      }
    },
    computed: {
      ...mapGetters({
        getCurrentForm: "getCurrentForm",
        getCurrentElement: "getCurrentElement"
      })
    },
    methods: {
      ...mapMutations({
        setCurrentForm: "SET_CURRENT_FORM"
      })
    },
    mounted() {
      this.formUid = this.$route.params.id;
      this.setCurrentForm(this.formUid);
    }
  }

</script>

<style lang="sass">

  // FORM BUILDER

  .form-builder
    &__container
      padding: 20px 20px 20px 20px

    &__title
      margin: 0 0 40px 0

    &__sidebar
      padding: 20px 20px 20px 20px

    &__main-area
      display: flex
      justify-content: center
      align-items: center

  // NAVIGATION

  .navigation
    padding: 0 20px 0 20px

    &__link
      display: flex
      text-decoration: none

</style>