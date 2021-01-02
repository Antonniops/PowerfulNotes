<template>
  <v-card v-click-outside>
    <v-card-title>
      {{ title }}
      <v-btn class="ma-2 ml-auto icon-clickable" text icon color="red">
        <v-icon @click="deleteNote(id)">delete</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>{{ text }}</v-card-text>

    <v-card-subtitle>
      <v-chip class="ma-2" color="orange" text-color="white" close to="/notes">
        <v-icon right>{{ icon }}</v-icon>
        <span class="ml-5">{{ category }}</span>
      </v-chip>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    name: "note",
    props: {
        title: {
            type: String,
            default: "Sin título"
        },
        text: {
            type: String,
            default: "Añade un texto"
        },
        icon: String,
        category: String
    }
};
</script>