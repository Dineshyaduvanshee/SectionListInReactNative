// import { SectionList, Text, View } from "react-native";

// const App = ()=>{
//   const users = [
//     {
//       id:1,
//       name:'Dinesh',
//       data:[".net","php","js","react","angular","android","ios","c","c++","java"]
//     },
//       {
//         id:2,
//         name:'Dinesh Yadav',
//         data:[".net","php","js","react","angular","android","ios","c","c++","java"]
//       },
//       {
//         id:3,
//         name:'Dineshyaduvanshee',
//         data:[".net","php","js","react","angular","android","ios","c","c++","java"];
//       },
//       {
//         id:4,
//         name:'Mahesh Yadav',
//         data:[".net","php","js","react","angular","android","ios"]
//       }
    
//   ]
//   return(
//     <View>
//      <Text style={{fontSize:24 , textAlign:'center'}}>!! Section List in React-Native !!</Text>
//      <SectionList sections={users}/>
     

//      renderItem={({ item }) => <Text>{item}</Text> />}
//      renderSectionItem={({ item }) => <Text>{item}</Text>
//     </View>
//   );
// }
// export default App;

import React from 'react';
import { SectionList, Text, View } from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Dinesh',
      data: [
        '.net',
        'php',
        'js',
        'react',
        'angular',
        'android',
        'ios',
        'c',
        'c++',
        'java',
      ],
    },
    {
      id: 2,
      name: 'Dinesh Yadav',
      data: [
        '.net',
        'php',
        'js',
        'react',
        'angular',
        'android',
        'ios',
        'c',
        'c++',
        'java',
      ],
    },
    {
      id: 3,
      name: 'Dineshyaduvanshee',
      data: [
        '.net',
        'php',
        'js',
        'react',
        'angular',
        'android',
        'ios',
        'c',
        'c++',
        'java',
      ],
    },
    {
      id: 4,
      name: 'Mahesh Yadav',
      data: [
        '.net',
        'php',
        'js',
        'react',
        'angular',
        'android',
        'ios',
      ],
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>
        !! Section List in React-Native !!
      </Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={{ fontWeight: 'bold' , 
                                                 color:'yellow',
                                                 marginRight:20,
                                                 backgroundColor:'purple',
                                                borderColor:'white' }}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontWeight: 'bold' , color:'cyan',marginRight:20,
          backgroundColor:'purple',
         borderColor:'white' }}>{name}</Text>
        )}
      />
    </View>
  );
};

export default App;
