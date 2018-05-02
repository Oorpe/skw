# Redux actions

The app's redux actions are held here.

## class ActionChain

This is a wrapper class for sending redux actions in a more composable, d3-style fashion.

it can be initiated either via the name method `action(ACTION.CONSTANT, payload)` or by constructing a new `ActionChain()` and calling it's `action` method with the same arguments.

```javaScript
import {redux} from './some/path/bundles';

redux.action(ACTIONS.ADD.THING, {name:"some thing"})
.action(ACTIONS.ADD.OTHER_THING, {name:"OTHER whatnot"})
.dispatch()
```

Here, the `action` methods add to an internal array. This allows for composing a set of redux actions that can then be replayed at will.
