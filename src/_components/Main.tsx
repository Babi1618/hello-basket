import useAddRemoveProducts from '../_hooks/useAddRemoveProducts'

const Main = () => {
	const { addProduct, removeProduct, basket, totalPrice } = useAddRemoveProducts()

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