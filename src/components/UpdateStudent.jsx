import React, { Component } from 'react'
import StudentService from '../service/StudentService';
import PropTypes from 'prop-types'

export default class UpdateStudent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.match.params.id,
            name:'',
            team_id:'',
            er:'',
            user_Story1:'',
            user_Story_2:'',
            user_Story_3:''
            
        }
        this.changeName=this.changeName.bind(this);
        this.changeTeamid=this.changeTeamid.bind(this);
        this.changeEr=this.changeEr.bind(this);
        this.changeUser_Story1=this.changeUser_Story1.bind(this);
        this.changeUser_Story2=this.changeUser_Story2.bind(this);
        this.changeUser_Story3=this.changeUser_Story3.bind(this);
        this.updateStudents=this.updateStudents.bind(this);    
    
    }

        componentDidMount(){
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let students = res.data;
                this.setState({name: students.name,
                    team_id:students.team_id,
                   er:students.er,
                   user_Story1:students.user_Story1,
                   user_Story2:students.user_Story2,
                   user_Story3:students.user_Story3
                });
            });
        }
        updateStudents=(e)=>
        {
            e.preventDefault();
            let students = {name: this.state.name,team_id:this.state.team_id, er: this.state.er, user_Story1: this.state.user_Story1,user_Story2: this.state.user_Story2,user_Story3: this.state.user_Story3};
            console.log('students => ' + JSON.stringify(students));

            StudentService.updateStudent(students, this.state.id).then( res => {
                this.props.history.push('/students');
            });
           
        }
      
    changeName=(event)=>
    {
        this.setState({name:event.target.value})
    }
    changeEr=(event)=>
    {
        this.setState({er:event.target.value})
    }
    changeUser_Story1=(event)=>
    {
        this.setState({user_Story1:event.target.value})
    }
    changeUser_Story2=(event)=>
    {
        this.setState({user_Story2:event.target.value})
    }
    changeUser_Story3=(event)=>
    {
        this.setState({user_Story3:event.target.value})
    }
    changeTeamid=(event)=>
    { 
        this.setState({team_id:event.target.value})

    }
    cancel(){
        this.props.history.push('/students');
    }
  render() {
    return (
      <div>
           <div className='container' >
                   <br />
                   <br />
                   
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <div className = "card-body">
                                <h2>Add Details</h2>
                                <br />
                                    <form>
                                        <div className = "form-group">
                                            
                                            <input   placeholder="Name" name="Name" className="form-control"  value={this.state.name} onChange={this.changeName}
                                               />
                                        </div>
                                        <div className = "form-group">
                                            
                                            <input   placeholder="Team_Id" name="Team_id" className="form-control"  value={this.state.team_id} onChange={this.changeTeamid}
                                               />
                                        </div>
                                        <div className = "form-group">
                                           
                                            <input placeholder="Er" name="Er" className="form-control" value={this.state.er} onChange={this.changeEr} 
                                               />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="User_Story1" name="User_Story1" className="form-control" value={this.state.user_Story1} onChange={this.changeUser_Story1}
                                                 />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="User_Story2" name="User_Story1" className="form-control" value={this.state.user_Story2} onChange={this.changeUser_Story2} 
                                                 />
                                        </div>
                                        <div className = "form-group">
                                          
                                            <input placeholder="User_Story3" name="User_Story1" className="form-control" value={this.state.user_Story3} onChange={this.changeUser_Story3}
                                                 />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudents}>Save</button>
                                        <button className="btn btn-danger"  onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
        
      </div>
    )
  }
}
