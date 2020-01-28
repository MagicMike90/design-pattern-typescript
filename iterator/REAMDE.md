# Iterator

Iterator is a behavioral design pattern that allows sequential traversal through a complex data structure without exposing its internal details.

## When to use

- Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons
- Use the pattern to reduce duplication of the traversal code across your app.
- Use the Iterator when you want your code to be able to traverse different data structures or when types of these structures are unknown beforehand.

## Comparison

- You can use **Iterators** to traverse **Composite** trees.

- You can use **Factory Method** along with **Iterator** to let collection subclasses return different types of iterators that are compatible with the collections.

- You can use **Memento** along with **Iterator** to capture the current iteration state and roll it back if necessary.

- You can use **Visitor** along with **Iterator** to traverse a complex data structure and execute some operation over its elements, even if they all have different classes.
