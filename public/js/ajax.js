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
				sch.html(`<option>Select Category</option>`)
				response.schools.forEach(function(school) {
					
					sch.append(
						'<option value="' + school.schoolname + '">' + school.schoolname + '</option>'
					);
				});
			}
		});
		
	})
	
	
	$('#naduneduBtn').on('click', function(e) {
		
		e.preventDefault()
		
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
		
		var wb_rec = $('#wb_rec').val()
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
		
		var chalk_board_req = $('#chalk_board_upload').val()
		var chalk_board_upload = $('#chalk_board_upload').val()
		var chalk_board_rec = $('#chalk_board_rec').val()
		
		var tv_req = $('#tv_req').val()
		var tv_upload = $('#tv_upload').val()
		var tv_rec = $('#tv_rec').val()
		
		const data = {
			dot : '06/06/2020',
			mandal : mandal,
			school :school,
			funds_estimated: funds_estimated,
			funds_receivedOne : funds_receivedOne,
			funds_receivedTwo:funds_receivedTwo,
			funds_expenditure:funds_expenditure,
			cement_company:cement_company,
			cement_req: cement_req,
			cement_indent_placed: cement_indent_placed,
			cement_rec:cement_rec,
			sand_req: sand_req,
			sand_indent_placed: sand_indent_placed,
			sand_rec: sand_rec,
			metal_req: metal_req,
			metal_rec: metal_rec,
			cement_bricks_req: cement_bricks_req,
			cement_bricks_rec:cement_bricks_rec,
			cley_bricks_req: cley_bricks_req,
			cley_bricks_rec: cley_bricks_rec,
			wb_rec: wb_rec,
			wb_upload: wb_upload,
			wb_rec: wb_rec,
			urinals_req:urinals_req,
			urinals_upload: urinals_upload,
			urinals_rec: urinals_rec,
			wc_req:wc_req,
			wc_upload:wc_upload,
			wc_rec:wc_rec,
			fans_req:fans_req,
			fans_upload:fans_upload,
			fans_rec:fans_rec,
			db_class_1_3_req:db_class_1_3_req,
			db_class_1_3_upload:db_class_1_3_upload,
			db_class_1_3_rec:db_class_1_3_rec,
			db_class_4_7_req:db_class_4_7_req,
			db_class_4_7_upload:db_class_4_7_upload,
			db_class_4_7_rec:db_class_4_7_rec,
			db_class_7_10_req:db_class_7_10_req,
			db_class_7_10_upload:db_class_7_10_upload,
			db_class_7_10_rec: db_class_7_10_rec,
			tables_req:tables_req,
			tables_upload:tables_upload,
			tables_rec:tables_rec,
			chairs_req:chairs_req,
			chairs_upload:chairs_upload,
			chairs_rec:chairs_rec,
			almirah_req: almirah_req,
			almirah_upload: almirah_upload,
			almirah_rec:almirah_rec,
			chalk_board_req:chalk_board_req,
			chalk_board_upload:chalk_board_upload,
			chalk_board_rec:chalk_board_rec,
			tv_req:tv_req,
			tv_upload:tv_upload,
			tv_rec:tv_rec
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
					
					$('#message').append ('Record Successfully Inserted')
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
					$('#wb_rec').val('')
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
					
					// $('#naduneduForm').reset()
					console.log('successfully inserted')
					

				}
						
			})
	
	})

	
})