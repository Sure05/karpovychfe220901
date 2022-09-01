import {render, screen} from "@testing-library/react";
import React from "react";

const data = {name: "Landing Page", time: 7.4, width: 255, left: 0};

describe('Test DiagramElementRow', () => {
	it('DiagramElementRow renders', function () {
		render(
			<div className="row_content">
				<div className="row_content_block" style={{left: `${data.left}%`, width: `${data.width}%`}}>
					{data.time}
				</div>
			</div>
		)
		expect(screen.getByText('7.4')).toBeTruthy();
	});
})
