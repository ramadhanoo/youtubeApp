
import React, { useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import MainHeader from '../components/MainHeader';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';


const { width, height } = Dimensions.get("window");

const IS_IPHONEX = height === 812 || height === 896;
const STATUS_BAR = Platform.OS === 'ios' ? (IS_IPHONEX ? 140 : 120) : 120;

export default Home = () => {

    const y = useRef(new Animated.Value(0)).current;
    const clamp = useRef(new Animated.diffClamp(y, 0, STATUS_BAR)).current;

    const Header = Animated.interpolate(clamp, {
        inputRange: [0, STATUS_BAR],
        outputRange: [0, -STATUS_BAR + -5 ],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.container}>
            <MainHeader style={{ height: STATUS_BAR, transform: [{ translateY: Header }] }} />
            <View style={{ width: width, backgroundColor: '#fff', paddingBottom: 20 }}>
                <Animated.ScrollView style={{  }} bounces={false} scrollEventThrottle={16} onScroll={ Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: y }
                    }
                }]) }>
                    <TouchableOpacity style={{ width: width, height: 350, backgroundColor: 'transparent', alignItems: 'center', marginTop: STATUS_BAR + 10, }}>
                        <View style={{ width: width, backgroundColor: 'transparent', height: '65%' }}>
                            <ImageBackground source={require('../images/slip.jpg')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginBottom: 10, marginRight: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>10:15</Text>
                                </View>
                            </ImageBackground>

                        </View>
                        <View style={{ width: '90%', height: '35%', backgroundColor: 'transparent', flexDirection: 'row' }}>
                            <View style={{ width: '15%', height: '100%', backgroundColor: 'transparent' }}>
                                <View style={{ backgroundColor: 'transparent', width: 50, height: 50, borderRadius: 30, marginTop: 10 }}>
                                    <Image source={require('../images/a.jpg')} style={{ flex: 1, width: '100%', height: '100%', borderRadius: 30 }} />
                                </View>
                            </View>
                            <View style={{ width: '85%', height: '100%', backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, marginTop: 10 }}>Hammersonic 2021</Text>
                                <Text style={{ fontSize: 15, marginTop: 5, color: '#696969' }}>Slipknot performance in Hammersonic 2021</Text>
                                <View style={{ height: 25, width: '100%', backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    <View style={{ backgroundColor: '#ffcc08', height: '100%', width: 30, marginTop: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 3 }}>
                                        <Text style={{ fontSize: 16, color: '#fff' }}>Ad</Text>
                                    </View>
                                    <Text style={{ color: '#696969', marginLeft: 5 }}>Hefais Tech</Text>
                                </View>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#0f4c75', marginTop: 5 }}>Ayo Subscribe Kami</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: width, height: 300, backgroundColor: 'transparent', alignItems: 'center' }}>
                        <View style={{ width: width, backgroundColor: 'transparent', height: '70%' }}>
                            <ImageBackground source={require('../images/2.png')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginBottom: 10, marginRight: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>10:15</Text>
                                </View>
                            </ImageBackground>

                        </View>
                        <View style={{ width: '90%', height: '35%', backgroundColor: 'transparent', flexDirection: 'row' }}>
                            <View style={{ width: '15%', height: '100%', backgroundColor: 'transparent' }}>
                                <View style={{ backgroundColor: 'transparent', width: 50, height: 50, borderRadius: 30, marginTop: 10 }}>
                                    <Image source={require('../images/19.jpg')} style={{ flex: 1, width: '100%', height: '100%', borderRadius: 30 }} />
                                </View>
                            </View>
                            <View style={{ width: '85%', height: '100%', backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, marginTop: 10 }}>Testing Channel</Text>
                                <Text style={{ fontSize: 15, marginTop: 5, color: '#696969' }}>Hefais Tech . 1.9 M views . 2 weeks ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: width, height: 300, backgroundColor: 'transparent', alignItems: 'center' }}>
                        <View style={{ width: width, backgroundColor: 'transparent', height: '70%' }}>
                            <ImageBackground source={require('../images/3.png')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginBottom: 10, marginRight: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>10:15</Text>
                                </View>
                            </ImageBackground>

                        </View>
                        <View style={{ width: '90%', height: '35%', backgroundColor: 'transparent', flexDirection: 'row' }}>
                            <View style={{ width: '15%', height: '100%', backgroundColor: 'transparent' }}>
                                <View style={{ backgroundColor: 'transparent', width: 50, height: 50, borderRadius: 30, marginTop: 10 }}>
                                    <Image source={require('../images/19.jpg')} style={{ flex: 1, width: '100%', height: '100%', borderRadius: 30 }} />
                                </View>
                            </View>
                            <View style={{ width: '85%', height: '100%', backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, marginTop: 10 }}>Testing Channel</Text>
                                <Text style={{ fontSize: 15, marginTop: 5, color: '#696969' }}>Hefais Tech . 1.9 M views . 2 weeks ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ backgroundColor: '#dcdcdc', width: width, height: 1 }}></View>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 17 }}>Stories and short video</Text>
                    <View style={{ backgroundColor: 'transparent', width: width, height: 250, marginTop: 15, marginBottom: 10 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{ backgroundColor: 'transparent', width: 170, height: 240, marginLeft: 15 }}>
                                <ImageBackground source={require('../images/s7.jpg')} style={{ flex: 1, width: '100%', height: '100%' }} imageStyle={{ borderRadius: 10 }}>
                                    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
                                            <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginLeft: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>10:15</Text>
                                            </View>
                                            <Icon name={"more-vertical"} size={20} style={{ color: '#fff' }}/>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', width: '90%', height: '30%' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Ada Kucing Gays</Text>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, marginTop: 10 }}>Ayo liat Stori ini</Text>
                                            
                                        </View>
                                    </View>

                                </ImageBackground>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: 'transparent', width: 170, height: 240, marginLeft: 15 }}>
                                <ImageBackground source={require('../images/s2.jpg')} style={{ flex: 1, width: '100%', height: '100%' }} imageStyle={{ borderRadius: 10 }}>
                                    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
                                            <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginLeft: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>10:15</Text>
                                            </View>
                                            <Icon name={"more-vertical"} size={20} style={{ color: '#fff' }}/>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', width: '90%', height: '30%' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Ada Kucing Gays</Text>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, marginTop: 10 }}>Ayo liat Stori ini</Text>
                                            
                                        </View>
                                    </View>

                                </ImageBackground>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: 'transparent', width: 170, height: 240, marginLeft: 15 }}>
                                <ImageBackground source={require('../images/s4.jpg')} style={{ flex: 1, width: '100%', height: '100%' }} imageStyle={{ borderRadius: 10 }}>
                                    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
                                            <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginLeft: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>10:15</Text>
                                            </View>
                                            <Icon name={"more-vertical"} size={20} style={{ color: '#fff' }}/>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', width: '90%', height: '30%' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Ada Kucing Gays</Text>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, marginTop: 10 }}>Ayo liat Stori ini</Text>
                                            
                                        </View>
                                    </View>

                                </ImageBackground>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: 'transparent', width: 170, height: 240, marginLeft: 15 }}>
                                <ImageBackground source={require('../images/s2.jpg')} style={{ flex: 1, width: '100%', height: '100%' }} imageStyle={{ borderRadius: 10 }}>
                                    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ width: '100%', height: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
                                            <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginLeft: 5, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: '#fff' }}>10:15</Text>
                                            </View>
                                            <Icon name={"more-vertical"} size={20} style={{ color: '#fff' }}/>
                                        </View>
                                        <View style={{ backgroundColor: 'transparent', width: '90%', height: '30%' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Ada Kucing Gays</Text>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, marginTop: 10 }}>Ayo liat Stori ini</Text>
                                            
                                        </View>
                                    </View>

                                </ImageBackground>

                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={{ width: width, height: 300, backgroundColor: 'transparent', alignItems: 'center' }}>
                        <View style={{ width: width, backgroundColor: 'transparent', height: '70%' }}>
                            <ImageBackground source={require('../images/4.png')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                <View style={{ backgroundColor: '#252525', height: 20, width: 45, marginBottom: 10, marginRight: 10, borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#fff' }}>10:15</Text>
                                </View>
                            </ImageBackground>

                        </View>
                        <View style={{ width: '90%', height: '35%', backgroundColor: 'transparent', flexDirection: 'row' }}>
                            <View style={{ width: '15%', height: '100%', backgroundColor: 'transparent' }}>
                                <View style={{ backgroundColor: 'transparent', width: 50, height: 50, borderRadius: 30, marginTop: 10 }}>
                                    <Image source={require('../images/19.jpg')} style={{ flex: 1, width: '100%', height: '100%', borderRadius: 30 }} />
                                </View>
                            </View>
                            <View style={{ width: '85%', height: '100%', backgroundColor: 'transparent', marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, marginTop: 10 }}>Testing Channel</Text>
                                <Text style={{ fontSize: 15, marginTop: 5, color: '#696969' }}>Hefais Tech . 1.9 M views . 2 weeks ago</Text>

                            </View>
                        </View>
                    </TouchableOpacity>

                </Animated.ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});



