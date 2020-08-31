import React from 'react';
import { View } from 'react-native';
import HorizontalListItem from '../../../shared/HorizontalListItem';
import { Result } from '../../../../store/models/result';

type ResultItemProps = {
  result: Result;
};

const ResultItem: React.FC<ResultItemProps> = ({ result }) => (
  <View>
    <HorizontalListItem title={'Status'} value={result.status} />
    <HorizontalListItem title={'Position'} value={result.positionText || result.position} />
    <HorizontalListItem title={'Points'} value={result.points} />
    <HorizontalListItem title={'Laps'} value={result.laps} />
    <HorizontalListItem title={'Number'} value={result.number} />
    <HorizontalListItem title={'Grid'} value={result.grid} />
  </View>
);

export default ResultItem;
