// Button.js
import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = ({
  onPress,
  title,
  icon,
  buttonStyle,
  textStyle,
  iconStyle,
  disabled,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.buttonPressed,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && <View style={[styles.iconContainer, iconStyle]}>{icon}</View>}
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    backgroundColor: "#0e76a8", // Darker shade when pressed
  },
  disabledButton: {
    backgroundColor: "#d3d3d3", // Greyed out when disabled
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default Button;
