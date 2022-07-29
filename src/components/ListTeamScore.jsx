import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TeamService from '../service/TeamService';
import StudentService from '../service/StudentService';

export default class ListTeamScore extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            teams:[],
            students:[]
        }
    }

    componentDidMount()
    {
      TeamService.getTeams().then((res) =>
      {
     this.setState({teams:res.data});
      });
    }
   
  render() {
    return (
      <div>
          <div className='container'>
                 <h2 className="text-center">Final Team Score</h2>
                 <div className = "row">
                  
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                  <th>Team Id</th>
                                    <th>Team_Score</th>
                                   

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.teams.map(
                                        teams => 
                                        <tr key = {teams.team}>
                                          <td>{teams.team}</td>
                                          <td>{teams.score}</td>
                                          
                                        
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
      </div>
    );
  }
}
