

import React, { Component } from 'react';
import{ AppRegistry, ScrollView, Image, Text, View, StyleSheet, NavigatorIOS } from 'react-native'

var First = require("./First");

var Wayfarer = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "Wayfarer",
                component: First,
            }} />
        );
    }
});

var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});

module.exports = Wayfarer;
AppRegistry.registerComponent("Wayfarer", () => Wayfarer);
