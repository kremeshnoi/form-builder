const uid = () => Math.floor(Math.random() * 99999);

const Entity = () => ({
	uid: uid()
});

export const FormEntity = (title) => {
	return {
		...Entity(),
		title,
		elements: []
	}
};

export const FormElement = (formId, element) => {
	return {
		...element,
		formId,
		...Entity()
	}
};

export const ElementEntity = (title, icon) => {
	return {
		...Entity(),
		title,
		icon,
		label: "",
		name: ""
	}
};

export const ElementTextField = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "TextField",
		value: ""
	}
};

export const ElementShortTextField = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "ShortTextField",
		value: ""
	}
};

export const ElementLongTextField = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "LongTextField",
		value: ""
	}
};

export const ElementNumberField = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "NumberField",
		value: ""
	}
};

export const ElementSelectBox = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "SelectBox",
		items: [],
		value: ""
	}
};

export const ElementRadioBox = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "RadioBox",
		items: [],
		value: ""
	}
};

export const ElementDateTimePicker = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "DateTimePicker",
		value: ""
	}
};

export const ElementAttachment = ({title, icon}) => {
	return {
		...ElementEntity(title, icon),
		type: "Attachment",
		value: ""
	}
};

export const DefaultElementsListChose = [
	ElementTextField({title: "Text field", icon: "mdi-card-text"}),
	ElementShortTextField({title: "Short text field", icon: "mdi-card-text-outline"}),
	ElementLongTextField({title: "Long text field", icon: "mdi-text-box-outline"}),
	ElementNumberField({title: "Number field", icon: "mdi-numeric"}),
	ElementSelectBox({title: "Select box", icon: "mdi-cursor-default-click-outline"}),
	ElementRadioBox({title: "Radio box", icon: "mdi-radiobox-marked"}),
	ElementDateTimePicker({title: "Date Time picker", icon: "mdi-alarm"}),
	ElementAttachment({title: "Attachment", icon: "mdi-attachment"})
];
