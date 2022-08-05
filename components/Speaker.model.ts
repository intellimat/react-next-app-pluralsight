export interface SessionProps {
  title: string;
  roomName: string;
}

export interface SessionsProps {
  sessions: any[];
}

export interface SpeakerImageProps {
  id: string;
  firstName: string;
  lastName: string;
}

export interface SpeakerDemographicsProps {
  firstName: string;
  lastName: string;
  bio: string;
  company: string;
  twitterHandle: string;
  favorite: boolean;
}

export interface SpeakerProps {
  speaker: any;
}
