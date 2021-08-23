<template>

  <v-card
    elevation="3"
    class="form-area"
    v-if="currentForm">
    <h2> Edit: {{ currentForm.title }} </h2>

    <draggable
      v-on:add="onAdd"
      v-on:end="onDragEnd"
      class="draggable-area"
      v-bind:group="{ name: 'form-area-elements', put: true }"
      v-bind:class="{ active: currentForm.elements.length }">
      <v-subheader
        class="draggable-area__subheader"
        v-if="!currentForm.elements.length">
        Drag here
      </v-subheader>
      <v-list-item
        v-bind:key="item.uid"
        class="draggable-area__item"
        v-for="item in currentForm.elements">

        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <div class="draggable-area__item-info">
            <p class="draggable-area__item-description"> Type: {{ item.type }} </p>
            <p class="draggable-area__item-description"> Label: {{ item.label }} </p>
          </div>

          <div class="action-buttons">
            <v-btn
              text
              v-on:click="onDelete(item)">
              <v-icon class="action-buttons__icon"> mdi-delete </v-icon>
              Delete
            </v-btn>

            <v-btn
              text
              v-on:click="onEdit(item)">
              <v-icon class="action-buttons__icon"> mdi-pencil </v-icon>
              Edit
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </draggable>

    <v-btn
      text
      v-on:click="onSave()">
      <v-icon class="form-area__save-button-icon"> mdi-content-save </v-icon> Save
    </v-btn>
  </v-card>

</template>

<script>

  import draggable from "vuedraggable"
  import { mapState, mapMutations } from "vuex"

  export default {
    name: "FormArea",
    components: {
      draggable
    },
    computed: {
      ...mapState({
        elements: state => state.elementsModule.elements,
        currentForm: state => state.formsModule.currentForm
      })
    },
    methods: {
      ...mapMutations({
        reorderElements: "REORDER_ELEMENTS",
        saveCurrentForm: "SAVE_CURRENT_FORM",
        addElementToForm: "ADD_ELEMENT_TO_FORM",
        setCurrentForm: "SET_CURRENT_ELEMENT",
        deleteElementFromForm: "DELETE_ELEMENT_FROM_FORM"
      }),
      onSave() {
        this.saveCurrentForm()
        this.$router.push("/")
      },
      onDelete(element) {
        this.deleteElementFromForm(element)
      },
      onEdit(element) {
        this.setCurrentForm(element)
      },
      onAdd(event) {
        const type = this.elements[event.oldIndex].type
        this.setCurrentForm({
          type,
          index: event.newIndex,
          items: ["RadioBox", "SelectBox"].includes(type) ? [] : undefined
        })
      },
      onDragEnd({ newIndex, oldIndex }) {
        this.reorderElements({ oldIndex, newIndex, element: this.currentForm.elements[oldIndex]})
      }
    }
  }

</script>

<style lang="sass" scoped>

  .form-area
    width: 100%
    padding: 40px
    display: flex
    min-height: 90%
    max-width: 750px
    border-radius: 4px
    align-items: center
    flex-direction: column
    &__save-button-icon
      margin: 0 10px 0 0

  .draggable-area
    flex: 1
    width: 100%
    height: 100%
    display: flex
    border-radius: 4px
    align-items: center
    margin: 40px 0 40px 0
    flex-direction: column
    background-color: #ffd5eb
    color: rgba(0, 0, 0, 0.6)
    justify-content: flex-start
    padding: 20px 20px 20px 20px
    border: 1px dotted rgba(0, 0, 0, 0.6)
    &__item
      width: 100%
    &.active
      background-color: #ffff
    &__subheader
      user-select: none
      pointer-events: none
    &__item-info
      flex: 1
      display: flex
      flex-direction: column
    &__item-description
      margin: 0 0 10px 0

  .action-buttons
    flex: 1 !important
    margin: 20px 0 0 0
    &__icon
      margin: 0 10px 0 0

</style>