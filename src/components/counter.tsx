import { AppButton } from "@/components/app-button";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type CounterProps = {
  count?: number;
};

export default function Counter({ count: initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const color = count > 0 ? "#0274df" : "green";
  return (
    <View style={styles.container}>
      <Text style={{ color: color, marginBottom: 10, textAlign: "center" }}>
        Count {count}
      </Text>
      {[1, 5, 10].map((num) => (
        <AppButton
          key={num}
          title={`+ ${num} to count`}
          onPress={() => setCount((count) => count + num)}
        ></AppButton>
      ))}
      <AppButton
        title="Decrease by 1 "
        onPress={() => setCount((count) => Math.max(0, count - 1))}
      ></AppButton>
      <AppButton
        title="Reset"
        onPress={() => {
          setCount(() => 0);
        }}
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c763d9",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 20,
  },
});
