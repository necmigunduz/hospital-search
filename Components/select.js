import React from "react";
import RNPickerSelect from 'react-native-picker-select';

export default function select(props) {
  const { setValue } = props;
    return (
    <RNPickerSelect
      onValueChange={(value) => {
        // console.log(value)
        setValue(value);
      }}
      items={[
        { label: "Fullname", value: "name" },
        { label: "Given name", value: "given" },
        { label: "Family name", value: "family" },
        { label: "National-Id", value: "nationalid" },
      ]}
      placeholder={{
        label: "Select a filter",
        value: "",
      }}
      useNativeAndroidPickerStyle={false}
      style={{ color: "white" }}
    />
  );
}
