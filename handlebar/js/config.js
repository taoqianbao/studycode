//
require.config({
  baseUrl: "js/", //定义统一的js根目录
  paths: {
    jquery: "lib/jquery",
    handlebars: "lib/handlebars", //可以直接写基于baseURL的js路径
    showdiv1: "app/showtable1" //可以直接写相对路径，例如../js/app/showtable1
  },

  //shim专门用来配置不兼容的模块。每个模块要定义。例如此例中handlebars，不是符合AMD规范
  //----属性1：exports值（输出的变量名），表明这个模块外部调用时的名称；
  //----属性2：deps数组，表明该模块的依赖性。
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});
