import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView, View, Image } from "react-native";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=10');
      const {results} = await res.json();
      setData(results);
      
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 50,
          backgroundColor: '#6e3b6e'
        }}
      >
        <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold', paddingVertical: 5, paddingLeft: 10}}>Costumer</Text>
      </View>
        <ScrollView style={styles.scroll}>
        
        {
          data.map((item) => (
            <View style={styles.box} key={item.id}>
                <Image
                  source={item.picture.thumbnail}
                  style={{width: 30, height: 30}}
                />
                <Text style={styles.title}>{item.name.title} {item.name.first} {item.name.last}</Text>
                <Text>{item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.country}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
          ))
        }
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  scroll: {
    backgroundColor: '#6e3b6e',
    padding: 10
  },
  box: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  email: {
    color: 'blue'
  }
});

export default App;