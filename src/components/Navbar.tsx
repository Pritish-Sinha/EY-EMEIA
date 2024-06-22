import * as React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="navbar-container-fluid">
      <div className='navbar-Logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9999 17.5C18.9999 18.3284 18.3283 19 17.4999 19C16.6715 19 15.9999 18.3284 15.9999 17.5C15.9999 16.6716 16.6715 16 17.4999 16C18.3283 16 18.9999 16.6716 18.9999 17.5ZM18.9999 23.5C18.9999 24.3284 18.3283 25 17.4999 25C16.6715 25 15.9999 24.3284 15.9999 23.5C15.9999 22.6716 16.6715 22 17.4999 22C18.3283 22 18.9999 22.6716 18.9999 23.5ZM17.4999 31C18.3283 31 18.9999 30.3284 18.9999 29.5C18.9999 28.6716 18.3283 28 17.4999 28C16.6715 28 15.9999 28.6716 15.9999 29.5C15.9999 30.3284 16.6715 31 17.4999 31ZM24.9999 17.5C24.9999 18.3284 24.3283 19 23.4999 19C22.6715 19 21.9999 18.3284 21.9999 17.5C21.9999 16.6716 22.6715 16 23.4999 16C24.3283 16 24.9999 16.6716 24.9999 17.5ZM23.4999 25C24.3283 25 24.9999 24.3284 24.9999 23.5C24.9999 22.6716 24.3283 22 23.4999 22C22.6715 22 21.9999 22.6716 21.9999 23.5C21.9999 24.3284 22.6715 25 23.4999 25ZM24.9999 29.5C24.9999 30.3284 24.3283 31 23.4999 31C22.6715 31 21.9999 30.3284 21.9999 29.5C21.9999 28.6716 22.6715 28 23.4999 28C24.3283 28 24.9999 28.6716 24.9999 29.5ZM29.4999 19C30.3283 19 30.9999 18.3284 30.9999 17.5C30.9999 16.6716 30.3283 16 29.4999 16C28.6715 16 27.9999 16.6716 27.9999 17.5C27.9999 18.3284 28.6715 19 29.4999 19ZM30.9999 23.5C30.9999 24.3284 30.3283 25 29.4999 25C28.6715 25 27.9999 24.3284 27.9999 23.5C27.9999 22.6716 28.6715 22 29.4999 22C30.3283 22 30.9999 22.6716 30.9999 23.5ZM29.4999 31C30.3283 31 30.9999 30.3284 30.9999 29.5C30.9999 28.6716 30.3283 28 29.4999 28C28.6715 28 27.9999 28.6716 27.9999 29.5C27.9999 30.3284 28.6715 31 29.4999 31Z" fill="white"/>
    </svg>
</div>
<div className='navbar-logo'>

</div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#OurTeam">Our Team</a>
            <a className="nav-link" href="#OurLeaders">Innovation Leaders</a>
            <a className="nav-link" href="#Process">Global Funding</a>
            <a className="nav-link" href="#Regions">Regions</a>
            <a className="nav-link" href="#Gallery">Videos</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;