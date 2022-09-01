import React, {useEffect, useState} from 'react';
import {DiagramDataElement} from "../../types";
import DiagramElementRow from './DiagramElementRow';
import './style.css';

interface DiagramProps {
	data: DiagramDataElement[]
}

export interface Info extends DiagramDataElement {
	width: number,
	left: number
}

const Diagram: React.FC<DiagramProps> = ({data}) => {
	const [info, setInfo] = useState<Info[]>([]);

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

	useEffect(() => {
		setInfo(calculatePosition())
	}, [data])

	return (
		<div className={"container"}>
			<div className="container_columnTitle">
				{data.map((el, index) => <div key={`${el.name}-title-${index}`}
				                              className="container_columnTitle_title">{el.name}</div>)}
			</div>
			<div className="container_columnValue">
				{info.map((el, index) => <DiagramElementRow key={`${el.name}-${index}`} data={el}/>)}
			</div>
		</div>
	);
}

export default Diagram;
