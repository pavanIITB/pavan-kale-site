const readableDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC"
});

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2": "assets/figtree.woff2",
    "node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-italic.woff2": "assets/figtree-italic.woff2",
    "node_modules/@fontsource-variable/figtree/LICENSE": "assets/figtree-license.txt"
  });
  eleventyConfig.addGlobalData("pagesOrigin", process.env.PAGES_ORIGIN || "");
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: true });

  eleventyConfig.addCollection("posts", (collection) =>
    collection
      .getFilteredByGlob("src/blog/*.md")
      .filter((post) => !post.data.draft)
      .reverse()
  );

  eleventyConfig.addFilter("readableDate", (value) => readableDate.format(value));
  eleventyConfig.addFilter("isoDate", (value) => value.toISOString().slice(0, 10));

  eleventyConfig.addFilter("youtubeEmbedUrl", (value) => {
    if (!value || !URL.canParse(value)) return "";

    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");
    if (url.protocol !== "https:") return "";

    let id;
    if (host === "youtu.be") {
      id = url.pathname.slice(1);
    } else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      id = url.searchParams.get("v") || url.pathname.match(/^\/embed\/([^/]+)$/)?.[1];
    }

    return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : "";
  });

  return {
    dir: { input: "src", output: "dist" },
    markdownTemplateEngine: false,
    pathPrefix: process.env.PAGES_BASE_PATH || "/"
  };
}
