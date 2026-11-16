import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import WebView, { type WebViewNavigation } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ANDROID_MINIMAL_THEME_SCRIPT } from "../../lib/unlimitede-android-theme";

const SITE_URL = "https://unlimitede-hj25vd9j.manus.space";
const FRAME_COLOR = "#111827";
const SECONDARY_COLOR = "#64748B";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  // Android edge-to-edge can place the WebView behind status icons; reserve a dedicated spacer.
  const topClearance =
    Platform.OS === "android"
      ? Math.max(insets.top, StatusBar.currentHeight ?? 24) + 12
      : insets.top;
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  const handleNavigationChange = useCallback((state: WebViewNavigation) => {
    setCanGoBack(state.canGoBack);
  }, []);

  const handleLoadStart = useCallback(() => {
    setHasLoadError(false);
    setIsLoading(true);
  }, []);

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
    if (Platform.OS === "android") {
      webViewRef.current?.injectJavaScript(ANDROID_MINIMAL_THEME_SCRIPT);
    }
  }, []);

  const handleLoadError = useCallback(() => {
    setIsLoading(false);
    setHasLoadError(true);
  }, []);

  const retry = useCallback(() => {
    setHasLoadError(false);
    setIsLoading(true);
    webViewRef.current?.reload();
  }, []);

  useEffect(() => {
    if (Platform.OS !== "android") return;

    const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
      if (!canGoBack) return false;
      webViewRef.current?.goBack();
      return true;
    });

    return () => subscription.remove();
  }, [canGoBack]);

  const handleNavigationRequest = useCallback((request: { url: string }) => {
    const { url } = request;
    if (url.startsWith("https://") || url.startsWith("http://")) return true;

    if (/^(mailto|tel|sms|tg|telegram|intent):/i.test(url)) {
      void Linking.openURL(url).catch(() => {
        Alert.alert("Unable to open link", "No app on this device can open this link.");
      });
    }

    return false;
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: topClearance, backgroundColor: FRAME_COLOR }} />
      <WebView
        ref={webViewRef}
        source={{ uri: SITE_URL }}
        style={styles.webView}
        javaScriptEnabled
        domStorageEnabled
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        injectedJavaScriptBeforeContentLoaded={
          Platform.OS === "android" ? ANDROID_MINIMAL_THEME_SCRIPT : undefined
        }
        injectedJavaScript={
          Platform.OS === "android" ? ANDROID_MINIMAL_THEME_SCRIPT : undefined
        }
        setSupportMultipleWindows={false}
        pullToRefreshEnabled
        onNavigationStateChange={handleNavigationChange}
        onShouldStartLoadWithRequest={handleNavigationRequest}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleLoadError}
        onHttpError={({ nativeEvent }) => {
          if (nativeEvent.url === SITE_URL && nativeEvent.statusCode >= 400) handleLoadError();
        }}
        accessibilityLabel="Unlimitede website"
      />

      {isLoading && !hasLoadError ? (
        <View pointerEvents="none" style={styles.loadingOverlay}>
          <ActivityIndicator size="small" color="#E2E8F0" />
          <Text style={styles.loadingText}>Loading Unlimitede…</Text>
        </View>
      ) : null}

      {hasLoadError ? (
        <View style={styles.errorOverlay} accessibilityLiveRegion="polite">
          <Text style={styles.errorTitle}>Unlimitede is unavailable</Text>
          <Text style={styles.errorMessage}>
            Check your internet connection, then try again.
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Retry loading Unlimitede"
            onPress={retry}
            style={({ pressed }) => [styles.retryButton, pressed && styles.retryButtonPressed]}
          >
            <Text style={styles.retryButtonText}>Try again</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FRAME_COLOR,
  },
  webView: {
    flex: 1,
    backgroundColor: FRAME_COLOR,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: FRAME_COLOR,
  },
  loadingText: {
    color: "#E2E8F0",
    fontSize: 14,
    fontWeight: "500",
  },
  errorOverlay: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    backgroundColor: FRAME_COLOR,
  },
  errorTitle: {
    color: "#F8FAFC",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  errorMessage: {
    maxWidth: 300,
    marginTop: 10,
    color: SECONDARY_COLOR,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  retryButton: {
    minHeight: 48,
    marginTop: 24,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
  },
  retryButtonPressed: {
    opacity: 0.82,
  },
  retryButtonText: {
    color: FRAME_COLOR,
    fontSize: 15,
    fontWeight: "600",
  },
});
