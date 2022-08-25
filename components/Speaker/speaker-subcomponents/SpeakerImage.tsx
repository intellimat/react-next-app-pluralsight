import Image from "next/image";
import { useContext } from "react";
import { SpeakerContext } from "../../../Contexts/SpeakerContext";

export interface SpeakerImageProps {}

function SpeakerImage({}: SpeakerImageProps) {
  const {
    speaker: { id, firstName, lastName },
  } = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <Image
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        height="300"
        alt={`${firstName} ${lastName}`}
      />
    </div>
  );
}

export default SpeakerImage;
