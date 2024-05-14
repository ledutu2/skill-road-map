/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Animated, {FadeIn, FadeOut, Layout} from 'react-native-reanimated'

const LIST_ITEM_COLOR = '#1798DE'

const AnimationScreen = () => {
  const initialMode = useRef(true)

  useEffect(() => {
    initialMode.current = false
  }, [])

  // new Array(5).fill(0).map((_, index) => ({ id: index }))
  const [items, setItems] = useState(new Array(5).fill(0).map((_, index) => ({id: index})))

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1
      return [...currentItems, {id: nextItemId}]
    })
  }, [])

  const onDelete = useCallback(itemId => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId))
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <Text style={{color: 'white', fontSize: 40}}>+</Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingTop: 20}}>
        {items.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={initialMode.current ? FadeIn.delay(100 * index) : FadeIn}
            exiting={FadeOut}
            layout={Layout.delay(100)}
            onTouchEnd={() => onDelete(item.id)}
            style={styles.listItem}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    height: 100,
    backgroundColor: LIST_ITEM_COLOR,
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
  },
  floatingButton: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    bottom: 50,
    right: '5%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})