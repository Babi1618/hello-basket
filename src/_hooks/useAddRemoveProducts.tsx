import React, { useState } from 'react'

const useAddRemoveProducts = () => {
	const [basket, setBasket] = useState<any>([])
	const [totalPrice, setTotalPrice] = useState<number>(0)
	const prova = () => {
		console.log("prova")
	}
	const addProduct = (prodotto: any) => {
		const newArray: any = []
		basket.map((el: any) => {
			if (el.name === prodotto.name) {
				console.log(el)
				el.quantity++
				newArray.push(el)
			}
			else {
				newArray.push(el)
			}
			setTotalPrice(totalPrice + prodotto.price)

		})
		// console.log(newArray)
		setBasket(newArray)
	}
	const removeProduct = (prodotto: any) => {
		const newArray: any = []
		basket.map((el: any) => {
			if (el.name === prodotto.name) {
				el.quantity--
				newArray.push(el)
			}
			else {
				newArray.push(el)
			}
			setTotalPrice(totalPrice - prodotto.price)
		})
		console.log(newArray)
		setBasket(newArray)
	}
	return { addProduct, removeProduct, basket, totalPrice, setBasket, setTotalPrice }

}

export default useAddRemoveProducts