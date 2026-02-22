module.exports = {
  hooks: {
    readPackage(pkg) {
      // Allow automatic peer dependency installation
      return pkg;
    },
  },
};
