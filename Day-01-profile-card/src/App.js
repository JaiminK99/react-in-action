import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard
        name={"John Doe"}
        title={"developer"}
        exp={5}
        bio={"Don't give up"}
        img={"https://randomuser.me/api/portraits/men/75.jpg"}
      />
    </div>
  );
};

export default App;
