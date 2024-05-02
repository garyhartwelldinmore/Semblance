/*
 * @Description:
 * @Autor: jiayinchu
 * @Date: 2024-04-28 20:42:51
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-05-01 22:04:51
 */
module.exports = function(api){
    api.cache(true);
    return {
        // https://github.com/facebook/create-react-app/blob/main/packages/babel-preset-react-app/create.js
        // babel-preset-react-app
        presets: [
            "react-app",
            ["@babel/preset-env", {
                targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                },
                useBuiltIns: "usage",
                corejs: "3.6.4",
            }]
        ],
        plugins: [
            "@babel/plugin-transform-runtime",
            "lodash"
        ]
    };
}
