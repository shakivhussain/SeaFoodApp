import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeaFoodItem = (props) => {

    const imageUrl = 'https://reactnative.dev/img/tiny_logo.png'
    const title = "Image Title"
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: imageUrl,
                    }}
                />

            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.title}> {title}</Text>

            </View>



        </View>
    )
}

export default SeaFoodItem

const styles = StyleSheet.create({


    container: {

        flexDirection: "row",
        padding: 16,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        marginHorizontal: 12
    },


    imageContainer: {
        flex: 1

    },
    contentContainer: {
        flex: 2,


    },
    image: {
        width: 100,
        height: 100,
    }
    ,
    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: 'normal'

    }
})