export interface level {
  map: mapping;
  name: string;
  equation: string;
}
export interface point {
  x: number;
  y: number;
}
export type mapping = (pt: point) => point;

type direction = "forward" | "backward" | "still";

export interface state {
  player_position: point;
  current_level: level;
  movement: {
    up: direction;
    right: direction;
  };
}
