<template>

	<!--FORM EDIT-->

  <v-dialog class="form-edit"
            v-model="computeModalState"
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

      <div class="form-edit__content edit-content"
           v-if="getCurrentElement">

        <div class="edit-content__info">
          <p class="edit-content__info-description"> Item Type: {{ getCurrentElement.title }}
          </p>
          <p class="edit-content__info-description"> Item ID: {{ getCurrentElement.uid }}
          </p>
        </div>

        <v-text-field class="edit-content__field"
                      v-if="getCurrentElement"
                      v-model="label"
                      filled
                      placeholder="Edit label">
        </v-text-field>

        <v-text-field class="edit-content__field"
                      v-if="getCurrentElement"
                      v-model="name"
                      filled
                      placeholder="Set name">
        </v-text-field>

        <v-combobox class="edit-content__chips"
                    v-if="getCurrentElement.type === 'RadioBox' || getCurrentElement.type === 'SelectBox'"
                    v-model="chips"
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
                    @click="select"
                    @click:close="remove(item)">

              <strong> {{ item }}
              </strong>&nbsp;
            </v-chip>
          </template>
        </v-combobox>

        <v-btn class="edit-content__save-button"
               @click="save()"> Save
        </v-btn>
      </div>
    </v-card>
  </v-dialog>

</template>

<script>

  import { mapGetters, mapMutations, mapActions } from "vuex";
  import TextField from "@/components/fields/TextField";

  export default {
    name: "FormEdit",
    data() {
      return {
        label: "",
        name: "",
        chips: []
      }
    },
    components: {
      TextField
    },
    computed: {
      ...mapGetters({
        getCurrentElement: "getCurrentElement",
        getModalState: "getModalState"
      }),
      computeModalState() {
        return this.getModalState;
      }
    },
    methods: {
      ...mapMutations({
        updateCurrentElement: "UPDATE_FORM_ELEMENT"
      }),
      ...mapActions({
        toggleModalState: "toggleModalState"
      }),
      cancel() {
        this.label = "";
        this.name = "";
        this.chips = [];
        this.toggleModalState();
      },
      save() {
        this.updateCurrentElement({
          ...this.getCurrentElement,
          label: this.label,
          name: this.name,
          items: this.chips
        });
        this.updateLabel();
        this.toggleModalState();

        this.label = "";
        this.name = "";
        this.chips = [];
      },
      updateLabel() {
        this.label = this.getCurrentElement.label;
      },
      remove(item) {
        this.chips.splice(this.chips.indexOf(item), 1);
        this.chips = [...this.chips];
      },
    },
    mounted() {
      this.updateLabel();
    }
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