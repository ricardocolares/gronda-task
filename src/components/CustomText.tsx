import React from 'react';
import {Text} from 'react-native';

type TextProps = {
  children: string;
  textSize: number;
  textColor: string;
  fontWeight?: string;
};

const CustomText: React.FC<TextProps> = ({
  children,
  textSize,
  textColor,
  fontWeight,
}) => {
  return (
    <Text style={{fontSize: textSize, color: textColor, fontWeight}}>
      {children}
    </Text>
  );
};

export default CustomText;
