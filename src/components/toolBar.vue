<template>
  <div class="tool-list">
      <i class="tool-btn glyphicon glyphicon-plus" @click="addNote"></i>
      <i class="tool-btn glyphicon glyphicon-star" @click="toggleFavor" :class="{favor: isFavor}"></i>
      <i class="tool-btn glyphicon glyphicon-remove" @click="deleteNote"></i>
  </div>
</template>
<script>
export default {
  computed: {
    isFavor () {
      return this.$store.getters.activeNote.favor
    }
  },
  methods: {
    addNote () {
      this.$store.dispatch('add_note')
    },
    toggleFavor () {
      let activeNote = this.$store.getters.activeNote
      if (!activeNote.id) {
        return false
      }
      if (!activeNote.favor) {
        this.$store.dispatch('add_favor')
      } else {
        this.$store.dispatch('remove_favor')
      }
    },
    deleteNote () {
      this.$store.dispatch('delete_note', this.$store.getters.activeNote)
    }
  }
}
</script>
<style>
.tool-list {
  width: 100px;
  height: 100%;
  background-color: darksalmon;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.tool-btn {
  font-size: 30px;
  display: inline-block;
  margin: 10px 0;
  cursor: pointer;
}
.favor {
  color: blanchedalmond;
}
</style>