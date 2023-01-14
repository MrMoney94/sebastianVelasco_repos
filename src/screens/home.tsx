import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {GetInfo} from '../core/api';
import {PokemonsProps, PokemonDataQuery} from '../interface';
import {QueryObject} from '../utils';
import {HomeStyle as styles} from '../styles';
import Item from '../components/home/body/item';
import Header from '../components/home/header/header';
import ModalView from '../components/home/body/modalView';
import NoData from '../components/noData/noData';

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<PokemonsProps>>([]);
  const [pagination, setPagination] = useState<number>(0);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDataQuery | any>(
    undefined,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await GetInfo('pokemon?offset=0&limit=10');
      const paginationNumber = QueryObject(data.next).offset;
      setPagination(parseFloat(paginationNumber));
      const results = data.results.map((ele: any, index: number) => {
        const {name, url} = ele;
        const structure = {
          id: index + 1,
          name,
          url,
        };
        return structure;
      }, {});

      setPokemons(results);
    })();
  }, []);

  const pages = async () => {
    setLoadingPage(true);
    const data = await GetInfo(`pokemon?offset=${pagination}&limit=10`);
    const paginationNumber = QueryObject(data.next).offset;
    setPagination(parseFloat(paginationNumber));
    const results = data.results.map((ele: any, index: number) => {
      const {name, url} = ele;
      const structure = {
        id: index + (pagination + 1),
        name,
        url,
      };
      return structure;
    }, {});

    setLoadingPage(false);
    setPokemons([...pokemons, ...results]);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={pokemons}
            renderItem={({item}) => (
              <Item
                name={item.name}
                url={item.url}
                onClick={(e: PokemonDataQuery) => {
                  setPokemonDetail(e);
                  setOpenModal(true);
                }}
              />
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            horizontal={false}
            onEndReached={pages}
            ListEmptyComponent={<NoData />}
            ListHeaderComponent={
              <Header
                submit={(e: PokemonDataQuery) => {
                  setPokemonDetail(e);
                  setTimeout(() => {
                    setOpenModal(true);
                  }, 600);
                }}
              />
            }
            ListFooterComponent={
              loadingPage ? (
                <ActivityIndicator style={{height: 150}} size="large" />
              ) : (
                <View style={{height: 150}} />
              )
            }
          />
        </View>
      </SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <ModalView onBack={() => setOpenModal(false)} data={pokemonDetail} />
      </Modal>
    </>
  );
};

export default Home;
