import { Controls } from "./player/Controls";
import { TrackPlay } from "./player/TrackPlay";
import { Volume } from "./player/Volume";
export const Bar = () => {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <Controls />
            <TrackPlay />
          </div>
          <Volume />
        </div>
      </div>
    </div>
  );
};
