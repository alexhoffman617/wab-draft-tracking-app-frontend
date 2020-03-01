import { find } from "rxjs/operators";

export const ProTeamConversion = [
  { name: "Orioles", abbreviation: "BAL", dbValue: 1 },
  { name: "Red Sox", abbreviation: "BOS", dbValue: 2 },
  { name: "Angels", abbreviation: "LAA", dbValue: 3 },
  { name: "White Sox", abbreviation: "CWS", dbValue: 4 },
  { name: "Indians", abbreviation: "CLE", dbValue: 5 },
  { name: "Tigers", abbreviation: "DET", dbValue: 6 },
  { name: "Royals", abbreviation: "KC", dbValue: 7 },
  { name: "Brewers", abbreviation: "MIL", dbValue: 8 },
  { name: "Twins", abbreviation: "MIN", dbValue: 9 },
  { name: "Yankees", abbreviation: "NYY", dbValue: 10 },
  { name: "Athletics", abbreviation: "OAK", dbValue: 11 },
  { name: "Mariners", abbreviation: "SEA", dbValue: 12 },
  { name: "Rangers", abbreviation: "TEX", dbValue: 13 },
  { name: "Blue Jays", abbreviation: "TOR", dbValue: 14 },
  { name: "Braves", abbreviation: "ATL", dbValue: 15 },
  { name: "Cubs", abbreviation: "CHC", dbValue: 16 },
  { name: "Reds", abbreviation: "CIN", dbValue: 17 },
  { name: "Astros", abbreviation: "HOU", dbValue: 18 },
  { name: "Dodgers", abbreviation: "LAD", dbValue: 19 },
  { name: "Nationals", abbreviation: "WAS", dbValue: 20 },
  { name: "Mets", abbreviation: "NYM", dbValue: 21 },
  { name: "Phillies", abbreviation: "PHI", dbValue: 22 },
  { name: "Pirates", abbreviation: "PIT", dbValue: 23 },
  { name: "Cardinals", abbreviation: "STL", dbValue: 24 },
  { name: "Padres", abbreviation: "SD", dbValue: 25 },
  { name: "Giants", abbreviation: "SF", dbValue: 26 },
  { name: "Rockies", abbreviation: "COL", dbValue: 27 },
  { name: "Marlins", abbreviation: "MIA", dbValue: 28 },
  { name: "Diamond Backs", abbreviation: "ARI", dbValue: 29 },
  { name: "Rays", abbreviation: "TB", dbValue: 30 }
];

export function getProTeam(dbValue: number) {
  return ProTeamConversion.find(pt => pt.dbValue === dbValue);
}

export const PositionConversion = [
  { position: "C", dbValue: 12 },
  { position: "1B", dbValue: 7 }
];

export function getPositions(positions: number[]): string[] {
  const positionArray = [];
  positions.forEach(dbPosition => {
    const position = PositionConversion.find(pc => pc.dbValue === dbPosition);
    if (position) {
      positionArray.push(position.position);
    }
  });
  return positionArray;
}

export const Owners = [
  "Adam Fromal",
  "Arjun Baradwaj",
  "Brendan Prin",
  "Bretton McIlrath",
  "Chris Glazier",
  "Eric Fleury",
  "Jacob Newcomer",
  "Michael Tumey",
  "Robert Ray",
  'Alex "Shorty" Hoffman'
];
