<template>

  <!--FORM AREA-->

  <v-card class="form-area"
          v-if="getCurrentForm"
          elevation="3">
    <h2 class="form-area__title"> Edit: {{ getCurrentForm.title }}
    </h2>

    <!--DRAGGABLE AREA-->

    <draggable class="form-area__draggable-area draggable-area"
               :list="list"
               :sort="false"
               :group="{ name: 'form-area-elements', put: true }"
               :class="{ active: getCurrentForm.elements.length }"
               @add="onAdd"
               @start="drag=true"
               @end="drag=false">
      <v-subheader class="draggable-area__subheader"
                   v-if="getCurrentForm.elements.length === 0"> Drag here
      </v-subheader>
      <v-list-item class="draggable-area__item"
                   v-for="(item, itemIndex) in getCurrentForm.elements"
                   :key="itemIndex">

        <v-list-item-avatar class="draggable-area__item-avatar">
          <v-icon class="draggable-area__item-icon grey lighten-1"
                  dark> mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content class="draggable-area__item-content">
          <div class="draggable-area__item-info">
            <p class="draggable-area__item-description"> Type: {{ item.title }}
            </p>
            <p class="draggable-area__item-description"> Label: {{ item.label }}
            </p>
          </div>

          <!--ACTION BUTTONS-->

          <div class="draggable-area__action-buttons action-buttons">
            <v-btn class="action-buttons__item"
                   @click="onDelete(item)"
                   text>
              <v-icon class="action-buttons__item-icon"> mdi-delete
              </v-icon> Delete
            </v-btn>

            <v-btn class="action-buttons__item"
                   @click="onEdit(item)"
                   text>
              <v-icon class="action-buttons__item-icon"> mdi-pencil
              </v-icon> Edit
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </draggable>

    <!--FORM AREA SAVE BUTTON-->

    <v-btn class="form-area__save-button"
           @click="onSave()"
           text>
      <v-icon class="form-area__save-button-icon"> mdi-content-save
      </v-icon> Save
    </v-btn>
  </v-card>

</template>

<script>

  import draggable from "vuedraggable";
  import { mapGetters, mapMutations, mapActions } from "vuex";

  export default {
    name: "FormArea",
    data() {
      return {
        list: []
      }
    },
    components: {
      draggable
    },
    computed: {
      ...mapGetters({
        getCurrentForm: "getCurrentForm",
        getCurrentElement: "getCurrentElement",
        getElements: "getElements"
      })
    },
    methods: {
      ...mapMutations({
        deleteElementFromForm: "DELETE_ELEMENT_FROM_FORM",
        setCurrentElement: "SET_CURRENT_ELEMENT",
        addElementToForm: "ADD_ELEMENT_TO_FORM"
      }),
      ...mapActions({
        toggleModalState: "toggleModalState"
      }),
      onSave() {
        this.$router.push("/");
      },
      onDelete(element) {
        this.deleteElementFromForm(element);
      },
      onEdit(element) {
        this.toggleModalState();
        this.setCurrentElement(element);
      },
      onAdd(event) {
        this.addElementToForm(this.getElements[event.oldIndex]);
      }
    }
  }

</script>

<style lang="sass" scoped>

  // FORM AREA

  .form-area
    padding: 40px
    display: flex
    flex-direction: column
    align-items: center
    border-radius: 4px
    min-height: 90%
    max-width: 750px
    width: 100%

    &__save-button-icon
      margin: 0 10px 0 0

  // DRAGGABLE AREA

  .draggable-area
    padding: 20px 20px 20px 20px
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: column
    height: 100%
    width: 100%
    flex: 1
    border-radius: 4px
    border: 1px dotted rgba(0, 0, 0, 0.6)
    background-color: #ffd5eb
    color: rgba(0, 0, 0, 0.6)
    margin: 40px 0 40px 0

    &.active
      background-color: #ffff

    &__subheader
      user-select: none
      pointer-events: none

    &__item
      width: 100%

    &__item-info
      display: flex
      flex: 1
      flex-direction: column

    &__item-description
      margin: 0 0 10px 0

  // ACTION BUTTONS

  .action-buttons
    flex: 1 !important
    margin: 20px 0 0 0

    &__item-icon
      margin: 0 10px 0 0

</style>