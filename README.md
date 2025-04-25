# react-native-simple-toast
a simple and beautiful react native toast for (Android And IOS)

<h2>
 Preview
</h2>

<img src="./images/success.png">

<h2>
 Usage
</h2>
<h3>
 Clone with Git
</h3>

```
git clone https://github.com/ossvahid/react-native-simple-toast.git
```
<h3>
 OR
</h3>

download package link via this link 
<a href="https://github.com/ossvahid/react-native-simple-toast/archive/refs/heads/main.zip" target="_blank">
download
</a>

<h2>
Step 1: Initialize ToastProvider
</h2>
Wrap your app content in App.js with ToastProvider

```javascript
import ToastProvider from './packages/react-native-simple-toast/toast';
export default function App() {
   <ToastProvider>
    // your other components
   </ToastProvider>
}
```
<h2>
Step 2: Use useToast Function
</h2>
import useToast to your screen then call it like this :

```javascript
import { useToast } from "../packages/react-native-simple-toast/toast";
export default function AboutUs() {
    const [toastshow, toasthide] = useToast();
    useEffect(() => {
        toastshow({
            type: 'success',
            text1: 'this success toast',
            text2: 'some text'
        })
    }, [])
}
```
toast will work nice for you if followed top steps

<h3>
Available Options
</h3>
<table>
 <thead>
 <tr>
      <td>
      name
     </td>
         <td>
      type
     </td>
       <td>
      default value
     </td>
     <td>
      description
     </td>
 </tr>
 </thead>
 <tbody>
 <!-- item -->
  <tr>
  <td>
     type
     </td>
       <td>
     string
     </td>
      <td>
     info
     </td>
      <td>
     a toast has four types : info | success | error | warning
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     direction
     </td>
       <td>
     string
     </td>
      <td>
     ltr
     </td>
      <td>
      toast direction : rtl | ltr
     </td>
   </tr>
     <!-- item -->
  <tr>
  <td>
     position
     </td>
       <td>
     string
     </td>
      <td>
     top
     </td>
      <td>
      toast position : top | bottom
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     animationType
     </td>
       <td>
     string
     </td>
      <td>
     slide
     </td>
      <td>
      toast animation type : slide | fade
     </td>
   </tr>
 <!-- item -->
  <tr>
  <td>
     animationSpeed
     </td>
       <td>
     number
     </td>
      <td>
     500
     </td>
      <td>
      toast animation speed to show and hide
     </td>
   </tr>
     <!-- item -->
  <tr>
  <td>
     hideProgressBar
     </td>
       <td>
     bool
     </td>
      <td>
     false
     </td>
      <td>
      if set true toast progress bar will not shown
     </td>
   </tr>
     <!-- item -->
  <tr>
  <td>
     progressBarColor
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td>
      this is progress bar color , like : red or #000000 or ...
     </td>
   </tr>
   <!-- item -->
  <tr>
  <td>
     progressTimer
     </td>
       <td>
     number
     </td>
      <td>
     3000
     </td>
      <td>
      after end time the toast will hide
     </td>
   </tr>
 <!-- item -->
  <tr>
  <td>
     text1
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td>
      toast first text
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     text2
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td>
      toast second text
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     acceptButtonText
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td>
      toast accept button text . if set a value then showen a accept button in the toast
     </td>
   </tr>
  <!-- item -->
  <tr>
  <td>
     rejectButtonText
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td>
      toast reject button text . if set a value then showen a reject button in the toast
     </td>
   </tr>
  <!-- item -->
  <tr>
  <td>
     customImage
     </td>
       <td>
     string
     </td>
      <td>
     empty
     </td>
      <td> 
      add a custom image in toast instead of default image : <a href="#customImage">details</a>
     </td>
   </tr>
     <!-- item -->
  <tr>
  <td>
     imageSize
     </td>
       <td>
     number
     </td>
      <td>
     40
     </td>
      <td>
       image size
     </td>
   </tr>
     <!-- item -->
  <tr>
  <td>
     hideImage
     </td>
       <td>
     bool
     </td>
      <td>
     false
     </td>
      <td>
      if set true . toast image will be hidden
     </td>
   </tr>
   <!-- item -->
  <tr>
  <td>
     complete
     </td>
       <td>
     callback
     </td>
      <td>
     ...
     </td>
      <td>
      when toast progress is completed and toast was hidden this callback will fired : note (if use this callback don't use rejectButtonText and acceptButtonText)
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     onAccept
     </td>
       <td>
     callback
     </td>
      <td>
     ...
     </td>
      <td> 
      when client clicked accept button this callback will fired note (if use this callback don't use complete callback)
     </td>
   </tr>
    <!-- item -->
  <tr>
  <td>
     onReject
     </td>
       <td>
     callback
     </td>
      <td>
     ...
     </td>
      <td>
      when client clicked reject button this callback will fired (if use this callback don't use complete callback)
     </td>
   </tr>
 </tbody>
</table>


<h4 id="#customImage">
customImage
</h4>

```js
   toastshow({
       type: 'success',
       text1: '...',
       text2: '...',
       customImage: {
           uri: 'https://vectorflags.s3.amazonaws.com/flags/ru-sphere-01.png'
       },
   })
// OR 
    toastshow({
       type: 'success',
       text1: '...',
       text2: '...',
      customImage: require("../assets/imgs/fail-payment.png")
   })
````

<h4>
Toast in Toast
</h4>

````js
  toastshow({
         type: 'warning',
         text1: 'the product added to your cart',
         text2: 'note see your cart for list',
         progressBarColor: '#0d43ab',
         acceptButtonText: 'Accept',
         rejectButtonText: 'Reject',
         animationSpeed: 500,
         animationSpeed: 500,
         customImage: {
             uri: 'https://vectorflags.s3.amazonaws.com/flags/ru-sphere-01.png'
         },
          onAccept: () => {
                    toastshow({
                        type: 'success',
                        text1: 'the product added to your cart',
                        text2: 'note see your cart for list',
                        animationSpeed: 1500,
                    })
                },
                onReject: () => {
                    toastshow({
                        type: 'warning',
                        text1: 'the product added to your cart',
                        text2: 'note see your cart for list',
                        animationSpeed: 1500,
                    })
                },
        })
````

<h4>
Use toasthide func to hide the current toast
</h4>

````js
    useEffect(() => {
        toastshow({
            type: 'success',
            text1: 'the product added to your cart',
            text2: 'note see your cart for list',
            animationSpeed: 100,
            progressTimer: 99999
        })

setTimeout(() => {
     toasthide();
}, 1500);
    }, [])
````

<h4>
Default Global Options
</h4>

if you want set some default options in the all toasts then you need : 


````javascript
import ToastProvider from './packages/react-native-simple-toast/toast';
export default function App() {
   <ToastProvider defaultOpts={{
      hideProgressBar: true,
      animationType: 'fade',
      hideImage: false,
      position: 'bottom',
      type: 'error'
    }}>
    // your other components
   </ToastProvider>
}
````

<h5>
don't forget star and pull request if you like this.
<br>
good luck
</h5>