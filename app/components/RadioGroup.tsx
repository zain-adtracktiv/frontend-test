"use client"

import { useState } from "react";
import { Radio } from "./Radio";

const RadioGroup = () => {

	const [selectedValue, setSelectedValue] = useState("3")

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	return (
		<>
			<ul className="grid w-full gap-6 md:grid-cols-2">
				<Radio
					name="3 Sticks (-32%)"
					description="$64.00/each"
					value="3"
					checked={selectedValue === "3" ? true : false}
					isBestDeal={true}
					onChange={handleChange}
				/>

				<Radio
					name="2 Sticks (-22%)"
					description="$71.00/each"
					value="2"
					checked={selectedValue === "2" ? true : false}
					onChange={handleChange}
				/>

				<Radio
					name="1 Stick (-15%)"
					description="$75.00/each"
					value="1"
					checked={selectedValue === "1" ? true : false}
					onChange={handleChange}
				/>
			</ul>


		</>
	);
};

export { RadioGroup };