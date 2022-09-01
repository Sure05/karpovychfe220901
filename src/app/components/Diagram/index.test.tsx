import {render, screen} from "@testing-library/react";
import DiagramElementRow, {Info} from "./index";
import React from "react";
import {DiagramDataElement} from "../../types";

const data = [
	{name: "Landing Page", time: 7.4},
	{name: "Configurator", time: 0.2},
	{name: "Check-out", time: 7.0},
	{name: "Deal", time: 3.8}
] as DiagramDataElement[];


describe('Test DiagramElementRow', () => {
	it('DiagramElementRow renders', function () {
		const info: Info[] = [];
		const calculatePosition = () => {
			const info: Info[] = [];
			const total = data.reduce((prev, curr) => prev + curr.time, 0)
			data.forEach((el, index) => {
				const elWidthPercent = (el.time * 100) / total;
				if (index === 0) {
					info.push({
						...el,
						width: elWidthPercent,
						left: 0
					})
				} else {
					info.push({
						...el,
						width: elWidthPercent,
						left: info[index - 1].width + info[index - 1].left
					})
				}
			})

			return info
		}
		calculatePosition();
		render(
			<div className={"container"}>
				<div className="container_columnTitle">
					{data.map((el, index) => <div key={`${el.name}-title-${index}`}
					                              className="container_columnTitle_title">{el.name}</div>)}
				</div>
				<div className="container_columnValue">
					{info.map((el, index) => <DiagramElementRow key={`${el.name}-${index}`} data={el}/>)}
				</div>
			</div>
		)
		expect(screen.getByText('Landing Page')).toBeTruthy();
	});
})
