import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16,
    color: colors.text
  },
  separator: {
    backgroundColor: colors.border,
    // Uses the smallest possible size given the device
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
});

export const RowItem = ({ rightIcon, text, onPress }) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {rightIcon}
      </TouchableOpacity>
    );
};

export const RowSeparator = () => <View style={styles.separator} />;
