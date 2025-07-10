import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard
        name={"John Doe"}
        title={"developer"}
        exp={"5 years"}
        bio={"Don't give up"}
      />
    </div>
  );
};

export default App;
