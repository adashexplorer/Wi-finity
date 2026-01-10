import React, { useState } from "react";
import { usageData } from "../data/usage";

const BandwidthReplay: React.FC = () => {
  const [index, setIndex] = useState(usageData.length - 1);

  const data = usageData[index];

  return (
    <div className="replay">
      <h3>Bandwidth Replay</h3>
      <p>{data.time}</p>
      <p>⬇ {data.download} Mbps ⬆ {data.upload} Mbps</p>

      <input
        type="range"
        min={0}
        max={usageData.length - 1}
        value={index}
        onChange={e => setIndex(Number(e.target.value))}
      />
    </div>
  );
};

export default BandwidthReplay;