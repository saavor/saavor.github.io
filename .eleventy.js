module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("site/scripts");
  eleventyConfig.addPassthroughCopy("site/styles");
  eleventyConfig.addPassthroughCopy("site/assets");

  eleventyConfig.addWatchTarget("site/scripts/sketch.js");

  // Return your Object options:
  return {
    dir: {
      input: "site",
      output: "docs"
    }
  }
};