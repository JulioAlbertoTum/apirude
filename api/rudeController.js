'use strict';

var mongoose = require('mongoose'),
Student = mongoose.model('Students');

exports.list_all_students = function(req, res){
	Student.find({}, function(err, student){
		if(err)
			res.send(err);
		res.json(student)
	})
};

exports.create_a_student = function(req, res){
	var new_student = new Student(req.body);
	new_student.save(function(err,student){
		if(err)
			res.send(err);
		res.json(student); 
	});
};

exports.read_a_student = function(req, res){
	Student.findById(req.params.studentId,function(err,student){
		if(err)
			res.send(err);
		res.json(student);
	});
};

exports.read_for_rude = function(req, res){
	console.log("buscando por estudiante");
	Student.findOne({rude: req.params.rudeId},function(err,student){
		if(err)
			res.send(err);

		if(!student)
			return res.status(404).send({message:'Este codigo rude no es valido'});

		res.json({
			firstname:student.firstname,
			lastname:student.lastname,
			rude:student.rude
		});
	});
};