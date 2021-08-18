import React from 'react';
import {
  Icon,
  IconProps,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';


const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

type Props = {
  goBack: Function;
};

export default ({ goBack }: Props) => (
  <TopNavigation
    accessoryLeft={() => (
      <TopNavigationAction icon={BackIcon} onPress={() => goBack()} />
    )}
    style={styles.transparent}
  >
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.8)']}
    />
  </TopNavigation>
);

const styles = StyleSheet.create({
  transparent: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});
