import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

import {Props, styles} from '.';

const ComponentB: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>ComponentB</Text>
    </View>
  );
};

export default memo(ComponentB);
