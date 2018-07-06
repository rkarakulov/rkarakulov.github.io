import * as React from 'react';
import {IDirectionIconProps} from 'app/_pages/productsPage/productList/directionIcon/directionIcon.interfce';
import * as style from './directionIcon.css';
import {SortDirection} from 'app/_helpers/sort/sortDirection';

export class DirectionIcon extends React.Component<IDirectionIconProps> {
    public render() {
        const {sort, field} = this.props;
        const visible = sort.field === field;
        const className = sort.direction === SortDirection.asc ? style.asc : style.desc;

        return (
            <React.Fragment>
                {visible && <div className={className}/>}
                {!visible && <div className={style.none}/>}
            </React.Fragment>
        );
    }
}
