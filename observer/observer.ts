import { Subject } from './subject';

/**
 * The Observer interface declares the update method, used by subjects.
 */
export interface Observer {
  // Receive update from subject.
  update(subject: Subject): void;
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
export class ConcreteObserverA implements Observer {
  public update(subject: Subject): void {
    if (subject.getState() < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject.getState() === 0 || subject.getState() >= 2) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}
