import {MMKV} from "react-native-mmkv";
import {initializeMMKVFlipper} from "react-native-mmkv-flipper-plugin";
import {Storage} from "redux-persist";

const storage = new MMKV({
  id: "redux-store",
});

if (__DEV__) {
  initializeMMKVFlipper({default: storage});
}

const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => Promise.resolve(storage.getString(key)),
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
