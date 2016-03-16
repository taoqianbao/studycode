# window 安装 sass compass 记录


1.	安装Ruby

	安装sass 和compass 需要 Ruby 的环境,还区分xp 和win7-8 下版本区别
	
	[ruby 官网中文](https://www.ruby-lang.org/zh_cn/downloads/)
	
	[ruby 官网英文](http://rubyinstaller.org/downloads/)

2.	注意: xp: 下载 [xp不能下载包含64位的版本,我是下载32位安装成功,但调用gem 命令直接报错,不建议使用 包含有64 区分的版本.

	[Ruby 1.9.3-p551](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-1.9.3-p551.exe?direct)
	
	win7-8 : 2.0以上或者跟xp的一样都可以.
	
	[Ruby 2.1.5](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.1.5-x64.exe?direct)
	
	[Ruby 2.1.5 (x64)](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.1.5-x64.exe?direct)
	
	[Ruby 2.0.0-p598](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p598.exe?direct)
	
	[Ruby 2.0.0-p598 (x64)](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.0.0-p598-x64.exe?direct)

3.	安装注意:全部打钩,安装在哪里都可以 [根据需求,一般默认C盘]

	安装完毕, 重启 cmd , 输入 gem 命令

		输出信息...
		如果提示"RubyGems is a sophisticated package manager for Ruby. This is a basic help message containing pointers to more information. ",即安装成功.

	下一步我们要安装 sass , 使用gem 命令...但是连接国外的地址,(呵呵,你懂的),我们换回 淘宝的gem镜像
	
	1. 首先把默认的删除
		
	命令:`gem sources --remove https://rubygems.org/`
	
	把淘宝的镜像设置进列表
	
	命令:`gem sources -a https://ruby.taobao.org/`
	
	查看列表
	
	命令:`gem sources -l`
	
		输出信息...
		*** CURRENT SOURCES ***
		https://ruby.taobao.org
		# 请确保只有 ruby.taobao.org

4. 安装sass

	然后我们先安装sass,再安装compass
	
	命令: `gem install sass`
	
	等待....

		输出信息...
		Fetching: sass-3.4.9.gem (100%)
		Successfully installed sass-3.4.9
		1 gem installed
		Installing ri documentation for sass-3.4.9...
		unable to convert U+FFFD from UTF-8 to GBK for lib/sass/script/value/string.rb,
		skipping
		unable to convert U+FFFD from UTF-8 to GBK for lib/sass/util.rb, skipping
		Installing RDoc documentation for sass-3.4.9...
		unable to convert U+FFFD from UTF-8 to GBK for lib/sass/script/value/string.rb,
		skipping
		unable to convert U+FFFD from UTF-8 to GBK for lib/sass/util.rb, skipping

5. 测试是否安装成功?

	5.1 命令: sass -v

	如果输出
	
		Sass 3.4.9 (Selective Steve)
	
	即安装成功,接下来继续安装compass
	
	
		5.2  命令: gem install compass
	
	等待...(很漫长...慢慢等啊,看网速...)
	
		输出信息...
		Sass 3.4.9 (Selective Steve)
		C:\Documents and Settings\Administrator>gem install
		Fetching: multi_json-1.10.1.gem (100%)
		Fetching: compass-core-1.0.1.gem (100%)
		Fetching: compass-import-once-1.0.5.gem (100%)
		Fetching: chunky_png-1.3.3.gem (100%)
		Fetching: rb-fsevent-0.9.4.gem (100%)
		Fetching: ffi-1.9.6-x86-mingw32.gem (100%)
		Fetching: rb-inotify-0.9.5.gem (100%)
		Fetching: compass-1.0.1.gem (100%)
		Compass is charityware. If you love it, please d
		//umdf.org/compass Thanks!
		Successfully installed multi_json-1.10.1
		Successfully installed compass-core-1.0.1
		Successfully installed compass-import-once-1.0.5
		Successfully installed chunky_png-1.3.3
		Successfully installed rb-fsevent-0.9.4
		Successfully installed ffi-1.9.6-x86-mingw32
		省略一万字......


6. 测试是否安装成功?

	6.1	命令: compass -v

	输出信息...
	Compass 1.0.1 (Polaris)
	Copyright (c) 2008-2014 Chris Eppstein
	Released under the MIT License.
	Compass is charityware.
	Please make a tax deductable donation for a worthy cause: http://umdf.org/compass

到这里已经 把 sass,compass 都安装成功了,之后嘛.就可以愉快地使用它们了.

ps:我主要因为想学习用compass 来自动拼装雪碧图才折腾这玩意...

推荐sass,less 自动编译工具

[考拉koala](http://koala-app.com/)

===========推荐文章============

[【Sass中级】使用Sass和Compass制作雪碧图](http://www.w3cplus.com/preprocessor/intermediate/spriting-with-sass-and-compass.html)

[使用compass自动合并css雪碧图(css sprite)](http://riny.net/2014/compass-sprite/)

===========参考资料======================

[SASS/Compass的安装与调试](http://www.html-js.com/article/1930)

[RubyGems 镜像 - 淘宝网](http://ruby.taobao.org/)

[下载 Ruby - Ruby 官方网站](https://www.ruby-lang.org/zh_cn/downloads/)

[另一个下载地址](http://rubyinstaller.org/downloads/)

[Ruby git 主要看版本](https://github.com/oneclick/rubyinstaller)



