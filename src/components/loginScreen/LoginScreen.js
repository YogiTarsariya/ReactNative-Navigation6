import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';

const LoginScreen = props => {
     return ( 
          <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
               <Text>{'Login'}</Text>
               <Button 
                    title="Go to Home Screen" 
                    onPress={() => { props.navigation.navigate('HomeScreen') }}>
               </Button>
          </View>
          
     );
}
export default LoginScreen;