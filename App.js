import { Provider } from "react-redux";

import { store } from "./App/redux/store";

export default function App() {
  return <Provider store={store}></Provider>;
}
