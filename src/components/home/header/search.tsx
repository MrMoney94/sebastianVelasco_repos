import React from 'react';
import {View, TextInput} from 'react-native';
import {HomeStyle as styles} from '../../../styles';
import {colors} from '../../../utils';

const Search: React.FC<{onSubmit: (text: string) => void}> = ({onSubmit}) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Busca pokemón aquí..."
        placeholderTextColor={colors.DARK_GRAY}
        value={value}
        onChangeText={setValue}
        returnKeyType="search"
        onSubmitEditing={() => {
          onSubmit(value);
          setValue('');
        }}
      />
    </View>
  );
};
export default Search;
