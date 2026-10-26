import { Pressable, StyleSheet, Text } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

export function AppButton({ title, onPress }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c4c4d9",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "green",
    marginBottom: 10,
  },
  text: { color: "black", fontWeight: "600" },
});
