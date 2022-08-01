import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StudentService from '../service/StudentService'

export default class ListStudents extends Component {
  constructor(props)
  {
      super(props)
      this.state={
          students:[]
      }
      this.addStudent=this.addStudent.bind(this);
      this.updateStudent=this.updateStudent.bind(this);
  }
  updateStudent(id)
  {
    this.props.history.push(`/update-students/${id}`);  }
  componentDidMount()
  {
    StudentService.getStudents().then((res) =>
    {
   this.setState({students:res.data});
    });
  }
  addStudent()
  {
    this.props.history.push('/add-students');
  }
  render() {
    return (
      <div>
        <div className='container'>
                 <h2 className="text-center">Team List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student Data</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                  <th>Student id</th>
                                    <th> Student First Name</th>
                                    <th>TeamId</th>
                                    <th>  Er Diagram</th>
                                    <th> User_Story1</th>
                                    <th> User_Story2</th>
                                    <th> User_Story3</th>
                                    <th>Individual Total</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.students.map(
                                        students => 
                                        <tr key = {students.id}>
                                          <td>{students.id}</td>
                                             <td> {students.name} </td>  
                                             <td>{students.team_id}</td> 
                                             <td> {students.er}</td>
                                             <td> {students.user_Story1}</td>
                                             <td> {students.user_Story2}</td>
                                             <td> {students.user_Story3}</td>
                                             <td>{students.er+students.user_Story1+students.user_Story2+students.user_Story3}</td>
                                            
                                             <td>
                                                 <button className="btn btn-info" onClick={()=>this.updateStudent(students.id)}>Update </button>
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                             <p>{students.team_id}</p>
                                        </tr>
                                      
                                    )
                                }
                            </tbody>
                        </table>

                        <div >

                          <p>
                            {
                              this.state.students.map(stud=>
                                
                                  <p>{stud.name}</p>
                                )
                            }
                          </p>
                        </div>
                       

                 </div>
              

            </div>
      </div>
    )
  }
}
