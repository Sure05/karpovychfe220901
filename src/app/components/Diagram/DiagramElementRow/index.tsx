import React from 'react';
import './style.css';
import {Info} from "../index";

export interface DiagramElementRowProps {
	data: Info
}

const DiagramElementRow: React.FC<DiagramElementRowProps> = ({data}) => {
	return (
		<div className="row_content">
			<div className="row_content_block" style={{left: `${data.left}%`, width: `${data.width}%`}}>
				{data.time}
			</div>
		</div>
	)
}

export default DiagramElementRow;
