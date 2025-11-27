import * as React from "react";
import { type Teams } from "../../db/leagues";
import styles from "./DraggableTabList.module.css";
import { SoccerBallIcon } from "@phosphor-icons/react";

function DraggableTabList({ values }: { values: Teams }) {
  const id = React.useId();
  const [selectedTab, setSelectedTab] = React.useState<string | null>(null);

  React.useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      console.log("clicking on tab", selectedTab);
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [selectedTab]);

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
  setSelectedTab,
}: {
  name: string;
  position: number;
  color: string;
  setSelectedTab: (name: string) => void;
}) => {
  return (
    <tr onClick={() => setSelectedTab(name)} className={styles.row}>
      <td>{position}</td>
      <td className={styles.team}>
        <SoccerBallIcon color={color} />
        <span>{name}</span>
      </td>
    </tr>
  );
};

export default DraggableTabList;
