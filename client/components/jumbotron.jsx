import Login from './login.jsx';

const Jumbotron = () => {
  return (
    <div id="particles-js" className="jumbotron">
      <div className="container">
        <div className="navbar-header">
        <img src="../assets/hewWhite.png" />
          <a href="#">HewJS</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="">Home</a></li>
            <li><a href="#team-section" className="team ">Team</a></li>
            <li><a href="https://github.com/bulbasaur-HRR17/HewJS">Github</a></li>
            <Login />
          </ul>
        </div>
      </div>
    </div>
  );
};

module.exports = Jumbotron;
