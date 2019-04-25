import React from 'react';
import ControlPanel from '../greeting/control_panel';
import SessionLinks from '../greeting/session_links';
import SongBox from './song_box';
import { setcurrentsong, pauseplayer } from '../../actions/player_actions';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
  }

  playSong(song) {
    setcurrentsong(song.id);
  }

  pauseSong() {
    pauseplayer();
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  showPage() {

    let songObs = this.props.songs.map((song) => {
      return <SongBox song={song} key={song.id} artist={this.props.user.username} playSong={this.playSong} pauseSong={this.pauseSong} isplaying={this.props.isplaying}/>
    });

    return (
      <>
        <ControlPanel logout={this.props.logout} currentUser={this.props.currentUser}/>
        <div className="profile-wrapper"> 
          <div className="profile-header">
            <div className="profile-username-box">
              <h3 className="profile-username">{this.props.user.username}</h3>
            </div>
            <div className="profile-div" ></div>
            <div className="profile-pic"></div>
          </div>

          <div className="button-div">

            <div className="banner-buttons">
            
              {/* <ul className="show-page-links">
                <li><Link to=""><button className="show-page-link">All</button></Link></li>
                <li><Link to=""><button className="show-page-link">Tracks</button></Link></li>
                <li><Link to=""><button className="show-page-link">Albums</button></Link></li>
                <li><Link to=""><button className="show-page-link">Playlists</button></Link></li>
                <li><Link to=""><button className="show-page-link">Reposts</button></Link></li>
              </ul> */}

            </div>

            {/* <div className="social-buttons">
                <button className="social-button1">Follow</button>
                <button className="social-button">Share</button>
                <button className="social-button">message</button>
            </div> */}

          </div>

          <div className="follower-box"></div>

          <h4 className="spotlight-banner"></h4>

          <div className="spotlight">
            <ul>
              {songObs}
            </ul>

          </div>
        </div> 
      </>
    )
  }

  render() {
    if (this.props.user) {
      return this.showPage()
    } else {
      return <SessionLinks/>; 
    }
  }

}

export default UserPage;