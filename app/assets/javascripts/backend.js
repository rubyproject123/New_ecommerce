// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree ./common
//= require_tree ./backend
//= require jquery_nested_form

$(document).ready(function(){
		$('.lightbox').fancybox();
			
		$('.multipleselection').multiselect();	
	
		$("#user_regionstate_id").change(function(){
		
			var regionstateid = $(this).val();
			$.ajax({
				url:"/getDistrictCity",
				method:"get",
				dataType: "json",
				data:{ id : regionstateid},
				success :function(data){
					var selectbox = $("#user_districtcity_id");
					selectbox.empty();
					if (regionstateid <= 37)
					{
						$("#user_districtcity_id").append("<option>Select Nigearian City</option>")
					}
					else
					{
						$("#user_districtcity_id").append("<option>Select Ghana District</option>")
					}
					$.each(data,function(index,value){
						var opt = $("<option/>");
						opt.attr('value',value[1]);
						opt.text(value[0]);
						opt.appendTo(selectbox);
					});
				}
			});
			
		});

		$("#user_contactno").on('keypress',function(e) {
				var regex = new RegExp("^[0-9\-]+$");
				var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
				if (regex.test(str)) {
						var curchr = this.value.length;
						if (curchr <= 11)
						{
							var curval = $(this).val();
							if (curchr == 3)
							{
								$("#user_contactno").val( curval +  "-");
							}
							else if (curchr == 7)
							{
								$("#user_contactno").val(curval + "-");
							}
							
						return true;  
						}
						else
						{
								return false;
						}
				}
			if (e.keyCode == 8)
			{
			 return true;
			}	
				e.preventDefault();
				return false;
		});
		
		
		
		$("#sellercar_regionstate_id").change(function(){
			var regionstateid = $(this).val();
			$.ajax({
				url:"/getDistrictCity",
				method:"get",
				dataType: "json",
				data:{ id : regionstateid},
				success :function(data){
					var selectbox = $("#sellercar_districtcity_id");
					selectbox.empty();
					if (regionstateid <= 37)
					{
						$("#sellercar_districtcity_id").append("<option value='0'>Select Nigearian City</option>")
					}
					else
					{
						$("#sellercar_districtcity_id").append("<option value='0'>Select Ghana District</option>")
					}
					$.each(data,function(index,value){
						var opt = $("<option/>");
						opt.attr('value',value[1]);
						opt.text(value[0]);
						opt.appendTo(selectbox);
					});
					
				}
			});
			
		});
		
		
		$("#sellercar_mileage").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
			}
   });
		
		
		$("#plan_role_id").change(function(){
			var roleid = $(this).val();
			if (roleid == 3)
			{
				$(".Partscount").show();
				$(".divPartscount").hide();
				//$(".divAdvType").hide();
				//$(".AdvType").hide();
			}
			 else
			{
				$(".Partscount").hide();
				$(".AdvType").hide();
				$(".divAdvType").hide();
				$(".divPartscount").hide();
			}
			
		});
		
		$("#advertisement_advttype_id").change(function(){
			var advType = $(this).val();
			if (advType == 5)
			{
			$(".divTextlink").show();
				$(".divImage").hide();
			}
			else
			{
				$(".divTextlink").hide();
				$(".divImage").show();
			}
		
			$.ajax({
				url:"/getAdvPlan",
				method:"get",
				dataType: "json",
			data:{ id : advType},
				success :function(data){
					var selectbox = $("#advertisement_plan_id");
					selectbox.empty();
					
					$.each(data,function(index,value){
						var opt = $("<option/>");
						opt.attr('value',value[1]);
						opt.text(value[0]);
						opt.appendTo(selectbox);
					});
					
				}
			});	
				
		      });

		if ($("#plan_is_free + .iCheck-helper").parent().hasClass('checked')) {
				$('.divPrice').hide('fast');
				
		}
		else{
		$('.divPrice').show('fast');
		}


		$("#plan_is_free + .iCheck-helper").click(function(){
				if ($(this).parent().hasClass('checked')) {
						$('.divPrice').hide('fast');
						
				}
				else{
				$('.divPrice').show('fast');
				}
		});

		$("#user_countrycode").on('keypress',function(e){
			var regex = new RegExp("^[0-9\-]+$");
		  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);	
				if (regex.test(str))
				{
						var curchr = this.value.length;
						if (curchr < 4)
						{
								var curval = $(this).val();
								if (curchr == 0)
								{
									$("#user_countrycode").val(curval +  "+");
								}
						return true;  
						}
						else
						{
								return false;
						}
				}
				if (e.keyCode == 8)
				{
				 return true;
				}	
				e.preventDefault();
				return false;	
		});

	//get Zones Under States
	$("#taxe_zone_id").change(function(){
		
			var zoneid = $(this).val();

			$.ajax({
				url:"/getZoneStates",
				method:"get",
				dataType: "json",
				data:{ id : zoneid},
				success :function(data){
					var selectbox = $("#states");
					selectbox.empty();
					// alert(data);
					// $("#states").append("<option>Select Nigearian City</option>")
					$.each(data,function(index,value){
						var opt = $("<option/>");
						opt.attr('value',value[1]);
						opt.text(value[0]);
						opt.appendTo(selectbox);
					});
				}
			});
			
		});
	//get weight on zones
	$("#taxe_zone_id").change(function(){
		var zone = $("#taxe_zone_id").val();
		if( zone == 2 || zone == 3 || zone == 4  )
		{
			
			$("#weights").css("display","block");
			$("#weighttozone").css("display","none");
			$("#weighttoztwo").css("display","block");
			$("#intercitytrfee").css("display","none");

			$("#intracity").css("display","none");
			$("#paymentprofee").css("display","none");
			$("#insurancecoverage").css("display","none");
			$("#normalprice").css("display","block");
			$("#pupfeeperpackage").css("display","none");
			$("#processingfee").css("display","none");
			$("#sucessfee").css("display","none");

		}

		if( zone == 1)
		{
			$("#weights").css("display","block");	
			$("#weighttoztwo").css("display","none");
			$("#weighttozone").css("display","block");
			$("#intercitytrfee").css("display","block");
			$("#intracity").css("display","block");
			$("#paymentprofee").css("display","block");
			$("#insurancecoverage").css("display","block");
			$("#normalprice").css("display","none");
			$("#pupfeeperpackage").css("display","block");
			$("#processingfee").css("display","block");
			$("#sucessfee").css("display","block");
			
			
			
		}
	})

	// $('#taxe_intercity').keypress(function(){
	// 	$('#intercitytrfee').css("display","block");
	// 	$('#taxe_intracity').val('');
	// })

	// $('#taxe_intracity').keypress(function(){
	// 	$('#intercitytrfee').css("display","none");	
	// 	$('#taxe_intercity').val('');
	// })

	$('#taxe_intercity').change(function(){
		var intercity = $("#taxe_intercity").val();
		
		if( intercity == "Intercity")
		{
			
			$('#intercitytrfee1').css("display","block");
			// $('#taxe_intracity').val('');	
		}
		if( intercity == "Intracity")
		{
				
			$('#intercitytrfee1').css("display","none");	
			// $('#taxe_intercity').val('');
	    }
	
	})

	
	// $('#taxe_intercity').change(function(){
	// 	var intercity = $("#taxe_intercity").val();
		
	// 	if( intercity == "Intercity"  )
	// 	{
			
	// 	$('#intercitytrfee2').css("display","block");
	// 	$('#taxe_intracity').val('');	
	// 	}
	// 	if( intercity == "Intracity"  )
	// 		{
				
	// 	$('#intercitytrfee2').css("display","none");	
	// 	$('#taxe_intercity').val('');
	// }
	
	// })
	$('#zone1').click(function(){

		
		$('#zone1table').css("display","block");
		$('#zone2table').css("display","none");
		$('#zone3table').css("display","none");
		$('#zone4table').css("display","none");
	})

	$('#zone2').click(function(){

		$('#zone2table').css("display","block");
		$('#zone1table').css("display","none");
		$('#zone3table').css("display","none");
		$('#zone4table').css("display","none");
	})

	$('#zone3').click(function(){
		$('#zone2table').css("display","none");
		$('#zone1table').css("display","none");
		$('#zone4table').css("display","none");
		$('#zone3table').css("display","block");
	})
	$('#zone4').click(function(){
		$('#zone2table').css("display","none");
		$('#zone1table').css("display","none");
		$('#zone3table').css("display","none");
		$('#zone4table').css("display","block");
	})

	$('#vendorpart_weight').change(function(){
		// alert($('#vendorpart_weight').val());
		if($('#vendorpart_weight').val() == "++More Weight?")
		{
		  $('#aboveweight').css("display","block");
		}
		else
		{
			$('#aboveweight').css("display","none");
		}

	})

	$('#productpart_weight').change(function(){
		if($('#productpart_weight').val() == "++More Weight?")
		{
		  $('#aboveweightppart').css("display","block");
		}
		else
		{
			$('#aboveweightppart').css("display","none");
		}	
	})




		$("#price_id").change(function(){
			var price = $("#price_id").val();
			if (price == "0"){
				$("#usd_price").css("display","none");
				$("#naira_price_disable").css("display","none");
				$("#naira_price_hidden").css("display","none");
				$("#naira_price").css("display","none");

			}

			if( price == "Price In USD"  ){
				$("#usd_price").css("display","block");
				$("#naira_price_disable").css("display","block");
				$("#naira_price_hidden").css("display","block");
				$("#naira_price").css("display","none");
			}
			if ( price == "Price In Naira"){
				$("#usd_price").css("display","none");
				$("#naira_price_disable").css("display","none");
				$("#naira_price_hidden").css("display","none");
				$("#naira_price").css("display","block");
				$('#pricenige').removeProp('disabled');


			}

			});
		$("#pprice_id").change(function(){
			var price = $("#pprice_id").val();
			if(price == "1"){
				$("#pusd_price").css("display","none");
				$("#pnaira_price_disable").css("display","none");
				$("#pnaira_price_hidden").css("display","none");
				$("#naira_price").css("display","none");
			}
			
			if( price == "Price In USD"  ){
				$("#pusd_price").css("display","block");
				$("#pnaira_price_disable").css("display","block");
				$("#pnaira_price_hidden").css("display","block");
				$("#naira_price").css("display","none");
			}
			if ( price == "Price In Naira"){
				$("#pusd_price").css("display","none");
				$("#pnaira_price_disable").css("display","none");
				$("#pnaira_price_hidden").css("display","none");
				$("#pnaira_price").css("display","block");
				$('#productpricenige').removeProp('disabled');


			}

			



			});
    
  
		
	});  //Closing of document.ready();




function categoryid(input)
	{
		var categoryVal = $("#" + input.attr("id")).val();
		var categorySplit =  input.attr('id').split("_");
		categorySplit[4] = "carfeaturestatus";
		var categoryJoin = categorySplit.join("_")
		
		$.ajax({
			url:"/categorystatusid",
			method:"get",
			dataType:"json",
			data:{ id : categoryVal},
			success :function(data){
				var selectbox = $("#" + categoryJoin);
				selectbox.empty();
					$("#" + categoryJoin).append("<option value = '0'>Select Status</option>");
				$.each(data,function(index,value){
					var opt = $("<option/>");
					opt.attr('value',value[1]);
					opt.text(value[0]);
					opt.appendTo(selectbox);
				});
			}
		});
	}
