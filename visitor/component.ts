import { Visitor } from './visitor';

/**
 * The Component interface declares an `accept` method that should take the base
 * visitor interface as an argument.
 */
export interface Component {
  accept(visitor: Visitor): void;
}

/**
 * Each Concrete Component must implement the `accept` method in such a way that
 * it calls the visitor's method corresponding to the component's class.
 */

export class ConcreteComponentA implements Component {
  /**
   * Note that we're calling `visitConcreteComponentA`, which matches the
   * current class name. This way we let the visitor know the class of the
   * component it works with.
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  public exclusiveMethodOfConcreteComponentA(): string {
    return "A";
  }
}

export class ConcreteComponentB implements Component {
  /**
   * Same here: visitConcreteComponentB => ConcreteComponentB
   */
  public accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  public specialMethodOfConcreteComponentB(): string {
    return "B";
  }
}
