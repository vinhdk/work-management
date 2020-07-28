module.exports = {
    root: true,
    extends: '@react-native-community',
    settings: {
        "import/resolver": {
            "babel-module": {
                "alias": {
                    "assets": "./src/assets",
                }
            }
        }
    }
};