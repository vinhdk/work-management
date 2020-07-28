import React from 'react';
import { View, Container, Header, Left, Right, Spinner, Body, Text, Title, Content } from 'native-base';
import { IBaseProps } from "./base.component";
import { useStyles } from './base.styles';
import { ActionComponent } from '../action/action.component';
import { BellComponent } from '../bell/bell.component';
interface IRenderBaseProps extends IBaseProps {
    useLoading: () => false | JSX.Element
}
export const BaseRender = (props: IRenderBaseProps) => (
    <Container>
        <Header
            androidStatusBarColor="#BEE"
            transparent
            noShadow
            style={{ backgroundColor: "#BEE" }}
        >
            <Left style={{ flex: 1 }}>
                <ActionComponent {...props} />
            </Left>
            <Body style={{ flex: 1 }}>
                <Title style={{ alignSelf: "center", color: "#00a8cc" }}>{props.useTitle()}</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                <BellComponent {...props} />
            </Right>
        </Header>
        <View style={{ flex: 1 }}>
            {props.useContent()}
            {props.useLoading()}
        </View>
    </Container>
)