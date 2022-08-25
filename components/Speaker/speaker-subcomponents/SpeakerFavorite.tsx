import { useContext, useState } from "react";
import { SpeakerContext } from "../../../Contexts/SpeakerContext";

interface FavoriteProps {}

function SpeakerFavorite({}: FavoriteProps) {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const { favorite } = speaker;
  const [inTransition, setInTransition] = useState(false);
  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          updateRecord(
            {
              ...speaker,
              favorite: !speaker.favorite,
            },
            () => setInTransition(false)
          );
        }}
      >
        <i
          className={(favorite && "fa fa-star orange") || "fa fa-star-o orange"}
        ></i>{" "}
        Favorite{" "}
        {inTransition && <span className="fas fa-circle-notch fa-spin"></span>}
      </span>
    </div>
  );
}
export default SpeakerFavorite;
