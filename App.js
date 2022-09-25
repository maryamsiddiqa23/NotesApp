import { StyleSheet, LogBox, View } from 'react-native'
import Splash from './screens/splashscreen'
import Navigation from './src/navigation'
import { EmailProvider } from './src/contexts/emailcontext'
export default function App() {
  LogBox.ignoreLogs([
    'Warning: Async Storage has been extracted from react-native core',
  ])
  return (
    <View style={styles.container}>
      <EmailProvider>
        <Navigation />
      </EmailProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
