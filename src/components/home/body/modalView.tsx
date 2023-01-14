import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import {HomeStyle as styles} from '../../../styles';
import Back from '../../../static/images/back.png';
import {ModalProps} from '../../../interface/home';

const ModalView: React.FC<ModalProps> = ({onBack = () => {}, data}) => {
  return (
    <ScrollView style={styles.modalViewContainer}>
      <Pressable onPress={onBack}>
        <Image style={{height: 40, width: 40, marginLeft: 20}} source={Back} />
      </Pressable>
      <View>
        <Image
          style={{height: 160, width: 160, alignSelf: 'center'}}
          source={{uri: data.image}}
        />
      </View>
      <View>
        <Text style={styles.numberFont}># {data.id}</Text>
      </View>
      <View>
        <Text style={styles.nameFont}>{data.name}</Text>
      </View>
      <View>
        <Text style={styles.titleItem}>Types</Text>
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        {data.types.map((i: any, index: number) => (
          <Text key={index}>{i.type.name}</Text>
        ))}
      </View>
      <View>
        <Text style={styles.titleItem}>Peso</Text>
      </View>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text>{data.weight} Kg</Text>
      </View>
      <View>
        <Text style={styles.titleItem}>Sprites</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        <View>
          <Image
            style={[styles.imgSprites, styles.spritesView]}
            source={{uri: data.sprites.back}}
            resizeMode="cover"
            resizeMethod="scale"
          />
        </View>
        <View>
          <Image
            style={[styles.imgSprites, styles.spritesView]}
            source={{uri: data.sprites.shiny}}
          />
        </View>
        <View>
          <Image
            style={[styles.imgSprites, styles.spritesView]}
            source={{uri: data.sprites.front}}
          />
        </View>
        <View>
          <Image
            style={[styles.imgSprites, styles.spritesView]}
            source={{uri: data.sprites.front_shiny}}
          />
        </View>
      </View>
      <View>
        <Text style={styles.titleItem}>Movimientos</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {data.moves.map((i: any, index: number) => (
          <View key={index}>
            <Text>{i.name} </Text>
          </View>
        ))}
      </View>
      <View style={{height: 120}} />
    </ScrollView>
  );
};
export default ModalView;
