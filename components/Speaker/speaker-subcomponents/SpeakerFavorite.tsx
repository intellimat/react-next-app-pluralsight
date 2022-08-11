import { useState } from "react";

interface FavoriteProps {
  favorite: boolean;
  onFavoriteToggle: any; // function
}

function SpeakerFavorite({ favorite, onFavoriteToggle }: FavoriteProps) {
  const [inTransition, setInTransition] = useState(false);
  return (
    <div className="action padB1">
      <span
        onClick={() => {
          setInTransition(true);
          onFavoriteToggle(() => {
            setInTransition(false);
          });
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
