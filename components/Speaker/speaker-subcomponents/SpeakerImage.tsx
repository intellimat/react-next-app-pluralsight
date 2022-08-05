import Image from "next/image";

export interface SpeakerImageProps {
  id: string;
  firstName: string;
  lastName: string;
}

function SpeakerImage({
  id,
  firstName,
  lastName,
}: SpeakerImageProps): JSX.Element {
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
