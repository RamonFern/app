import { Text, IButtonProps, Button as NativeBaseButton } from 'native-base';

type props = IButtonProps & {
  title: string;
}

export function Button({title, ...rest}: props) {
  return (
    <NativeBaseButton
    w="full"
    h={16}
    bg="green.600"
    _pressed={{
      bgColor: "green.800"
    }}
    {...rest}
    >
      <Text color='white' fontSize='md'>{title}</Text>
    </NativeBaseButton>
    
    
  );
}