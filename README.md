# react-native-simple-toast
a simple and beautiful react native toast for (((Android And IOS)))

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

   
 </tbody>
</table>