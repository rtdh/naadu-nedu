const express = require('express');
const app = express.Router();


require('dotenv/config');


app.get('/', function(req, res){
	res.render ('schools')
})

app.get('/report',function(req, res){
	var sql = `SELECT * FROM nadunedudev`;
	db.query(sql, function(err, results){
		if (err){
			console.log(err)
			//req.flash('error', err.message)
			//res.render('errorpage')
		} else {
			// res.send('reports/promotionReport', {teachers: teachers});
			res.render('report', {results : results});
		}
			
	})
})


app.get('/creport',function(req, res){
	var sql = `SELECT * FROM nadunedulatest where funds_estimated != ''`;
	db.query(sql, function(err, results){
		if (err){
			console.log(err)
			//req.flash('error', err.message)
			//res.render('errorpage')
		} else {
			// res.send('reports/promotionReport', {teachers: teachers});
			res.render('creport', {results : results});
		}
			
	})
})

app.get('/unfreezeschools', function(req,res){
	
	var sql = `SELECT date_entry from nadunedudev where date_entry IS NOT NULL ORDER BY date_entry DESC limit 1`
	db.query(sql, (err, latestentry)=>{
		
		if(latestentry.length > 0) {
			var latestentry = latestentry[0].date_entry
			var l = latestentry.toString()
			var lastupdatedentry = l.substr(0,10)

			var d = new Date()
			var n = d.toString()
			var todaydate = n.substr(0,10)

			
				
				if (lastupdatedentry !== todaydate) {
					var sql = `UPDATE nadunedu SET status=''`;
					db.query(sql, function(err, results){
						if(err) throw err
						res.send({results : results})
						
						console.log('Schools are unfreezeed...')
					})

				} else {
					console.log('you should not unfreeze schools')
				}
		}		
		
	})
})


app.get('/loadmandals', function(req,res){
	
	var sql = `SELECT distinct mandal from nadunedu GROUP BY mandal`
	
	db.query(sql, function(err, mandals){
		if(err){
			console.log(err)
		} else {
			res.send({mandals : mandals})
		}
		
	})
	
})

app.post('/loadschools', function(req,res){
	
	var mandal = req.body.mandal
	
	var sql = `SELECT schoolname from nadunedu where mandal='${mandal}' and status=''`
	
	db.query(sql, function(err, schools){
		if(err){
			console.log(err)
		} else {
			res.send({schools : schools})
		}
	})
})


app.post('/loadtagged', function(req,res){
	
	var school = req.body.school
	
	var sql = `SELECT * from nadunedulatest where schoolname='${school}'`
	
	db.query(sql, function(err, results){
		if(err){
			//req.flash('error', err.message)
			console.log('error occured')
			//res.redirect('/errorpage')
		} else {
			console.log(results)
			res.send({results : results})
		}
		
	})
})


app.post('/addnew', function(req,res){
	
	
	console.log('post route')
	console.log(req.body.data)
	
	const sql = `INSERT INTO nadunedudev VALUES ('${req.body.data.dot}', '${req.body.data.mandal}', '${req.body.data.school}', '${req.body.data.funds_estimated}', '${req.body.data.funds_receivedone}', '${req.body.data.funds_receivedtwo}', '${req.body.data.funds_expenditure}', '${req.body.data.cement_company}', '${req.body.data.cement_required}', '${req.body.data.cement_indent_placed}', '${req.body.data.cement_received}', '${req.body.data.sand_required}', '${req.body.data.sand_indent_placed}', '${req.body.data.sand_received}', '${req.body.data.metal_required}', '${req.body.data.metal_received}', '${req.body.data.steel_required}', '${req.body.data.steel_received}', '${req.body.data.cement_bricks_required}', '${req.body.data.cement_bricks_received}', '${req.body.data.country_bricks_required}', '${req.body.data.country_bricks_received}', '${req.body.data.wb_required}', '${req.body.data.wb_upload}', '${req.body.data.wb_received}', '${req.body.data.urinals_required}', '${req.body.data.urinals_upload}', '${req.body.data.urinals_received}', '${req.body.data.wc_required}', '${req.body.data.wc_upload}', '${req.body.data.wc_received}', '${req.body.data.fans_required}', '${req.body.data.fans_upload}', '${req.body.data.fans_received}', '${req.body.data.db_class_1_3_required}', '${req.body.data.db_class_1_3_upload}', '${req.body.data.db_class_1_3_received}', '${req.body.data.db_class_4_7_required}', '${req.body.data. db_class_4_7_upload}', '${req.body.data.db_class_4_7_received}', '${req.body.data.db_class_8_10_required}', '${req.body.data.db_class_8_10_upload}', '${req.body.data.db_class_8_10_received}', '${req.body.data.tables_required}', '${req.body.data.tables_upload}', '${req.body.data.tables_received}', '${req.body.data.chairs_required}', '${req.body.data.chairs_upload}', '${req.body.data.chairs_received}', '${req.body.data.almirah_required}', '${req.body.data.almirah_upload}', '${req.body.data.almirah_received}', '${req.body.data.green_chalk_board_required}', '${req.body.data.green_chalk_board_upload}', '${req.body.data.green_chalk_board_received}', '${req.body.data.englab_required}', '${req.body.data.englab_upload}', '${req.body.data.englab_received}', '${req.body.data.tagged}', '${req.body.data.date_of_entry}' )`;

	db.query(sql, (err, results)=>{
	if(err) throw err
		var time = new Date()
		var sql2 = `UPDATE nadunedu SET status = '${time}' where schoolname ='${req.body.data.school}'`;
		db.query(sql2)
		
		// updating cummulative report
		
		
		var sql3 = `UPDATE nadunedulatest SET 
					
				funds_estimated='${req.body.data.funds_estimated}',
				funds_receivedone='${req.body.data.funds_receivedone}', 
				funds_receivedtwo='${req.body.data.funds_receivedtwo}', 
				funds_expenditure='${req.body.data.funds_expenditure}',

				cement_company='${req.body.data.cement_company}', 
				cement_required='${req.body.data.cement_required}', 
				cement_indent_placed='${req.body.data.cement_indent_placed}', 
				cement_received='${req.body.data.cement_received}', 

				sand_required='${req.body.data.sand_required}', 
				sand_indent_placed='${req.body.data.sand_indent_placed}', 
				sand_received='${req.body.data.sand_received}', 

				metal_required='${req.body.data.metal_required}', 
				metal_received='${req.body.data.metal_received}', 

				steel_required='${req.body.data.steel_required}', 
				steel_received='${req.body.data.steel_received}', 

				cement_bricks_required='${req.body.data.cement_bricks_required}', 
				cement_bricks_received='${req.body.data.cement_bricks_received}', 
				country_bricks_required='${req.body.data.country_bricks_required}', 
				country_bricks_received='${req.body.data.country_bricks_received}', 

				wb_required='${req.body.data.wb_required}', 
				wb_upload='${req.body.data.wb_upload}', 
				wb_received='${req.body.data.wb_received}', 

				urinals_required='${req.body.data.urinals_required}', 
				urinals_upload='${req.body.data.urinals_upload}', 
				urinals_received='${req.body.data.urinals_received}', 

				wc_required='${req.body.data.wc_required}', 
				wc_upload='${req.body.data.wc_upload}', 
				wc_received='${req.body.data.wc_received}', 

				fans_required='${req.body.data.fans_required}', 
				fans_upload='${req.body.data.fans_upload}', 
				fans_received='${req.body.data.fans_received}', 

				db_class_1_3_required='${req.body.data.db_class_1_3_required}', 
				db_class_1_3_upload='${req.body.data.db_class_1_3_upload}', 
				db_class_1_3_received='${req.body.data.db_class_1_3_received}', 


				db_class_4_7_required='${req.body.data.db_class_4_7_required}', 
				db_class_4_7_upload='${req.body.data.db_class_4_7_upload}', 
				db_class_4_7_received='${req.body.data.db_class_4_7_received}',

				db_class_8_10_required='${req.body.data.db_class_8_10_required}', 
				db_class_8_10_upload='${req.body.data.db_class_8_10_upload}', 
				db_class_8_10_received='${req.body.data.db_class_8_10_received}',

				tables_required='${req.body.data.tables_required}', 
				tables_upload='${req.body.data.tables_upload}', 
				tables_received='${req.body.data.tables_received}', 

				chairs_required='${req.body.data.chairs_required}', 
				chairs_upload='${req.body.data.chairs_upload}', 
				chairs_received='${req.body.data.chairs_received}', 

				almirah_required='${req.body.data.almirah_required}', 
				almirah_upload='${req.body.data.almirah_upload}', 
				almirah_received='${req.body.data.almirah_received}', 

				green_chalk_board_required='${req.body.data.green_chalk_board_required}', 
				green_chalk_board_upload='${req.body.data.green_chalk_board_upload}', 
				green_chalk_board_received='${req.body.data.green_chalk_board_received}', 

				englab_required='${req.body.data.englab_required}', 
				englab_upload='${req.body.data.englab_upload}', 
				englab_received='${req.body.data.englab_received}', 

				timestamp = '${req.body.data.dot}' where schoolname = '${req.body.data.school}'
			
				`;
		
		db.query(sql3, (err,results3)=>{
			if(err) throw err
			console.log('cummulative updation completed')
		})
		
		// End of cummulative uption
		
		res.send({results : results})
	})
})


module.exports = app;