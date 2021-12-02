import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  msgContainer: {
    // borderTopWidth: 1,
    borderColor: "#ccc",
    width: "60%",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  timeContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
  },
});
