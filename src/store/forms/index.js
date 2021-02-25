import { FormEntity } from "@/store/forms/models"

export const formsModule = {
	state: {
		forms: [],
		demoForm: null,
		currentForm: null,
		currentElement: null,
	},
	mutations: {
		CREATE_FORM(state, title) {
			state.forms.push(FormEntity(title))
		},
		DELETE_FORM(state, uid) {
			state.forms = [ ...state.forms.filter(f => f.uid !== +uid)]
		},
		SET_currentForm(state, uid) {
			state.currentForm = Object.assign({}, { ...state.forms.find(f => f.uid === +uid)})
		},
		SET_currentElement(state, element) {
			state.currentElement = element
		},
		DELETE_ELEMENT_FROM_FORM(state, element) {
			state.currentForm.elements = [ ...state.currentForm.elements.filter(f => f.uid !== element.uid)]
		},
		SAVE_currentForm(state) {
			const index = state.forms.findIndex(({uid}) => uid === state.currentForm.uid)
			state.forms[index] = state.currentForm
		},
		SET_demoForm(state, index) {
			state.demoForm = Object.assign({}, { ...state.forms[index] })
		},
		CLEAR_demoForm(state) {
			state.demoForm = null
		},
		REORDER_ELEMENTS(state, { oldIndex, newIndex, element }) {
			state.currentForm.elements.splice(oldIndex, 1)
			state.currentForm.elements.splice(newIndex, 0, element)
		},
		UPDATE_FORM_ELEMENT(state, element) {
			const elements = state.currentForm.elements
			if("index" in element){
				const ind = element.index
				delete element.index
				elements.splice(ind, 0, {...element, uid: Math.floor(Math.random() * 99999) })
			} else {
				const index = elements.findIndex(({ uid }) => uid === element.uid)
				elements[index] = element
			}
			state.currentForm = { ...state.currentForm, elements }
		}
	},
	getters: {
		getForms: (state) => state.forms,
		getcurrentForm: (state) => state.currentForm,
		getcurrentElement: (state) => state.currentElement
	}
}