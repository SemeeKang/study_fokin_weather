import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#36d1dc", "#5b86e5"],
        title: "Rain",
        subtitle: "A lot of rainig"
    },
    Sunny: {
        iconName: "white-balance-sunny",
        gradient: ["#fc4a1a", "#f7b733"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Grazzy day"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "It's like you have no glasses on"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outsite"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#FdE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you wnat to build a snowman?"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7Fe", "66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373b44", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    }
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={96} 
                    color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfcontainer, ...styles.textContainer}}> 
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },

    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    title: {
        fontWeight: "300",
        fontSize: 44,
        color: "white",
        marginBottom: 10
    },

    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white"
    },

    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})