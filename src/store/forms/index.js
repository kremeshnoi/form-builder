import {FormEntity, FormElement} from "@/store/forms/models";

export const formsModule = {
	state: {
		forms: [],
		currentForm: {},
		currentElement: {}
	},
	mutations: {
		CREATE_FORM(state, title) {
			state.forms.push(FormEntity(title));
		},
		DELETE_FORM(state, uid) {
			state.forms = state.forms.filter(f => f.uid !== +uid);
		},
		SET_CURRENT_FORM(state, uid) {
			state.currentForm = state.forms.find(f => f.uid === +uid);
			state.currentElement = {};
		},
		ADD_ELEMENT_TO_FORM(state, element) {
			const newFormElement = FormElement(state.currentForm.uid, element);
			state.forms.find(f => f.uid === state.currentForm.uid).elements.push(newFormElement);
		},
		DELETE_ELEMENT_FROM_FORM(state, element) {
			state.forms.find(f => f.uid === element.formId).elements = state.forms.find(f => f.uid === element.formId).elements.filter(el => el.uid !== element.uid);
			if (element.uid === state.currentElement.uid) {
				state.currentElement = {};
			}
		},
		SET_CURRENT_ELEMENT(state, element) {
			state.currentElement = element;
		},
		UPDATE_FORM_ELEMENT(state, element) {
			state.forms.find(f => f.uid === +element.formId).elements = state.forms.find(f => f.uid === +element.formId).elements.map(el => el.uid === element.uid ? element : el);
			state.currentElement = {...element};
		}
	},
	getters: {
		getForms: (state) => state.forms,
		getCurrentForm: (state) => state.currentForm,
		getCurrentElement: (state) => state.currentElement
	}
};