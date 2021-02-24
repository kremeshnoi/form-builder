import { FormEntity } from "@/store/forms/models"

export const formsModule = {
	state: {
		forms: [],
		demo_form: null,
		current_form: null,
		current_element: null,
	},
	mutations: {
		CREATE_FORM(state, title) {
			state.forms.push(FormEntity(title))
		},
		DELETE_FORM(state, uid) {
			state.forms = [ ...state.forms.filter(f => f.uid !== +uid)]
		},
		SET_CURRENT_FORM(state, uid) {
			state.current_form = Object.assign({}, { ...state.forms.find(f => f.uid === +uid)})
		},
		SET_CURRENT_ELEMENT(state, element) {
			state.current_element = element
		},
		DELETE_ELEMENT_FROM_FORM(state, element) {
			state.current_form.elements = [ ...state.current_form.elements.filter(f => f.uid !== element.uid)]
		},
		SAVE_CURRENT_FORM(state) {
			const index = state.forms.findIndex(({uid}) => uid === state.current_form.uid)
			state.forms[index] = state.current_form
		},
		SET_DEMO_FORM(state, index) {
			state.demo_form = Object.assign({}, { ...state.forms[index] })
		},
		CLEAR_DEMO_FORM(state) {
			state.demo_form = null
		},
		REORDER_ELEMENTS(state, { oldIndex, newIndex, element }) {
			state.current_form.elements.splice(oldIndex, 1)
			state.current_form.elements.splice(newIndex, 0, element)
		},
		UPDATE_FORM_ELEMENT(state, element) {
			const elements = state.current_form.elements
			if("index" in element){
				const ind = element.index
				delete element.index
				elements.splice(ind, 0, {...element, uid: Math.floor(Math.random() * 99999) })
			} else {
				const index = elements.findIndex(({ uid }) => uid === element.uid)
				elements[index] = element
			}
			state.current_form = { ...state.current_form, elements }
		}
	},
	getters: {
		getForms: (state) => state.forms,
		getcurrent_form: (state) => state.current_form,
		getcurrent_element: (state) => state.current_element
	}
}