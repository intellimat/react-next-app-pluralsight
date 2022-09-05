export interface LoginStateProps {
  loggedInUser: string;
  setLoggedInUser: (username: string) => void;
}
