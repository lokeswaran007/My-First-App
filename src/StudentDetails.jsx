import React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';

const StudentDetail = ({ route }) => {
  const { student } = route.params || {};

  const passingScore = 35; // Define the passing score for each subject
  const totalMarks = 500;

  const calculatePassFail = (marks) => {
    return marks >= passingScore ? 'Pass' : 'Fail';
  };

  const calculateOverallPercentage = () => {
    const total = student.tamil + student.english + student.maths + student.science + student.socialScience;
    return (total / totalMarks) * 100;
  };

  const calculateOverallResult = () => {
    const total = student.tamil + student.english + student.maths + student.science + student.socialScience;
    return total / totalMarks >= 0.35 ? 'Pass' : 'Fail';
  };

  const getStatusStyle = (status) => ({
    color: status === 'Pass' ? 'green' : 'red',
  });

  const percentage = calculateOverallPercentage();
  const overallResult = calculateOverallResult();

  const passFailStatus = {
    Tamil: calculatePassFail(student.tamil),
    English: calculatePassFail(student.english),
    Maths: calculatePassFail(student.maths),
    Science: calculatePassFail(student.science),
    'Social Science': calculatePassFail(student.socialScience),
    'Overall Result': overallResult
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/8b/ce/1e/8bce1e4d81426249a606b66c7ca626d7.jpg' }}
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
        resizeMode: 'cover', // or 'stretch' depending on your preference
        justifyContent: 'center',
      },
    container: {
        flex: 1,
        padding:0,
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 50,
        backgroundColor: 'rgba(255, 255, 255,10)',
        // borderRadius: 30,
        margin: 20,
        alignItems:'center',
      },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    // textAlign: 'center',
    // justifyContent:'center',
    // marginHorizontal:10,
    paddingTop:30,
  },
  table: {
    // borderWidth:0.5,
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
    fontSize: 16,
  },
//   cell:{
//     fontSize:19,
//   },
});

export default StudentDetail;









































// import React from 'react';
// import { View, Text, StyleSheet,ImageBackground } from 'react-native';

// const StudentDetail = ({ route }) => {
//   const { student } = route.params || {};

//   const passingScore = 35; // Define the passing score for each subject
//   const totalMarks = 500;

//   const calculatePassFail = (marks) => {
//     return marks >= passingScore ? 'Pass' : 'Fail';
//   };

//   const calculateOverallPercentage = () => {
//     const total = student.tamil + student.english + student.maths + student.science + student.socialScience;
//     return (total / totalMarks) * 100;
//   };

//   const calculateOverallResult = () => {
//     const total = student.tamil + student.english + student.maths + student.science + student.socialScience;
//     return total / totalMarks >= 0.35 ? 'Pass' : 'Fail';
//   };

//   const getStatusStyle = (status) => ({
//     color: status === 'Pass' ? 'green' : 'red',
//   });

//   const percentage = calculateOverallPercentage();
//   const overallResult = calculateOverallResult();

//   const passFailStatus = {
//     Tamil: calculatePassFail(student.tamil),
//     English: calculatePassFail(student.english),
//     Maths: calculatePassFail(student.maths),
//     Science: calculatePassFail(student.science),
//     'Social Science': calculatePassFail(student.socialScience),
//     'Overall Result': overallResult
//   };

//   return (
//     <ImageBackground 
//       source={{ uri: 'https://i.pinimg.com/736x/71/71/fe/7171fe7f9d4f4c956aecacb7003a3d72.jpg' }}
//       style={styles.backgroundImage}>
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Details</Text>
//       <View style={styles.table}>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Name :</Text></View>
//           <View style={styles.tableCell}><Text style={styles.cellText}>{student.name}</Text></View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Student Id :</Text></View>
//           <View style={styles.tableCell}><Text style={styles.cellText}>{student.StudentId}</Text></View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Class :</Text></View>
//           <View style={styles.tableCell}><Text style={styles.cellText}>{student.selectedClass}</Text></View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Tamil :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.tamil} <Text style={getStatusStyle(passFailStatus.Tamil)}>({passFailStatus.Tamil})</Text>
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>English :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.english} <Text style={getStatusStyle(passFailStatus.English)}>({passFailStatus.English})</Text>
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Maths :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.maths} <Text style={getStatusStyle(passFailStatus.Maths)}>({passFailStatus.Maths})</Text>
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Science :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.science} <Text style={getStatusStyle(passFailStatus.Science)}>({passFailStatus.Science})</Text>
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Social Science :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.socialScience} <Text style={getStatusStyle(passFailStatus['Social Science'])}>({passFailStatus['Social Science']})</Text>
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Total Marks :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>
//               {student.tamil + student.english + student.maths + student.science + student.socialScience}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Overall Result :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={getStatusStyle(passFailStatus['Overall Result'])}>
//               {passFailStatus['Overall Result']}
//             </Text>
//           </View>
//         </View>
//         <View style={styles.tableRow}>
//           <View style={styles.tableCell}><Text style={styles.cellText}>Overall Percentage :</Text></View>
//           <View style={styles.tableCell}>
//             <Text style={styles.cellText}>{percentage.toFixed(2)}%</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover', // or 'stretch' depending on your preference
//         justifyContent: 'center',
//       },
//     container: {
//         flex: 1,
//         padding:0,
//         borderRadius: 10,
//         marginBottom: 50,
//         marginTop: 50,
//         backgroundColor: 'rgba(255, 255, 255,10)',
//         // borderRadius: 30,
//         margin: 20,
//         alignItems:'center',
//       },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     // textAlign: 'center',
//     // justifyContent:'center',
//     // marginHorizontal:10,
//     paddingTop:30,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     overflow: 'hidden',
//     alignItems:'center',
//     alignContent:'center',
//     paddingHorizontal:10,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 10,
//     paddingHorizontal:10,
    
//   },
//   tableCell: {
//     flex: 1,
//   },
//   cellText: {
//     fontSize: 19,
//   },
// //   cell:{
// //     fontSize:19,
// //   },
// });

// export default StudentDetail;
