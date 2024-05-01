import { VStack, Heading, Center, ScrollView, View, Button, IconButton, HStack, Icon, Pressable } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
// import { AntDesign } from "@expo/vector-icons";
import { Input } from '../components/input';
import { Button as ButtonComp } from '../components/Button';
import React from 'react';


type formDataProps = {
  placa: string;
  marcaModelo: string;
  especie: string;
  localizacao: string;
  bandeira: string;
  codInfracao: string;
  observacao: string;
  medidaAdm: string;
  hora: string;
  data: string;
  foto: string;
  abordagem: boolean;
  municipio: string;

}
  

export default function New() {

  const { control, handleSubmit, formState: { errors } } = useForm<formDataProps>();

  function handle(data: formDataProps) {
    console.log(data);
  }

  function tiraFoto() {
    console.log('chama a camera do celular');
  }


  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={8}>
          New!
        </Heading>
        <ScrollView showsVerticalScrollIndicator={false} width='full' marginBottom={16}>
          
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
                <HStack space={2} w='full' justifyContent='flex-end'>
                  <Input 
                  width='md'
                  marginLeft='1/5'
                  placeholder='Digite a placa' 
                  onChangeText={onChange}
                  errorMessage={errors.placa?.message}
                  />
                  
                  <IconButton colorScheme="cyan" width='16' height={60} variant="solid" _icon={{
                    as: Feather,
                    name: "search"
                  }} 
                  />
                </HStack>
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
            name='localizacao'
            rules={{
              required: 'Informe a localização',
            }}
            render={({ field: { onChange }}) => (
              <HStack space={2} w='full' justifyContent='flex-end'>
                <Input
                width='md'
                marginLeft='1/5' 
                placeholder='Localização da Infracao' 
                onChangeText={onChange} 
                errorMessage={errors.localizacao?.message}
                />
                <IconButton colorScheme="cyan" width='16' height={60} variant="solid" _icon={{
                    as: Feather,
                    name: "map-pin"
                  }} 
                />
              </HStack>
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
            name='observacao'
            // rules={{
            //   required: 'Informe o cod. da infração',
            // }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='Observação' 
              onChangeText={onChange}
              // errorMessage={errors.codInfracao?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='medidaAdm'
            // rules={{
            //   required: 'Informe o cod. da infração',
            // }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='medidaAdm' 
              onChangeText={onChange}
              // errorMessage={errors.codInfracao?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='hora'
            rules={{
              required: 'Informe a hora',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='hora' 
              onChangeText={onChange}
              errorMessage={errors.hora?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='data'
            rules={{
              required: 'Informe a data',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='data' 
              onChangeText={onChange}
              errorMessage={errors.data?.message}
              />
            )}
          />
          <ButtonComp 
            title='Foto'
            onPress={handleSubmit(tiraFoto)} 
            marginBottom={4} 
            backgroundColor='blue.400'
          />
          <Controller
            control={control}
            name='abordagem'
            rules={{
              required: 'Houve abordagem',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='Houve abordagem' 
              onChangeText={onChange}
              errorMessage={errors.abordagem?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='municipio'
            rules={{
              required: 'Informe o municipio',
            }}
            render={({ field: { onChange }}) => (
              <Input 
              placeholder='municipio' 
              onChangeText={onChange}
              errorMessage={errors.municipio?.message}
              />
            )}
          />

          <ButtonComp title='Cadastrar' onPress={handleSubmit(handle)}/>
        </ScrollView>
      </Center>
    </VStack>
  );
}

