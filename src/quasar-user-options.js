import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import { Loading, Notify, Dialog } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: { Loading, Notify, Dialog },
};
