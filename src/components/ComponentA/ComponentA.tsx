import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

import {Props, styles} from '.';

const ComponentA: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>ComponentA</Text>
    </View>
  );
};

export default memo(ComponentA);
