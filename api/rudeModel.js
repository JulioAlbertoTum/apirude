'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	firstname: {
		type:String,
		required:true
	},
	lastname: {
		type:String,
		required:true
	},
	rude:{
		type: String,
		unique:true,
		required:true
	}
},{
	timestamps:true
});


module.exports = mongoose.model('Students',StudentSchema)