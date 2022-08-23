import React, { useEffect, useState } from 'react'
import useAddRemoveProducts from '../_hooks/useAddRemoveProducts'


const Main = () => {
	// const list = ["Limoni", "Pane", "Fragole"]
	const list = [{ name: "Pane", price: 1.50 }, { name: "Fragole", price: 2.00 }]
	const { addProduct, removeProduct, basket, totalPrice, setBasket, setTotalPrice } = useAddRemoveProducts()

	useEffect(() => {
		const array: any = []
		list.map(el => {
			let obj = { name: el.name, price: el.price, quantity: 0 }
			array.push(obj)
		})
		setBasket(array)
	}, [])

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
										{el.name} - {el.price} $/pc
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
										<div className='col-8'>	{el.name} - {el.price * el.quantity} $</div>
										<div className='col-1' onClick={() => { addProduct(el) }}> + </div>
									</div>
								}

							})
						}
					</div>
					<div>
						<div>
							<div className='row' >
								<div className='col-8'>Total : </div>
								<div className='col-4'>{totalPrice}
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Main