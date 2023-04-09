import {TextStyle, View} from 'react-native';
import DynamicIcons, {IconType} from 'react-native-dynamic-vector-icons';

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size?: number;
  name: string;
  color?: string;
  type: keyof typeof IconType;
  style?: TextStyle[];
}

export const IconSizes = {
  small: 16,
  medium: 20,
  large: 24,
  extraLarge: 32,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = '#ffffff',
  type,
  style,
}: IconProps) => {
  return (
    <View style={style}>
      <DynamicIcons
        name={name}
        type={IconType[type]}
        size={size}
        color={color}
      />
    </View>
  );
};

export default Icon;
