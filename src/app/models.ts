export interface IPlayer {
  id: string;
  firstName: string;
  lastName: string;
  jersey: string;
  proTeamId: number;
  eligibleSlots: Array<number>;
}
