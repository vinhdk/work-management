/* eslint-disable prettier/prettier */
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    'src': './src',
                    // '@environments': './src/environments',
                    // '@actions': './src/app/actions',
                    // '@models': './src/app/models',
                    // '@modules': './src/app/modules',
                    // '@reducers': './src/app/reducers',
                    // '@sagas': './src/app/sagas',
                    // '@services': './src/app/services',
                    // '@share': './src/app/share',
                    // '@store': './src/app/store',
                    // '@types': './src/app/types',
                    // '@view-models': './src/app/view-models',
                },
            },
        ],
    ],
};