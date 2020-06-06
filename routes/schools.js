const express = require('express');
const app = express.Router();


require('dotenv/config');


app.get('/', function(req, res){
	res.render ('schools')
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
			req.flash('error', err.message)
			res.redirect('/errorpage')
		} else {
			//console.log(schools)
			res.send({schools : schools})
		}
		
	})
})


app.post('/addnew', function(req,res){
	
	
	console.log('post route')
	console.log(req.body.data)
	
	const sql = `INSERT INTO nadunedu_entry VALUES ('${req.body.data.dot}', '${req.body.data.mandal}', '${req.body.data.school}', '${req.body.data.funds_estimated}', '${req.body.data.funds_receivedOne}', '${req.body.data.funds_receivedTwo}', '${req.body.data.funds_expenditure}', '${req.body.data.cement_company}', '${req.body.data.cement_required}', '${req.body.data.cement_indent_placed}', '${req.body.data.cement_received}', '${req.body.data.sand_required}', '${req.body.data.sand_indent_placed}', '${req.body.data.sand_received}', '${req.body.data.metal_required}', '${req.body.data.metal_received}', '${req.body.data.steel_required}', '${req.body.data.steel_received}', '${req.body.data.cement_bricks_req}', '${req.body.data.cement_bricks_rec}', '${req.body.data.cley_bricks_req}', '${req.body.data.cley_bricks_rec}', '${req.body.data.wb_req}', '${req.body.data.wb_upload}', '${req.body.data.wb_rec}', '${req.body.data.urinals_req}', '${req.body.data.urinals_upload}', '${req.body.data.urinals_rec}', '${req.body.data.wc_req}', '${req.body.data.wc_upload}', '${req.body.data.wc_rec}', '${req.body.data.fans_req}', '${req.body.data.fans_upload}', '${req.body.data.fans_rec}', '${req.body.data.db_class_1_3_req}', '${req.body.data.db_class_1_3_upload}', '${req.body.data.db_class_1_3_rec}', '${req.body.data.db_class_4_7_req}', '${req.body.data. db_class_4_7_upload}', '${req.body.data.db_class_4_7_rec}', '${req.body.data.db_class_7_10_req}', '${req.body.data.db_class_7_10_upload}', '${req.body.data.db_class_7_10_rec}', '${req.body.data.tables_req}', '${req.body.data.tables_upload}', '${req.body.data.tables_rec}', '${req.body.data.chairs_req}', '${req.body.data.chairs_upload}', '${req.body.data.chairs_rec}', '${req.body.data.almirah_req}', '${req.body.data.almirah_upload}', '${req.body.data.almirah_rec}', '${req.body.data.chalk_board_req}', '${req.body.data.chalk_board_upload}', '${req.body.data.chalk_board_rec}', '${req.body.data.tv_req}', '${req.body.data.tv_upload}', '${req.body.data.tv_rec}' )`;

	db.query(sql, (err, results)=>{
	if(err) throw err
	console.log(results)
	res.json(results)
	})
})






module.exports = app;