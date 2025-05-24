import React from 'react';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwipeButton from 'rn-swipe-button';

interface SwipeButtonProps {
  onSwipeSuccess: () => void;
}

const SwipeableButton: React.FC<SwipeButtonProps> = ({onSwipeSuccess}) => {
  return (
    <SwipeButton
      onSwipeSuccess={onSwipeSuccess}
      containerStyles={{borderRadius: 16}}
      height={66}
      railBackgroundColor={Colors.backgroundColorsSecondary}
      thumbIconBackgroundColor={Colors.primary}
      thumbIconStyles={{borderRadius: 16, backgroundColor: Colors.dark}}
      thumbIconWidth={60}
      swipeSuccessThreshold={90}
      railBorderColor={Colors.borderColor}
      railStyles={{borderRadius: 16}}
      thumbIconBorderColor="transparent"
      thumbIconComponent={() => <Icon name="lock-open" size={32} color={Colors.light} />}
      railFillBackgroundColor="#45BD8950"
      railFillBorderColor={Colors.primary}
      titleColor="#fff"
      titleFontSize={18}
      title="Slide and Unlock"
    />
  );
};

export default SwipeableButton;
