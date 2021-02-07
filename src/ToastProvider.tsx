import React from "react";
import type {Provider} from "./typings";
import Toast, {register} from "./Toast";

const ToastProvider: Provider = (): JSX.Element => {
    return <Toast ref={register} />;
};

ToastProvider.ref = null;

export default ToastProvider;
