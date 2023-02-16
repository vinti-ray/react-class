import User from "./User";


const ListComponent = () => {
  return (
     <div className="user-list">
      <h2>List of users</h2>
      <User name="john wick" age={78} gender="M" />
    </div>
  );
};
export default ListComponent;
