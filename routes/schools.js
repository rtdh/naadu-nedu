const express = require('express');
const app = express.Router();


require('dotenv/config');


app.get('/', function(req, res){
	res.render ('schools')
})

app.get('/report',function(req, res){
	var sql = `SELECT * FROM nadunedu_entry`;
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


app.get('/loadmandals', function(req,res){
	
	var sql = `SELECT distinct mandal from nadunedu GROUP BY mandal`
	
	db.query(sql, function(err, mandals){
		if(err){
			//req.flash('error', err.message)
			//res.send('/errorpage')
			console.log(err)
		} else {
			console.log('success')
			res.send({mandals : mandals})
		}
		
	})
})

app.post('/loadschools', function(req,res){
	
	var mandal = req.body.mandal
	
	var sql = `SELECT schoolname from nadunedu where mandal='${mandal}'`
	
	//var sql = `SELECT rank from teachers WHERE opted_mandal = '' ORDER BY rank`;
	db.query(sql, function(err, schools){
		if(err){
			//req.flash('error', err.message)
			res.redirect('/errorpage')
		} else {
			//console.log(schools)
			res.send({schools : schools})
		}
		
	})
})

app.post('/loadtagged', function(req,res){
	
	var school = req.body.school
	
	var sql = `SELECT taggedassist from nadunedu where schoolname='${school}'`
	
	//var sql = `SELECT rank from teachers WHERE opted_mandal = '' ORDER BY rank`;
	db.query(sql, function(err, taggedassist){
		if(err){
			//req.flash('error', err.message)
			console.log('error occured')
			//res.redirect('/errorpage')
		} else {
			//console.log(schools)
			res.send({taggedassist : taggedassist})
		}
		
	})
})


app.post('/addnew', function(req,res){
	
	
	console.log('post route')
	console.log(req.body.data)
	
	const sql = `INSERT INTO nadunedu_entry VALUES ('${req.body.data.dot}', '${req.body.data.mandal}', '${req.body.data.school}', '${req.body.data.funds_estimated}', '${req.body.data.funds_receivedOne}', '${req.body.data.funds_receivedTwo}', '${req.body.data.funds_expenditure}', '${req.body.data.cement_company}', '${req.body.data.cement_required}', '${req.body.data.cement_indent_placed}', '${req.body.data.cement_received}', '${req.body.data.sand_required}', '${req.body.data.sand_indent_placed}', '${req.body.data.sand_received}', '${req.body.data.metal_required}', '${req.body.data.metal_received}', '${req.body.data.steel_required}', '${req.body.data.steel_received}', '${req.body.data.cement_bricks_required}', '${req.body.data.cement_bricks_received}', '${req.body.data.cley_bricks_required}', '${req.body.data.cley_bricks_received}', '${req.body.data.wb_required}', '${req.body.data.wb_upload}', '${req.body.data.wb_received}', '${req.body.data.urinals_required}', '${req.body.data.urinals_upload}', '${req.body.data.urinals_received}', '${req.body.data.wc_required}', '${req.body.data.wc_upload}', '${req.body.data.wc_received}', '${req.body.data.fans_required}', '${req.body.data.fans_upload}', '${req.body.data.fans_received}', '${req.body.data.db_class_1_3_required}', '${req.body.data.db_class_1_3_upload}', '${req.body.data.db_class_1_3_received}', '${req.body.data.db_class_4_7_required}', '${req.body.data. db_class_4_7_upload}', '${req.body.data.db_class_4_7_received}', '${req.body.data.db_class_7_10_required}', '${req.body.data.db_class_7_10_upload}', '${req.body.data.db_class_7_10_received}', '${req.body.data.tables_required}', '${req.body.data.tables_upload}', '${req.body.data.tables_received}', '${req.body.data.chairs_required}', '${req.body.data.chairs_upload}', '${req.body.data.chairs_received}', '${req.body.data.almirah_required}', '${req.body.data.almirah_upload}', '${req.body.data.almirah_received}', '${req.body.data.chalk_board_required}', '${req.body.data.chalk_board_upload}', '${req.body.data.chalk_board_received}', '${req.body.data.tv_required}', '${req.body.data.tv_upload}', '${req.body.data.tv_received}', '${req.body.data.tagged}' )`;

	db.query(sql, (err, results)=>{
	if(err) throw err
	console.log(results)
	res.json(results)
	})
})






module.exports = app;