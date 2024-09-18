import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


interface SeaItem {
    strMeal: string
    strMealThumb: string
    idMeal: string
}

const SeaFoodList = () => {


    const [meals, setMeals] = useState<SeaItem[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
            )

            const result = await response.json();

            setMeals(result.meals)
            console.log(result);

        }

        try {
            fetchData()
        } catch (e: any) {
            console.error(e);
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])


    if (loading) {
        return <Text>Loading...</Text>
    }
    if (error) {
        return <Text>Error {error}</Text>
    }

    return (
        <View>

            <FlatList data={meals}
                keyExtractor={(item: any) => item.idMeal.toString()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <Text>{item.strMeal}</Text>
                    </View>
                )} />

        </View>
    )
}

export default SeaFoodList

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        marginHorizontal: 12

    },
    image: {
        width: 90,
        height: 90,
        margin: 2,
        borderRadius: 8,
        marginEnd: 16

    }
})