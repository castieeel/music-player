import { controlsData } from "./ControlsData";

export const Controls = () => {
  return (
    <div className="player__controls">
      {controlsData.map((item) => (
        <div key={item.id} className={item.className}>
          <svg className={item.svgClassName} alt={item.name}>
            <use xlinkHref={item.svg}></use>
          </svg>
        </div>
      ))}
    </div>
  );
};
