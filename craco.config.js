module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // fullySpecified zorunluluğunu kaldırmak için ayar ekleyin
        webpackConfig.resolve.fullySpecified = false;
        webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
        return webpackConfig;
      },
    },
  };