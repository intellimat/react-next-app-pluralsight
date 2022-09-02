import Image from "next/image";
import { useContext, useState } from "react";
import { SpeakerContext } from "../../../Contexts/SpeakerContext";

export interface SpeakerImageProps {}

function ImageWithFallback({ src, ...props }: any) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  };
  return <Image src={imgSrc} alt="" {...props} onError={onError} />;
}

function SpeakerImage({}: SpeakerImageProps) {
  const {
    speaker: { id, firstName, lastName },
  } = useContext(SpeakerContext);
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <ImageWithFallback
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
