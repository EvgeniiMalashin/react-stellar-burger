import React from 'react';
import appStyles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { IngredientsContext } from '../../services/ingredients-context';
import { ConstructorContext } from '../../services/constructor-context';
import { request } from '../../utils/api';

const initialState = [];
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            let bun = state.find((x, idx) => x.type === 'bun');
            if (action.payload.type === 'bun' && bun) {
                if (action.payload._id !== bun._id) {
                    return [...state.filter(x => x.type !== 'bun'), action.payload]
                }
                return state;
            }
            return [...state, action.payload];
        case 'delete':
            return state.filter((_, idx) => idx !== action.payload);
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
};

function App() {
    const [ingredientsList, setIngredientsList] = React.useState({
        data: [],
        isLoading: false,
        hasError: false      
    });
    
    const [constructorItem, constructorItemDispatcher] = React.useReducer(reducer, initialState, undefined);
    
    React.useEffect(() => {
        const getIngredients = () => {
            const endPoint = '/ingredients';
            setIngredientsList({...ingredientsList, hasError: false, isLoading: true});
            request(endPoint)
            .then(data => setIngredientsList({data: data.data, isLoading: false, hasError: false}))
            .catch(error => {
            setIngredientsList({data: [], isLoading: false, hasError: true});
            console.error('Ошибка - ', error);
            });
        }
        getIngredients();
    }, []) 
    
    return (
    <div className={appStyles.app}>
        <AppHeader />
        <main className={appStyles.main}>
            <IngredientsContext.Provider value={{ingredientsList, setIngredientsList}}>
                <ConstructorContext.Provider value={{constructorItem, constructorItemDispatcher}}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </ConstructorContext.Provider>
            </IngredientsContext.Provider>
        </main>
    </div>
  );
}

export default App;