import React, {useEffect, useState} from 'react';
import Diagram from "./components/Diagram";
import {DiagramDataElement} from "./types";

const initialData = [
	{name: "Landing Page", time: 7.4},
	{name: "Configurator", time: 0.2},
	{name: "Check-out", time: 7.0},
	{name: "Deal", time: 3.8}
];

const randomValue = (min: number, max: number) => +(Math.random() * (max - min) + min ).toFixed(1)


function App() {
	const [data, setData] = useState<DiagramDataElement[]>(initialData);
	const updateData = () => {
		const newData = initialData.map(el => {
			return {name: el.name, time: randomValue(0, 10)}
		})
		setData(newData)
	}

	useEffect(
		() => {
			const interval: any = setInterval(() => updateData(), 530);
			return () => {
				clearInterval(interval);
			};
		},
		[]
	);

	return (
		<div className="contentApplication">
			<Diagram data={data}/>
			<button className="button" onClick={updateData}>Update data</button>
		</div>
	);
}

export default App;
