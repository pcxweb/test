
//QS排行
var rank = `
	<div class="rank con_com">
		<h5>维多利亚大学共有6大学院，提供文凭课程，本科学位课程以及研究生和博士生课程。</h5>
		<ul class="clearfix">
			<li>Arts and Education</li>
			<li>Business</li>
			<li>Engineering and Science</li>
			<li>Health and Biomedicine</li>
			<li>Law and Justice</li>
			<li>Sport and Exercise Science</li>
		</ul>
		<div>VU College专门为学生提供英语预备课程以及Diploma大一文凭课程。另外，VU还设有TAFE学院(Victoria University Polytechnic)为学生提供种类繁多的职业教育与培训课程。</div>
	</div>

`
var rank2 = `<div id="wanpai">
			<div class="major">
				<h3>王牌专业：</h3>
				<p>全澳第二的MBA课程</p>
				<p>英语国家唯一提供皮肤科学学士学位</p>
			</div>
			<div>此外，维多利亚大学是维州唯一一所提供四年制工程荣誉学士课程的高等院校。商科硕士课程（企业资源策划系统）建筑工程，机械工程，IT专业行业内有口皆碑。</div>
			<div>维多利亚大学下设英文语言学院，本科预科课程，Diploma快捷课程通道，以及TAFE学院。涵盖课程内容包括商科，工科，运动科学，人文社会艺术，充分满足国际学生的不同需求。</div>
		</div>`

var rank3 = `
	<div class="rank con_com">
		<h5>VU工程系顶尖人才辈出！</h5>
		<ul class="clearfix">
			<li style="list-style:disc">工程系华人石碰教授 (Professor Peng Shi) 跻身世界最有影响力学者行列</li>
			<li style="list-style:disc">石教授所发表的文章被引用次数位列全球第一</li>
			<li style="list-style:disc">工程学博士Adrian Stoica 毕业后进入NASA喷气推进实验室</li>
			<li style="list-style:disc">来VU工程系学习，就有机会得到世界顶尖学者的指点</li>
		</ul>
		
	</div>

`
var rank4 = `
	<div class="rank con_com">
		<h5>你也是足球迷！想不想把爱好变成事业？</h5>
		<ul class="clearfix">
			<li style="list-style:disc">VU与墨尔本胜利足球俱乐部有逾十年的合作，将兴建一所澳洲最佳的足球学院</li>
			<li style="list-style:disc">体育与运动科学学院拥有澳洲规模最大、最全面的体育与运动科学教学项目，包括运动康复、体育训练、体育和娱乐管理、体育商业、户外娱乐、体育发展、运动按摩和健身等。</li>
		</ul>
		
	</div>

`
var rank5 = `
	<div class="rank con_com">
		<h5>去一趟健康与生物医学学院，你会被一排 "病号"所吸引</h5>
		<ul class="clearfix">
			<li style="list-style:disc">授予理论知识的同时，强调将知识应用到实践操作中</li>
			<li style="list-style:disc">每年耗资数百万在实验室运作和器材维护中，也会做设备更新</li>
			<li style="list-style:disc">一名合格并且优秀的护理人员，要有专业的护理知识以及拥有丰富的临床护理经验</li>
			<li style="list-style:disc">注册护士的平均年薪为近7万澳币，护理行业的岗位需求在未来五年仍保持高增长</li>
		</ul>
		
	</div>

`
// 学校特色
var teselist = `
		<div class="teselist">世界排名前2%（前350强）（THE World University Rankings 2018）</div>
		<div class="teselist">“工程与科技”（Engineering & Technology）专业排名世界第151-175，维州排名第3位</div>
		<div class="teselist">“计算机科学”（Computer Science）排名世界第151-175，维州排名第2位</div>
		<div class="teselist">MBA工商管理硕士课程位列澳洲第二名</div>
		<div class="teselist">以实践为导向，为不同专业的学生提供超过1000个不同的实习机会</div>`
//问题1
var listcon1 = `<h4>1.VU有多少个校区？（单选）</h4>
<ul><li><label for="radio1"><input id="radio1" type="radio" name="radio" value="1">8 个</label></li>
<li><label for="radio2"><input id="radio2" type="radio" name="radio" value="2">9 个</label></li>
<li><label for="radio3"><input id="radio3" type="radio" name="radio" value="3">10 个</label></li>
<li><label for="radio4"><input id="radio4" type="radio" name="radio" value="4">11 个</label></li></ul>`

//问题2
var listcon2 = `<h4>2.护理，电气和电子工程，人体运动和体育科学领域的研究被评为几星？</h4>
<ul><li><label for="radio21"><input id="radio21" type="radio" name="radio22" value="1"> 3 星</label></li>
<li><label for="radio22"><input id="radio22" type="radio" name="radio22" value="2"> 4 星</label></li>
<li><label for="radio23"><input id="radio23" type="radio" name="radio22" value="3"> 5 星</label></li>
<li><label for="radio24"><input id="radio24" type="radio" name="radio22" value="4"> N/A </label></li></ul>`

//问题3
var listcon3 = `<h4>3.VU的王牌专业是哪些？（多选）</h4>
<ul><li><label for="checkbox31"><input id="checkbox31" type="checkbox" name="checkbox3" value="1"> 机械工程</label></li>
<li><label for="checkbox32"><input id="checkbox32" type="checkbox" name="checkbox3" value="2"> MBA</label></li>
<li><label for="checkbox33"><input id="checkbox33" type="checkbox" name="checkbox3" value="3"> 运动科学 </label></li>
<li><label for="checkbox34"><input id="checkbox34" type="checkbox" name="checkbox3" value="4"> 皮肤科学</label></li></ul>`

//问题4
var listcon4 = `<h4>4.VU工程与科技在维州排名第几位？（单选）</h4>
<ul><li><label for="radio41"><input id="radio41" type="radio" name="radio4" value="1"> 第 2 位</label></li>
<li><label for="radio42"><input id="radio42" type="radio" name="radio4" value="2"> 第 3 位 </label></li>
<li><label for="radio43"><input id="radio43" type="radio" name="radio4" value="3"> 第 4 位</label></li>
<li><label for="radio44"><input id="radio44" type="radio" name="radio4" value="4"> 第 5 位</label></li></ul>`

//问题5
var listcon5 = `<h4>5.维多利亚大学是维州唯一的一所提供四年制工程荣誉学士课程的高等院校吗？（单选）</h4>
<ul><li><label for="radio51"><input id="radio51" type="radio" name="radio5" value="1"> Yes</label></li>
<li><label for="radio52"><input id="radio52" type="radio" name="radio5" value="2"> No</label></li></ul>`


//表单
var forms = `<ul>
		<li><input type="text" name="username" placeholder="姓名"></li>
		<li><input type="text" name="phone" placeholder="手机"></li>
		<li><input type="text" name="company" placeholder="机构名称"></li>
		<li><button id="subbtn" type="button">提交领红包</button></li>
	</ul>`