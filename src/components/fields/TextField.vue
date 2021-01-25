<template>

  <!--TEXT FIELD-->

  <v-text-field class="v-text-field"
                :value="value"
                :name="element.name"
                :label="element.label"
                ma-0
                counter
                outlined
                maxlength="100"
                @change="handler">
  </v-text-field>

</template>

<script>

  export default {
    name: "TextField",
    props: ["value", "element"],
    methods: {
      handler(value) {
	      this.$emit("input", value);
      }
    }
  }

</script>
