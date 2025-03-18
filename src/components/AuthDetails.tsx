import { useAuth } from "../context/AuthContext";

function AuthDetails() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {user ? (
        <p>
          Logged in as: <b>{user.email}</b>
        </p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}

export default AuthDetails;
