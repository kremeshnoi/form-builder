<template>
  <!--FORM BUILDER-->
  <v-app class="form-builder">
    <v-main class="form-builder__main">
      <v-container class="form-builder__container">
        <v-btn class="sidebar__toggle sidebar__toggle_left"
               v-if="!drawer"
               @click.stop="drawer = !drawer"
               text>
          <v-icon class="sidebar__toggle-icon"> mdi-chevron-left
          </v-icon>
        </v-btn>
        <!--NAVIGATION-->
        <v-system-bar class="form-builder__navigation navigation"
                      app>
          <router-link class="navigation__link"
                       to="/">
            <v-icon class="navigation__icon"> mdi-home
            </v-icon>
            Homepage
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
        <v-navigation-drawer class="form-builder__sidebar sidebar"
                             v-model="drawer"
                             app
                             right>
          <v-btn class="sidebar__toggle"
                 @click.stop="drawer = !drawer"
                 text>
            <v-icon> mdi-chevron-right</v-icon>
          </v-btn>
          <FormElements class="sidebar__elements"/>
        </v-navigation-drawer>
        <!--FORM BUILDER MAIN AREA-->
        <section class="form-builder__main-area">
          <FormArea/>
          <FormEditModal/>
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import {mapMutations, mapGetters} from "vuex";
import FormElements from "@/components/FormElements";
import FormArea from "@/components/FormArea";
import FormEditModal from "@/components/modals/FormEditModal";

export default {
  name: "FormBuilderPage",
  components: {
    FormEditModal,
    FormArea,
    FormElements
  },
  data() {
    return {
      formUid: null,
      drawer: null
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
  created() {
    this.setCurrentForm(this.$route.params.id);
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
// SIDEBAR
.sidebar
  &__toggle
    margin: 0 0 10px 0
    padding: 0 !important
    height: 20px !important
    min-width: 20px !important

    &_left
      top: 20px
      right: 20px
      position: absolute
</style>