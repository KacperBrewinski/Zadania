const FULLNAME = "Kacper Brewinski";
const STUDENT_ID = "42877";

function getStudentFullName() {
    return FULLNAME;
}

function getStudentId() {
    return STUDENT_ID;
}
module.exports = {
    getStudentFullName,
    getStudentId
};
console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);
