import { BehaviorSubject } from "rxjs";

// Counter state
export const counterState = new BehaviorSubject(0);

// Auto increment toggle state
export const autoMode = new BehaviorSubject(false);
