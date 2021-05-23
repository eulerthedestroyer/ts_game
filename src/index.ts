//@ts-ignore
import { set_up_level, levels } from "./levels.ts";
import { point, state } from "./types";
import { add_points, divide, multiply } from "./math";
import { add_html_listeners } from "./html_controls";
import { add_controls, game_loop } from "./game_logic";
let state: state = {
  player_position: { x: 0, y: 0 },
  current_level: levels[0],
  movement: {
    up: "still",
    right: "still",
  },
};
export const merge_state = (s: Partial<state>) => set_state({ ...state, ...s });
export const set_state = (s: state) => {
  state = s;
  return state;
};
export const get_state = () => state;
export const set_player_position = (pt: point): state => {
  state.player_position = pt;
  return state;
};

export const move_player = (pt: point): state => {
  // console.log("move_player");
  state.player_position = add_points(state.player_position, pt);
  return state;
};

const main = (): void => {
  // const lvl1 = levels[0];
  // console.log({ lvl1 });
  console.log(divide);
  console.log(multiply);
  set_up_level(state.current_level);
  add_html_listeners();
  add_controls();
  game_loop();
};

main();
//stuff
