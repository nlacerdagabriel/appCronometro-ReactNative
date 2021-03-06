import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

let timer = null
let ss = 0;
let mm = 0;
let hh = 0;

export default function appCronometro() {

  const [num, setNum] = useState("00:00:00")
  const [btn, setBtn] = useState("Iniciar")
  const [last, setLast] = useState(null)

  function run() {
    if (timer !== null) {
      clearInterval(timer)
      timer = null;
      setBtn("Iniciar")
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) + ":"
          + (mm < 10 ? "0" + mm : mm) + ":"
          + (ss < 10 ? "0" + ss : ss);

        setNum(format);

      }, 1000);
      setBtn("Parar")
    }
  }

  function clear() {
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }

    setLast(num);
    setNum("00:00:00");
    ss = 0;
    mm = 0;
    hh = 0;

    setBtn("Iniciar");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/crono.png")}
      />

      <Text style={styles.timer}>{num}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={run}>
          <Text style={styles.btnText}>
            {btn}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={clear}>
          <Text style={styles.btnText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lastArea}>
        <Text style={styles.runText}>
          {last ? 'Ultimo tempo: ' + last : ""}
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
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef"
  },
  lastArea: {
    marginTop: 40,
  },
  runText: {
    fontSize: 23,
    color: "#fff",
    fontStyle: "italic",

  }
})