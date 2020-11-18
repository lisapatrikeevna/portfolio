export type initialStateType={

}
type actionType=changeThemeType
let initialState:initialStateType={

}
type changeThemeType=ReturnType<typeof changeThemeAC>
const skilReduser=(state=initialState,action:actionType):initialStateType=>{
    switch (action.type) {
        case 'CHANGE-THEME':{

        }
        default: return state
    }
}
export const changeThemeAC = () => ({type:'CHANGE-THEME',}as const)
export default skilReduser;