import ProfileCard from "./components/ProfileCard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ProfileCard
        name={"John Doe"}
        title={"developer"}
        exp={5}
        bio={"Don't give up"}
        img={"https://randomuser.me/api/portraits/men/75.jpg"}
      />
      <ProfileCard
        name={"Sophia Bennett"}
        title={"Frontend Developer"}
        exp={3}
        bio={
          "Crafting clean, accessible, and beautiful web experiences one line of code at a time."
        }
        img={"https://randomuser.me/api/portraits/women/44.jpg"}
      />
    </div>
  );
};

export default App;
