<template>

	<!--FORM EDIT-->

  <v-dialog class="form-edit"
            v-model="isVisible"
            persistent
            max-width="600px">

    <v-card class="form-edit__card">
      <v-toolbar class="form-edit__header"
                 dark
                 color="primary">
        <v-btn class="form-edit__button"
               icon
               dark
               @click="cancel()">
          <v-icon> mdi-close
          </v-icon>
        </v-btn>

        <v-toolbar-title class="form-edit__header-title "> Settings
        </v-toolbar-title>
        <v-spacer class="form-edit__header-space"></v-spacer>
      </v-toolbar>

			<!--EDIT CONTENT-->

      <div class="form-edit__content edit-content">

        <div class="edit-content__info">
          <p class="edit-content__info-description">Type: {{ item.type }}
          </p>
        </div>

        <v-text-field class="edit-content__field"
                      v-model="item.label"
                      filled
                      placeholder="Edit label">
        </v-text-field>

        <v-text-field class="edit-content__field"
                      v-model="item.name"
                      filled
                      placeholder="Set name">
        </v-text-field>

        <v-combobox class="edit-content__chips"
                    v-if="item.type === 'RadioBox' || item.type === 'SelectBox'"
                    v-model="item.items"
                    solo
                    chips
                    multiple
                    clearable
                    label="Type variants"
                    prepend-icon="mdi-filter-variant">

          <template class="edit-content__chips-template"
		          v-slot:selection="{ attrs, item, select, selected }">
            <v-chip close-icon="edit-content__chips-item"
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select">

              <strong> {{ item }}
              </strong>&nbsp;
            </v-chip>
          </template>
        </v-combobox>

        <v-btn 
            class="edit-content__save-button" 
            :disabled="!isValid"
            @click="save()"
        > Save
        </v-btn>
      </div>
    </v-card>
  </v-dialog>

</template>

<script>

  import { mapMutations, mapState } from "vuex";
  import TextField from "@/components/fields/TextField";

  export default {
    name: "FormEdit",
    data() {
      return {
        item: {},
        isVisible: false
      }
    },
    components: {
      TextField
    },
    computed: {
      ...mapState({
        currentElement: (state) => state.formsModule.currentElement
      }),
      isValid(){
        return this.item.label && this.item.name && (!['RadioBox', 'SelectBox'].includes(this.item.type) || this.item.items.length);
      }
    },
    watch: {
      currentElement(value){
        this.item = (value || {});
        this.isVisible = !!value;
      }
    },
    methods: {
      ...mapMutations({
        setCurrentElement: "SET_CURRENT_ELEMENT",
        updateElement: "UPDATE_FORM_ELEMENT",
      }),
      cancel() {
        this.setCurrentElement(null);
      },
      save() {
        this.setCurrentElement(null);
        this.updateElement({...this.item});
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

	  &__element
	    margin: 20px 0 20px 0

</style>