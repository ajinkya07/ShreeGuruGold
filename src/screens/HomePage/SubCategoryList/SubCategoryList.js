import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import _Text from '@text/_Text';
import { strings } from '@values/strings';
import { color } from '@values/colors';
import { capitalizeFirstLetter } from '@values/validate';
import _Header from '@header/_Header';
import * as Animatable from 'react-native-animatable';
import IconPack from '@login/IconPack';
import _CustomHeader from '@customHeader/_CustomHeader';
import { urls } from '@api/urls';

export default class SubCategoryList extends Component {
  constructor(props) {
    super(props);
    const data = this.props.route.params.subcategory;

    this.state = {
      subcategoryData: data,
    };
  }

  subcategoryView = (item, index) => {
    let baseUrl = urls.imageUrl + 'public/backend/collection/';

    return (
      <TouchableOpacity onPress={() => this.getProductGridOrNot(item)}>
        <Animatable.View
          animation="flipInX"
          style={{ paddingTop: hp(0.5), paddingBottom: hp(0.5) }}>
          <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: hp(2), }}>
            <View style={{
              justifyContent: 'flex-start',
              shadowColor: "#000",
              backgroundColor: '#ffffff',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              borderRadius: 10
            }}>
              {item.image_name != '' && <Image
                style={{ height: hp(10), width: hp(10), borderRadius: 10 }}
                source={{ uri: baseUrl + item.image_name }}
                defaultSource={IconPack.APP_LOGO}
              />
              }
              {item.image_name == '' &&
                <Image
                  style={{ height: hp(10), width: hp(10), borderRadius: 10 }}
                  source={IconPack.APP_LOGO}
                  resizeMode='contain'
                />}
            </View>

            <View style={{ alignContent: 'center', justifyContent: 'center', flex: 0.70 }}>
              <_Text numberOfLines={2} fwSmall
                fsMedium style={{ marginRight: hp(3), marginLeft: hp(2) }}>
                {capitalizeFirstLetter(item.col_name)}
              </_Text>
            </View>
          </View>

        </Animatable.View>
      </TouchableOpacity>
    );
  };

  getProductGridOrNot = data => {
    if (data.subcategory.length === 0) {
      this.props.navigation.navigate('ProductGrid', { gridData: data });
    } else if (data.subcategory.length > 0) {
      this.props.navigation.push('SubCategoryList', { subcategory: data });
    }
  };


  seperator = () => {
    return (
      <View
        style={{
          paddingTop: hp(1), marginLeft: wp(23), marginRight: wp(2),
          alignSelf: 'stretch',
          borderBottomColor: '#D3D3D3',
          borderBottomWidth: 1,
        }}
      />
    )
  }



  render() {
    const { subcategoryData } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <_CustomHeader
          Title={'Sub Category'}
          RightBtnIcon2={require('../../../assets/shopping-cart.png')}
          RightBtnIcon1={require('../../../assets/image/BlueIcons/Notification-White.png')}
          LeftBtnPress={() => this.props.navigation.goBack()}
          RightBtnPressTwo={() =>
            this.props.navigation.navigate('CartContainer', {
              fromProductGrid: true,
            })
          }
          RightBtnPressOne={() =>
            this.props.navigation.navigate('Notification')
          }
          rightIconHeight2={hp(3.5)}
          backgroundColor={color.green}
        />

        <View style={{ justifyContent: 'center', width: wp(100), flex: 1 }}>
          <FlatList
            data={subcategoryData.subcategory && subcategoryData.subcategory}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => this.subcategoryView(item, index)}
            ItemSeparatorComponent={() => this.seperator()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
