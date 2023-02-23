import React from 'react';
import { StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownList = ({open, value, items, setOpen, setValue, setItems}) => {



  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      searchable={true}
      placeholder="Select Client Location"
     
  // other props...
    
      
      
    />
  )
}

export default DropdownList

const styles = StyleSheet.create({})