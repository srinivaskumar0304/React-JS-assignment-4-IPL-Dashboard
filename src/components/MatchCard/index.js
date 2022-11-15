// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="match-card-logo"
        />
        <h1 className="competing-team">{competingTeam}</h1>
        <p className="result">{result}</p>
        <p className="status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
