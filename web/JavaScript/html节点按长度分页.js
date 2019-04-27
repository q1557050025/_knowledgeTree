var list = [] //长度小于maxHeight的最外层子节点列表
var childList = [] // 二层子节点 列表
var nodeList = [] // 最终列表
var heightMark = 0 // 上层元素累积高度
var heightCount = 0 // 当前子数组元素累积高度
var maxHeight = 200 // 子数组累积高度最大值

//筛选出满足条件的最大节点 [node] 目标根节点 [list] 结果存储位置
function handle(node) {
	let nodeHeight = node.offsetHeight //元素高度
	let boolen = nodeHeight < maxHeight || node.children.length === 0
	if (boolen) {
		list.push(node)
	} else {
		for (let i = 0; i < node.children.length; i++) {
			handle(node.children[i])
		}
	}
}
//根据list数组, 按maxHeight给定的长度划分出子数组
function handleList(arr) {
	for (let i = 0; i < arr.length; i++) {
		var nodeMark = arr[i].offsetTop + arr[i].offsetHeight // 元素距离页面最上方偏移量
		var nodeHeight = nodeMark - heightMark // 元素相对累积的高度的增加量
		heightMark = nodeMark
		heightCount += nodeHeight// 当前子数组元素的累积高度
		if (heightCount > maxHeight) {
			nodeList.push(childList)
			childList = [arr[i]]
			heightCount = nodeHeight
		} else {
			childList.push(arr[i])
		}
		if (i === arr.length - 1) {
			if (childList) {
				nodeList.push(childList)
				childList = []
			}
		}
	}
}