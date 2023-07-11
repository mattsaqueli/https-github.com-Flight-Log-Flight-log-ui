// import React, {useEffect, useState } from 'react'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import FlightForm from './FlightForm'
import FlightHistoryScreen from './FlightHistoryScreen'
import FlightDetailsScreen from './FlightDetailsScreen'
import { getUser, getUserFlights } from '../ApiCalls'


const Stack = createNativeStackNavigator()

class AppNavigator extends Component  {
  constructor() {
    super()
    this.state = {
      user: {},
      userFlights: [], 
      error: ''
    }
  }

  componentDidMount() {
    getUserFlights()
      .then(data => {
        console.log(data.data[0]);
        // Update component state or perform other operations with the data
      })
    getUser()
      .then(data => {
        console.log(data.data)
      })

    }
  // const [userData, setUserData] = useState(null)
  // const [userFlightsData, setUserFlightsData] = useState(null)

  // useEffect(() => {
  //   // Fetch user and user flights data on component mount
  //   const fetchData = async () => {
  //     try {
  //       const userData = await getUser();
  //       const userFlightsData = await getUserFlights();
  //       console.log('User', userData)
  //       console.log('User Flights', userFlightsData)
  //       setUserData(userData);
  //       setUserFlightsData(userFlightsData);
  //     } catch (error) {
  //       console.log('Error', error)
  //     }
  //   };
  //       console.log('User', userData)
  //       console.log('User Flights', userFlightsData)

  //   fetchData();
    
  // }, []);

    render() {
    
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="LogFlight" component={FlightForm} />
            <Stack.Screen name="FlightHistory" component={FlightHistoryScreen} />
            <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
}

export default AppNavigator

