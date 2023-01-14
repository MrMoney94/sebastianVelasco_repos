import React, {useState} from 'react';
import {View, Text, Image, Alert, ActivityIndicator} from 'react-native';
import {HomeStyle as styles} from '../../../styles';
import Logo from '../../../static/images/ball.png';
import SearchInput from './search';
import {URL, base_api} from '../../../constants/credentials';
import {PokemonDataQuery} from '../../../interface';

const Header: React.FC<{submit: (e: PokemonDataQuery) => void}> = ({
  submit,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmitted = async (t: string) => {
    if (t !== '') {
      setLoading(true);
      try {
        const res = await fetch(
          `${URL + base_api}pokemon/${t.toLowerCase().trim()}`,
        );
        const result = await res.json();
        const structureData = {
          id: result.id,
          name: result.name,
          image: result.sprites.other.home.front_default,
          types: result.types,
          sprites: {
            back: result.sprites.back_default,
            shiny: result.sprites.back_shiny,
            front: result.sprites.front_default,
            front_shiny: result.sprites.front_shiny,
          },
          moves: result.moves.map((i: any) => {
            const {move} = i;
            const encode = {
              name: move.name,
            };
            return encode;
          }, {}),
          weight: result.weight,
        };
        submit(structureData);
        setLoading(false);
      } catch (error) {
        if (error) {
          Alert.alert(
            'Upss! Lo siento',
            'No hemos podido encontrar ninguna información del Pokemon',
          );
        }
        setLoading(false);
      }
    } else {
      Alert.alert('Error', 'El texto es obligatorio para la busqueda');
    }
  };

  return loading ? (
    <View style={{alignSelf: 'center'}}>
      <ActivityIndicator size="small" />
    </View>
  ) : (
    <View style={styles.headerContainer}>
      <View style={styles.headerTitleFlex}>
        <View>
          <Text style={styles.mainTitle}>Listado de Pokemón</Text>
        </View>
        <View style={{paddingLeft: 10}}>
          <Image style={{height: 20, width: 20}} source={Logo} />
        </View>
      </View>
      <View>
        <SearchInput onSubmit={(text: string) => onSubmitted(text)} />
      </View>
    </View>
  );
};

export default Header;
