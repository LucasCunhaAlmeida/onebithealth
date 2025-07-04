import { StyleSheet } from "react-native";
import ResultImc from ".";

const styles = StyleSheet.create({
  resultImc: {
    flex:1,
    marginTop: 20,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxSharedButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  shared: {
    backgroundColor: '#1877f2',
    padding: 10,
    borderRadius: 50,
  },
  sharedText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  }
});

export default styles;
