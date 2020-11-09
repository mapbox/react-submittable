# react-submittable

[![Build Status](https://travis-ci.com/mapbox/react-submittable.svg?branch=main)](https://travis-ci.com/mapbox/react-submittable)
[![Coverage Status](https://coveralls.io/repos/mapbox/react-submittable/badge.svg?branch=main&service=github)](https://coveralls.io/github/mapbox/react-submittable?branch=master)

Stop using `preventDefault` to get form behavior in React.

```js
<Submittable
  onEnter={this.onEnter}
  onCancel={this.onCancel}>
  <input type='text' />
</Submittable>
```

The `Submittable` component simulates the same enter & escape behaviors
you would get with the `submit` event of an HTML form, without having to
shut down the default behavior. It also catches the escape key and calls
an `onCancel` event when it sees it.

## install

    npm install --save react-submittable
