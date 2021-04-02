import React, { Component } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    View,
    Text, Image,
    Button, ActivityIndicator,
    FlatList, SafeAreaView,
    Modal, Alert,
    TouchableOpacity,
} from 'react-native';
import { color } from '@values/colors';
import { strings } from '@values/strings';
import _Text from '@text/_Text';
import FastImage from 'react-native-fast-image';
import IconPack from '@login/IconPack';



export default class Banner extends Component {
    constructor(props) {
        super(props);

        const data = this.props.route.params.bannerData;
        const url = this.props.route.params.baseUrl;

        this.state = {
            bannerData: data,
            baseUrl: url
        };
    }

    render() {
        const { bannerData, baseUrl } = this.state
        return (
            <SafeAreaView style={{ height: hp(100), backgroundColor: color.headerColor }}>

                <View style={{ height: hp(8), backgroundColor: color.headerColor }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={{ flex: 0.1, paddingLeft: hp(3) }}
                            hitSlop={{ top: 15, left: 15, right: 120, bottom: 15 }}>
                            <Image
                                defaultSource={require('../../assets/image/close1.png')}
                                source={require('../../assets/image/close1.png')}
                                style={{ height: hp(2.9), width: hp(2.9) }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: hp(2) }}>
                    {bannerData.brand_image != '' ?
                        <Image
                            source={{ uri: baseUrl + bannerData.brand_image }}
                            style={{ height: hp(75), width: wp(100), backgroundColor: '#d3d3d3' }}
                        />
                        :
                        <Image
                            style={{ height: hp(75), width: wp(100) }}
                            source={IconPack.APP_LOGO}
                        />
                    }

                </View>

                <View style={{ marginTop: hp(4), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '400', fontFamily: 'Lato-Regular', textAlign: 'center' }}>
                        {bannerData.description}
                    </Text>
                </View>

            </SafeAreaView>
        );
    }
}
