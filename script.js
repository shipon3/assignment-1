//selector
const incrementEl = document.querySelector(".lws-increment");
const decrementEl = document.querySelector(".lws-decrement");
const scoreEl = document.getElementById("score_result");
//initial value
const initialState = {
        score:0
}
const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = (value)=>{
    return{
        type:INCREMENT,
        payload:value,
    }
}
const decrement = (value)=>{
    return{
        type:DECREMENT,
        payload:value,
    }
}
function createReducer(state= initialState, action){
    if(action.type === INCREMENT){
        return{
            ...state,
            score:state.score + action.payload
        }
    } else if(action.type === DECREMENT){
        return{
            ...state,
            score:state.score - action.payload
        }
    }else{
        return state
    }
}

const store = Redux.createStore(createReducer);

const render = () =>{
    const state = store.getState();
    scoreEl.innerText = state.score.toString();

}
render();
store.subscribe(render)

incrementEl.addEventListener("keypress",(e)=>{
    // console.log("value",incrementEl.value);
    if(e.keyCode === 13){
        e.preventDefault();
        store.dispatch(increment(Number(incrementEl.value)));
        incrementEl.value = 0;
    }

});
decrementEl.addEventListener("keypress",(e)=>{
    // console.log("value",incrementEl.value);
    if(e.keyCode === 13){
        e.preventDefault();
        store.dispatch(decrement(Number(decrementEl.value)));
        decrementEl.value = 0;
    }
});


