<template>
  <div id="app">
    <tool-bar></tool-bar>
    <note-list></note-list>
    <edit-note></edit-note>
  </div>
</template>

<script>
import ToolBar from './components/toolBar'
import NoteList from './components/noteList'
import EditNote from './components/editNote'
export default {
  name: 'app',
  components: {
    ToolBar,
    NoteList,
    EditNote
  }
}
</script>
  
<style>
html, #app {
  height: 100%;

}
#app {
  display: flex;
  flex-direction: row;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
tool-bar, note-list, edit-note {
  display: inline-block;
}
edit-note {
  flex: 1;
}
</style>
