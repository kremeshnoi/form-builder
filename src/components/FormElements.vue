<template>

  <!--FORM ELEMENTS-->

  <section class="form-elements">
    <h2 class="form-elements__title"> Elements
    </h2>

    <!--DRAGGABLE AREA-->

    <draggable class="form-elements__draggable-area draggable-area"
               v-model="getElements"
               :sort="false"
               :group="{ name: 'form-elements', pull: 'clone', put: false }"
               @start="drag=true"
               @end="drag=false">

      <v-btn class="draggable-area__item"
             v-for="(item, itemIndex) in getElements"
             :key="itemIndex"
             v-ripple="false">

        <v-icon class="draggable-area__item-icon"> {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-btn>
    </draggable>
  </section>
</template>

<script>

import draggable from "vuedraggable";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "FormElements",
  components: {
    draggable
  },
  computed: {
    ...mapGetters(["getElements"])
  },
  methods: {
    ...mapMutations({
      addElementToForm: "ADD_ELEMENT_TO_FORM"
    })
  }
}

</script>

<style lang="sass" scoped>

// FORM ELEMENTS

.form-elements
  &__title
    margin: 0 0 20px 0

// DRAGGABLE AREA

.draggable-area
  &__item
    margin: 0 0 14px 0

  &__item-icon
    margin: 0 10px 0 0

</style>