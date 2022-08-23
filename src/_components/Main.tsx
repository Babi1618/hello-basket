import React, { useEffect, useState } from 'react'


const Main = () => {
	const list = ["Limoni", "Pane"]
	const [basket, setBasket] = useState<any>([])

	useEffect(() => {
		const array: any = []
		list.map(el => {
			let obj = { name: el, quantity: 0 }
			array.push(obj)
		})
		setBasket(array)
	}, [])

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
		})
		console.log(newArray)
		setBasket(newArray)
	}

	const removeProduct = (prodotto: any) => {
		const newArray: any = []
		basket.map((el: any) => {
			if (el.name === prodotto.name) {
				console.log(el)
				el.quantity--
				newArray.push(el)
			}
			else {
				newArray.push(el)
			}
		})
		console.log(newArray)
		setBasket(newArray)
	}

	useEffect(() => { console.log("basket", basket) }, [basket])

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-6'>
					<div>Grocery</div>
					<div>
						{
							basket.map((el: any, i: number) => {
								return <div className='row' key={i}>
									<div className='col-8'>
										{el.name}
									</div>
									<div className='col-2' onClick={() => { addProduct(el) }}> + </div>
								</div>
							})
						}
					</div>
				</div>
				<div className='col-6'>Basket
					<div>
						{
							basket.map((el: any, i: number) => {
								if (el.quantity > 0) {
									return <div className='row' key={i}>
										<div className='col-1'>{el.quantity}</div>
										<div className='col-1' onClick={() => { removeProduct(el) }}> - </div>
										<div className='col-8'>	{el.name}</div>
										<div className='col-1' onClick={() => { addProduct(el) }}> + </div>
									</div>
								}

							})
						}
					</div>
				</div>
			</div>
		</div>

	)
}

export default Main