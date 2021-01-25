import {DefaultElementsListChose} from "@/store/forms/models";

export const elementsModule = {
	state: {
		elements: DefaultElementsListChose
	},
	mutations: {},
	getters: {
		getElements: (state) => state.elements
	}
};