export const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="container mt-5">
      <h1>Hello {currentUser?.fname}!</h1>
    </div>
  );
};