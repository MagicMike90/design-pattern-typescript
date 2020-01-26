/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
export interface Component {
  operation(): string;
}

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
export class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}
