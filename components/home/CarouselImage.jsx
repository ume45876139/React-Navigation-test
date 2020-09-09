import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableHighlight, Image, Linking } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class CarouselImage extends React.Component {
  state = {
    data: [
      { title: 'a', url: 'https://booth.pximg.net/94e32697-2d0f-4321-b201-0057eea16de7/i/2171385/82c1fc8c-1f06-4a3f-8e09-1d798d2ff6a5_base_resized.jpg' },
      { title: 'b', url: 'https://img.lovepik.com/photo/50056/0196.jpg_wh860.jpg' },
      { title: 'c', url: 'https://img.lovepik.com/photo/40021/7886.jpg_wh860.jpg' },
      { title: 'd', url: 'https://img.lovepik.com/photo/50085/1561.jpg_wh860.jpg' },
      { title: 'e', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWHYawxw7FQxeQXSK-ydclmV0CxMfh_HTmlQ&usqp=CAU' },
    ],
    activeSlide: 0,
  }


    //カルーセルの中身
  _renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
          onPress={() => Linking.openURL(item.url)}
      >
          <Image source={{ url: item.url }} style={{ width: '100%', height: '100%' }} />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ height: 240 }}>
        <Carousel
          data={this.state.data}
          renderItem={this._renderItem}
          itemWidth={Dimensions.get("window").width * 0.6}
          sliderWidth={Dimensions.get("window").width * 1.0}
          // containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
          onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
          loop
          autoplay
        />
        <Pagination
          dotsLength={this.state.data.length} //dotの数
          activeDotIndex={this.state.activeSlide} //どのdotをactiveにするか
          containerStyle={{paddingVertical:15}} //デフォルトではちと広い
        />
      </SafeAreaView>
    );
  }
}
