module.exports = {
    root: true,

    env: {
        browser: true,
        node   : true,
    },

    rules: {
        indent      : ['error', 4],
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-debugger'                : 'off',
        'padded-blocks'              : ['error', 'never'],
        'linebreak-style'            : ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'class-methods-use-this': 'off',
        'no-trailing-spaces'    : [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'key-spacing': [
            'error',
            {
                align: 'colon',
            },
        ],
        'arrow-parens'                     : ['error', 'always'],
        'no-underscore-dangle'             : 'off',
        'space-in-parens'                  : 'off',
        'no-prototype-builtins'            : 'off',
        'import/no-unresolved'             : 'off',
        'import/extensions'                : 'off',
        'no-multiple-empty-lines'          : ['error', { max: 1, maxEOF: 1 }],
        'no-unneeded-ternary'              : 'error',
        'brace-style'                      : ['error', '1tbs'],
        curly                              : ['error', 'all'],
        'no-else-return'                   : 'off',
        'no-lonely-if'                     : 'error',
        'import/no-named-as-default'       : 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export'     : 'off',

        'vue/html-comment-indent': ['error', 4],
        'vue/script-indent'      : [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute                : 1,
                baseIndent               : 1,
                closeBracket             : 0,
                alignAttributesVertically: true,
            },
        ],
        'vue/require-default-prop'          : 'off',
        'vue/experimental-script-setup-vars': 'off',

        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/no-v-html'                        : 'off',
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
            },
        ],
        'vue/html-comment-content-spacing'        : ['error', 'always'],
        'vue/new-line-between-multi-line-property': 'off',
        'vue/no-boolean-default'                  : ['error', 'default-false'],
        'vue/no-empty-component-block'            : 'error',
        'vue/no-multiple-objects-in-class'        : 'error',
        'vue/no-static-inline-styles'             : 'error',
        'vue/no-template-target-blank'            : 'off',
        'vue/require-direct-export'               : 'off',
        'vue/require-name-property'               : 'error',
        'vue/v-for-delimiter-style'               : ['error', 'in'],
        'vue/v-on-function-call'                  : ['error', 'never'],
        'vue/no-deprecated-slot-attribute'        : 'off',
        'vue/multi-word-component-names'          : 'off',
        'vue/no-deprecated-slot-scope-attribute'  : 'error',
        'vue/max-attributes-per-line'             : [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/block-tag-newline': [
            'error',
            {
                singleline   : 'always',
                multiline    : 'always',
                maxEmptyLines: 1,
            },
        ],
        'vue/padding-line-between-blocks' : ['error', 'always'],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag      : 'never',
                endTag        : 'never',
                selfClosingTag: 'always',
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline : 'always',
            },
        ],
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: false,
                ignoreWhenEmpty       : true,
            },
        ],

        '@intlify/vue-i18n/no-html-messages': 'off',
        '@intlify/vue-i18n/no-missing-keys' : 'off',
        '@intlify/vue-i18n/no-v-html'       : 'off',

        'v@intlify/vue-i18n/no-raw-text': 'off',

        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration    : true,
                    MethodDefinition       : true,
                    ClassDeclaration       : true,
                    ArrowFunctionExpression: true,
                    FunctionExpression     : true,
                },
            },
        ],

        'jsdoc/require-returns-description': 0,
        'jsdoc/require-param-description'  : 0,
        'jsdoc/check-indentation'          : 1,
        'jsdoc/check-line-alignment'       : 1,
        'jsdoc/check-syntax'               : 1,
        'jsdoc/match-description'          : 0,
        'jsdoc/no-multi-asterisks'         : [
            'error',
            {
                preventAtMiddleLines: false,
            },
        ],
        'jsdoc/check-tag-names': [
            'error',
            {
                definedTags: ['values'],
            },
        ],
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',

                'v@intlify/vue-i18n/no-raw-text': 'off',
            },
        },
    ],

    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
        'plugin:@intlify/vue-i18n/recommended',
        'plugin:jsdoc/recommended',
    ],
};
