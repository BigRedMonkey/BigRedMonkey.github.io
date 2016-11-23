
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"仿腾讯微云",
			projectWebsite:"https://bigredmonkey.github.io/weiyun/weiyun.html",
		    startTime:"2016.08.01",
			endTime:"2016.08.15",
			projectExplain:"该项目实现了新建文件夹、删除、重命名、刷新等功能模块，模拟数据进行动态渲染，渲染内容包括树形菜单、文件区域、以及路径导航三部分。充分练习了DOM元素的增删改查、事件的绑定、冒泡行为的处理、以及元素的框选、拖拽、单选、全选等小功能，同时利用自定义数据data，实现对于数据的实时同步。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/01weiyun.png"
		},
		{
			projectName:"淘宝PC端首页",
			projectWebsite:"https://bigredmonkey.github.io/taobaoPC/index.html",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"模仿淘宝PC端首页，利用HTML5语义化标签和部分css3制作，利用JavaScript制作页面动态效果，轮播图等。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/02taobaoPC.png"
		},
		{
			projectName:"淘宝移动端首页",
			projectWebsite:"https://bigredmonkey.github.io/taobaoYD/Taobao.html",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"利用meta标签对不同分辨率的设备进行适配，单位为rem，同时采用了弹性盒模型flex，怪异盒模型box-sizing：border-box等。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/03yidongduan.png"
		},
		{
			projectName:"淘宝开放平台首页",
			projectWebsite:"https://bigredmonkey.github.io/taobaoKFPT/index.html",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"模仿淘宝淘宝开放平台首页，利用HTML5语义化标签和部分css3制作，利用JavaScript制作页面动态效果，轮播图等。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/04taobaokaifang.png"
		},
		{
			projectName:"响应式页面",
			projectWebsite:"https://bigredmonkey.github.io/uehtml/index.html",
		    startTime:"2016.01.01",
			endTime:"至今",
			projectExplain:"利用弹性盒模型，制作响应式页面。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/icon/05xiangyingshi.png"
		}
]