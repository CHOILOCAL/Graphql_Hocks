import ApolloClient from 'apollo-boost';
import {defaults, resolvers} from './LocalState/';

export default new ApolloClient({
    url: "http://localhost:4000",
    clientState: {
        defaults,
        resolvers
    }
});

// 이전에 백엔드 서버를 켜야하는 것 기억 !!!