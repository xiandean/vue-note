<template>
  <div class="note-list">
    <h3>NOTES</h3>
    <div class="list-wrapper">
      <div class="tab">
        <div :class="{active: showAll}" @click="showAllNotes">All Notes</div>
        <div :class="{active: !showAll}" @click="showFavorNotes">Favorites</div>
      </div>
      <ul class="list">
        <li v-for="item in notes" :class="{activeNote: item.id==activeNote.id}" @click="clickNote(item)">
          {{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showAll: true
    }
  },
  computed: {
    notes () {
      if (this.showAll) {
        return this.$store.getters.notes
      } else {
        return this.$store.getters.notes.filter(note => {
          return note.favor
        })
      }
    },
    activeNote () {
      console.log(this.$store.getters.activeNote)
      return this.$store.getters.activeNote
    }
  },
  methods: {
    showAllNotes () {
      this.showAll = true
    },
    showFavorNotes () {
      this.showAll = false
    },
    clickNote (item) {
      this.$store.dispatch('set_activeNote', item)
    }
  }
}
</script>
<style>
.note-list {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: whitesmoke;
}
.list-wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.tab {
  margin: 0 auto;
  margin-bottom: 10px;
}
.tab div{
  cursor: pointer;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 1px;
  padding: 2px 14px;
}
.active {
  background-color: darksalmon;
  color: white;
}
.show-all, .favorites, .list {
  width: 300px;
  margin: 0;
  padding: 0;
}
.show-all li, .favorites li, .list li{
  overflow: hidden;
  word-wrap: break-word; 
  height: 50px;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
}
.activeNote {
  background-color: blanchedalmond;
}
</style>