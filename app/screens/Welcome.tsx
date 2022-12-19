/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, type PropsWithChildren} from "react";
import {StyleSheet, useColorScheme, View} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header as DemoHeader,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import Lang from "../components/Lang";
import {Screen} from "../elements/Screen";
import {Text} from "../elements/Text";
import {WelcomeScreenProps} from "../navigators/root-navigator";

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Welcome: FC<WelcomeScreenProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Screen
      preset="scroll"
      StatusBarProps={{
        barStyle: isDarkMode ? "light-content" : "dark-content",
      }}
      backgroundColor={isDarkMode ? Colors.black : Colors.white}
      safeAreaEdges={["top"]}>
      <DemoHeader />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Welcome">
          <Text tx="welcome" />
        </Section>
        <Lang />
        <Section title="Step One">
          Go to{" "}
          <Text
            style={styles.highlight}
            onPress={() => navigation.navigate("Drawer")}>
            Drawer
          </Text>{" "}
          screen
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Welcome;
