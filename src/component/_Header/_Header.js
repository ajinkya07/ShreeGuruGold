import React, { Component } from 'react';
import { color } from '@values/colors';
import { View, Image, Platform, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Header, Left, Body, Right, Button, Title } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { Theme } from '@values/Theme';
import { strings } from '@values/strings'
import IconPack from '../../screens/OnBoarding/Login/IconPack';

class _Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      showBack,
      showLogo,
      onSearchPress,
      onNotificationPress,
      onCallingPress,
      title,
      showSearch,
      showCalling,
      showNotification,
      headerColor,
    } = this.props;

    return (
      <Header
        style={{
          width: wp(100),
          height: hp(7.5),
          paddingVertical: Platform.OS === 'ios' ? hp(2) : 2,
          backgroundColor: color.white
          // backgroundColor: headerColor ? '#' + headerColor : '#fff',
        }}>
        <Left style={{}}>
          <Button transparent>
            {showBack ? (
              <Image
                style={{ height: hp(2.5), width: hp(2.5) }}
                source={require('../../assets/image/Account/back_button.png')}
              />
            ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 2,
                    width: 160,
                  }}>
                  <Image
                    source={require('../../assets/Home-Icon.png')}
                    style={{ height: 35, width: 35 }}
                    resizeMode={'contain'}
                  />

                  <Text
                    style={{
                      fontFamily: 'Lato-Bold',
                      textAlign: 'center',
                      letterSpacing: 2,
                      left: 5,
                      fontSize: 16,
                      color: headerColor ? '#' + headerColor : '#000',
                    }}>
                    {strings.appName}
                  </Text>
                </View>
              )}
          </Button>
        </Left>

        {/* right side operation */}

        <Right>
          {showSearch ? (
            <Button transparent onPress={onSearchPress}>
              <Image
                style={{ height: hp(3), width: hp(3) }}
                source={IconPack.SEARCH}
                resizeMode='contain'
              />
            </Button>
          ) : null}

          {showCalling ? (
            <Button transparent onPress={onCallingPress}>
              <Image
                style={{ height: hp(3.2), width: hp(3) }}
                // source={require('../../assets/image/BlueIcons/Mobile.png')}
                source={IconPack.MOBILE}
                resizeMode='contain'
              />
            </Button>
          ) : null}

          {showNotification ? (
            <Button transparent onPress={onNotificationPress}>
              <Image
                resizeMode={'cover'}
                style={{ height: hp(3.3), width: hp(3), }}
                source={IconPack.BELL}
                resizeMode='contain'
              // source={require('../../assets/image/BlueIcons/Notification-White.png')}
              />
            </Button>
          ) : null}
        </Right>
      </Header>
    );
  }
}

export default _Header;
