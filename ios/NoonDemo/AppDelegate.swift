import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import AVFoundation
import Speech


@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "NoonDemo"
    self.dependencyProvider = RCTAppDependencyProvider()
    
    // Configure AVAudioSession
    configureAudioSession()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
  /// **Fix for AVAudioSession category error**
  private func configureAudioSession() {
    do {
      let audioSession = AVAudioSession.sharedInstance()
      
      // Set category to .playAndRecord, as defaultToSpeaker only works with this category
      try audioSession.setCategory(.playAndRecord, options: [.defaultToSpeaker, .allowBluetooth, .allowBluetoothA2DP])

      try audioSession.setActive(true)
      
      print("AVAudioSession successfully configured")
    } catch {
      print("Error setting AVAudioSession category: \(error.localizedDescription)")
    }
  }
}
