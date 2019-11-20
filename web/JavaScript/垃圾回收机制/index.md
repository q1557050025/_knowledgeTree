####  <a href="https://mp.weixin.qq.com/s?__biz=MzU3MDQ3NTA4OA==&mid=100001042&idx=1&sn=f0b5912855bf8e547447f7b6d399a5c9&chksm=7cef922d4b981b3bd8d52f4ab98ac8ad474597167e9767fb029e0027eae5bd37a4b1a3c317da&scene=20&xtrack=1&key=c05db13e7d19cdce3974f628aebdf5c8b97cebbd15afa9f38891aeaf81aeba4dd2a2d96021293a4341e9f3c2bdc2093c19a7291b7bb8db97f46aa8e0ace78fd567551586beac1b309c097a2a29c28fca&ascene=1&uin=NzEyNjczOTA5&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=g2VUh2liVGWu6GLSs0QJHMwjEzGcenJtDysE%2FLIj%2F15ypCTV1rxQNoIJtkzbC4s2">垃圾回收机制</a>
##### 一、垃圾回收机制——GC
  Javascript 具有自动垃圾回收机制（GC：Garbage Collecation），也就是说，执行环境会负责管理代码执行过程中使用的内存。

  原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。

  通常情况下有两种实现方式：

  - 标记清除

  - 引用计数

  **标记清除**：js 中最常用的垃圾回收方式就是标记清除。

  当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。



  **引用计数**的含义是跟踪记录每个值被引用的次数。

  当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为 0 的值所占用的内存。

##### 二、内存管理

1. Javascript 引擎基础 GC 方案是（simple GC）：mark and sweep（标记清除），即：
- 1) 遍历所有可访问的对象；

- 2) 回收已不可访问的对象。



2. GC 的缺陷

    和其他语言一样，JavaScript 的 GC 策略也无法避免一个问题：GC 时，停止响应其他操作，这是为了安全考虑。而 Javascript 的 GC 在 100ms 甚至以上，对一般的应用还好，但对于 JS 游戏，动画对连贯性要求比较高的应用，就麻烦了。这就是新引擎需要优化的点：避免 GC 造成的长时间停止响应。



3. GC 优化策略

- 1) 分代回收（Generation GC）

  这个和 Java 回收策略思想是一致的。目的是通过区分“临时”与“持久”对象；多回收“临时对象”区（young generation），少回收“持久对象”区（tenured generation），减少每次需遍历的对象，从而减少每次 GC 的耗时。

- 2) 增量 GC

  这个方案的思想很简单，就是“每次处理一点，下次再处理一点”，如此类推。