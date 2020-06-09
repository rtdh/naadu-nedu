$(document).ready(function() {
	
	
	// $('#mandal').onfocusout(function(){
	// 	$('#mandal').css('background', 'white')
	// })
	
	
	// load mandals
	
	//alert('connected')
	
	$.ajax({
		url: '/loadmandals',
		method: 'GET',
		contentType: 'application/json',
		success: function(response) {
			var mdl = $('#mandal');
			response.mandals.forEach(function(mandal) {
				mdl.append(
					'<option value="' + mandal.mandal + '">' + mandal.mandal + '</option>'
				);
			});
		}
	});
	
	
	$('#mandal').on('change', function() {
		var mandal = $('#mandal').val()
		$('#school').html(`<option>Select School</option>`)
		console.log(mandal)
		
		$.ajax({
			url: '/loadschools',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ mandal: mandal }),
			success: function(response) {
				var sch = $('#school');
				console.log(response.schools)
				sch.html('')
				sch.html(`<option>Select School</option>`)
				response.schools.forEach(function(school) {
					
					sch.append(
						'<option value="' + school.schoolname + '">' + school.schoolname + '</option>'
					);
				});
			}
		});
		
	})
	
	$('#school').on('change', function() {
		var school = $('#school').val()
		// $('#school').html(`<option>Select School</option>`)
		console.log(mandal)
		
		$.ajax({
			url: '/loadtagged',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({ school: school }),
			success: function(response) {
				$('#tagged').html('')
				var taggedassist = response.taggedassist[0].taggedassist
				
				$('#tagged').val(taggedassist)
				$('#tagged').css('display', 'block')
				
			}
		});
		
	})
	
	
	
	
		
	$('#naduneduForm').on('submit', function(e) {
		
		e.preventDefault()
		
		// Today Date
		
		var date=new Date();  
		var day=date.getDate();  
		var month=date .getMonth()+1;
		
		if (day < 10) {
			day = '0' + day
		}
		if (month < 10) {
			month = '0' + month
		}
		
		var year=date.getFullYear();  
		// $('#todayDate').html(day +"/"+month+"/"+year)
		// $('#currentYear').html(year)
		
		var dot = day +"/"+month+"/"+year;
		
		//alert('today date is ' +  dot)
		
		//alert('buttonclicked')
		
		var mandal = $('#mandal').val()
		var school = $('#school').val()
		
		var funds_estimated = $('#funds_estimated').val()
		var funds_receivedOne = $('#funds_receivedOne').val()
		var funds_receivedTwo = $('#funds_receivedTwo').val()
		var funds_expenditure = $('#funds_expenditure').val()
		
		var cement_company = $('#cement_company').val()
		var cement_req = $('#cement_req').val()
		var cement_indent_placed = $('#cement_indent_placed').val()
		var cement_rec = $('#cement_rec').val()
		
		var sand_req = $('#sand_req').val()
		var sand_indent_placed = $('#sand_indent_placed').val()
		var sand_rec = $('#sand_rec').val()
		
		var metal_req = $('#metal_req').val()
		var metal_rec = $('#metal_rec').val()
		
		var steel_req = $('#steel_req').val()
		var steel_rec = $('#steel_rec').val()
		
		var cement_bricks_req = $('#cement_bricks_req').val()
		var cement_bricks_rec = $('#cement_bricks_rec').val()
		var cley_bricks_req = $('#cley_bricks_req').val()
		var cley_bricks_rec = $('#cley_bricks_rec').val()
		
		var wb_req = $('#wb_req').val()
		var wb_upload = $('#wb_upload').val()
		var wb_rec = $('#wb_rec').val()
		
		var urinals_req = $('#urinals_req').val()
		var urinals_upload = $('#urinals_upload').val()
		var urinals_rec = $('#urinals_rec').val()
		
		var wc_req = $('#wc_req').val()
		var wc_upload = $('#wc_upload').val()
		var wc_rec = $('#wc_rec').val()
		
		var fans_req = $('#fans_req').val()
		var fans_upload = $('#fans_upload').val()
		var fans_rec = $('#fans_rec').val()
		
		var db_class_1_3_req = $('#db_class_1_3_req').val()
		var db_class_1_3_upload = $('#db_class_1_3_upload').val()
		var db_class_1_3_rec = $('#db_class_1_3_rec').val()
		
		var db_class_4_7_req = $('#db_class_4_7_req').val()
		var db_class_4_7_upload = $('#db_class_4_7_upload').val()
		var db_class_4_7_rec = $('#db_class_4_7_rec').val()
		
		var db_class_7_10_req = $('#db_class_7_10_req').val()
		var db_class_7_10_upload = $('#db_class_7_10_upload').val()
		var db_class_7_10_rec = $('#db_class_7_10_rec').val()
		
		var tables_req = $('#tables_req').val()
		var tables_upload = $('#tables_upload').val()
		var tables_rec = $('#tables_rec').val()
		
		var chairs_req = $('#chairs_req').val()
		var chairs_upload = $('#chairs_upload').val()
		var chairs_rec = $('#chairs_rec').val()
		
		var almirah_req = $('#almirah_req').val()
		var almirah_upload = $('#almirah_upload').val()
		var almirah_rec = $('#almirah_rec').val()
		
		var chalk_board_req = $('#chalk_board_req').val()
		var chalk_board_upload = $('#chalk_board_upload').val()
		var chalk_board_rec = $('#chalk_board_rec').val()
		
		var tv_req = $('#tv_req').val()
		var tv_upload = $('#tv_upload').val()
		var tv_rec = $('#tv_rec').val()
		
		var tagged = $('#tagged').val()
		
		const data = {
			dot : dot,
			mandal : mandal,
			school :school,
			funds_estimated: funds_estimated,
			funds_receivedOne : funds_receivedOne,
			funds_receivedTwo:funds_receivedTwo,
			funds_expenditure:funds_expenditure,
			cement_company:cement_company,
			cement_required: cement_req,
			cement_indent_placed: cement_indent_placed,
			cement_received:cement_rec,
			sand_required: sand_req,
			sand_indent_placed: sand_indent_placed,
			sand_received: sand_rec,
			metal_required: metal_req,
			metal_received: metal_rec,
			steel_required: steel_req,
			steel_received: steel_rec,
			cement_bricks_required: cement_bricks_req,
			cement_bricks_received:cement_bricks_rec,
			cley_bricks_required: cley_bricks_req,
			cley_bricks_received: cley_bricks_rec,
			wb_required: wb_req,
			wb_upload: wb_upload,
			wb_received: wb_rec,
			urinals_required:urinals_req,
			urinals_upload: urinals_upload,
			urinals_received: urinals_rec,
			wc_required:wc_req,
			wc_upload:wc_upload,
			wc_received:wc_rec,
			fans_required:fans_req,
			fans_upload:fans_upload,
			fans_received:fans_rec,
			db_class_1_3_required:db_class_1_3_req,
			db_class_1_3_upload:db_class_1_3_upload,
			db_class_1_3_received:db_class_1_3_rec,
			db_class_4_7_required:db_class_4_7_req,
			db_class_4_7_upload:db_class_4_7_upload,
			db_class_4_7_received:db_class_4_7_rec,
			db_class_7_10_required:db_class_7_10_req,
			db_class_7_10_upload:db_class_7_10_upload,
			db_class_7_10_received: db_class_7_10_rec,
			tables_required:tables_req,
			tables_upload:tables_upload,
			tables_received:tables_rec,
			chairs_required:chairs_req,
			chairs_upload:chairs_upload,
			chairs_received:chairs_rec,
			almirah_required: almirah_req,
			almirah_upload: almirah_upload,
			almirah_received:almirah_rec,
			chalk_board_required:chalk_board_req,
			chalk_board_upload:chalk_board_upload,
			chalk_board_received:chalk_board_rec,
			tv_required:tv_req,
			tv_upload:tv_upload,
			tv_received:tv_rec,
			tagged : tagged
		}
		console.log(data)
		console.log(mandal)
		console.log(funds_estimated)
		
		// $('#naduneduForm').reset()
		
			$.ajax({
				url: '/addnew',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({ data : data }),
				success: function(response) {
					
					console.log(response)
					
					$('#message').append (`<p class="bg-success text-white p-2 text-center">Record Successfully Inserted</p>`)
					$('#mandal').val('')
					$('#school').val('')
					$('#funds_estimated').val('')
					$('#funds_receivedOne').val('')
					$('#funds_receivedTwo').val('')
					$('#funds_expenditure').val('')
					$('#cement_company').val('')
					$('#cement_req').val('')
					$('#cement_indent_placed').val('')
					$('#cement_rec').val('')
					$('#sand_req').val('')
					$('#sand_indent_placed').val('')
					$('#sand_rec').val('')
					$('#metal_req').val('')
					$('#metal_rec').val('')
					$('#steel_req').val('')
					$('#steel_rec').val('')
					$('#cement_bricks_req').val('')
					$('#cement_bricks_rec').val('')
					$('#cley_bricks_req').val('')
					$('#cley_bricks_rec').val('')
					$('#wb_req').val('')
					$('#wb_upload').val('')
					$('#wb_rec').val('')
					$('#urinals_req').val('')
					$('#urinals_upload').val('')
					$('#urinals_rec').val('')
					$('#wc_req').val('')
					$('#wc_upload').val('')
					$('#wc_rec').val('')
					$('#fans_req').val('')
					$('#fans_upload').val('')
					$('#fans_rec').val('')
					$('#db_class_1_3_req').val('')
					$('#db_class_1_3_upload').val('')
					$('#db_class_1_3_rec').val('')
					$('#db_class_4_7_req').val('')
					$('#db_class_4_7_upload').val('')
					$('#db_class_4_7_rec').val('')
					$('#db_class_7_10_req').val('')
					$('#db_class_7_10_upload').val('')
					$('#db_class_7_10_rec').val('')
					$('#tables_req').val('')
					$('#tables_upload').val('')
					$('#tables_rec').val('')
					$('#chairs_req').val('')
					$('#chairs_upload').val('')
					$('#chairs_rec').val('')
					$('#almirah_req').val('')
					$('#almirah_upload').val('')
					$('#almirah_rec').val('')
					$('#chalk_board_req').val('')
					$('#chalk_board_upload').val('')
					$('#chalk_board_rec').val('')
					$('#tv_req').val('')
					$('#tv_upload').val('')
					$('#tv_rec').val('')
					$('#tagged').val('')
					
					//$('#naduneduForm').reset()
					console.log('successfully inserted')
					

				},
				complete:function(){
				   $('body, html').animate({scrollTop:$('#naduneduForm').offset().top + '100px'}, 'slow');
				   // $('#naduneduForm').on('submit')
				}
						
			})
	
	})

	
})