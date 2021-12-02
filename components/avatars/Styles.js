import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  msgTimeContainer: {
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginRight: 15,
  },
  msgContainer: {
    width: "70%",
    marginLeft: 10,
  },
  timeContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  name: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 5,
  },
  num: {
    backgroundColor: "#e4ceed",
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 30,
    marginTop: 5,
  },
});
