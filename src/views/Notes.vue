<template>
  <div class="container fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" v-for="(note,index) in notes" :key="index">
        <v-card v-click-outside>
          <v-card-title>
            {{note.title}}
            <v-btn class="ma-2 ml-auto icon-clickable" text icon color="red">
              <v-icon @click="deleteNote(note.id)">delete</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>{{note.text}}</v-card-text>

          <v-card-subtitle>
            <v-chip class="ma-2" color="orange" text-color="white" close to="/notes">
              <v-icon right>{{note.icon}}</v-icon>
              <span class="ml-5">{{note.category}}</span>
            </v-chip>
          </v-card-subtitle>
        </v-card>
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
export default {
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "Lista de la compra",
          text: "Compar agua, leche, pan y pasta",
          icon: "mdi-start",
          category: "Premium"
        },
        {
          id: 2,
          title: "Top jugadores de NBA",
          text: "Lebron James, Stephen Curry y Giannis Antetokoumpo",
          icon: "mdi-start",
          category: "Premium"
        }
      ]
    };
  },

  methods: {
    deleteNote: function(id) {
      this.notes.splice(id, 1);
    }
  }
};
</script>