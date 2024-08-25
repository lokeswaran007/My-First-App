import React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';

const StudentDetail = ({ route }) => {
  const { student } = route.params || {};

  const passingScore = '35';
  const totalMarks = 500;

  const calculatePassFail = (marks) => {
    return marks >= passingScore ? 'Pass' : 'Fail';
  };

  const calculateOverallPercentage = () => {
    const total = student.tamil + student.english + student.maths + student.science + student.socialScience;
    return (total / totalMarks) * 100;
  };

  const calculateOverallResult = () => {
    
    const isAnySubjectFail = 
      student.tamil < passingScore || 
      student.english < passingScore || 
      student.maths < passingScore || 
      student.science < passingScore || 
      student.socialScience < passingScore;

    return isAnySubjectFail ? '- Fail -' : '- Pass -';
  };

  const getStatusStyle = (status) => ({
    color: status === 'Pass' ? 'green':'red', fontSize:17,
  });

  const percentage = calculateOverallPercentage();
  const overallResult = calculateOverallResult();

  const passFailStatus = {
    Tamil: calculatePassFail(student.tamil),
    English: calculatePassFail(student.english),
    Maths: calculatePassFail(student.maths),
    Science: calculatePassFail(student.science),
    'Social Science': calculatePassFail(student.socialScience),
    'Overall Result': overallResult,
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/28/b7/0b/28b70b90a416b28c27ca11dc71db18bb.jpg' }}
      style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Student Details</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Name :</Text></View>
          <View style={styles.tableCell}><Text style={styles.cellText}>{student.name}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Student Id :</Text></View>
          <View style={styles.tableCell}><Text style={styles.cellText}>{student.StudentId}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Class :</Text></View>
          <View style={styles.tableCell}><Text style={styles.cellText}>{student.selectedClass}</Text></View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Tamil :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.tamil} <Text style={getStatusStyle(passFailStatus.Tamil)}>({passFailStatus.Tamil})</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>English :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.english} <Text style={getStatusStyle(passFailStatus.English)}>({passFailStatus.English})</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Maths :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.maths} <Text style={getStatusStyle(passFailStatus.Maths)}>({passFailStatus.Maths})</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Science :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.science} <Text style={getStatusStyle(passFailStatus.Science)}>({passFailStatus.Science})</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Social Science :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.socialScience} <Text style={getStatusStyle(passFailStatus['Social Science'])}>({passFailStatus['Social Science']})</Text>
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Total Marks :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>
              {student.tamil + student.english + student.maths + student.science + student.socialScience}
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Overall Result :</Text></View>
          <View style={styles.tableCell}>
            <Text style={getStatusStyle(passFailStatus['Overall Result'])}>
              {passFailStatus['Overall Result']}
            </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCell}><Text style={styles.cellText}>Overall Percentage :</Text></View>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>{percentage.toFixed(2)}%</Text>
          </View>
        </View>
      </View>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        padding:0,
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: 'rgba(255, 255, 255,10)',
        margin: 20,
        alignItems:'center',
      },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop:30,
  },
  table: {
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems:'center',
    alignContent:'center',
    paddingHorizontal:15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    paddingVertical: 13,
    paddingHorizontal:10,
    
  },
  tableCell: {
    flex: 1,
  },
  cellText: {
    fontSize: 17,
  },
});

export default StudentDetail;