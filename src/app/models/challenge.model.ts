export interface Submitter {
  username: string;
  uid: string;
}
export interface Challenge {
  challengeName: string;
  devStack: string;
  timeToComplete: string;
  gitHubURL: string;
  summary: string;
  approved: boolean;
  submitedBy: Submitter;
}
