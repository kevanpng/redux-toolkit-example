// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
import {RootState} from "../../app/store";

export const selectName = (state: RootState) => {
    return [
        {
            name: state.users.name
        }
    ]
}