import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function HomeScreen(){
    return (
        <ScrollView>
            <View>
                <Text style={styles.upperText}>Miller Hall</Text>
                <Image></Image>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    upperText: {
        top: 10
    }
});     