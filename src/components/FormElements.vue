<template>

  <section class="form-elements">
    <h2 class="form-elements__title"> Elements </h2>

    <draggable
      v-bind:sort="false"
      v-on:start="drag=true"
      v-on:end="drag=false"
      v-model="getElements"
      class="draggable-area"
      v-bind:group="{ name: 'form-elements', pull: 'clone', put: false }">
      <v-btn
        v-bind:key="itemIndex"
        v-ripple="false"
        class="draggable-area__item"
        v-for="(item, itemIndex) in getElements">
        <v-icon class="draggable-area__item-icon"> {{ item.icon }} </v-icon>
        {{ item.title }}
      </v-btn>
    </draggable>
  </section>
</template>

<script>

  import draggable from "vuedraggable"
  import { mapGetters, mapMutations } from "vuex"

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

  .form-elements
    &__title
      margin: 0 0 20px 0

  .draggable-area
    &__item
      margin: 0 0 14px 0
    &__item-icon
      margin: 0 10px 0 0

</style>