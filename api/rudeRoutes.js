'use strict';

module.exports = function(app){
	var student = require('./rudeController');

	app.route('/students')
		.get(student.list_all_students)
		.post(student.create_a_student);

	app.route('/student/:studentId')
		.get(student.read_a_student);

	app.route('/rude/:rudeId')
		.get(student.read_for_rude);
};