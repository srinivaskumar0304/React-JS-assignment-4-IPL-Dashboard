// Write your code here
import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, teamImageUrl} = teamData

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={teamImageUrl} alt={name} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
