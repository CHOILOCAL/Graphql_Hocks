// 사용자의 움직임이 많지 않기 때문에
// API STAte가 복잡하지 않음

import { isNullableType } from "graphql";

// 인증 유무 확인
// 라우더에 Isloggeredin true false 움직이기

export const defaults = {
    Isloggeredin: localStorage.getItem("token") !== null ? true : false
}

// resolver(mutation)
export const resolvers = {
    Mutation: () => {
        // 누군가 로그인 하도록
        logUserIn: (_, {token}, {cashe}) => {
            localStorage.setItem("token", token);
            cashe.writeData({
                data:{
                    Isloggeredin: true
                }
            });
            return null;
        },
        logUserOut: (_, __, {cashe}) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
};