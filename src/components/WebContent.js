import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview';

export default function WebContent() {
  return (
    <View>
    <ScrollView>
      <WebView
        source={{uri: 'https://aboutreact.com'}}
        style={{flex: 1, marginTop: 20}}
      />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})