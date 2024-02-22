const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                utils: path.resolve(__dirname, "src/utils")
            },
        },
    });
};