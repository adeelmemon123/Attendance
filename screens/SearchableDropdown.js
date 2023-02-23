import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SearchableDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
    { label: 'Item 4', value: 'item4' },
    { label: 'Item 5', value: 'item5' },
  ]);

  const onOpen = () => {
    setItems(items);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  };

  const filteredItems = items.filter(
    item => item.label.toLowerCase().includes(search.toLowerCase())
  );

  const searchInputRef = React.createRef();

  return (
    <View>
      <DropDownPicker
        items={filteredItems}
        searchable
        searchablePlaceholder="Search items..."
        value={selectedItem}
        onChangeItem={item => setSelectedItem(item.value)}
        onOpen={onOpen}
        setItems={setItems}
        renderSeach={props => (
          <TextInput
            ref={searchInputRef}
            style={{ height: 40, borderWidth: 1 }}
            {...props}
          />
        )}
      />
    </View>
  );
};
export default SearchableDropdown;