<template>

  <!--FORM AREA-->
  <v-card
    elevation="3"
    class="form-area"
    v-if="getCurrentForm">
    <h2> Edit: {{ getCurrentForm.title }} </h2>

    <!--DRAGGABLE AREA-->
    <draggable
      @add="onAdd"
      @end="onDragEnd"
      class="draggable-area"
      :group="{ name: 'form-area-elements', put: true }"
      :class="{ active: getCurrentForm.elements.length }">
      <v-subheader
        class="draggable-area__subheader"
        v-if="!getCurrentForm.elements.length">
        Drag here
      </v-subheader>
      <v-list-item
        :key="item.uid"
        class="draggable-area__item"
        v-for="item in getCurrentForm.elements">

        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <div class="draggable-area__item-info">
            <p class="draggable-area__item-description"> Type: {{ item.type }} </p>
            <p class="draggable-area__item-description"> Label: {{ item.label }} </p>
          </div>

          <!--ACTION BUTTONS-->
          <div class="action-buttons">
            <v-btn
              text
              @click="onDelete(item)">
              <v-icon class="action-buttons__icon"> mdi-delete </v-icon>
              Delete
            </v-btn>

            <v-btn
              text
              @click="onEdit(item)">
              <v-icon class="action-buttons__icon"> mdi-pencil </v-icon>
              Edit
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </draggable>

    <!--FORM AREA SAVE BUTTON-->
    <v-btn
      text
      @click="onSave()">
      <v-icon class="form-area__save-button-icon"> mdi-content-save </v-icon> Save
    </v-btn>
  </v-card>

</template>

<script>

  import draggable from "vuedraggable";
  import { mapGetters, mapMutations } from "vuex";

  export default {
    name: "FormArea",
    components: {
      draggable
    },
    computed: {
      ...mapGetters({
        getElements: "getElements",
        getCurrentForm: "getCurrentForm",
        getCurrentElement: "getCurrentElement"
      })
    },
    methods: {
      ...mapMutations({
        reorder: "REORDER_ELEMENTS",
        saveCurrentForm: "SAVE_CURRENT_FORM",
        addElementToForm: "ADD_ELEMENT_TO_FORM",
        setCurrentElement: "SET_CURRENT_ELEMENT",
        deleteElementFromForm: "DELETE_ELEMENT_FROM_FORM"
      }),
      onSave() {
        this.saveCurrentForm();
        this.$router.push("/");
      },
      onDelete(element) {
        this.deleteElementFromForm(element);
      },
      onEdit(element) {
        this.setCurrentElement(element);
      },
      onAdd(event) {
        const type = this.getElements[event.oldIndex].type;
        this.setCurrentElement({
          type,
          index: event.newIndex,
          items: ['RadioBox', 'SelectBox'].includes(type) ? [] : undefined
        });
      },
      onDragEnd({ newIndex, oldIndex }) {
        this.reorder({ oldIndex, newIndex, element: this.getCurrentForm.elements[oldIndex]});
      }
    }
  }

</script>

<style lang="sass" scoped>

  // FORM AREA
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

  // DRAGGABLE AREA
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

  // ACTION BUTTONS
  .action-buttons
    flex: 1 !important
    margin: 20px 0 0 0
    &__icon
      margin: 0 10px 0 0

</style>