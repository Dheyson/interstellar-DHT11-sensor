import React from 'react';

import * as S from './styles';


const RealTimeData = () => {
	return (
		<S.Container>
			<S.Title>
				Login data
			</S.Title>
			<S.Table>
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
					<th>Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
				<tr>
					<td>Ernst Handel</td>
					<td>Roland Mendel</td>
					<td>Austria</td>
				</tr>
			</S.Table>
		</S.Container>
	);
}

export default RealTimeData;
