
<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="deep-purple accent-4 altura" dark >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-row class="ml-4">
        <v-col cols="12" sm="6" class="app-name">
          <span class="title mr-5 white--text">
          Powerful&nbsp;
          <span class="font-weight-light">Notes</span>
        </span>
        </v-col>

        <v-col cols="12" sm="6" class="search-bar">
          <v-text-field
          color="purple lighten-3"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="search"
        ></v-text-field>
        </v-col>
        
        
      </v-row>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="grey lighten-4 fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "lightbulb_outline", text: "Notes" },
      { icon: "touch_app", text: "Reminders" },
      { divider: true },
      { heading: "Labels" },
      { icon: "add", text: "Create new label" },
      { divider: true },
      { icon: "archive", text: "Archive" },
      { icon: "delete", text: "Trash" },
      { divider: true },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Trash" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Keyboard shortcuts" }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}

.app-name{
  padding: 0 !important;
}

.search-bar{
  padding:0 !important;
}

@media only screen and (max-width:600px){
  .altura{
    height: 100px !important;
  }
  .app-name{
    padding-top:35px !important;
  }

  .search-bar{
    padding-top: 20px;
    max-width: 230px !important;
  }
}



</style>