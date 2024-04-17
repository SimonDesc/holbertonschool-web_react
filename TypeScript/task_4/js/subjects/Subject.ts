/// <reference path="./Teacher.ts" />

namespace Subjects {
	export class Subject {
		private _teacher: Teacher;

		setTeacher(value: Teacher) {
			this._teacher = value;
		}
	};
};
