// import * as React from "react";
import { type Teams } from "../../db/leagues";

function Table({ values }: { values: Teams }) {
  // const [selectedTab, setSelectedTab] = React.useState<string | null>(null);
  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(values).map(([team, { position, logo }]) => (
          <tr key={team}>
            <td>{position}</td>
            <td>
              <img src={logo} alt={team} />
              {team}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
