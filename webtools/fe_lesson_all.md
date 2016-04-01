#前端资源整合


#包依赖管理工具 

#转载自：[Learning 30 Technologies in 30 Days: A Developer Challenge](https://blog.openshift.com/learning-30-technologies-in-30-days-a-developer-challenge/)

[Day 1: Bower —— 管理你的客户端依赖关系](https://segmentfault.com/a/1190000000349555)



<ul>
<li><p>2013.10.29 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000349555">Day 1: Bower——管理你的客户端依赖关系</a></p></li>
<li><p>2013.10.30 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000350125" target="_blank">Day 2: AngularJS —— 对 AngularJS 的初步认识</a></p></li>
<li><p>2013.10.31 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000351512">Day 3: Flask —— 使用 Python 和 OpenShift 进行即时 Web 开发</a></p></li>
<li><p>2013.11.01 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000352163" target="_blank">Day 4: PredictionIO —— 如何创建一个博客推荐器</a></p></li>
<li><p>2013.11.02 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000353114">Day 5: GruntJS —— 重复乏味的工作总会有人做（反正我不做）</a></p></li>
<li><p>2013.11.03 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000353272" target="_blank">Day 6: 在 Java 虚拟机上使用 Grails 进行快速 Web 开发</a></p></li>
<li><p>2013.11.04 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000354555">Day 7: GruntJS 在线重载 提升生产率至新境界</a></p></li>
<li><p>2013.11.05 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000355181" target="_blank">Day 8: Harp.JS —— 现代静态 Web 服务器</a></p></li>
<li><p>2013.11.06 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000356029">Day 9: TextBlob —— 对文本进行情感分析</a></p></li>
<li><p>2013.11.07 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000357272" target="_blank">Day 10: PhoneGap —— 开发手机应用如此简单</a></p></li>
<li><p>2013.11.08 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000358740">Day 11: AeroGear 推送服务器：使应用的通知推送变得简单</a></p></li>
<li><p>2013.11.09 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000358809" target="_blank">Day 12: OpenCV —— Java 开发者的人脸检测</a></p></li>
<li><p>2013.11.10 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000359827">Day 13: Dropwizard —— 非常棒的 Java REST 服务器栈</a></p></li>
<li><p>2013.11.11 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000360213" target="_blank">Day14：使用斯坦福 NER 软件包实现你自己的命名实体识别器（Named Entity Recognition，NER）</a></p></li>
<li><p>2013.11.12 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000361440">Day 15：Meteor —— 从零开始创建一个 Web 应用</a></p></li>
<li><p>2013.11.13 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000362182" target="_blank">Day 16: Goose Extractor —— 好用的文章提取工具</a></p></li>
<li><p>2013.11.14 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000363485">Day 17: 使用 JBoss Forge 和 OpenShift 构建部署 JAVA EE 6 应用</a></p></li>
<li><p>2013.11.15 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000363797" target="_blank">Day 18: BoilerPipe —— Java开发者的文章提取工具</a></p></li>
<li><p>2013.11.16 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000365519">Day 19: EmberJS 入门指南</a></p></li>
<li><p>2013.11.17 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000365547" target="_blank">Day 20: 斯坦福CoreNLP —— 用 Java 给 Twitter 情感分析</a></p></li>
<li><p>2013.11.18 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000366923">Day 21：Docker 入门教程</a></p></li>
<li><p>2013.11.19 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000367441" target="_blank">Day 22： 使用 Spring、MongoDB 和 AngularJS 开发单页面应用</a></p></li>
<li><p>2013.11.20 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000368066">Day 23： 使用 TimelineJS 构建精美的时间轴</a></p></li>
<li><p>2013.11.21 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000368881" target="_blank">Day 24: 使用 Yeoman 自动构建 Ember 项目</a></p></li>
<li><p>2013.11.22 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000368729">Day 25: Tornado —— 联合 Tornado、MongoDB 和 AngularJS 进行应用开发</a></p></li>
<li><p>2013.11.23 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000370631" target="_blank">Day 26: TogetherJS —— 让我们一起来编程！</a></p></li>
<li><p>2013.11.24 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000369308">Day 27: Restify —— 在Node.js中构建正确的REST Web服务</a></p></li>
<li><p>2013.11.25 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000372498" target="_blank">Day 28: OpenShift 的 Eclipse 集成</a></p></li>
<li><p>2013.11.26 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000371543">Day 29: 编写你的第一个 Google Chrome 扩展程序</a></p></li>
<li><p>2013.11.27 - <a rel="nofollow" href="http://segmentfault.com/a/1190000000374033" target="_blank">Day 30: Play Framework —— Java 开发者的梦想框架</a></p></li>
</ul>

