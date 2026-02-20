import { useState } from 'react'

export const useForm = <T extends object>(initialState: T) => {
	const [state, setState] = useState(initialState)

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setState({
			...state,
			[name]: value,
		})
	}

	const onResetForm = () => {
		setState(initialState)
	}
	return {
		...state,
		state,
		onInputChange,
		onResetForm,
	}
}
