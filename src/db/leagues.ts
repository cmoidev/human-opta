const premierLeagueTeams = {
  Arsenal: { position: null, color: "hsl(358.08, 100%, 42.94%)" },
  "Aston Villa": { position: null, color: "hsl(208.5, 60.61%, 74.12%)" },
  "AFC Bournemouth": { position: null, color: "hsl(4.11, 77.24%, 48.24%)" },
  Brentford: { position: null, color: "hsl(0, 100%, 41.18%)" },
  "Brighton & Hove Albion": { position: null, color: "hsl(211.63, 100%, 36.08%)" },
  Burnley: { position: null, color: "hsl(329.62, 57.66%, 26.86%)" },
  Chelsea: { position: null, color: "hsl(212.28, 96.03%, 29.61%)" },
  "Crystal Palace": { position: null, color: "hsl(218.28, 68.24%, 33.33%)" },
  Everton: { position: null, color: "hsl(220, 100%, 30%)" },
  Fulham: { position: null, color: "hsl(0, 28.10%, 87.50%)" },
  "Leeds United": { position: null, color: "hsl(34, 100%, 50%)" },
  Liverpool: { position: null, color: "hsl(0, 100%, 50%)" },
  "Manchester City": { position: null  , color: "hsl(211, 100%, 50%)" },
  "Manchester United": { position: null, color: "hsl(0, 100%, 50%)" },
  "Newcastle United": { position: null, color: "hsl(348, 7.46%, 13.14%)" },
  "Nottingham Forest": { position: null, color: "hsl(0, 100%, 50%)" },
  "Sunderland": { position: null, color: "hsl(0, 100%, 50%)" },
  "Tottenham Hotspur": { position: null, color: "hsl(218, 100%, 50%)" },
  "West Ham United": { position: null, color: "hsl(344, 68%, 47%)" },
  "Wolverhampton Wanderers": { position: null, color: "hsl(42.56, 98.32%, 53.33%)" },
};

const bundesligaTeams = {
  Augsburg: { position: null, color: "" },
  "Bayer Leverkusen": { position: null, color: "" },
  "Bayern Munich": { position: null, color: "" },
  "Borussia Dortmund": { position: null, color: "" },
  "Eintracht Frankfurt": { position: null, color: "" },
  Freiburg: { position: null, color: "" },
  Hoffenheim: { position: null, color: "" },
  Köln: { position: null, color: "" },
  "RB Leipzig": { position: null, color: "" },
  Stuttgart: { position: null, color: "" },
  "Union Berlin": { position: null, color: "" },
  "Werder Bremen": { position: null, color: "" },
  "Borussia Monchengladbach": { position: null, color: "" },
  "Hamburger SV": { position: null, color: "" },
  "St. Pauli": { position: null, color: "" },
  "Mainz null5": { position: null, color: "" },
  "Heidenheim": { position: null, color: "" },
};

const ligue1Teams = {
  "Angers SCO": { position: null, color: "" },
  "Auxerre": { position: null, color: "" },
  Brest: { position: null, color: "" },
  "Le Havre": { position: null, color: "" },
  Lens: { position: null, color: "" },
  Lille: { position: null, color: "" },
  Lorient: { position: null, color: "" },
  Metz: { position: null, color: "" },
  Marseille: { position: null, color: "" },
  Monaco: { position: null, color: "" },
  Montpellier: { position: null, color: "" },
  Nantes: { position: null, color: "" },
  Nice: { position: null, color: "" },
  "Olympique Lyonnais": { position: null, color: "" },
  "Olympique de Marseille": { position: null, color: "" },
  "Paris FC": { position: null, color: "" },
  "Paris Saint Germain": { position: null, color: "" },
  Rennes: { position: null, color: "" },
  Strasbourg: { position: null, color: "" },
  Toulouse: { position: null, color: "" },
};

const serieATeams = {
  "Atalanta": { position: null, color: "" },
  "Bologna": { position: null, color: "" },
  "Cagliari": { position: null, color: "" },
  "Como": { position: null, color: "" },
  "Cremonese": { position: null, color: "" },
  "Fiorentina": { position: null, color: "" },
  "Genoa": { position: null, color: "" },
  "Hellas Verona": { position: null, color: "" },
  "Internazionale": { position: null, color: "" },
  Juventus: { position: null, color: "" },
  "Lazio": { position: null, color: "" },
  "Lecce": { position: null, color: "" },
  "Milan": { position: null, color: "" },
  "Napoli": { position: null, color: "" },
  "Parma": { position: null, color: "" },
  "Pisa": { position: null, color: "" },
  "Roma": { position: null, color: "" },
  "Sampdoria": { position: null, color: "" },
  "Sassuolo": { position: null, color: "" },
  "Torino": { position: null, color: "" },
  "Udinese": { position: null, color: "" },
};

const laLigaTeams = {
  "Alavés": { position: null, color: "" },
  "Athletic Club": { position: null, color: "" },
  "Atlético de Madrid": { position: null, color: "" },
  "Barcelona": { position: null, color: "" },
  "Celta de Vigo": { position: null, color: "" },
  "Elche": { position: null, color: "" },
  "Espanyol": { position: null, color: "" },
  "Getafe": { position: null, color: "" },
  "Girona": { position: null, color: "" },
  "Levante": { position: null, color: "" },
  "Mallorca": { position: null, color: "" },
  "Osasuna": { position: null, color: "" },
  "Rayo Vallecano": { position: null, color: "" },
  "Real Betis": { position: null, color: "" },
  "Real Madrid": { position: null, color: "" },
  "Real Oviedo": { position: null, color: "" },
  "Real Sociedad": { position: null, color: "" },
  "Sevilla": { position: null, color: "" },
  "Valencia": { position: null, color: "" },
  "Villarreal": { position: null, color: "" },
};

type Team = {
  position: number | null; 
  color: string;
}

export type Teams = Record<string, Team>;

export type League = {
  name: string;
  teams: Teams;
};

const leagues: League[] = [
  {
    name: "Premier League",
    teams: premierLeagueTeams,
  },
  {
    name: "La Liga",
    teams: laLigaTeams,
  },
  {
    name: "Bundesliga",
    teams: bundesligaTeams,
  },
  {
    name: "Ligue 1",
    teams: ligue1Teams,
  },
  {
    name: "Serie A",
    teams: serieATeams,
  },
];

export default leagues;