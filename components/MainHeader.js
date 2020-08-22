import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Animated from 'react-native-reanimated'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get("window");

const IS_IPHONEX = height === 812 || height === 896;
const STATUS_BAR = Platform.OS === 'ios' ? (IS_IPHONEX ? 140 : 120) : 120;


const MainHeader = (props) => {
    return (
        <Animated.View style={[{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#fff', zIndex: 1000, elevation: 1000 }, props.style]}>
            <View style={{ backgroundColor: 'transparent', width: width, height: '70%', borderBottomWidth: 1, borderColor: '#dcdcdc', flexDirection: 'row' }}>
                <View style={{ width: '50%', backgroundColor: 'transparent', height: '100%', justifyContent: 'center', marginLeft: 10 }}>
                    <View style={{ backgroundColor: 'transparent', width: '100%', height: 30, marginTop: 30 }}>
                        <Image source={require('../images/youtube-logo.jpeg')} style={{ flex: 1, width: '50%' }} />
                    </View>
                </View>
                <View style={{ backgroundColor: 'transparent', width: '45%', height: '60%', flexDirection: 'row', alignItems: 'center', marginTop: 25, justifyContent: 'space-between' }}>
                    <Icon2 name={"monitor-multiple"} size={30} color={'#5f6769'} style={{ marginTop: 20 }} />
                    <Icon1 name={"videocam"} size={30} color={'#5f6769'} style={{ marginTop: 20 }} />
                    <Icon1 name={"search"} size={30} color={'#5f6769'} style={{ marginTop: 20 }} />
                    <View style={{ backgroundColor: 'tranparent', width: 35, height: 35, borderRadius: 20, marginTop: 20 }}>
                        <Image source={require('../images/a.jpg')} style={{ flex: 1, width: '100%', height: '100%', borderRadius: 30 }}/>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: 'transparent', width: width, height: '30%', alignItems: 'center', flexDirection: 'row', top: 5 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={{ backgroundColor: '#5f6769', width: 60, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5 }}>
                        <Text style={{ fontWeight: '500', color: '#fff', fontSize: 17 }}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eeeeee', width: 80, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5, borderColor: '#dcdcdc', borderWidth: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Anime</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eeeeee', width: 120, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5, borderColor: '#dcdcdc', borderWidth: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Tonight Show</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eeeeee', width: 120, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5, borderColor: '#dcdcdc', borderWidth: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 17 }}>King Kobras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eeeeee', width: 90, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5, borderColor: '#dcdcdc', borderWidth: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Film</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#eeeeee', width: 90, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 5, borderColor: '#dcdcdc', borderWidth: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Music</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Animated.View>
    )
}

export default MainHeader;