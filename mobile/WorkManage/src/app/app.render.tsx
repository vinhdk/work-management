import React, { Fragment } from 'react';
import { useStyles } from './app.styles';
import { AppRoutes } from './app.routing';
import { Provider } from 'react-redux';
import { Store } from 'redux';
interface IRenderAppProps {
    store: Store;
}
export const AppRender = (props: IRenderAppProps) => (
    <Provider store={props.store} >
        <Fragment>
            <AppRoutes />
        </Fragment>
    </Provider>
)