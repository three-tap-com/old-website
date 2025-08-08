const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-[#B37865]' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-[#EFEA3] bg-opacity-100 rounded-lg border border-gray-700 focus:border-[#B37865] focus:ring-2 focus:ring-[#B37865] text-Black placeholder-gray-500 transition duration-200'
			/>
		</div>
	);
};
export default Input;