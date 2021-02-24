<template>

  <!--FORM EDIT-->
  <v-dialog v-model="is_visible" persistent max-width="600px">
    <v-card>
      <v-toolbar dark color="primary">

        <v-btn class="form-edit__button" icon dark @click="cancel()">
          <v-icon> mdi-close </v-icon>
        </v-btn>

        <v-toolbar-title> Settings </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <!--EDIT CONTENT-->
      <div class="edit-content">
        <div class="edit-content__info">
          <p class="edit-content__info-description">Type: {{ item.type }}
          </p>
        </div>

        <v-text-field v-model="item.label" filled placeholder="Edit label"></v-text-field>
        <v-text-field v-model="item.name" filled placeholder="Set name"></v-text-field>

        <v-combobox
          solo
          chips
          multiple
          clearable
          v-model="item.items"
          label="Type variants"
          prepend-icon="mdi-filter-variant"
          v-if="item.type === 'RadioBox' || item.type === 'SelectBox'">

          <template
              v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              close
              v-bind="attrs"
              @click="select"
              :input-value="selected"
              close-icon="edit-content__chips-item">
              <strong> {{ item }} </strong>
              &nbsp;
            </v-chip>
          </template>
        </v-combobox>

        <v-btn :disabled="!isValid" @click="save()"> Save </v-btn>
      </div>
    </v-card>
  </v-dialog>

</template>

<script>

  import { mapMutations, mapState } from "vuex"
  import TextField from "@/components/fields/TextField"

  export default {
    name: "FormEdit",
    data() {
      return {
        item: {},
        is_visible: false
      }
    },
    components: {
      TextField
    },
    computed: {
      ...mapState({
        current_element: (state) => state.formsModule.current_element
      }),
      isValid(){
        return this.item.label && this.item.name && (!["RadioBox", "SelectBox"]
        .includes(this.item.type) || this.item.items.length)
      }
    },
    watch: {
      current_element(value){
        this.is_visible = !!value
        this.item = (value || {})
      }
    },
    methods: {
      ...mapMutations({
        updateElement: "UPDATE_FORM_ELEMENT",
        setcurrent_element: "SET_CURRENT_ELEMENT"
      }),
      cancel() {
        this.setcurrent_element(null)
      },
      save() {
        this.setcurrent_element(null)
        this.updateElement({...this.item})
      }
    },
  }

</script>

<style lang="sass" scoped>

  // EDIT CONTENT
  .edit-content
    padding: 20px 20px 40px 20px
    &__info
      margin: 20px 0 20px 0
    &__info-description
      font-size: 24px
      margin: 0 0 20px 0

</style>