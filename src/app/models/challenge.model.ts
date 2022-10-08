export interface Submitter {
  username: string;
  uid: string;
}
export interface Challenge {
  id: string;
  challengeName: string;
  devStack: string;
  timeToComplete: string;
  gitHubURL: string;
  summary: string;
  submitedBy: Submitter;
}
