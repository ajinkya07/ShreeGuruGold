import React, { Component } from 'react';
import { Header, Left, Button, Body, Right, Title, Subtitle } from 'native-base';

import { View, Image, TouchableOpacity, Platform } from 'react-native';
import _Text from '@text/_Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '@values/colors';

export default class _CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let headerTheme = global.headerTheme

    return (
      <View>
        <Header
          hasTabs
          style={{
            width: wp(100),
            height: hp(7.4),
            paddingVertical: Platform.OS === 'ios' ? hp(2) : 2,
            backgroundColor: color.white
            // backgroundColor: headerTheme ? '#' + headerTheme : this.props.backgroundColor
          }}>

          <Left style={{ flex: 0.25 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.LeftBtnPress();
              }}
              hitSlop={{ top: 15, left: 15, right: 120, bottom: 15 }}>
              <Image
                source={
                  this.props.LeftBtnIcon
                    ? this.props.LeftBtnIcon
                    : require('../../assets/image/back.png')
                }
                style={{
                  top: 2,
                  height: this.props.height ? this.props.height : hp(2.6),
                  width: this.props.width ? this.props.width : hp(2.5),
                }}
              />
            </TouchableOpacity>
          </Left>

          {this.props.Title && (
            <Body style={{ flex: 2 }}>
              <Title
                style={{
                  color: headerTheme ? '#' + headerTheme : color.black,
                  fontSize: hp(2.2),
                  fontFamily: 'Lato-Bold',
                  letterSpacing: 2,
                }}>
                {this.props.Title ? this.props.Title : ''}
              </Title>
              {this.props.Subtitle && (
                <Subtitle style={{ color: color.black, fontSize: hp(1.5) }}>
                  {this.props.Subtitle ? this.props.Subtitle : ''}
                </Subtitle>
              )}
            </Body>
          )}

          <Right style={{ flex: 0.95 }}>
            {this.props.RightBtnIcon1 && (
              <Button
                style={{ marginTop: 8 }}
                transparent
                onPress={() => this.props.RightBtnPressOne()}>
                <Image
                  source={this.props.RightBtnIcon1}
                  style={{
                    height: this.props.rightIconHeight1
                      ? this.props.rightIconHeight1
                      : hp(3),
                    width: this.props.rightIconWidth1
                      ? this.props.rightIconWidth1
                      : hp(3),
                  }}
                  resizeMode='contain'
                />
              </Button>
            )}
            {this.props.RightBtnIcon2 && (
              <Button
                style={{ marginTop: 8 }}
                transparent
                onPress={() => this.props.RightBtnPressTwo()}>
                <Image
                  source={this.props.RightBtnIcon2}
                  style={{
                    height: this.props.rightIconHeight2
                      ? this.props.rightIconHeight2
                      : hp(3),
                    width: this.props.rightIconHeight2
                      ? this.props.rightIconHeight2
                      : hp(3),
                  }}
                  resizeMode='contain'
                />
              </Button>
            )}
            {this.props.RightBtnText && (
              <TouchableOpacity>
                <_Text fsHeading bold textColor={color.tertiaryGray}>
                  {this.props.RightBtnText}
                </_Text>
              </TouchableOpacity>
            )}
          </Right>

        </Header>

        <View
          style={{
            borderBottomWidth: hp(0.2),
            borderBottomColor: '#DDDDDD',
          }}
        />
      </View>
    );
  }
}
