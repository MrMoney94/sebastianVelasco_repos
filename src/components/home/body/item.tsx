import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {usePokemonInfo} from '../../../hooks/usePokemonInfo';
import {PokemonItemProps} from '../../../interface';
import {HomeStyle as styles} from '../../../styles';

const Item: React.FC<PokemonItemProps> = ({name, url, onClick = () => {}}) => {
  const [data] = usePokemonInfo(url);

  return data !== null ? (
    <Pressable onPress={() => onClick(data)}>
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={{uri: data.image}} />
        </View>
        <View>
          <Text style={styles.numberFont}># {data.id}</Text>
        </View>
        <View>
          <Text style={styles.nameFont}>{name}</Text>
        </View>
      </View>
    </Pressable>
  ) : null;
};

export default React.memo(Item);
