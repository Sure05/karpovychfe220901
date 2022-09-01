import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Diagram from "./components/Diagram";


const initialData = [
	{name: "Landing Page", time: 7.4},
	{name: "Configurator", time: 0.2},
	{name: "Check-out", time: 7.0},
	{name: "Deal", time: 3.8}
];
describe('Test DiagramElementRow', () => {
	it('DiagramElementRow renders', function () {
		const handleClick = jest.fn()
		render(
			<div className="contentApplication">
				<Diagram data={initialData}/>
				<button className="button" onClick={handleClick}>Update data</button>
			</div>
		)

		fireEvent.click(screen.getByText(/Update data/i));
		expect(handleClick).toHaveBeenCalledTimes(1)
	});
})
