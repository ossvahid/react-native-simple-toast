import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import { Animated, Image, StyleSheet, Text, View } from "react-native";


// usage ***

// import { ToastContext } from "../packages/react-native-simple-toast/toast";

// const { show, hide } = useContext(ToastContext);
//     show({
//         type: 'info',
//         progressTimer: 5000,
//         hideProgressBar: false,
//         position: 'top',
//       })




const SimpleToast = ({ options, show, onHide }) => {
  const toastPosition = options?.position ?? 'top';
  let transformYSize = toastPosition === 'top' ? -200 : 200;
  const animationType = options?.animationType ?? 'fade';
  const progressAnim = useRef(new Animated.Value(109)).current;
  const toastAnim = useRef(new Animated.Value(animationType === 'fade' ? 0 : transformYSize)).current;
  const progressTimer = options?.progressTimer ?? 3000;
  const hideProgressBar = options?.hideProgressBar ?? false;

  const type = options?.type ?? 'error';
  const direction = options?.direction ?? 'ltr';

  const customIcon = options?.customIcon ?? '';
  const customColor = options?.customColor ?? '';
  const text1 = options?.text1 ?? '';
  const text2 = options?.text2 ?? '';



  const animationSpeed = options?.animationSpeed ?? 500;





  function showAndHideToast() {



    if (animationType !== 'fade') {
      toastAnim.setValue(transformYSize)
    }


    Animated.timing(toastAnim, {
      duration: animationSpeed,
      toValue: animationType === 'fade' ? 1 : 0,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(progressAnim, {
        duration: progressTimer,
        toValue: 0,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(toastAnim, {
          duration: animationSpeed,
          toValue: animationType === 'fade' ? 0 : transformYSize,
          useNativeDriver: true,
        }).start(() => {
          onHide();
          setTimeout(() => {
            options.complete?.();
          }, 500);
        });
      });
    });
  }

  function hideToast() {
    Animated.timing(toastAnim, {
      duration: animationSpeed,
      toValue: animationType === 'fade' ? 0 : transformYSize,
      useNativeDriver: true,
    }).start(function () {

      if (animationType === 'fade') {
        toastAnim.setValue(0);
      } else {
        toastAnim.setValue(transformYSize);
      }
      progressAnim.setValue(109);
    })
  }

  useEffect(() => {
    if (show) {
      showAndHideToast();
    } else {
      hideToast()
    }
  }, [show]);

  let color, icon, position = '';
  if (type === 'error') {
    color = '#FF3133';
    icon = require('./images/error.png');
  } else if (type === 'warning') {
    color = '#C29541';
    icon = require('./images/warning.png');
  } else if (type === 'success') {
    color = '#4EE659';
    icon = require('./images/success.png');
  } else if (type === 'info') {
    color = '#0C7AE4';
    icon = require('./images/info.png');
  }

  if (customColor !== '') {
    color = customColor;
  }
  if (customIcon !== '') {
    icon = customIcon;
  }

  if (toastPosition === 'top') {
    position = { top: 0 };
  } else {
    position = { bottom: 0 };
  }

  let animobj = {};

  if (animationType === 'fade') {
    animobj = {
      opacity: toastAnim,
    };
  } else {
    animobj = {
      transform: [{ translateY: toastAnim }],
    };
  }

  return (
    <Animated.View
      style={[
        styles.toast,
        position,
        animobj,
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          direction: direction,
          width: 'auto',
        },
      ]}
    >
      <Image source={icon} style={{ width: 35, height: 35 }} />
      <View style={{ position: 'static', width: '100%', flex: 1 }}>
        <Text style={{ fontWeight: 900, fontSize: 15 }}>
          {text1}
        </Text>
        {text2 !== '' ?
          <Text style={{ fontSize: 12 }}>
            {text2}
          </Text>
          : ''}
      </View>
      <Animated.View
        style={[
          styles.progressWrapper,
          {
            backgroundColor: color,
            opacity: hideProgressBar ? 0 : 1,
            width: progressAnim.interpolate({
              inputRange: [0, 109],
              outputRange: ['0%', '109%'],
            }),
          },
        ]}
      />
    </Animated.View>
  );
};




const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [toastOptions, setToastOptions] = useState({});

  const show = (options) => {
    if (isVisible === true) return;
    setToastOptions(options);
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={[show, hide]}>
      {children}

      <SimpleToast options={toastOptions} show={isVisible} onHide={hide} />

    </ToastContext.Provider>
  );
};


const styles = StyleSheet.create({
  toast: {
    backgroundColor: 'white',
    padding: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    position: 'absolute',
    end: 0,
    start: 0,
    margin: 15,
    marginTop: 40,
    zIndex: 9999999999999,
    overflow: 'hidden'
  },
  progressWrapper: {

    position: 'absolute',
    padding: 3,
    bottom: 0,
    end: 0,
    start: 0
  }
});


export default SimpleToast;
export function useToast() {
  return useContext(ToastContext);
}
