const readableDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2": "assets/instrument-serif.woff2",
    "node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2": "assets/instrument-sans.woff2",
    "node_modules/@fontsource/instrument-serif/LICENSE": "assets/instrument-serif-license.txt",
    "node_modules/@fontsource-variable/instrument-sans/LICENSE": "assets/instrument-sans-license.txt"
  });
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  eleventyConfig.addCollection("posts", (collection) =>
    collection
      .getFilteredByGlob("src/writing/*.md")
      .filter((post) => !post.data.draft)
      .reverse()
  );

  eleventyConfig.addFilter("readableDate", (value) => readableDate.format(value));
  eleventyConfig.addFilter("isoDate", (value) => value.toISOString().slice(0, 10));

  return {
    dir: { input: "src", output: "dist" },
    markdownTemplateEngine: false,
    pathPrefix: process.env.PAGES_BASE_PATH || "/"
  };
}
