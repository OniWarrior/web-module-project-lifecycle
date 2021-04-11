import React from 'react';





class User extends React.Component {
    componentDidMount() {
        console.log("User CDM");
    }

    componentDidUpdate() {
        console.log("User CDU");
    }

    render() {
        console.log("User render");
        const { User } = this.props; 
       


        return(
            <div className="card">
            <img src={User.avatar_url} alt='' />
            <div className="card-info">
              <h3 className="name">{User.name}</h3>
              <p className="username">{User.login}</p>
              <p>Location: {User.location}</p>
              <p>Profile:
                <a href={User.html_url}>{User.html_url}</a>
              </p>
              <p>Followers: {User.followers}</p>
              <p>Following: {User.following}</p>
              <p>Bio: {User.bio}</p>
            </div>
          </div>);
        


       
    }
}

export default User;