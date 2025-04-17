# react-native-simple-toast
a simple and beautiful react native toast

<h2>
 Preview
</h2>
<p>
a simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toasta simple and beautiful react native toast
<p>
<h3>
 Usage
</h3>
<h4>
 Clone with Git
</h4>
<code>git clone https://github.com/ossvahid/react-native-simple-toast.git</code>
<h4>
 OR
</h4>
<p>
download package link via this link 
<a href="https://github.com/ossvahid/react-native-simple-toast/archive/refs/heads/main.zip" target="_blank">
download
</a>
<p>


<code>export default function App() {
  SplashScreen.hide();
  return (
    <ToastProvider>
      <SettingsContextPrivider>
        <UserContext>

          <CacheProvider>
            <NavigationContainer direction='rtl'>
              <ThemeSettings.Provider value={settings}>

                <SafeAreaView style={{ flex: 1, direction: 'rtl', backgroundColor: settings.app_background_color }}>
                  <StatusBar style='auto' />
                  <Navigations />
                  <Toast />


                </SafeAreaView>

              </ThemeSettings.Provider>
            </NavigationContainer>

          </CacheProvider>
        </UserContext>
      </SettingsContextPrivider>
    </ToastProvider>
  );
}</code>