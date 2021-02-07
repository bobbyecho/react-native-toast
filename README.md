# react-native-toast

a cool global toast for react native, you can use anywhere inside your application

## Installation

```sh
npm install @bobbyecho/react-native-toast

or

yarn add @bobbyecho/react-native-toast
```

## Usage

import ToastProvider in top of your application

```js
import {ToastProvider} from "@bobbyecho/react-native-toast";

// ...

return (
    <Container>
        <ToastProvider />
    </Container>
);
```

call showToast anywhere inside your application

```js
import {showToast} from "@bobbyecho/react-native-toast";

const Home = (): JSX.Element => {
    const buttonPressed = (): void => {
      showToast('Hello world!', 2000);
    };

    return (
        <Button onPress={buttonPressed}>Press me!</Button>
    );
}

export default Home;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
