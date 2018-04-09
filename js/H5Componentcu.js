
//QS排行
var rank = `
	<div class="rank con_com">
			<strong>2018 QS排名</strong>
			<div><p><span>综合排名：</span><strong style="text-align: center;">262</strong></p></div>
			<ul class="clearfix">
				<li><span>矿产与采矿工程</span> <strong>2</strong></li>
				<li><span>地球与海洋科学</span> <strong>42</strong></li>
				<li><span>建筑</span> <strong>51-100</strong></li>
				<li><span>化学工程</span> <strong>51-100</strong></li>
				<li><span>土木工程</span> <strong>51-100</strong></li>
				<li><span>发展研究</span> <strong>51-100</strong></li>
				<li><span>教育培训</span> <strong>51-100</strong></li>
				<li><span>体育相关学科</span> <strong>51-100</strong></li>
				<li><span>电子与电器工程</span> <strong>101-150</strong></li>
				<li><span>会计与金融</span> <strong>101-150</strong></li>
				<li><span>企业与管理研究</span> <strong>101-150</strong></li>
				<li><span>艺术与设计</span> <strong>151-200</strong></li>
				<li><span>机械和航空制造工程</span> <strong>151-200</strong></li>
				<li><span>农林学</span> <strong>151-200</strong></li>
				<li><span>药学与药理学</span> <strong>151-200</strong></li>
				<li><span>心理学</span> <strong>151-200</strong></li>
				<li><span>环境科学</span> <strong>151-200</strong></li>
				<li><span>地理</span> <strong>151-200</strong></li>
				<li><span>传媒研究</span> <strong>151-200</strong></li>
			</ul>
	</div>		

`
// 学校特色
var teselist = `
		<div class="teselist">澳大利亚6所提供精算专业的大学之一，受精算师协会认证，良好的就业前景</div>
		<div class="teselist">西澳大利亚最大的大学，六个校区包括珀斯，新加坡和马来西亚</div>
		<div class="teselist">Master of Project Management项目管理协会认证的课程，此外只有包括ECU, BOND在内的5个澳洲大学的相关课程受到认证。这个1.5年的课程可以和半年的graduate certificate打包为2年的课程，满足工作签证的要求</div>
	`
var teselist2 = `
		<div class="teselist">采矿工程专业跃居世界第二，建筑、艺术设计、护理、地球和海洋科学、教育、部分体育相关等25个专业进入世界前100</div>
		<div class="teselist">Bachelor of Science (Medical Imaging Science)医学影像学/放射诊断学被澳洲医学影像协会Medical Radiations Practice Board认证，毕业后可以在澳洲任意洲省从业 ，仅有四所大学可以直接注册（CQU UNISA MONASH）</div>
		
	`
// <div  class="teselist"></div>
//入学要求
//阶段一文凭课程(相当于本科)
var yaoqiu1 = `
	<div class="special con_com">
			<ul>
				<li>阶段一文凭课程(相当于本科)
					<ul>
						<li>高二毕业，4门学术科目均分达到70%或者完成会考，会考分达到总分的60%</li>
						<li>雅思5.5（单项5.0）或托福46（单项15）或内测50（各科目不低于46）</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>阶段二文凭课程(相当于大一文凭)
					<ul>
						<li>商科、设计&艺术、信息技术/电脑科学
							<ul>
								<li>高三毕业，4门学术科目均分达到70%</li>
								<li>雅思6.0（单项5.5）或托福59（单项18）或内测56（各科目不低于56）%</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu2 = `
	<div class="special con_com">
			<ul>
				<li>阶段二文凭课程(相当于大一文凭)
					<ul>
						<li>建筑环境、文化&创意艺术、人文社会科学
							<ul>
								<li>高三毕业，4门学术科目均分达到70%</li>
								<li>雅思6.0（单项6.0）或托福59（单项21）或内测56（各科目不低于56）</li>
							</ul>
						</li>
						<li>健康科学、工程
							<ul>
								<li>高三毕业， 4门学术科目均分达到75%</li>
								<li>雅思6.0（单项6.0）或托福59（单项21）或内测56（各科目不低于56）</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu3 = `
	<div class="special con_com">
			<ul>
				<li>阶段二文凭课程(相当于大一文凭)
					<ul>
						<li>护理
							<ul>
								<li>高三毕业， 4门学术科目均分达到75%</li>
								<li>雅思6.5（单项6.0）或托福79或内测61（各科目不低于56）</li>
							</ul>
						</li>
						<li>职业治疗、药剂学、物理治疗
							<ul>
								<li>高考录取分数（高考总分数的67%-69%以上）</li>
								<li>雅思6.5（单项6.0）或托福79或内测61（各科目不低于56）</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu4 = `
	<div class="special con_com">
			<ul>
				<li>本科直录
					<ul>
						<li>高三毕业，高考均分67% 或完成一年的学士学位课程 </li>
						<li>雅思6.5（单项6.0）或托福 79（听力/阅读13，口语18，写作21）</li>
						<li>雅思7.0，单项7.0或托福94，阅读/听力/口语24，写作27（教育学、药学、社会工作、言语病理学、物理疗法、职业疗法、口腔卫生和医学辐射科学专业）</li>
						<li>雅思7.0，单项6.5或托福94，阅读/听力/口语20，写作24（护理专业）</li>
					</ul>
				</li>
			</ul>
		</div>

`
var yaoqiu5 = `
	<div class="special con_com">
			<ul>
				<li>硕士直录
					<ul>
						<li>完成学士学位课程</li>
						<li>雅思6.5（单项6.0）或托福79（听力/阅读13，口语18，写作21）</li>
						<li>雅思7.0，单项7.0或托福94，阅读/听力/口语24，写作27（物理疗法、职业疗法、护理、言语病理学、心理学、社会工作和饮食课程）</li>
						<li>雅思7.0，单项6.5或托福94，阅读/听力/口语20，写作24（生物医学硕士）</li>
					</ul>
				</li>
			</ul>
		</div>

`
