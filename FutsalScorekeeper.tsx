import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Interface untuk props komponen
interface FutsalScorekeeperProps {
  teamA: string;
  teamB: string;
}

const FutsalScorekeeper: React.FC<FutsalScorekeeperProps> = ({ teamA, teamB }) => {
  // State untuk menyimpan skor dan pemenang
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);

  // Fungsi untuk mengupdate skor
  const updateScore = (team: 'A' | 'B', increment: boolean) => {
    if (winner) return; // Mencegah perubahan skor jika sudah ada pemenang

    const setScore = team === 'A' ? setScoreA : setScoreB;
    const currentScore = team === 'A' ? scoreA : scoreB;

    setScore((prevScore) => {
      const newScore = increment ? prevScore + 1 : Math.max(0, prevScore - 1);
      if (newScore === 10) {
        setWinner(team === 'A' ? teamA : teamB);
      }
      return newScore;
    });
  };

  // Fungsi untuk mereset pertandingan
  const resetMatch = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  // Render komponen
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Score Futsal</Text>
      
      <View style={styles.scoreContainer}>
        {/* Tim A */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateScore('A', true)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateScore('A', false)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tim B */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateScore('B', true)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => updateScore('B', false)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menampilkan pemenang jika ada */}
      {winner && (
        <Text style={styles.winnerText}>{winner} memenangkan pertandingan!</Text>
      )}

      {/* Tombol reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetMatch}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1e272e', // Warna latar belakang yang lebih gelap untuk kesan modern
  },
  title: {
    fontSize: 28, // Lebih besar untuk penekanan
    fontWeight: 'bold',
    color: '#ffffff', // Warna putih untuk kontras
    marginBottom: 30,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2f3640', // Warna latar belakang tim
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f6fa', // Warna terang
    marginBottom: 10,
  },
  score: {
    fontSize: 50, // Ukuran lebih besar untuk visibilitas
    fontWeight: 'bold',
    color: '#44bd32', // Warna hijau terang
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 50, // Bentuk bulat
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#4cd137',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#e84118',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default FutsalScorekeeper;

