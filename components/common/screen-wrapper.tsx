import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

interface ScreenWrapperProps {
  title?: string;
  headerContent?: React.ReactNode; // For search bars or extra buttons
  children: React.ReactNode;
  scrollable?: boolean;
}

export const ScreenWrapper = ({ title, headerContent, children, scrollable = true }: ScreenWrapperProps) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <View style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.headerArea}>
        <View style={styles.headerPadding}>
          {title && <Text style={styles.titleText}>{title}</Text>}
          {headerContent}
        </View>
      </SafeAreaView>

      <View style={styles.contentSheet}>
        <Container 
          style={styles.innerContainer} 
          contentContainerStyle={scrollable ? styles.scrollContent : undefined}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </Container>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F5CB58', // Your yellow background
    
  },
  headerArea: {
    // Keeps content out of the notch
    padding:20
  
  },
  headerPadding: {
    paddingHorizontal: 15,
    paddingTop: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  contentSheet: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 35, // The rounding from your design
    borderTopRightRadius: 35,
    overflow: 'hidden', // Ensures children don't bleed over corners
  },
  innerContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
});