import { useContext } from "react";
import { SpeakerContext } from "../../../Contexts/SpeakerContext";
import SpeakerFavorite from "./SpeakerFavorite";

export interface SpeakerDemographicsProps {}

function SpeakerDemographics({}: SpeakerDemographicsProps) {
  const { speaker } = useContext(SpeakerContext);
  const { firstName, lastName, bio, company, twitterHandle, favorite } =
    speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {firstName} {lastName}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className="card-description">
          {bio.substring(0, 70)} {company} {twitterHandle} {favorite}
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

export default SpeakerDemographics;
