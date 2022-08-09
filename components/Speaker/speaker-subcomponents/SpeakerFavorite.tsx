interface FavoriteProps {
  favorite: boolean;
  onFavoriteToggle: any; // function
}

function SpeakerFavorite({ favorite, onFavoriteToggle }: FavoriteProps) {
  return (
    <div className="action padB1">
      <span onClick={onFavoriteToggle}>
        <i
          className={(favorite && "fa fa-star orange") || "fa fa-star-o orange"}
        ></i>{" "}
        Favorite{" "}
      </span>
    </div>
  );
}
export default SpeakerFavorite;
