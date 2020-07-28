import React from "react";
import { IDrawerProps } from "./drawer.component";
import { useStyles } from "./drawer.styles";
import { View, List, Grid, Col, Container, Header, Content, Text, Left, Footer, Icon, Body, ListItem } from 'native-base';
import { LogoutComponent } from "../logout/logout.component";
import { TouchableOpacity } from 'react-native-gesture-handler';
interface IRenderDrawerProps extends IDrawerProps {
    useRender: () => JSX.Element[];
    usePerson: () => JSX.Element;
}
export const DrawerRender = (props: IRenderDrawerProps) => (
    <Container>
        <Header
            androidStatusBarColor="#BEE"
            style={useStyles().header}
            transparent
        >
            <Text style={{ color: '#00a8cc', fontSize: 20 }}>
                Work Management
            </Text>
        </Header>
        <Content>
            {props.usePerson()}
            <List>
                {props.useRender()}
            </List>
        </Content>
        <Footer style={{ backgroundColor: "#fff", paddingHorizontal: 10 }}>
            <Content>
                <LogoutComponent {...props} />
            </Content>
        </Footer>
    </Container>
)