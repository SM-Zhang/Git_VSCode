# git_vue01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#### 去除ESlint的代码格式报错（波浪红线）
package.json文件中添加以下配置
```
requireConfigFile: false
```
```
parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
    // arsing error: No Babel config file detected for D:\own\project\git_project\git_vue01\vue.config.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.eslint
  },
```

#### 去除 ESlint的文件重名

**官方网站**：https://eslint.vuejs.org/rules/multi-word-component-names.html

```
Component name "index" should always be multi-word.
```

> 在package.json文件中添加以下规则
```
"rules": {
      "vue/multi-word-component-names": [
        "error",
        {
          "ignores": [
            "index"
          ]
        }
      ]
    }
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Git学习
## SSH提交代码

### 1. Git中文件的标志
