import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   return (
    <View style={styles.containerStyle}>
      { props.children }
      //render any chilren that it got passed directly
      //reference to the all of the children

    </View>
  );
};

const styles = {
  containerStyle: {
     borderWidth: 1,
     borderRadius: 2, //rounded color
     borderColor: '#ddd',
     borderBottomWidth: 0,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     // shawdowRadius: 2,
     elevation: 1,
     marginLeft: 5,
     marginRight: 5,
     marginTop: 10
  }
};

export default Card;
