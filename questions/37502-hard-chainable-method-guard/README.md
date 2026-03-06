Implement a type FigureMethodGuard<CLASS> that turns a class’s chainable API into a resource-safe fluent interface.
Each method has a dependency described in MethodDeps. Calling a method that depends on resource R will consume R from the remaining set; methods whose dependency is not available must become type errors.
Special rules:

- void dependency: does not consume anything.

- null dependency: reset to the initial resource set.

- Only keys existing in both CLASS and MethodDeps are guarded; other members keep their original types.
