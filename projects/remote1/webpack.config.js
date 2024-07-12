const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "remote1",

  exposes: {
    // Notez que dans cet exemple, nous exposons un fichier de Routes qui sera donc chargé avec `loadChildren`
    "./Routes": "./projects/remote1/src/app/app.routes.ts",

    // Mais on aurait pu exposer un composant (standalone) qui serait alors chargé avec `loadComponent`
    // "./Component": "./projects/remote1/src/app/app.component.ts",
    /*'./HomeComponent': './projects/remote1/src/app/home.component.ts', */
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
