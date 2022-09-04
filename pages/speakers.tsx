import Image from "next/image";
import React from "react";
import WithData from "../components/HOC/WithData";

interface Speaker {
  imageSrc: string;
  name: string;
}
export interface SpeakersProps {
  speakers: Speaker[];
}
const Speakers = ({ speakers }: SpeakersProps) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => (
        <Image
          src={`/images/${imageSrc}.jpg`}
          alt={name}
          key={imageSrc}
          height="300"
          width="300"
        />
      ))}
    </div>
  );
};

export default WithData(2)(Speakers);
