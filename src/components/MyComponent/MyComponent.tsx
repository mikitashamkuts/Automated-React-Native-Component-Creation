import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';

import {Props, styles} from '.';

const MyComponent: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

export default memo(MyComponent);
