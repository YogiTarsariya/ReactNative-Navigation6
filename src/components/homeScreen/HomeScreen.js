import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = props => {
     return ( 
          <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Home Screen'}</Text>
               <Button 
                    title="Back to Login Screen" 
                    onPress={() => { props.navigation.goBack() }}>
               </Button>
          </View>
          
     );
}
export default HomeScreen;