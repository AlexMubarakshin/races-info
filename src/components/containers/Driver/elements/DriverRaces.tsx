import React from 'react';
import { FlatList } from 'react-native';
import { Race } from '../../../../store/models/races';
import RaceInfoItem from './RaceInfoItem';
import Separator from '../../../shared/Separator';

type DriverRacesProps = {
  results: Race[];
};

const DriverRaces: React.FC<DriverRacesProps> = ({ results }) => {
  return (
    <FlatList
      data={results}
      keyExtractor={({ date, raceName, round }) => `${raceName}__${date}__${round}`}
      renderItem={({ item }) => <RaceInfoItem race={item} />}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default DriverRaces;
