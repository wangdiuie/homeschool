module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '192.168.1.108:8080',

        hot: true,

        disableHostCheck: true,

    }



};