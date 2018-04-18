/**
 * https: //eslint.org/
 * https: //github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
 * http : //eslint.cn/docs/rules/
 */

module.exports = {
    "extends": [
        "yylint",
        "eslint-config-yylint/react"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "experimentalObjectRestSpread": true
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "rules": {
        // 以下配置检查
        "array-bracket-spacing": ["error", "always"], // 强制在[]内使用空格
        "object-curly-spacing": ["error", "always"], // 强制在{}使用一致的空格
        "quotes": ["error", "single"], // 强制使用一致的单引号
        "semi": ["error", "always"], // 要求使用分号

        // 关闭规则
        "linebreak-style": "off", // LF CRLF
        "space-in-parens": "off", // ()内的空格
        "no-floating-decimal": "off", // 禁止数字字面量中使用前导和末尾小数点
        "no-param-reassign": "off", // 禁止对 function 的参数进行重新赋值
        "no-return-assign": "off", // 禁止在 return 语句中使用赋值语句
        "radix": "off", // 强制在parseInt()使用基数参数
        "comma-dangle": "off", // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
        "no-unexpected-multiline": "off", // 禁止出现令人困惑的多行表达式
        "valid-typeof": "off", // 强制 typeof 表达式与有效的字符串进行比较
        "no-useless-constructor": "off", // 没用的 constructor
        "no-return-await": "off", // 不能return await

    }
};