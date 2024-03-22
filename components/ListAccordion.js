// import {
//     Animated,
//     LayoutAnimation,
//     Platform,
//     StyleProp,
//     StyleSheet,
//     UIManager,
//     View,
//     ViewStyle,
//   } from 'react-native';
//   import Ionicons from 'react-native-vector-icons/Ionicons;
  
//   if (
//     Platform.OS === 'android' &&
//     UIManager.setLayoutAnimationEnabledExperimental
//   ) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
  
//   const toggleAnimation = duration => {
//     return {
//       duration: duration,
//       update: {
//         property: LayoutAnimation.Properties.scaleXY,
//         type: LayoutAnimation.Types.easeInEaseOut,
//       },
//       delete: {
//         property: LayoutAnimation.Properties.opacity,
//         type: LayoutAnimation.Types.easeInEaseOut,
//       },
//     };
//   };
  
//   const Accordion = ({title, children, style}: IAccordion) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const animationController = useRef(new Animated.Value(0)).current;
  
//     const arrowTransform = animationController.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '90deg'],
//     });
    
  
//     const onToggle = () => {
//       setIsOpen(prevState => !prevState);
  
//       const duration = 300;
//       const config = {
//         duration: duration,
//         toValue: isOpen ? 0 : 1,
//         useNativeDriver: true,
//       };
//       Animated.timing(animationController, config).start();
//       LayoutAnimation.configureNext(toggleAnimation(duration));
//     };
  
//     return (
//       <View style={style ? style : styles.accordion}>
//         <TouchableOpacity onPress={onToggle} style={styles.heading}>
//           {title}
//           <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
//             <Ionicons name={'chevron-forward-outline'} size={18} />
//           </Animated.View>
//         </TouchableOpacity>
//         <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
//           {children}
//         </View>
//       </View>
//     );
//   };
  
//   export default Accordion;