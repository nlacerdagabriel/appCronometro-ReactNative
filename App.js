import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function appCronometro() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/crono.png")}
      />

      <Text style={styles.timer}>00:00:00</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            Iniciar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lastArea}>
        <Text style={styles.runText}>
          Ultimo tempo: 00:03:50
        </Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00aeef"
  },
  timer:{
    marginTop: -160,
    fontSize:45,
    fontWeight:'bold',
    color: "#fff",
  },
  btnArea:{
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef"
  },
  lastArea:{
    marginTop:40,
  },
  runText:{
    fontSize: 23,
    color: "#fff",
    fontStyle: "italic",

  }
})