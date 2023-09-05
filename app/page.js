"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DDimer = () => {
  const [cutoff, setCutoff] = useState(0.5);
  const ageRef = useRef(null);

  const handleInputChange = () => {
    const newAge = ageRef.current.value;
    if (!newAge || newAge <= 50) return;

    setCutoff(newAge / 100);
  };

  useEffect(() => {
    ageRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col gap-3 border border-zinc-300 p-6 rounded-xl">
      <h1 className="font-bold">Age-adjusted D-dimer FEU</h1>
      <div className="flex items-center gap-3">
        <Label htmlFor="age">Age</Label>
        <Input onChange={handleInputChange} ref={ageRef} id="age" type="number" />
      </div>
      <div>
        Normal: &lt;= <span className="bg-blue-100 rounded p-1 font-mono">{cutoff}</span> mg/L or
      </div>
      <div>
        Normal: &lt;= <span className="bg-blue-100 rounded p-1 font-mono">{cutoff * 1000}</span> mcg/L{" "}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-start justify-center p-10">
      <DDimer />
    </div>
  );
}
