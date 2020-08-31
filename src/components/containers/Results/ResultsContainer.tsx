import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';
import ResultsView from './ResultsView';

type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'Results'>;
type ResultsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Results'>;

type ResultsContainerProps = {
  route: ResultsScreenRouteProp;
  navigation: ResultsScreenNavigationProp;
};

const ResultsContainer: React.FC<ResultsContainerProps> = ({
  route: {
    params: { race },
  },
}) => {
  return <ResultsView race={race} />;
};

export default ResultsContainer;
