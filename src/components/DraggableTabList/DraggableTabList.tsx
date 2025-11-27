import * as React from "react";
import { type Teams } from "../../db/leagues";
import styles from "./DraggableTabList.module.css";
import { SoccerBallIcon } from "@phosphor-icons/react";

function DraggableTabList({ values }: { values: Teams }) {
  const id = React.useId();
  const [selectedTab, setSelectedTab] = React.useState<string | null>(null);

  const selectedTabRef = React.useRef<string | null>(selectedTab);

  React.useEffect(() => {
    selectedTabRef.current = selectedTab;
    console.log(selectedTabRef.current);
  }, [selectedTab]);

  React.useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (selectedTabRef.current) {
        console.log("clicking on tab", selectedTabRef.current);
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(selectedTab, "selected tab");

  if (Object.keys(values).length === 0) {
    return <div>No teams found</div>;
  }

  return (
    <table>
      <thead>
        <tr className={styles.row}>
          <th>Pos</th>
          <th style={{ textAlign: "left" }}>Team</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(values).map(([name, { position, color }], index) => {
          return (
            <Tab
              key={`${id}-${name}`}
              name={name}
              position={position ?? index + 1}
              color={color}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        })}
      </tbody>
    </table>
  );
}

const Tab = ({
  name,
  position,
  color,
  selectedTab,
  setSelectedTab,
}: {
  name: string;
  position: number;
  color: string;
  selectedTab: string | null;
  setSelectedTab: (name: string) => void;
}) => {
  return (
    <tr
      onMouseDown={() => {
        setSelectedTab(name);
      }}
      className={styles.row}
    >
      <td>{position}</td>
      <td
        className={`${styles.team} ${
          selectedTab === name ? styles.selected : ""
        }`}
      >
        <SoccerBallIcon color={color} />
        <span>{name}</span>
      </td>
    </tr>
  );
};

export default DraggableTabList;
