module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirector: "es",
        style: true
      }
    ]
  ]
};
