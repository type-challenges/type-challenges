<!--info-header-start--><h1>简单的 Vue 类型 <img src="https://img.shields.io/badge/-%E5%9B%B0%E9%9A%BE-de3d37" alt="困难"/> <img src="https://img.shields.io/badge/-%23this-999" alt="#this"/> <img src="https://img.shields.io/badge/-%23application-999" alt="#application"/> <img src="https://img.shields.io/badge/-%23vue-999" alt="#vue"/></h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><p><a href="https://tsch.js.org/6/play/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E6%8E%A5%E5%8F%97%E6%8C%91%E6%88%98-3178c6?logo=typescript&logoColor=white" alt="接受挑战"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.md" target="_blank"><img src="https://img.shields.io/badge/-English-gray" alt="English"/></a>  <a href="./README.ja.md" target="_blank"><img src="https://img.shields.io/badge/-%E6%97%A5%E6%9C%AC%E8%AA%9E-gray" alt="日本語"/></a> </p><!--info-header-end-->

> 由谷歌自动翻译，欢迎 PR 改进翻译质量。

实现类似Vue的类型支持的简化版本。

通过提供函数名称`SimpleVue`（类似于`Vue.extend`或`defineComponent`），它应该正确地推断出计算和方法内部的`this`类型。

在此挑战中，我们假设SimpleVue接受带有`data`，`computed`和`methods`字段的Object作为唯一参数，

-`data`是一个简单的函数，它返回一个公开上下文`this`的对象，但是您无法访问`data`中的数据、计算属性或方法。

-`computed`是将上下文作为`this`的函数的对象，进行一些计算并返回结果。计算结果应作为简单的返回值而不是函数显示给上下文。

-`methods`是函数的对象，其上下文也与`this`相同。方法可以访问`data`，`computed`以及其他`methods`公开的字段。 `computed`与`methods`的不同之处在于按原样公开的功能。

`SimpleVue`的返回值类型可以是任意的。

```ts
const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
```

<!--info-footer-start--><br><a href="../../README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E8%BF%94%E5%9B%9E%E9%A6%96%E9%A1%B5-grey" alt="返回首页"/></a> <a href="https://tsch.js.org/6/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/6/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a> <hr><h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/master/questions/213-hard-vue-basic-props/README.md" target="_blank"><img src="https://img.shields.io/badge/-213%E3%83%BBVue%20Basic%20Props-de3d37" alt="213・Vue Basic Props"/></a> <!--info-footer-end-->
