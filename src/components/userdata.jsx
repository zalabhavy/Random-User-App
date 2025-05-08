function UserInfo(props) {
    // const user = props.infoname;
    return (
      <div className="usercard">
        <img className="userimg" src={props.infoname.picture.large} alt="User" />
        <h3>{props.infoname.name.first} { props.infoname.name.last}</h3>
        <p>{props.infoname.phone}</p>
        <p>{props.infoname.location.city}, { props.infoname.location.country}</p>
      </div>
    );
  }
  
  export default UserInfo;
  