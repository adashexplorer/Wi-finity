import React, { useState } from "react";

interface Props {
  id: string;
  limit: number;
  onChange: (id: string, value: number) => void;
}

const BandwidthControl: React.FC<Props> = ({ id, limit, onChange }) => {
  const [value, setValue] = useState(limit);
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setValue(v);
    onChange(id, v);
  };
  return (
    <div className="bandwidth-control">
      <label style={{ display: "block", marginBottom: 6 }}>Limit: {value} Mbps</label>
      <input type="range" min={0} max={1000} value={value} onChange={handle} />
    </div>
  );
};

export default BandwidthControl;