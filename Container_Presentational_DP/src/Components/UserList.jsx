import PropTypes from "prop-types";
function UserList({ users, loading, error }) {
  if (loading) return <div>...Loading</div>;
  if (error) return <div>Something went wrong!</div>;
  return (
    <>
      <div className="container">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>{user.email}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}


// Define the prop types for the user object
const user = PropTypes.shape({
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
});

// Define the prop types for the UserList component
UserList.propTypes = {
  users: PropTypes.arrayOf({
    user,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};
export default UserList;
