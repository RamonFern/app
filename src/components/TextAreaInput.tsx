import { IInputProps, Input as NativeBaseInput, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null; 
}

export function TextAreaInput({ errorMessage = null, isInvalid, ...rest}: Props ) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl  mb={4} isInvalid={invalid}>
      <NativeBaseInput
      bg="gray.200"
      fontSize="md"
      h={32}
      width='full'
      isInvalid={invalid}
      _focus={{
        bg: "gray.100",
        borderWidth: 2,
        borderColor: 'green.400'
      }}
      {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}