import Image from "next/image";
import {
  SessionProps,
  SessionsProps,
  SpeakerDemographicsProps,
  SpeakerImageProps,
  SpeakerProps,
} from "./Speaker.model";

function Session({ title, roomName }: SessionProps): JSX.Element {
  return (
    <span className="session w-100">
      {title} <strong>{roomName}</strong>
    </span>
  );
}

function Sessions({ sessions }: SessionsProps): JSX.Element {
  return (
    <div className="sessionBox card h-250">
      <Session title={sessions[0].title} roomName={sessions[0].room.name} />
    </div>
  );
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

function SpeakerDemographics({
  firstName,
  lastName,
  bio,
  company,
  twitterHandle,
  favorite,
}: SpeakerDemographicsProps): JSX.Element {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {firstName} {lastName}
        </h3>
      </div>
      <div>
        <p className="card-description">
          {bio} {company} {twitterHandle} {favorite}
        </p>

        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function Speaker({ speaker }: SpeakerProps): JSX.Element {
  const { id, firstName, lastName, sessions } = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} firstName={firstName} lastName={lastName} />
        <SpeakerDemographics {...speaker} />
        <Sessions sessions={sessions} />
      </div>
    </div>
  );
}

export default Speaker;
