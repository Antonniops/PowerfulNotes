<template>
  <div class="container fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" v-for="(note, index) in notes" :key="index">
        <note
          :title="note.title"
          :text="note.text"
          :icon="note.icon"
          :category="note.category"
          @click="deleteNote"
        >
        </note>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn class="ma-2" fab color="purple" dark>
        <v-icon right class="ma-0">add</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>


<script>
import note from "@/components/NoteComponent";

export default {
  data() {
    return {
      notes: this.$store.state.notes.notes
    };
  },
  created() {
    console.log(this.$store.state.notes);
  },
  components: {
    note,
  },
  methods: {
    deleteNote: function (id) {
      this.$store.commit('deleteNote', {id})
    },
  },
};
</script>