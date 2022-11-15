// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      venue,
      result,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
    } = latestMatch

    return (
      <div className="latest-match-card-container">
        <div className="latest-match-card">
          <div className="latest-match-details-competing-team">
            <h1 className="competing-team">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-logo"
            alt={competingTeam}
          />
        </div>
        <div className="latest-match-details-info">
          <div className="match-info">
            <p className="latest-match-details-label">First Innings</p>
            <p className="latest-match-details-value">{firstInnings}</p>
          </div>
          <div className="match-info">
            <p className="latest-match-details-label">Second Innings</p>
            <p className="latest-match-details-value">{secondInnings}</p>
          </div>
          <div className="match-info">
            <p className="latest-match-details-label">Man Of The Match</p>
            <p className="latest-match-details-value">{manOfTheMatch}</p>
          </div>
          <div className="match-info">
            <p className="latest-match-details-label">Umpires</p>
            <p className="latest-match-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
