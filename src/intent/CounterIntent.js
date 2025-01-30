import { counterState, autoMode } from "../model/CounterModel";
import { interval } from "rxjs";
import { map, switchMap } from "rxjs/operators";

// Auto Increment Logic
const autoIncrement$ = autoMode.pipe(
  switchMap((isEnabled) => (isEnabled ? interval(1100).pipe(map(() => 1)) : []))
);

// Apply auto-increment changes
autoIncrement$.subscribe((increment) => {
  let newValue = counterState.getValue() + increment;
  if (newValue > 98) newValue = 98; // Prevent going above 98
  counterState.next(newValue);
});

// User Actions
export const increaseCount = () => {
  let current = counterState.getValue();
  if (current >= 98) return;
  counterState.next(current + 1);
};

export const decreaseCount = () => {
  let current = counterState.getValue();
  if (current > 0) counterState.next(current - 1);
};

export const resetCount = () => {
  counterState.next(0);
};

export const toggleAutoMode = () => {
  autoMode.next(!autoMode.getValue());
};
