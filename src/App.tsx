import React from "react";
import "./App.css";
import leagues, { type League } from "./db/leagues";
import Dropdown from "./components/Dropdown";
import TabList from "./components/TabList";

const DEFAULT_LEAGUE = leagues[0];
function App() {
  const [league, setLeague] = React.useState<League>(DEFAULT_LEAGUE);
  return (
    <form>
      <main>
        <Dropdown
          options={leagues.map((league) => league.name)}
          onChange={(e: React.SyntheticEvent<HTMLSelectElement>) =>
            setLeague(
              leagues.find((league) => league.name === e.currentTarget.value) ||
                DEFAULT_LEAGUE
            )
          }
        />
        <TabList values={league.teams} />
      </main>
    </form>
  );
}

export default App;
