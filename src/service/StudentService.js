import axios  from 'axios';
const Student_API_BASE_URL="http://localhost:8080/api/v1/students"
class StudentService
{


    getStudents()
    {
        return axios.get(Student_API_BASE_URL);
    }
    createStudent(students)
    {
        return axios.post(Student_API_BASE_URL,students);
    }
    getStudentById(studentId){
        return axios.get(Student_API_BASE_URL + '/' + studentId);
    }
    updateStudent(student, studentId){
        return axios.put(Student_API_BASE_URL + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(Student_API_BASE_URL + '/' + studentId);
    }
}

export default new StudentService;