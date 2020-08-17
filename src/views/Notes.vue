<template>
  <div class="container fill-height">
    <v-row justify="center" align="center">
      <v-col cols="4">
        <v-card v-click-outside>
          <v-card-title>
            Powerful Notes
            <v-btn class="ma-2 ml-auto icon-clickable" text icon color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>Powerful Notes is a new notes app</v-card-text>

          <v-card-subtitle>
            <v-chip class="ma-2" color="orange" text-color="white" close v-on="on" to="/notes">
              <v-icon right>mdi-star</v-icon>
              <span class="ml-5">Premium</span>
            </v-chip>
          </v-card-subtitle>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card v-click-outside>
          <v-card-title>
            Powerful Notes
            <v-btn class="ma-2 ml-auto icon-clickable" text icon color="red">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>Powerful Notes is a new notes app</v-card-text>

          <v-card-subtitle>
            <v-chip class="ma-2" color="orange" text-color="white" close v-on="on" to="/notes">
              <v-icon right>mdi-star</v-icon>
              <span class="ml-5">Premium</span>
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
export default {};
</script>