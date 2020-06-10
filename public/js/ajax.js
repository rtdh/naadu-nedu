$(document).ready(function() {
	
	
	
	// Unfreeze schools
	
	$.ajax({
		url: '/unfreezeschools',
		method: 'GET',
		contentType: 'application/json',
		success: function(response) {
			alert('Schools are unfreezed...')
		}
	});
	
	// Load Mandals
	
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
				
				//console.log(response.results)
				//$('#tagged').html('')
				//var taggedassist = response.results[0].taggedassist
				var tagged = response.results[0].taggedassist
				
				$('#tagged').val(tagged)
				$('#tagged').css('display', 'block')
				
				$('#funds_estimated').val(response.results[0].funds_estimated)
				$('#funds_receivedone').val(response.results[0].funds_receivedone)
				$('#funds_receivedtwo').val(response.results[0].funds_receivedtwo)
				$('#funds_expenditure').val(response.results[0].funds_expenditure)
				
				$('#cement_company').val(response.results[0].cement_company)
				$('#cement_required').val(response.results[0].cement_required)
				$('#cement_indent_placed').val(response.results[0].cement_indent_placed)
				$('#cement_received').val(response.results[0].cement_received)
				
				$('#sand_required').val(response.results[0].sand_required)
				$('#sand_indent_placed').val(response.results[0].sand_indent_placed)
				$('#sand_received').val(response.results[0].sand_received)
				
				$('#metal_required').val(response.results[0].metal_required)
				$('#metal_received').val(response.results[0].metal_received)
				
				$('#steel_required').val(response.results[0].steel_required)
				$('#steel_received').val(response.results[0].steel_received)
				
				$('#cement_bricks_required').val(response.results[0].cement_bricks_required)
				$('#cement_bricks_received').val(response.results[0].cement_bricks_received)
				$('#country_bricks_required').val(response.results[0].country_bricks_required)
				$('#country_bricks_received').val(response.results[0].country_bricks_received)
				
				$('#wb_required').val(response.results[0].wb_required)
				$('#wb_upload').val(response.results[0].wb_upload)
				$('#wb_received').val(response.results[0].wb_received)
				
				$('#urinals_required').val(response.results[0].urinals_required)
				$('#urinals_upload').val(response.results[0].urinals_upload)
				$('#urinals_received').val(response.results[0].urinals_received)
				
				$('#wc_required').val(response.results[0].wc_required)
				$('#wc_upload').val(response.results[0].wc_upload)
				$('#wc_received').val(response.results[0].wc_received)
				
				$('#fans_required').val(response.results[0].fans_required)
				$('#fans_upload').val(response.results[0].fans_upload)
				$('#fans_received').val(response.results[0].fans_received)
				
				$('#db_class_1_3_required').val(response.results[0].db_class_1_3_required)
				$('#db_class_1_3_upload').val(response.results[0].db_class_1_3_upload)
				$('#db_class_1_3_received').val(response.results[0].db_class_1_3_received)
				
				$('#db_class_4_7_required').val(response.results[0].db_class_4_7_required)
				$('#db_class_4_7_upload').val(response.results[0].db_class_4_7_upload)
				$('#db_class_4_7_received').val(response.results[0].db_class_4_7_received)
				
				$('#db_class_8_10_required').val(response.results[0].db_class_8_10_required)
				$('#db_class_8_10_upload').val(response.results[0].db_class_8_10_upload)
				$('#db_class_8_10_received').val(response.results[0].db_class_8_10_received)
				
				
				$('#tables_required').val(response.results[0].tables_required)
				$('#tables_upload').val(response.results[0].tables_upload)
				$('#tables_received').val(response.results[0].tables_received)
				
				$('#chairs_required').val(response.results[0].chairs_required)
				$('#chairs_upload').val(response.results[0].chairs_upload)
				$('#chairs_received').val(response.results[0].chairs_received)
				
				$('#almirah_required').val(response.results[0].almirah_required)
				$('#almirah_upload').val(response.results[0].almirah_upload)
				$('#almirah_received').val(response.results[0].almirah_received)
				
				
				$('#green_chalk_board_required').val(response.results[0].green_chalk_board_required)
				$('#green_chalk_board_upload').val(response.results[0].green_chalk_board_upload)
				$('#green_chalk_board_received').val(response.results[0].green_chalk_board_received)
				
				$('#englab_required').val(response.results[0].englab_required)
				$('#englab_upload').val(response.results[0].englab_upload)
				$('#englab_received').val(response.results[0].englab_received)
				
			}
		});
		
	})
	
	
	//Form submission
		
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
			
		var dot = day +"/"+month+"/"+year;
		
		
		
		var mandal = $('#mandal').val()
		var school = $('#school').val()
		
		var funds_estimated = $('#funds_estimated').val()
		var funds_receivedone = $('#funds_receivedone').val()
		var funds_receivedtwo = $('#funds_receivedtwo').val()
		var funds_expenditure = $('#funds_expenditure').val()
		
		var cement_company = $('#cement_company').val()
		var cement_required = $('#cement_required').val()
		var cement_indent_placed = $('#cement_indent_placed').val()
		var cement_received = $('#cement_received').val()
		
		var sand_required = $('#sand_required').val()
		var sand_indent_placed = $('#sand_indent_placed').val()
		var sand_received = $('#sand_received').val()
		
		var metal_required = $('#metal_required').val()
		var metal_received = $('#metal_received').val()
		
		var steel_required = $('#steel_required').val()
		var steel_received = $('#steel_received').val()
		
		var cement_bricks_required = $('#cement_bricks_required').val()
		var cement_bricks_received = $('#cement_bricks_received').val()
		var country_bricks_required = $('#country_bricks_required').val()
		var country_bricks_received = $('#country_bricks_received').val()
		
		var wb_required = $('#wb_required').val()
		var wb_upload = $('#wb_upload').val()
		var wb_received = $('#wb_received').val()
		
		var urinals_required = $('#urinals_required').val()
		var urinals_upload = $('#urinals_upload').val()
		var urinals_received = $('#urinals_received').val()
		
		var wc_required = $('#wc_required').val()
		var wc_upload = $('#wc_upload').val()
		var wc_received = $('#wc_received').val()
		
		var fans_required = $('#fans_required').val()
		var fans_upload = $('#fans_upload').val()
		var fans_received = $('#fans_received').val()
		
		var db_class_1_3_required = $('#db_class_1_3_required').val()
		var db_class_1_3_upload = $('#db_class_1_3_upload').val()
		var db_class_1_3_received = $('#db_class_1_3_received').val()
		
		var db_class_4_7_required = $('#db_class_4_7_required').val()
		var db_class_4_7_upload = $('#db_class_4_7_upload').val()
		var db_class_4_7_received = $('#db_class_4_7_received').val()
		
		var db_class_8_10_required = $('#db_class_8_10_required').val()
		var db_class_8_10_upload = $('#db_class_8_10_upload').val()
		var db_class_8_10_rec = $('#db_class_8_10_received').val()
		
		var tables_required = $('#tables_required').val()
		var tables_upload = $('#tables_upload').val()
		var tables_received = $('#tables_received').val()
		
		var chairs_required = $('#chairs_required').val()
		var chairs_upload = $('#chairs_upload').val()
		var chairs_received = $('#chairs_received').val()
		
		var almirah_required = $('#almirah_required').val()
		var almirah_upload = $('#almirah_upload').val()
		var almirah_received = $('#almirah_received').val()
		
		var green_chalk_board_required = $('#green_chalk_board_required').val()
		var green_chalk_board_upload = $('#green_chalk_board_upload').val()
		var green_chalk_board_received = $('#green_chalk_board_received').val()
		
		var englab_required = $('#englab_required').val()
		var englab_upload = $('#englab_upload').val()
		var englab_received = $('#englab_received').val()
		
		var tagged = $('#tagged').val()
		
		
		const data = {
			dot : date,
			mandal : mandal,
			school :school,
			funds_estimated: funds_estimated,
			funds_receivedone : funds_receivedone,
			funds_receivedtwo:funds_receivedtwo,
			funds_expenditure:funds_expenditure,
			cement_company:cement_company,
			cement_required: cement_required,
			cement_indent_placed: cement_indent_placed,
			cement_received:cement_received,
			sand_required: sand_required,
			sand_indent_placed: sand_indent_placed,
			sand_received: sand_received,
			metal_required: metal_required,
			metal_received: metal_received,
			steel_required: steel_required,
			steel_received: steel_received,
			cement_bricks_required: cement_bricks_required,
			cement_bricks_received:cement_bricks_received,
			country_bricks_required: country_bricks_required,
			country_bricks_received: country_bricks_received,
			wb_required: wb_required,
			wb_upload: wb_upload,
			wb_received: wb_received,
			urinals_required:urinals_required,
			urinals_upload: urinals_upload,
			urinals_received: urinals_received,
			wc_required:wc_required,
			wc_upload:wc_upload,
			wc_received:wc_received,
			fans_required:fans_required,
			fans_upload:fans_upload,
			fans_received:fans_received,
			db_class_1_3_required:db_class_1_3_required,
			db_class_1_3_upload:db_class_1_3_upload,
			db_class_1_3_received:db_class_1_3_received,
			db_class_4_7_required:db_class_4_7_required,
			db_class_4_7_upload:db_class_4_7_upload,
			db_class_4_7_received:db_class_4_7_received,
			db_class_8_10_required:db_class_8_10_required,
			db_class_8_10_upload:db_class_8_10_upload,
			db_class_8_10_received: db_class_8_10_rec,
			tables_required:tables_required,
			tables_upload:tables_upload,
			tables_received:tables_received,
			chairs_required:chairs_required,
			chairs_upload:chairs_upload,
			chairs_received:chairs_received,
			almirah_required: almirah_required,
			almirah_upload: almirah_upload,
			almirah_received:almirah_received,
			green_chalk_board_required:green_chalk_board_required,
			green_chalk_board_upload:green_chalk_board_upload,
			green_chalk_board_received:green_chalk_board_received,
			englab_required:englab_required,
			englab_upload:englab_upload,
			englab_received:englab_received,
			tagged : tagged,
			date_of_entry : dot
		}
		
		
		// Adding New entry
		
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
					$('#funds_receivedone').val('')
					$('#funds_receivedtwo').val('')
					$('#funds_expenditure').val('')
					$('#cement_company').val('')
					$('#cement_required').val('')
					$('#cement_indent_placed').val('')
					$('#cement_received').val('')
					$('#sand_required').val('')
					$('#sand_indent_placed').val('')
					$('#sand_received').val('')
					$('#metal_required').val('')
					$('#metal_received').val('')
					$('#steel_required').val('')
					$('#steel_received').val('')
					$('#cement_bricks_required').val('')
					$('#cement_bricks_received').val('')
					$('#country_bricks_required').val('')
					$('#country_bricks_received').val('')
					$('#wb_required').val('')
					$('#wb_upload').val('')
					$('#wb_received').val('')
					$('#urinals_required').val('')
					$('#urinals_upload').val('')
					$('#urinals_received').val('')
					$('#wc_required').val('')
					$('#wc_upload').val('')
					$('#wc_received').val('')
					$('#fans_required').val('')
					$('#fans_upload').val('')
					$('#fans_received').val('')
					$('#db_class_1_3_required').val('')
					$('#db_class_1_3_upload').val('')
					$('#db_class_1_3_received').val('')
					$('#db_class_4_7_required').val('')
					$('#db_class_4_7_upload').val('')
					$('#db_class_4_7_received').val('')
					$('#db_class_8_10_required').val('')
					$('#db_class_8_10_upload').val('')
					$('#db_class_8_10_received').val('')
					$('#tables_required').val('')
					$('#tables_upload').val('')
					$('#tables_received').val('')
					$('#chairs_required').val('')
					$('#chairs_upload').val('')
					$('#chairs_received').val('')
					$('#almirah_required').val('')
					$('#almirah_upload').val('')
					$('#almirah_received').val('')
					$('#green_chalk_board_required').val('')
					$('#green_chalk_board_upload').val('')
					$('#green_chalk_board_received').val('')
					$('#englab_required').val('')
					$('#englab_upload').val('')
					$('#englab_received').val('')
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