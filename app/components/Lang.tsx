import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {Button} from "../elements/Button";

const Lang: FC = () => {
  const {i18n} = useTranslation();
  return (
    <View style={{justifyContent: "center", alignItems: "center"}}>
      <Button
        style={{width: 200}}
        text="Switch language"
        onPress={() =>
          i18n.language === "en"
            ? i18n.changeLanguage("vi")
            : i18n.changeLanguage("en")
        }
      />
    </View>
  );
};

export default Lang;
