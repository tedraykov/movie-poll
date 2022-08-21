module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/@tedraykov/kitui/**/*.{html,js,svelte,ts}"
  ],
  theme: {},
  plugins: [
    require("@tedraykov/kitui/plugin.cjs")
  ]
};
