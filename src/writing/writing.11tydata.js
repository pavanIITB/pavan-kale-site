export default {
  layout: "post.njk",
  section: "writing",
  eleventyComputed: {
    permalink(data) {
      if (data.page.inputPath.endsWith(".md")) {
        return data.draft ? false : `/writing/${data.page.fileSlug}/`;
      }
      return data.permalink;
    }
  }
};
