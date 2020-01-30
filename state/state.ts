import { Context } from './context';

/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
export abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */
export class ConcreteStateA extends State {
  public handle1(): void {
    console.log("ConcreteStateA handles request1.");
    console.log("ConcreteStateA wants to change the state of the context.");
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log("ConcreteStateA handles request2.");
  }
}

export class ConcreteStateB extends State {
  public handle1(): void {
    console.log("ConcreteStateB handles request1.");
  }

  public handle2(): void {
    console.log("ConcreteStateB handles request2.");
    console.log("ConcreteStateB wants to change the state of the context.");
    this.context.transitionTo(new ConcreteStateA());
  }
}
