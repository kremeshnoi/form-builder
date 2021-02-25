<template>

  <!--DASHBOARD-->
  <v-app class="dashboard">
    <v-main>
      <v-container fluid>
        <h1> Dashboard </h1>

        <!--CREATE PANEL-->
        <v-form class="create-panel" @submit.prevent="onAdd()">
          <v-text-field
            filled
            hide-details
            v-model="title"
            label="Form Title"
            class="create-panel__input">
          </v-text-field>
          <v-btn
            large
            depressed
            type="submit"
            color="primary"
            :disabled="title.length === 0"> Create
          </v-btn>
        </v-form>

        <!--DASHBOARD LIST-->
        <section class="dashboard-list">
          <v-card elevation="3" outlined>
            <v-list>
              <v-subheader inset> Forms
              </v-subheader>
              <v-divider inset>
              </v-divider>
              <v-subheader
                inset
                v-if="getForms.length === 0"> Nothing there...
              </v-subheader>

              <!--DRAGGABLE AREA-->
              <section class="draggable-area">
                <v-list-item
                  :key="itemIndex"
                  class="draggable-area__item"
                  v-for="(item, itemIndex) in getForms">
                  <v-list-item-avatar>
                    <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title> {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>

                  <!--ACTION BUTTONS-->
                  <span class="action-buttons">
                    <v-btn class="action-buttons__item" text>
                      <router-link class="action-buttons__item-link" :to="'/forms/'+ item.uid">
                        <v-icon class="action-buttons__item-icon"> mdi-pencil </v-icon>
                        Edit
                      </router-link>
                    </v-btn>
                    <v-btn class="action-buttons__item" @click="onDelete(item.uid)" text>
                      <v-icon class="action-buttons__item-icon"> mdi-delete </v-icon>
                      Delete
                    </v-btn>
                    <v-btn
                      text
                      v-if="item.elements.length"
                      class="action-buttons__item"
                      @click="onShowDemo(itemIndex)">
                      <v-icon class="action-buttons__item-icon"> mdi-eye </v-icon>
                      Demo
                    </v-btn>
                  </span>
                </v-list-item>
              </section>
            </v-list>
          </v-card>
        </section>
      </v-container>
    </v-main>

    <!--DEMO MODAL-->
    <DemoModal/>
  </v-app>

</template>

<script>

  import draggable from "vuedraggable"
  import { mapGetters, mapMutations } from "vuex"
  import DemoModal from "@/components/modals/DemoModal"

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
        getForms: "getForms",
        getCurrentForm: "getCurrentForm"
      })
    },
    methods: {
      ...mapMutations({
        createForm: "CREATE_FORM",
        deleteForm: "DELETE_FORM",
        setDemoForm: "SET_DEMO_FORM"
      }),
      onAdd() {
        this.createForm(this.title)
        this.title = ""
      },
      onDelete(uid) {
        this.deleteForm(uid)
      },
      onShowDemo(index) {
        this.setDemoForm(index)
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
    margin: 40px 0
    max-width: 600px
    align-items: center
    justify-content: center
    &__input
      margin: 0 20px 0 0

  // DASHBOARD LIST
  .dashboard-list
    display: grid
    grid-gap: 20px
    grid-template-columns: 1fr
    justify-content: flex-start

  // DRAGGABLE AREA
  .draggable-area
    &__item
      padding: 20px 0 20px 20px

  // ACTION BUTTONS
  .action-buttons
    &__item
      color: inherit
      margin: 0 20px 0 0
    &__item-icon
      margin: 0 10px 0 0
    &__item-link
      color: inherit
      text-decoration: none

</style>