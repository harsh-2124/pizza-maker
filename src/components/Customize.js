import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Cheese from '../assets/BaseCheese.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';

export default function Customize({ ingredients, setIngredients }) {
	let history = useHistory();

	const onChange = (event, name) => {
		let newIngredients = JSON.parse(JSON.stringify(ingredients));
		newIngredients[name] = event;
		setIngredients(newIngredients);
		localStorage.setItem('ingredients', JSON.stringify(newIngredients));
	};

	return (
		<div className='customize'>
			<div className='customize__image'>
				<div className='customize__ingredients'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							y: ingredients['basil'] ? 100 : -100,
							opacity: ingredients['basil'] ? 1 : 0,
						}}
						transition={{ duration: 1 }}
						className='ingredients z4'
					>
						<img src={Basil} alt='Pizza Base' height='100%' width='100%' />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							y: ingredients['olive'] ? 100 : -100,
							opacity: ingredients['olive'] ? 1 : 0,
						}}
						transition={{ duration: 1 }}
						className='ingredients z4'
					>
						<img src={Olive} alt='Pizza Base' height='100%' width='100%' />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							y: ingredients['pineapple'] ? 100 : -100,
							opacity: ingredients['pineapple'] ? 1 : 0,
						}}
						transition={{ duration: 1 }}
						className='ingredients z3'
					>
						<img src={Pineapple} alt='Pizza Base' height='100%' width='100%' />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							y: ingredients['tomato'] ? 100 : -100,
							opacity: ingredients['tomato'] ? 1 : 0,
						}}
						transition={{ duration: 1 }}
						className='ingredients z4'
					>
						<img src={Tomato} alt='Tomato' height='100%' width='100%' />
					</motion.div>

					<motion.div
						initial={{ scale: 0 }}
						animate={{
							scale: ingredients['cheese'] ? 1 : 0,
						}}
						transition={{ duration: 0.3 }}
						className='cheese z1'
					>
						<img src={Cheese} alt='Cheese' height='100%' width='100%' />
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							y: ingredients['mushroom'] ? 100 : -100,
							opacity: ingredients['mushroom'] ? 1 : 0,
						}}
						transition={{ duration: 1 }}
						className='ingredients z4'
					>
						<img src={Mushroom} alt='Pizza Base' height='100%' width='100%' />
					</motion.div>

					<motion.div transition={{ duration: 1 }}>
						<img src={Base} alt='Pizza Base' height='100%' width='100%' />
					</motion.div>
				</div>
			</div>

			<div className='customize__checkbox'>
				<div className='customize__checkboxs'>
					<label className='container-checkbox'>
						Pineapple
						<input
							type='checkbox'
							checked={ingredients['pineapple']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'pineapple')
							}
						/>
						<span className='checkmark'></span>
					</label>

					<label className='container-checkbox'>
						Basil
						<input
							type='checkbox'
							checked={ingredients['basil']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'basil')
							}
						/>
						<span className='checkmark'></span>
					</label>

					<label className='container-checkbox'>
						Olive
						<input
							type='checkbox'
							checked={ingredients['olive']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'olive')
							}
						/>
						<span className='checkmark'></span>
					</label>

					<label className='container-checkbox'>
						Tomato
						<input
							type='checkbox'
							checked={ingredients['tomato']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'tomato')
							}
						/>
						<span className='checkmark'></span>
					</label>

					<label className='container-checkbox'>
						Mushroom
						<input
							type='checkbox'
							checked={ingredients['mushroom']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'mushroom')
							}
						/>
						<span className='checkmark'></span>
					</label>

					<label className='container-checkbox'>
						Cheese
						<input
							type='checkbox'
							checked={ingredients['cheese']}
							onChange={(event) =>
								onChange(event.currentTarget.checked, 'cheese')
							}
						/>
						<span className='checkmark'></span>
					</label>
				</div>

				<button
					onClick={() => history.push('/checkout')}
					className='customize__proceed_to_checkout'
				>
					Proceed to Checkout
				</button>
			</div>
		</div>
	);
}
