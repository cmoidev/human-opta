import React from "react";
import "./App.css";
import leagues, { type League } from "./db/leagues";
import Dropdown from "./components/Dropdown";
import DraggableTabList from "./components/DraggableTabList";
import { UploadIcon } from "@phosphor-icons/react";

const DEFAULT_LEAGUE = leagues[0];
function App() {
  const [league, setLeague] = React.useState<League>(DEFAULT_LEAGUE);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(league);
      }}
    >
      <main>
        <span>
          <Dropdown
            options={leagues.map((league) => league.name)}
            onChange={(e: React.SyntheticEvent<HTMLSelectElement>) =>
              setLeague(
                leagues.find(
                  (league) => league.name === e.currentTarget.value
                ) || DEFAULT_LEAGUE
              )
            }
          />
          <button type="submit">
            <UploadIcon />
          </button>
        </span>

        <DraggableTabList values={league.teams} />
      </main>
    </form>
  );
}

export default App;
