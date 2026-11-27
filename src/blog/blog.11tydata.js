export default {
  layout: "post.njk",
  section: "blog",
  eleventyComputed: {
    permalink(data) {
      if (data.page.inputPath.endsWith(".md")) {
        return data.draft ? false : `/blog/${data.page.fileSlug}/`;
      }
      return data.permalink;
    }
  }
};
