<template>

  <!--DASHBOARD-->

  <v-app class="dashboard">
    <v-main class="dashboard__main">
      <v-container class="dashboard__container"
                   fluid>
        <h1 class="dashboard__title"> Dashboard
        </h1>

        <!--CREATE PANEL-->

        <v-form @submit.prevent="onAdd()" class="dashboard__create-panel create-panel">
          <v-text-field class="create-panel__input"
                        v-model="title"
                        label="Form Title"
                        hide-details
                        filled>
          </v-text-field>

          <v-btn class="create-panel__button"
                 color="primary"
                 :disabled="title.length === 0"
                 type="submit"
                 large
                 depressed> Create
          </v-btn>
        </v-form>

        <!--DASHBOARD LIST-->

        <section class="dashboard__list dashboard-list">
          <v-card class="dashboard-list__card"
                  elevation="3"
                  outlined>

            <v-list class="dashboard-list__content">
              <v-subheader class="dashboard-list__subheader"
                           inset> Forms
              </v-subheader>
              <v-divider class="dashboard-list__divider"
                         inset>
              </v-divider>
              <v-subheader class="dashboard-list__subheader"
                           v-if="forms.length === 0"
                           inset> Nothing there...
              </v-subheader>

              <!--DRAGGABLE AREA-->

              <section class="dashboard-list__draggable-area draggable-area">
                <v-list-item class="draggable-area__item"
                             v-for="(item, itemIndex) in forms"
                             :key="itemIndex">

                  <v-list-item-avatar class="draggable-area__item-avatar">
                    <v-icon class="draggable-area__folder-icon grey lighten-1"
                            dark> mdi-folder
                    </v-icon>
                  </v-list-item-avatar>

                  <v-list-item-content class="draggable-area__item-content">
                    <v-list-item-title class="draggable-area__item-content-title"> {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>

                  <!--ACTION BUTTONS-->

                  <span class="draggable-area__action-buttons action-buttons">
                    <v-btn class="action-buttons__item"
                           text>
                      <router-link class="action-buttons__item-link"
                                   :to="'/forms/'+ item.uid">
                        <v-icon class="action-buttons__item-icon"> mdi-pencil
                        </v-icon> Edit
                      </router-link>
                    </v-btn>

                    <v-btn class="action-buttons__item"
                           @click="onDelete(item.uid)"
                           text>
                      <v-icon class="action-buttons__item-icon"> mdi-delete
                      </v-icon> Delete
                    </v-btn>

                    <v-btn class="action-buttons__item"
                           v-if="item.elements.length"
                           @click="onShowDemo(itemIndex)"
                           text>
                      <v-icon class="action-buttons__item-icon"> mdi-eye
                      </v-icon> Demo
                    </v-btn>
                  </span>
                </v-list-item>
              </section>
            </v-list>
          </v-card>
        </section>
      </v-container>
    </v-main>

    <DemoModal/>
  </v-app>

</template>

<script>

  import draggable from "vuedraggable";
  import { mapGetters, mapMutations } from "vuex";
  import DemoModal from "@/components/modals/DemoModal";

  export default {
    name: "DashboardPage",
    components: {
      DemoModal,
      draggable
    },
    data() {
      return {
        title: ""
      }
    },
    computed: {
      ...mapGetters({
        forms: "getForms",
        getCurrentForm: "getCurrentForm"
      })
    },
    methods: {
      ...mapMutations({
        createForm: "CREATE_FORM",
        deleteForm: "DELETE_FORM",
        setCurrentForm: "SET_DEMO_FORM"
      }),
      onAdd() {
        this.createForm(this.title);
        this.title = "";
      },
      onDelete(uid) {
        this.deleteForm(uid);
      },
      onShowDemo(index) {
        this.setCurrentForm(index);
      }
    }
  }

</script>

<style lang="sass" scoped>

  // DASHBOARD

  .dashboard
    padding: 40px 40px 40px 40px

  // CREATE PANEL

  .create-panel
    display: flex
    max-width: 600px
    justify-content: center
    align-items: center
    margin: 40px 0

    &__input
      margin: 0 20px 0 0

  // DASHBOARD LIST

  .dashboard-list
    display: grid
    grid-gap: 20px
    justify-content: flex-start
    grid-template-columns: 1fr

    &__title
      font-size: 32px
      margin: 0 0 40px 0

  // DRAGGABLE AREA

  .draggable-area
    &__item
      padding: 20px 0 20px 20px

    &__list-item
      margin: 40px 0 40px 0

  // ACTION BUTTONS

  .action-buttons
    &__item
      margin: 0 20px 0 0
      color: inherit

    &__item-icon
      margin: 0 10px 0 0

    &__item-link
      text-decoration: none
      color: inherit

</style>