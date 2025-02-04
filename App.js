import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const nfl = "https://static.www.nfl.com/image/private/t_landscape_tablet/league/hadlqxovwinm7mc72rvd.jpg";
  const imgEmail = "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png";
  const imgId = "https://cdn-icons-png.flaticon.com/512/684/684833.png";
  const imgUser = "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png";
  const imgPhone = "https://e7.pngegg.com/pngimages/405/617/png-clipart-phone-phone.png";

  const [id, setId] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const [msj1, setmsj1] = React.useState('');
  const [msj2, setmsj2] = React.useState('');

return (
  <View style={styles.container}>

  <Image style={styles.logo} source={{ uri: nfl }} />



    <Text style={styles.title}> Formulario de Registro </Text>


    <Image style={styles.png} source={{ uri: imgId }} />
    <TextInput style={styles.formInput}
    placeholder='ID'
    onChangeText={id => setId(id)}
    value={id} >
    </TextInput>


    <Image style={styles.png} source={{ uri: imgUser }} />
    <TextInput style={styles.formInput}
    placeholder='Nombre'
    onChangeText={nombre => setNombre(nombre)}
    value={nombre} >
    </TextInput>
    
    <Image style={styles.png} source={{ uri: imgEmail }} />
    <TextInput style={styles.formInput}
    placeholder='Email'
    onChangeText={email => setEmail(email)}
    value={email} >
    </TextInput>


    <Image style={styles.png} source={{ uri: imgPhone }} />
    <TextInput style={styles.formInput}
    placeholder='Phone'
    onChangeText={phone => setPhone(phone)}
    value={phone} >
    </TextInput>

    <Button
    title="Registrarse"
    onPress={() => {
      if( id != '' && nombre != '' && email != ''&& phone != '' ){
      setmsj1("Datos ingresados correctamente");
      setmsj2(id + "\n" + nombre + "\n" + email + "\n" + phone);
      } else {
        alert('Debe ingresar todos los datos para registrarse')
      setmsj1('');
      setmsj2('');
    }
    }} />

    <Text style={styles.formTextTitle}> { msj1 } </Text>
    <Text style={styles.formText}> { msj2 } </Text>

    <StatusBar style="auto" />

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width: "380px",
    height: "75px",
    marginBottom: 20,
  },

  png:{
    width: "20px",
    height: "20px",
    alignSelf: 'flex-start',
    marginLeft: '20%'
  },
  
  title: {
    padding: 8,
    fontSize: 22,
    backgroundColor: "rgb(46, 5, 122)",
    color: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  formInput: {
    padding: 12,
    fontSize: 12,
    backgroundColor: 'rgb(212, 212, 212)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    width: "60%",
    marginBottom: 22
  },

  formTextTitle: {
    marginTop: 8,
    fontSize: 16,
    borderRadius: 5,
    //backgroundColor: "rgb(4, 3, 73)"
  },

  formText: {
    marginTop: 8,
    fontSize: 14,
    borderRadius: 5,
  },

});
