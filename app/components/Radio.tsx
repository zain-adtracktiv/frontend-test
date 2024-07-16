"use client"

interface RadioProps {
	name: string;
	description: string;
	value: string;
	checked: boolean;
	isBestDeal?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ name, description, value, checked, isBestDeal, onChange }) => {
	return (
		<>
			<li onClick={() => onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)}>				<input type="radio" id={value} name="purchaseDeal" value={value} className="hidden" required onChange={onChange} />
				<label htmlFor={value} className={`relative inline-flex items-center gap-4 w-full p-5 text-gray-800 bg-white border-2 rounded-lg cursor-pointer ${checked ? "border-blue-600 bg-blue-100" : "border-gray-400 bg-gray-200"} `}>
					{
						isBestDeal && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white bg-blue-600 px-3 py-1 text-sm rounded-lg">
							BEST DEAL
						</div>
					}
					<div className={`w-6 h-6 rounded-full ${checked ? "bg-gray-100 border-8 border-blue-600" : "bg-gray-100 border-2 border-gray-400"} `} />
					<div className="block">
						<div className="w-full text-lg font-bold">{name}</div>
						<div className="w-full">{description}</div>
					</div>
				</label>
			</li>
		</>
	);
};

export { Radio };