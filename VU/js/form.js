// 表单数据提交
$(function(){
	

	
	//基本信息
	$("#subbtn").click(function(){
		var obj = {};
		//问题1
		obj.question1 = $("input[name='radio']:checked").val();
		//问题2
		obj.question2 = $("input[name='radio22']:checked").val();

		//问题3
		var que3Arr = new Array();
	    $.each($("input[name='checkbox3']:checked"),function(){
	      que3Arr.push(this.value)
	    });
		// obj.question3 = $("input[name='checkbox3']:checked").val();
		obj.question3 = que3Arr;
		//问题4
		obj.question4 = $("input[name='radio4']:checked").val();
		//问题5
		obj.question5 = $("input[name='radio5']:checked").val();
		//基本信息
		var username = $("input[name='username']").val();
		var phone = $("input[name='phone']").val();
		var company =$("input[name='company']").val();

		if(username=="" || phone =="" || company==""){
			alert("请把基本信息填写完整!")
		}else{
			obj.username = $("input[name='username']").val();
			obj.phone = $("input[name='phone']").val();
			obj.company =$("input[name='company']").val();
			// console.log(obj)
			//数据提交
			$.ajax({
				url:"index.html",
				type:"post",
				dataType:"json",
				data:obj,
				success:function(msg){
					console.log(msg)
					window.location.href="success.html?myname="+obj.username
				}

			})
			window.location.href="success.html?myname="+obj.username
		}
		

		
	})
	

})