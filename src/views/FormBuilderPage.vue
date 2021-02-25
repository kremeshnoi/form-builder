<template>

  <v-app class="form-builder">
    <v-main>
      <v-container class="form-builder__container">
        <v-btn
          text
          v-if="!drawer"
          @click.stop="drawer = !drawer"
          class="sidebar__toggle sidebar__toggle_left">
          <v-icon> mdi-chevron-left </v-icon>
        </v-btn>

        <v-system-bar class="navigation" app>
          <router-link class="navigation__link" to="/">
            <v-icon> mdi-home </v-icon>
            Homepage
          </router-link>
          <v-spacer></v-spacer>
          <span> Form builder </span>
        </v-system-bar>
        <h1> Form Builder
          <span v-if="formUid"> ID: {{ formUid }} </span>
        </h1>

        <v-navigation-drawer
          app
          right
          v-model="drawer"
          class="form-builder__sidebar sidebar">
          <v-btn
            text
            class="sidebar__toggle"
            @click.stop="drawer = !drawer">
            <v-icon> mdi-chevron-right</v-icon>
          </v-btn>
          <FormElements/>
        </v-navigation-drawer>

        <section class="form-builder__main-area">
          <FormArea/>
          <FormEditModal/>
        </section>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>

  import FormArea from "@/components/FormArea"
  import { mapMutations, mapGetters } from "vuex"
  import FormElements from "@/components/FormElements"
  import FormEditModal from "@/components/modals/FormEditModal"

  export default {
    name: "FormBuilderPage",
    components: {
      FormArea,
      FormElements,
      FormEditModal
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
      this.setCurrentForm(this.$route.params.id)
    }
  }

</script>

<style lang="sass">

.form-builder
  &__main-area
    display: flex
    align-items: center
    justify-content: center
  &__sidebar
    padding: 20px 20px 20px 20px
  &__container
    padding: 20px 20px 20px 20px

.navigation
  padding: 0 20px 0 20px
  &__link
    display: flex
    text-decoration: none

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