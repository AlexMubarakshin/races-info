import React from 'react';
import { View } from 'react-native';
import HorizontalListItem from '../../../shared/HorizontalListItem';
import { Result } from '../../../../store/models/result';

type ResultItemProps = {
  result: Result;
};

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  return (
    <View>
      <HorizontalListItem title={'Grid'} value={result.grid} />
      <HorizontalListItem title={'Laps'} value={result.laps} />
      <HorizontalListItem title={'Number'} value={result.number} />
      <HorizontalListItem title={'Points'} value={result.points} />
      <HorizontalListItem title={'Position'} value={result.position} />
      <HorizontalListItem title={'PositionText'} value={result.positionText} />
      <HorizontalListItem title={'Status'} value={result.status} />
    </View>
  );
};

export default ResultItem;
