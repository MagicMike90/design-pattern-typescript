import { Context } from './context';
import { ConcreteStateA } from './state';

/**
 * The client code.
 */
const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
