<template>
  <div class="text-wrapper">
    <button @click="saveNote">SAVE</button>
    <textarea class="text-input" @input="saveText" :value="text"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textInput: ''
    }
  },
  computed: {
    text () {
      return this.$store.getters.activeNote.text
    }
  },
  methods: {
    saveText (e) {
      this.textInput = e.target.value
    },
    saveNote () {
      if (this.textInput) {
        this.$store.dispatch('edit_note', this.textInput)
      }
    }
  }
}
</script>

<style>
.text-wrapper {
  width: 100%;
}
.text-input {
  width: 100%;
  height: 80%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 15px;
}
button {
  width: 100%;
  background-color: darksalmon;
  color: white;
  border: none;
  outline: none;
}
</style>