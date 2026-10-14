import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Count {count}</Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>Press to add the Count</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setCount(0);
        }}
      >
        <Text>Reset the Counter</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 20,
  },
};
