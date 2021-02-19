import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
      minute: "",
      hour: "",
      seconds: "",
      current_date: "",
      timeZone: "",
      dayOfTheWeek: "",
      alarms: "",
      month: "",

    }
    }
    

    getTime() {
      //this.state.date.
      //var date = this.state.date
    var currentHour = this.state.date.getHours();
    var currentMinute = this.state.date.getMinutes();
    var currentSecond = this.state.date.getSeconds();
    var currentDay = this.state.date.getDay();
    var currentTimeZone = this.state.date.getTimezoneOffset();
    var currentDate = this.state.date.getDate();
    var currentMonth = this.state.date.getMonth();
    
    this.setState({
      minute: currentMinute,
      dayOfTheWeek: currentDay,
      hour: currentHour,
      seconds: currentSecond,
      date: currentDate,
      timeZone: currentTimeZone,
      month: currentMonth,
    })
  }

  componentDidMount() {
    this.getTime();
  }
  render() {
    return (
      <View style={styles.container}>
            {this.getTime}
        <Text style = {styles.text}>
          {this.state.hour + ":" + this.state.minute + ":" + this.state.seconds}
        </Text>
        <Text style={styles.text}>
          {this.state.timeZone}
        </Text>
        <Text style = {styles.text}>
          {this.state.dayOfTheWeek + "," + this.state.date +" "+ this.state.month}
            </Text>
            <Text>
            </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 40,
    textAlign:"center",
  }
});