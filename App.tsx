import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FutsalScorekeeper from './FutsalScorekeeper';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FutsalScorekeeper teamA="Team A" teamB="Team B" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

