import axios  from 'axios';
const TEAM_API_BASE_URL="http://localhost:8080/api/v2/teams"
class TeamService
{


    getTeams()
    {
        return axios.get(TEAM_API_BASE_URL);
    }
    
}

export default new TeamService;