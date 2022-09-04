import Image from "next/image";
import React from "react";
import SpeakerRenderProps from "../components/RenderProps/SpeakersRenderProps";

interface Speaker {
  imageSrc: string;
  name: string;
}
export interface SpeakersProps {
  speakers: Speaker[];
}
const Speakers = () => {
  return (
    <SpeakerRenderProps>
      {({ speakers }: SpeakersProps) => (
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
      )}
    </SpeakerRenderProps>
  );
};

export default Speakers;
