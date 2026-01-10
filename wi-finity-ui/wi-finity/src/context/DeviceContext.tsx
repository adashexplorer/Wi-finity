import React, { createContext, useEffect, useState } from "react";
import { devices as initialDevices } from "../data/devices";

export type DeviceType = {
  id: string;
  name: string;
  ip: string;
  status: "online" | "offline";
  mac: string;
  bandwidthLimit: number;
  x?: number;
  y?: number;

  // NEW – Security & intelligence signals
  trustScore?: number;     // 0–100
  lastSeen?: number;       // timestamp
  riskFlags?: string[];    // ["LOW_LIMIT", "OFFLINE"]
};

interface DeviceContextProps {
  devices: DeviceType[];
  updateDevice: (id: string, updates: Partial<DeviceType>) => void;
  simulateScanOnce: () => void;
}

export const DeviceContext = createContext<DeviceContextProps>({
  devices: [],
  updateDevice: () => {},
  simulateScanOnce: () => {}
});

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [devices, setDevices] = useState<DeviceType[]>(initialDevices);

  useEffect(() => {
    const t = setInterval(() => {
      setDevices(prev =>
  prev.map(d => {
    const onlineFlip = Math.random();
    const status =
      onlineFlip < 0.08
        ? d.status === "online"
          ? "offline"
          : "online"
        : d.status;

    const limitAdj =
      Math.random() < 0.05
        ? Math.max(0, d.bandwidthLimit + Math.round((Math.random() - 0.5) * 40))
        : d.bandwidthLimit;

    // ✅ Trust score logic (computed per device)
    const trustScore = d.mac.startsWith("FF")
      ? 30
      : Math.min(100, 70 + Math.round(Math.random() * 30));

    return {
      ...d,
      status,
      bandwidthLimit: limitAdj,
      trustScore,
      lastSeen: Date.now(),
      riskFlags: [
        ...(limitAdj < 40 ? ["LOW_LIMIT"] : []),
        ...(status === "offline" ? ["OFFLINE"] : [])
      ]
    };
  })
);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const updateDevice = (id: string, updates: Partial<DeviceType>) => {
    setDevices(prev => prev.map(d => (d.id === id ? { ...d, ...updates } : d)));
  };

  const simulateScanOnce = () => {
    setDevices(prev => prev.map(d => ({ ...d, status: Math.random() > 0.07 ? "online" : "offline" })));
  };

  return <DeviceContext.Provider value={{ devices, updateDevice, simulateScanOnce }}>{children}</DeviceContext.Provider>;
};