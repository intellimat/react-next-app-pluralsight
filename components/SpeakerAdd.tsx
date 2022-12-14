import WithAuth from "./HOC/WithAuth";
import { LoginStateProps } from "./LoginModel";
interface SpeakerAddProps extends Partial<LoginStateProps> {
  eventYear: string;
  insertRecord: (record: any) => void;
}

function SpeakerAdd({
  eventYear,
  insertRecord,
  loggedInUser,
}: SpeakerAddProps) {
  if (!loggedInUser || loggedInUser.length === 0) return null;
  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault;
          const firstLast = window.prompt("Enter first and last name: ", "");
          const firstLastArray = firstLast?.split(" ");
          if (!firstLastArray || !firstLastArray[0] || !firstLastArray[1]) {
            throw "Input a firstname and lastname";
          }
          insertRecord({
            id: "99999",
            firstName: firstLastArray[0],
            lastName: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: "88888",
                title: `New Session for ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default WithAuth(SpeakerAdd);
