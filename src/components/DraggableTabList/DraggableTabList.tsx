import * as React from "react";
import { type Teams } from "../../db/leagues";
import styles from "./DraggableTabList.module.css";
import { SoccerBallIcon } from "@phosphor-icons/react";
import invariant from "tiny-invariant";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

function DraggableTabList({ values }: { values: Teams }) {
  const id = React.useId();
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

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
        <TabContainer>
          {Object.entries(values).map(([name, { position, color }], index) => {
            return (
              <Tab
                key={`${id}-${name}`}
                name={name}
                position={position ?? index + 1}
                color={color}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            );
          })}
        </TabContainer>
      </tbody>
    </table>
  );
}

const TabContainer = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLTableRowElement>(null);
  const [isDraggedOver, setIsDraggedOver] = React.useState<boolean>(false);
  React.useEffect(() => {
    const element = ref.current;
    invariant(element, "tab container ref not set correctly");
    return dropTargetForElements({
      element,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, []);
  return <div ref={ref}>{children}</div>;
};

const Tab = ({
  name,
  position,
  color,
  activeTab,
  setActiveTab,
}: {
  name: string;
  position: number;
  color: string;
  activeTab: string | null;
  setActiveTab: (name: string) => void;
}) => {
  const ref = React.useRef<HTMLTableRowElement>(null);
  const [dragging, setDragging] = React.useState<boolean>(false);

  React.useEffect(() => {
    const element = ref.current;
    invariant(element, "tab ref not set correctly");
    return draggable({
      element,
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, []);

  return (
    <tr
      ref={ref}
      onMouseDown={() => {
        setActiveTab(name);
      }}
      className={`${styles.row} ${
        position % 2 === 0 ? styles.even : styles.odd
      } ${dragging ? styles.draggedRow : ""}`}
    >
      <td>{position}</td>
      <td
        className={`${styles.team} ${
          activeTab === name ? styles.draggable : ""
        }`}
      >
        <SoccerBallIcon color={color} />
        <span>{name}</span>
      </td>
    </tr>
  );
};

export default DraggableTabList;
