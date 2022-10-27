import React from 'react'
import './css/fallbackmessage.css';

export default class FallbackMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="error-div">
        <div className="error-content">
          <h2>Något gick snett vid hämtning av sidan. <br />Vi beklagar!</h2>
          <p className="error-details">
            {this.props.error && this.props.error.toString()}
          </p>
          <div className="error-buttons">
            <div className="error-reload">
              <button onClick={() => location.reload()}>Ladda om sidan</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}