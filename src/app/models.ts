export interface IPlayer {
  id: number;
  firstName: string;
  lastName: string;
  jersey: string;
  proTeamId: number;
  eligibleSlots: Array<number>;
}
