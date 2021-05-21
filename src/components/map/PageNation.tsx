import React, { useEffect, useState } from 'react'
import { M_Map } from '../../models';

type pageNation = M_Map.pagenation;
type pageFunction = M_Map.pagefunction;

const PageNation: React.FC<{ pagenation: pageNation, funcs: pageFunction | null }> = ({ pagenation, funcs }) => {
	const [pages, setPages] = useState(0)

	useEffect(() => {
		const setPagenation = Math.floor(pagenation.totalCount / pagenation.perPage)
		setPages(setPagenation)
	}, [pagenation])

	const onClickPage = (index: number) => {
		if (!!funcs) {
			const uxNumber = index + 1;
			if (uxNumber !== pagenation.current) {
				funcs.gotoPage(uxNumber)
			}
		}

	}

	return (
		<div className="pagenation-box">
			{
				!!pages ? Array(pages).fill('').map((item, i) => {
					return (
						<div className={'pagenation-item ' + (pagenation.current === i + 1 ? 'active--item' : '')} key={i} onClick={(): void => onClickPage(i)}>
							{i + 1}
						</div>
					)
				}) : <div className='pagenation-item active--item'>1</div>
			}
		</div>
	)
}

export default PageNation;