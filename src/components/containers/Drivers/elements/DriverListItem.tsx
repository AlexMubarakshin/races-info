import React from 'react';
import { Driver, getDriverName } from '../../../../store/models/drivers';
import DetailedListItem from '../../../shared/DetailedListItem';
import moment from 'moment';

type DriverListItemProps = {
  driver: Driver;
  onPress: (driver: Driver) => void;
};

const DriverListItem: React.FC<DriverListItemProps> = ({ driver, onPress }) => {
  const onPressHandle = React.useCallback(() => {
    onPress(driver);
  }, [onPress, driver]);

  return (
    <DetailedListItem
      title={getDriverName(driver)}
      subtitle={driver.nationality}
      description={moment(driver.dateOfBirth).format('LL')}
      onPress={onPressHandle}
    />
  );
};

export default DriverListItem;
