import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from "react-native";


// usage ***

// import { ToastContext } from "../packages/react-native-simple-toast/toast";

// const { show, hide } = useContext(ToastContext);
//     show({
//         type: 'info',
//         progressTimer: 5000,
//         hideProgressBar: false,
//         position: 'top',
//       })




const SimpleToast = ({ options, show, onHide, defaultOpts }) => {
  const [isActive,setActive] = useState(false);

  const toastPosition = options?.position ?? defaultOpts?.position ?? 'top';  // added
  let transformYSize = toastPosition === 'top' ? -200 : 200;
  const animationType = options?.animationType ?? defaultOpts?.animationType ?? 'slide'; // added
  const progressAnim = useRef(new Animated.Value(109)).current;
  const toastAnim = useRef(new Animated.Value(animationType === 'fade' ? 0 : transformYSize)).current;
  const progressTimer = options?.progressTimer ?? defaultOpts?.progressTimer ?? 3000; // added
  const hideProgressBar = options?.hideProgressBar ?? defaultOpts?.hideProgressBar ?? false;  // added

  const hideImage = options?.hideImage ?? defaultOpts?.hideImage ?? false;

  const imageSize = options?.imageSize ?? defaultOpts?.imageSize ?? 40;



  const type = options?.type ?? defaultOpts?.type ?? 'info'; // added
  const direction = options?.direction ?? defaultOpts?.direction ?? 'ltr'; // added

  const customImage = options?.customImage ?? defaultOpts?.customImage ?? '';
  const progressBarColor = options?.progressBarColor ?? defaultOpts?.progressBarColor ?? '';  // added
  const text1 = options?.text1 ?? defaultOpts?.text1 ?? ''; // added
  const text2 = options?.text2 ?? defaultOpts?.text2 ?? ''; // added

  const acceptButtonText = options?.acceptButtonText ?? defaultOpts?.acceptButtonText ?? '';
  const rejectButtonText = options?.rejectButtonText ?? defaultOpts?.rejectButtonText ?? '';



  const animationSpeed = options?.animationSpeed ?? defaultOpts?.animationSpeed ?? 500; // added




  function showAndHideToast() {
   


    if (animationType !== 'fade') {
      toastAnim.setValue(transformYSize)
    } else {
      toastAnim.setValue(0)
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
            setActive(false)
          }, 500);
        });
      });
    });
  }

  function hideToast() {

    return new Promise((resolve) => {
      Animated.timing(progressAnim, {
        duration: animationSpeed,
        toValue: 0,
        useNativeDriver: false,
      }).start(() => {
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

          resolve()
        })
      })

    })
  }

  const acceptStart = async () => {
    await hideToast();

    options.onAccept?.()
  }
  const rejectStart = async () => {
    await hideToast();
    options.onReject?.()
  }

  useEffect(() => {
    if (show) {
      setActive(true)
      showAndHideToast();
    } else {
   
      hideToast()
    }
  }, [show]);

  let color, image, position = '';
  if (type === 'error') {
    color = '#FF3133';
    image = require('./images/error.png');
  } else if (type === 'warning') {
    color = '#C29541';
    image = require('./images/warning.png');
  } else if (type === 'success') {
    color = '#4EE659';
    image = require('./images/success.png');
  } else if (type === 'info') {
    color = '#0C7AE4';
    image = require('./images/info.png');
  }

  if (progressBarColor !== '') {
    color = progressBarColor;
  }
  if (customImage !== '') {
    image = customImage;
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
  if(isActive === false) return;
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
      {hideImage === false ?
        <Image source={image} style={{ width: imageSize, height: imageSize }} />
        : null}
      <View style={{ position: 'static', width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', rowGap: 7 }}>
        <View>
          <Text style={{ fontWeight: 900, fontSize: 15 }}>
            {text1}
          </Text>
          {text2 !== '' ?
            <Text style={{ fontSize: 12 }}>
              {text2}
            </Text>
            : ''}
        </View>
        {acceptButtonText != '' || rejectButtonText != '' ?
          <View style={{
            flexDirection: 'row',
            gap: 6
          }}>

            {acceptButtonText != '' ?
              <Pressable onPress={acceptStart} style={styles.button}>
                <Text>
                  {acceptButtonText}
                </Text>
              </Pressable>
              : null}
            {rejectButtonText != '' ?
              <Pressable onPress={rejectStart} style={styles.button}>
                <Text>
                  {rejectButtonText}
                </Text>
              </Pressable>
              : null}
          </View>
          : null}
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

const ToastProvider = ({ children, defaultOpts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [toastOptions, setToastOptions] = useState({});

  const toastshow = (options) => {
    if (isVisible === true) return;
    setToastOptions(options);
    setIsVisible(true);
  };

  const toasthide = () => {
    setIsVisible(false);
  };


  return (
    <ToastContext.Provider value={[toastshow, toasthide]}>
      {children}
      <SimpleToast options={toastOptions} defaultOpts={defaultOpts} show={isVisible} onHide={toasthide} />
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
  },
  button: {
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.05)',
    fontSize: 9
  }
});


export default ToastProvider;
export function useToast() {
  return useContext(ToastContext);
}

