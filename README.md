# react-native-simple-toast
a simple and beautiful react native toast

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
 </tbody>
</table>