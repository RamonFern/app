import { VStack, Heading, Center, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import { Input } from '../components/input';
import { Button } from '../components/Button';

type formDataProps = {
  placa: string;
  marcaModelo: string;
  especie: string;
  codInfracao: string;
  localizacao: string;
}
  

export default function New() {

  const { control, handleSubmit, formState: { errors } } = useForm<formDataProps>();

  function handle(data: formDataProps) {
    console.log(data);
  }


  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={8}>
          New!
        </Heading>
        <ScrollView showsVerticalScrollIndicator={false} width='full'>
          <Controller
            control={control}
            name='placa'
            rules={{
              required: 'Informe uma placa',
              // pattern: {
              //   // value: /^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/i,
              //   message: 'Não existe placa neste formato.'
              // }
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='Digite a placa' 
              onChangeText={onChange}
              errorMessage={errors.placa?.message}
              />
            )}
          />
          
          <Controller
            control={control}
            name='marcaModelo'
            rules={{
              required: 'Informe uma marca/modelo',
              minLength: {
                value: 3,
                message: 'Não pode ter menos de 3 digitos.'
              }
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='Marca/Modelo' 
              onChangeText={onChange} 
              errorMessage={errors.marcaModelo?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='especie'
            rules={{
              required: 'Informe uma espécie',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='especie' 
              onChangeText={onChange} 
              errorMessage={errors.especie?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='codInfracao'
            rules={{
              required: 'Informe o cod. da infração',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='cod. da Infracao' 
              onChangeText={onChange}
              errorMessage={errors.codInfracao?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='localizacao'
            rules={{
              required: 'Informe a localização',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='Localização da Infracao' 
              onChangeText={onChange} 
              errorMessage={errors.localizacao?.message}
              />
            )}
          />

          <Button title='Cadastrar' onPress={handleSubmit(handle)}/>
        </ScrollView>
      </Center>
    </VStack>
  );
}

