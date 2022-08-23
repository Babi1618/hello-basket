import React, { useEffect, useState } from 'react'

const useAddRemoveProducts = () => {
	const [basket, setBasket] = useState<any>([])
	const [totalPrice, setTotalPrice] = useState<number>(0)
	const list = [{ name: "Pane", price: 1.50 }, { name: "Fragole", price: 2.00 }]

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

	useEffect(() => {
		const array: any = []
		list.map(el => {
			let obj = { name: el.name, price: el.price, quantity: 0 }
			array.push(obj)
		})
		setBasket(array)
	}, [])
	return { addProduct, removeProduct, basket, totalPrice, setBasket }

}

export default useAddRemoveProducts