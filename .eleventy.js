module.exports = function(eleventyConfig) {
	// copy `_static/` directory
	eleventyConfig.addPassthroughCopy("_static");
	return {
		passthroughFileCopy: true,
		dir: {
			input: "views"
		}
	};
};