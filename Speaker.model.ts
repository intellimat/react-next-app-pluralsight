export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  bio: string;
  twitterHandle: string;
  favorite: boolean;
  sessions: Session[];
}

export interface Session {
  id: string;
  title: string;
  eventYear: string;
  room: {
    name: string;
    capacity: number;
  };
}
